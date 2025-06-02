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
    let response = await cache.match(cacheKey);
    if (response) {
        response = new Response(response.body, response);
        response.headers.set('X-Cache-Status', 'HIT');
        return response;
    }
    response = await processRequest(request);
    response = new Response(response.body, response);
    response.headers.set('X-Cache-Status', 'MISS');
    const userAgent = (request.headers.get('User-Agent') || '').toLowerCase();
    const majorBots = ['googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider', 'yandex', 'facebookexternalhit', 'twitterbot', 'linkedinbot'];
    const isBot = userAgent.includes('bot') || userAgent.includes('spider') || userAgent.includes('crawl') || userAgent.includes('preview');
    const isMajorBot = majorBots.some(bot => userAgent.includes(bot));

    if (isBot && !isMajorBot) {
        return new Response('Access denied for unknown bots', { status: 403 });
    }

    if (response.status === 401) {
        const newHeaders = new Headers(response.headers);
        newHeaders.set('X-Robots-Tag', 'noindex, nofollow');
        response = new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders
        });
    }
    if (response.status === 200) {
        const contentType = response.headers.get('Content-Type') || '';
        const objectKey = decodeURIComponent(new URL(request.url).pathname.substring(1));
        const skipPaths = ['admin', 'login', 'signin', 'cart', 'checkout'];
        const shouldSkip = skipPaths.some(p => objectKey.toLowerCase().includes(p));
        if (!shouldSkip && !isBot) {
            event.waitUntil(cache.put(cacheKey, response.clone()).catch(err => console.error('Cache put error:', err)));
        }
        if (isMajorBot) {
            response.headers.set('X-Bot-Detected', 'major');
        } else if (isBot) {
            response.headers.set('X-Bot-Detected', 'unknown');
        }
        return response;
    }

    async function processRequest(request) {
        let url;
        try { url = new URL(request.url); }
        catch (e) { return new Response(`Invalid request URL: ${e.message}`, { status: 400 }); }
        const objectKey = decodeURIComponent(url.pathname.substring(1));
        const objectKeyLower = objectKey.toLowerCase();
        const suspicious = [/^\.git$/, /^\.env$/, /^wp-admin$/, /^wp-login$/, /^phpmyadmin$/, /\.sql$/i];
        const lastSegment = objectKeyLower.split('/').pop();
        if (suspicious.some(rx => rx.test(lastSegment))) { return new Response('Forbidden', { status: 403 }); }
        const adminPaths = new Set(['admin', 'login', 'login?', 'login.asp', 'sign', 'signin']);
        if (adminPaths.has(objectKeyLower)) return redirectToBulletLink(request);
        if (url.pathname.includes('/inv10.asp')) return Response.redirect(`https://bulletlink.one${url.pathname}${url.search}`, 301);

        const urlMappings = [
            { short: 'home', long: 'https://detoxnews.gr/index.html' },
        ];
        const shortMatch = urlMappings.find(m => m.short === objectKeyLower);
        if (shortMatch) {
            if (shortMatch.long.includes('index0.htm')) {
                return Response.redirect(shortMatch.long, 301);
            }
            try {
                const fetched = await fetch(shortMatch.long);
                const contentType = fetched.headers.get('content-type') || 'text/html';
                const body = await fetched.text();
                return new Response(body, { headers: { 'content-type': contentType, 'cache-control': 'public, max-age=3600' } });
            } catch (err) { return new Response('Failed to load content', { status: 500 }); }
        }
        const objectPath = objectKey || 'index.html';
        if (objectPath.includes('..')) return new Response('Invalid path', { status: 400 });
        try {
            const object = await BUCKET.get(objectPath);
            if (object === null) return new Response('<html><body><h1><center>Page Not Found</center></h1></body></html>', { headers: { 'Content-Type': 'text/html' }, status: 404 });
            const headers = new Headers();
            object.writeHttpMetadata(headers);
            headers.set('etag', object.httpEtag);
            const contentType = headers.get('content-type') || '';
            if (contentType.includes('text/html')) headers.set('Cache-Control', 'public, max-age=86400, must-revalidate');
            else if (contentType.includes('image/') || contentType.includes('text/css') || contentType.includes('application/javascript')) headers.set('Cache-Control', 'public, max-age=2592000');
            else headers.set('Cache-Control', 'public, max-age=3600');
            headers.set('X-Robots-Tag', 'noindex, nofollow');
            headers.set('X-Content-Type-Options', 'nosniff');
            headers.set('X-Frame-Options', 'SAMEORIGIN');
            headers.set('X-XSS-Protection', '1; mode=block');
            headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
            headers.set('Referrer-Policy', 'no-referrer-when-downgrade');
            headers.set('Permissions-Policy', 'geolocation=(), camera=(), microphone=()');
            return new Response(object.body, { headers });
        } catch (err) {
            return new Response(`Error: ${err.message}`, { status: 500, headers: { 'Content-Type': 'text/plain' } });
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
}
// END OF SCRIPT AAA
