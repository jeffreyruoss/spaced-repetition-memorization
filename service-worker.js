
const cacheName = 'v1';
const cacheAssets = [
  'index.html',
  // '/css/style.css',
  // '/js/main.js'
];

// Call Install Event
self.addEventListener('install', e => {
  // Cache assets
  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Caching files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Call Activate Event
self.addEventListener('activate', e => {
  // Remove previous cached data
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .catch(() => caches.match(e.request))
  );
});