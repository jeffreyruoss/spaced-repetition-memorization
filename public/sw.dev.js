// This is a basic service worker that does nothing.
// You can add code here to test the behavior of your service worker in development.
self.addEventListener('install', (event) => {
  console.log('Service worker installed');
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activated');
});
