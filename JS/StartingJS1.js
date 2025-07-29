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

  ///ShortURLs///

  // BEGIN: Clean URL mappings ---------------------------------
  if (objectKeyLower) {
    if (!objectKeyLower.endsWith('.htm')) {
      const fullURL = `${url.origin}/${objectKeyLower}.htm`

      try {
        const fetched = await fetch(fullURL, {
          headers: {
            'User-Agent': request.headers.get('User-Agent') || 'Cloudflare-Worker'
          }
        })
        if (fetched.ok) {
          const contentType = fetched.headers.get('content-type') || 'text/html'
          const body = await fetched.text()
          return new Response(body, {
            headers: {
              'content-type': contentType,
              'cache-control': 'public, max-age=3600'
            }
          })
        }
      } catch (err) {
        return new Response('Failed to load clean URL content', { status: 500 })
      }
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
      return new Response(`<html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{margin:0;font-family:sans-serif;background:#f9fafb;color:#1f2937;display:flex;align-items:center;justify-content:center;height:100vh;text-align:center;padding:20px;box-sizing:border-box}.box{max-width:400px;width:100%}svg{width:64px;height:64px;margin-bottom:16px;color:#4b5563}h1{font-size:1.75rem;margin:0 0 8px}p{color:#6b7280;font-size:1rem;margin:0 0 16px}a{display:inline-block;background:#111827;color:#fff;text-decoration:none;padding:10px 20px;border-radius:4px;font-size:.95rem}@media(max-width:500px){h1{font-size:1.4rem}svg{width:48px;height:48px}}</style></head><body><div class="box"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><h1>404 - Page Not Found</h1><p>The page you're looking for doesn't exist.</p><a href="/">Go to Homepage</a></div></body></html>`, {
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
