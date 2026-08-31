const CACHE_NAME = 'ecoentregas-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './politica.html',
  './img/logo.jpg',
  './img/entregador.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});