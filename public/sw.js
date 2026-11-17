self.addEventListener('activate', event => event.waitUntil(self.registration.unregister()));
self.skipWaiting();
