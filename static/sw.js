const CACHE_NAME = 'meridiano58-v2';
const ASSETS = [
  '/',
  '/manifest.json',
  '/icono-app.png'
];

// Instalar el Service Worker y guardar recursos básicos en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Responder desde la caché si no hay internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
