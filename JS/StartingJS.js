addEventListener('fetch', event => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  const request = event.request;

  // Only cache GET requests
  if (request.method !== 'GET') {
    return await processRequest(request);
  }

  // Check if this is an HTML file request first
  const url = new URL(request.url);
  const objectKey = decodeURIComponent(url.pathname.substring(1)) || 'index.html';
  const isLikelyHtml = objectKey.endsWith('.html') || objectKey === '' || !objectKey.includes('.');

  // Skip all caching for HTML files - go directly to source
  if (isLikelyHtml) {
    const response = await processRequest(request);
    const newResponse = new Response(response.body, response);
    newResponse.headers.set('X-Cache-Status', 'BYPASS');
    return newResponse;
  }

  // Try the cache first for non-HTML files
  const cacheUrl = new URL(request.url);
  const cacheKey = new Request(cacheUrl.toString(), {
    method: 'GET',
    headers: request.headers
  });

  const cache = caches.default;
  let response = await cache.match(cacheKey);
  if (response) {
    // Add diagnostic header for cache hits
    response = new Response(response.body, response);
    response.headers.set('X-Cache-Status', 'HIT');
    return response;
  }

  // If not in cache, process the request
  response = await processRequest(request);
  response = new Response(response.body, response);
  response.headers.set('X-Cache-Status', 'MISS');

  // Cache the response if appropriate
  if (response.status === 200) {
    const contentType = response.headers.get('Content-Type') || '';
    const skipCachePaths = ['admin', 'login', 'signin', 'cart', 'checkout'];
    const shouldSkip = skipCachePaths.some(path => objectKey.toLowerCase().includes(path));

    if (!shouldSkip) {
      // Clone the response before returning it
      const clonedResponse = response.clone();
      event.waitUntil(
        cache.put(cacheKey, clonedResponse)
          .catch(err => console.error('Cache put error:', err))
      );
    }
  }

  return response;
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

  const suspiciousPatterns = [/\.git/i, /\.env/i, /wp-admin/i, /wp-login/i, /phpmyadmin/i, /\.sql/i]
  const lastSegment = objectKeyLower.split('/').pop();
  if (suspiciousPatterns.some(rx => rx.test(lastSegment))) {
    return new Response('Forbidden', { status: 403 });
  }

  // Admin and login redirects
  const adminPaths = new Set(['admin', 'login', 'login?', 'login.asp', 'sign', 'signin']);
  if (adminPaths.has(objectKeyLower)) {
    return redirectToBulletLink(request);
  }
  if (url.pathname.includes("/inv10.asp")) {
    return Response.redirect(`https://bulletlink.one${url.pathname}${url.search}`, 301);
  }

  // BEGIN: Short URL mappings ---------------------------------

  const urlMappings = [
    {
      short: 'short',
      long: 'https://bulletlink.com/index0.htm'
    }
  ];
  const shortMatch = urlMappings.find(mapping => mapping.short === objectKeyLower);
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
      return new Response('Failed to load content', { status: 500 });
    }
  }

  // END: Short URL mappings ---------------------------------

  // BEGIN: Clean URL mappings ---------------------------------
  const cleanURLMappings = [
    {
      clean: 'newspaper-cms-template-clients',
      page: 'newspaper-cms-template-clients-163.htm'
    },
    {
      clean: 'online-newspaper-template-features',
      page: 'online-newspaper-template-features-p107-128.htm'
    },
    {
      clean: 'newspaper-cms-templates',
      page: 'newspaper-cms-templates-155.htm'
    },
    {
      clean: 'online-newspaper-template-faqs',
      page: 'online-newspaper-template-faqs-p109-129.htm'
    }
  ]
  const cleanMatch = cleanURLMappings.find(mapping => mapping.clean === objectKeyLower)
  if (cleanMatch) {
    try {
      const fullURL = `${url.origin}/${cleanMatch.page}`
      const fetched = await fetch(fullURL, {
        headers: {
          'User-Agent': request.headers.get('User-Agent') || 'Cloudflare-Worker'
        }
      })
      if (!fetched.ok) throw new Error(`HTTP ${fetched.status}: ${fetched.statusText}`)
      const contentType = fetched.headers.get('content-type') || 'text/html'
      const body = await fetched.text()
      return new Response(body, {
        headers: {
          'content-type': contentType,
          'cache-control': 'public, max-age=3600'
        }
      })
    } catch (err) {
      return new Response('Failed to load clean URL content', { status: 500 })
    }
  }
  // END: Clean URL mappings ---------------------------------


  const objectPath = objectKey || 'index.html';
  if (objectPath.includes('..')) {
    return new Response('Invalid path', { status: 400 });
  }

  try {
    const object = await BUCKET.get(objectPath);
    if (object === null) {
      return new Response('<html><body><h1><center>Page Not Found</center></h1></body></html>', {
        headers: { 'Content-Type': 'text/html' },
        status: 404
      });
    }

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set('etag', object.httpEtag);
    const contentType = headers.get('content-type') || '';

    // Set appropriate cache-control headers
    if (contentType.includes('text/html')) {
      // For HTML files: NO browser caching - always fetch fresh
      headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
      headers.set('X-Robots-Tag', 'index, follow');
    } else if (contentType.match(/image\/|text\/css|application\/javascript|font\//i)) {
      // Static assets can have longer cache times
      headers.set('Cache-Control', 'public, max-age=2592000, immutable');
    } else {
      headers.set('Cache-Control', 'public, max-age=3600');
    }

    // Security headers
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('X-Frame-Options', 'SAMEORIGIN');
    headers.set('X-XSS-Protection', '1; mode=block');
    headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    headers.set('Referrer-Policy', 'no-referrer-when-downgrade');
    headers.set('Permissions-Policy', 'geolocation=(), camera=(), microphone=()');

    return new Response(object.body, { headers });
  } catch (err) {
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
  const randomUrl = redirectUrls[Math.floor(Math.random() * redirectUrls.length)];
  return Response.redirect(randomUrl, 302);
}
