// ============================================================
// ThunderStudy Service Worker  — sw.js
// Strategy: Cache-first for assets, Network-first for pages
// ============================================================

const CACHE_NAME   = 'thunderstudy-v2';
const STATIC_CACHE = 'thunderstudy-static-v2';
const PAGES_CACHE  = 'thunderstudy-pages-v2';

// Assets to pre-cache on install (shell)
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon-192x192.png',
  '/favicon-512x512.png',
  '/apple-touch-icon.png',
  '/logo.png',
  '/og-cover.png',
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@600;700;800&display=swap',
];

// ── INSTALL ──────────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(PRECACHE_URLS.map(url => {
        // Wrap in Request with cors mode for cross-origin (Google Fonts)
        return new Request(url, { mode: 'cors' });
      })))
      .catch(err => {
        // Non-fatal: some cross-origin resources may be blocked
        console.warn('[SW] Pre-cache partial failure:', err);
      })
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE ─────────────────────────────────────────────────
self.addEventListener('activate', event => {
  const KEEP = [STATIC_CACHE, PAGES_CACHE, CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => !KEEP.includes(k)).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── FETCH ────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and browser-extension requests
  if (request.method !== 'GET') return;
  if (!['http:', 'https:'].includes(url.protocol)) return;

  // ── Strategy: Cache-first for static assets ─────────────
  if (isStaticAsset(url)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // ── Strategy: Network-first for HTML pages ───────────────
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirst(request, PAGES_CACHE));
    return;
  }

  // ── Strategy: Stale-while-revalidate for everything else ─
  event.respondWith(staleWhileRevalidate(request, CACHE_NAME));
});

// ── Helpers ──────────────────────────────────────────────────

function isStaticAsset(url) {
  return /\.(png|jpg|jpeg|webp|svg|ico|woff2?|ttf|css|js)(\?.*)?$/.test(url.pathname);
}

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Offline — asset not cached', { status: 503 });
  }
}

async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    // Offline fallback for HTML pages
    const fallback = await caches.match('/index.html');
    return fallback || new Response(
      '<h1>You are offline</h1><p>Visit <a href="https://thunderstudy.github.io">ThunderStudy</a> when you have internet.</p>',
      { status: 503, headers: { 'Content-Type': 'text/html' } }
    );
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request).then(response => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => null);

  return cached || await fetchPromise || new Response('Offline', { status: 503 });
}

// ── BACKGROUND SYNC (optional) ───────────────────────────────
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
