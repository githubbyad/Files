addEventListener('fetch', event => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  const request = event.request;

  if (request.method !== 'GET') return await processRequest(request);

  const urlObj = new URL(request.url);
  urlObj.searchParams.delete('gtm_debug'); // normalize GTM debug param
  const cache = caches.default;
  const cacheKey = new Request(urlObj.toString(), { method: 'GET', headers: request.headers });

  // Check cache first
  let response = await cache.match(cacheKey);
  if (response) {
    response = new Response(response.body, response);
    response.headers.set('X-Cache-Status', 'HIT');
    return response;
  }

  // Process request
  try {
    response = await processRequest(request);
    response = new Response(response.body, response);
    response.headers.set('X-Cache-Status', 'MISS');

    // Cache successful responses
    if (response.status === 200) {
      const objectKey = decodeURIComponent(new URL(request.url).pathname.substring(1));
      const skipPaths = ['admin', 'login', 'signin', 'cart', 'checkout'];
      const shouldSkip = skipPaths.some(p => objectKey.toLowerCase().includes(p));

      if (!shouldSkip) {
        event.waitUntil(cache.put(cacheKey, response.clone()).catch(err =>
          console.error('Cache put error:', err)
        ));
      }
    }

    // Early bot detection - before any processing
    const botCheckResult = checkBot(request);
    if (botCheckResult.block) {
      return new Response('Access denied', { status: 403 });
    }

    return response;
  } catch (error) {
    console.error('Request processing error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

function checkBot(request) {
  const userAgent = (request.headers.get('User-Agent') || '').toLowerCase();

  // More specific bot detection
  const majorBots = [
    'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider',
    'yandexbot', 'facebookexternalhit', 'twitterbot', 'linkedinbot',
    'whatsapp', 'telegrambot', 'applebot', 'ia_archiver'
  ];

  // Check for major bots first (allow these)
  const isMajorBot = majorBots.some(bot => userAgent.includes(bot));
  if (isMajorBot) {
    return { block: false, isMajorBot: true };
  }

  // More conservative bot detection - only block obvious bots
  const obviousBotPatterns = [
    /bot[\s\-_]?scanner/i,
    /malicious[\s\-_]?bot/i,
    /scraper/i,
    /crawler[\s\-_]?bot/i,
    /spider[\s\-_]?bot/i,
    /^curl\//i,
    /^wget\//i,
    /^python\-/i,
    /^php\//i
  ];

  const isObviousBot = obviousBotPatterns.some(pattern => pattern.test(userAgent));

  // Only block if it's an obvious bot and not a major search engine
  return {
    block: isObviousBot && !isMajorBot,
    isMajorBot: false
  };
}

async function processRequest(request) {
  let url;
  try {
    url = new URL(request.url);
  } catch (e) {
    return new Response(`Invalid request URL: ${e.message}`, { status: 400 });
  }

  const objectKey = decodeURIComponent(url.pathname.substring(1));
  const objectKeyLower = objectKey.toLowerCase();

  // Security checks
  const suspicious = [/^\.git$/, /^\.env$/, /^wp-admin$/, /^wp-login$/, /^phpmyadmin$/, /\.sql$/i];
  const lastSegment = objectKeyLower.split('/').pop();
  if (suspicious.some(rx => rx.test(lastSegment))) {
    return new Response('Forbidden', { status: 403 });
  }

  // Admin path redirects
  const adminPaths = new Set(['admin', 'login', 'login?', 'login.asp', 'sign', 'signin']);
  if (adminPaths.has(objectKeyLower)) {
    return redirectToBulletLink(request);
  }

  // Special redirects
  if (url.pathname.includes('/inv10.asp')) {
    return Response.redirect(`https://bulletlink.one${url.pathname}${url.search}`, 301);
  }

  // URL mappings
  const urlMappings = [
    { short: 'home', long: 'https://wvvatoday.com/index.html' },
  ];

  const shortMatch = urlMappings.find(m => m.short === objectKeyLower);
  if (shortMatch) {
    if (shortMatch.long.includes('index0.htm')) {
      return Response.redirect(shortMatch.long, 301);
    }

    try {
      const fetched = await fetch(shortMatch.long, {
        headers: {
          'User-Agent': request.headers.get('User-Agent') || 'Cloudflare-Worker'
        }
      });

      if (!fetched.ok) {
        throw new Error(`HTTP ${fetched.status}: ${fetched.statusText}`);
      }

      const contentType = fetched.headers.get('content-type') || 'text/html';
      const body = await fetched.text();

      return new Response(body, {
        headers: {
          'content-type': contentType,
          'cache-control': 'public, max-age=3600'
        }
      });
    } catch (err) {
      console.error('URL mapping fetch error:', err);
      return new Response('Failed to load content', { status: 500 });
    }
  }

  // Serve from bucket
  const objectPath = objectKey || 'index.html';
  if (objectPath.includes('..')) {
    return new Response('Invalid path', { status: 400 });
  }

  try {
    const object = await BUCKET.get(objectPath);
    if (object === null) {
      return new Response(
        '<html><body><h1><center>Page Not Found</center></h1></body></html>',
        {
          headers: { 'Content-Type': 'text/html' },
          status: 404
        }
      );
    }

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set('etag', object.httpEtag);

    const contentType = headers.get('content-type') || '';

    // Set appropriate cache headers
    if (contentType.includes('text/html')) {
      headers.set('Cache-Control', 'public, max-age=86400, must-revalidate');
    } else if (contentType.includes('image/') || contentType.includes('text/css') || contentType.includes('application/javascript')) {
      headers.set('Cache-Control', 'public, max-age=2592000');
    } else {
      headers.set('Cache-Control', 'public, max-age=3600');
    }

    // Security headers
    headers.set('X-Robots-Tag', 'noindex, nofollow');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('X-Frame-Options', 'SAMEORIGIN');
    headers.set('X-XSS-Protection', '1; mode=block');
    headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    headers.set('Referrer-Policy', 'no-referrer-when-downgrade');
    headers.set('Permissions-Policy', 'geolocation=(), camera=(), microphone=()');

    return new Response(object.body, { headers });
  } catch (err) {
    console.error('Bucket access error:', err);
    return new Response(`Error: ${err.message}`, {
      status: 500,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

async function redirectToBulletLink(request) {
  const domain = new URL(request.url).hostname.replace('www.', '').toLowerCase();
  const redirectUrls = [
    `https://bulletlink.net/login.asp?site=${domain}`,
    `https://bulletlink.one/login.asp?site=${domain}`
  ];
  return Response.redirect(redirectUrls[Math.floor(Math.random() * redirectUrls.length)], 302);
}
