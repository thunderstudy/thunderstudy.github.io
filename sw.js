/**
 * ThunderStudy Service Worker — PWA Support
 * Caches core pages and assets for offline access.
 * @version 2.0
 * @author Wondermayank / ThunderStudy
 */

const CACHE_NAME = 'thunderstudy-v6';
const STATIC_CACHE = 'thunderstudy-static-v6';
const DYNAMIC_CACHE = 'thunderstudy-dynamic-v6';

// Core assets to cache on install
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/favicon.svg',
  '/favicon-192x192.svg',
  '/apple-touch-icon.svg',
  // Google Fonts (cached via network-first)
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@600;700;800&display=swap'
];

// Max items in dynamic cache
const DYNAMIC_CACHE_LIMIT = 50;

// ── Install ──────────────────────────────────────────────────
self.addEventListener('install', function(event) {
  console.log('[ThunderStudy SW] Installing v2...');
  event.waitUntil(
    caches.open(STATIC_CACHE).then(function(cache) {
      console.log('[ThunderStudy SW] Caching core assets');
      return cache.addAll(CORE_ASSETS.filter(function(url) {
        return !url.startsWith('https://fonts.googleapis.com');
      }));
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// ── Activate ─────────────────────────────────────────────────
self.addEventListener('activate', function(event) {
  console.log('[ThunderStudy SW] Activated v2');
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) {
          return key !== STATIC_CACHE && key !== DYNAMIC_CACHE;
        }).map(function(key) {
          console.log('[ThunderStudy SW] Deleting old cache:', key);
          return caches.delete(key);
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// ── Fetch ─────────────────────────────────────────────────────
self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);

  // Skip non-GET, browser-extension and chrome-extension requests
  if (event.request.method !== 'GET') return;
  if (url.protocol === 'chrome-extension:') return;

  // Strategy: Cache First for static assets
  if (
    url.pathname.match(/\.(png|jpg|jpeg|svg|ico|webp|woff2|woff|ttf|css)$/) ||
    url.href.includes('fonts.gstatic.com')
  ) {
    event.respondWith(cacheFirst(event.request));
    return;
  }

  // Strategy: Network First for HTML pages (always fresh content)
  if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  // Strategy: Stale-While-Revalidate for everything else
  event.respondWith(staleWhileRevalidate(event.request));
});

// ── Strategies ────────────────────────────────────────────────

function cacheFirst(request) {
  return caches.match(request).then(function(cached) {
    if (cached) return cached;
    return fetch(request).then(function(response) {
      return storeDynamicCache(request, response);
    }).catch(function() {
      return offlineFallback();
    });
  });
}

function networkFirst(request) {
  return fetch(request).then(function(response) {
    return storeDynamicCache(request, response);
  }).catch(function() {
    return caches.match(request).then(function(cached) {
      return cached || offlineFallback();
    });
  });
}

function staleWhileRevalidate(request) {
  return caches.open(DYNAMIC_CACHE).then(function(cache) {
    return cache.match(request).then(function(cached) {
      var networkFetch = fetch(request).then(function(response) {
        if (response && response.status === 200 && response.type !== 'opaque') {
          cache.put(request, response.clone());
          trimCache(DYNAMIC_CACHE, DYNAMIC_CACHE_LIMIT);
        }
        return response;
      });
      if (cached) {
        // Suppress unhandled promise rejection for background fetch
        networkFetch.catch(function(err) {
          console.warn('[ThunderStudy SW] Background fetch failed for:', request.url, err);
        });
        return cached;
      }
      return networkFetch.catch(function() {
        return offlineFallback();
      });
    });
  });
}

function storeDynamicCache(request, response) {
  if (!response || response.status !== 200 || response.type === 'opaque') {
    return response;
  }
  var cloned = response.clone();
  caches.open(DYNAMIC_CACHE).then(function(cache) {
    cache.put(request, cloned);
    trimCache(DYNAMIC_CACHE, DYNAMIC_CACHE_LIMIT);
  });
  return response;
}

function trimCache(cacheName, maxItems) {
  caches.open(cacheName).then(function(cache) {
    cache.keys().then(function(keys) {
      if (keys.length > maxItems) {
        cache.delete(keys[0]).then(function() {
          trimCache(cacheName, maxItems);
        });
      }
    });
  });
}

function offlineFallback() {
  return caches.match('/').then(function(response) {
    return response || caches.match('/index.html');
  });
}

// ── Background Sync (for future use) ─────────────────────────
self.addEventListener('sync', function(event) {
  console.log('[ThunderStudy SW] Background sync:', event.tag);
});

// ── Push Notifications (for future use) ──────────────────────
self.addEventListener('push', function(event) {
  if (!event.data) return;
  var data = event.data.json();
  self.registration.showNotification(data.title || 'ThunderStudy', {
    body: data.body || 'New study material available!',
    icon: '/favicon-192x192.png',
    badge: '/favicon-192x192.png',
    tag: 'thunderstudy-notification',
    renotify: true,
    data: { url: data.url || '/' }
  });
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});
