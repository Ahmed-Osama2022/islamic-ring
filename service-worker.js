// importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.CacheFirst()
    // new workbox.strategies.NetworkFirst()
);
