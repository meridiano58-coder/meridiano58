// Forzar la actualización inmediata
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Borrar el caché viejo y desinstalar el Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      self.registration.unregister();
    })
  );
});
