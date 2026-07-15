const CACHE_NAME = 'TakeTok-v1'
const PRECACHE_URLS = ['/', '/manifest.webmanifest']

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)))
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  )
})

// Stale-while-revalidate, same-origin GET only. The tikwm API and TikTok's
// CDN media are cross-origin and should never be cached here.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return
  const url = new URL(event.request.url)
  if (url.origin !== self.location.origin) return

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone()
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone))
          }
          return response
        })
        .catch(() => cached)
      return cached || fetchPromise
    }),
  )
})
