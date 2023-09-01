// importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.CacheFirst()
    // new workbox.strategies.NetworkFirst()
);

// const staticCacheName = 'site-static';
const staticCacheName = 'site-static-v1';
const assets = [
    '/',
    '/mob/index.html',
    '/mob/images/logo.png',
    '/mob/Noto_Naskh_Arabic/NotoNaskhArabic-VariableFont_wght.ttf',
    '/mob/Noto_Naskh_Arabic/OFL.txt',
    '/mob/Noto_Naskh_Arabic/static/NotoNaskhArabic-Regular.ttf',
    '/mob/Noto_Naskh_Arabic/static/NotoNaskhArabic-Medium.ttf',
    '/mob/Noto_Naskh_Arabic/static/NotoNaskhArabic-Bold.ttf',
    '/mob/Noto_Naskh_Arabic/static/NotoNaskhArabic-SemiBold.ttf',
    '/mob/images/gmail-icon.png',
];

self.addEventListener('install', evt => {
    // console.log('service worker has been installed');
    evt.waitUntil(caches.open(staticCacheName).then(cache => {
        console.log('caching shell assets');
        // cache.addAll() >> It's async task!!
        cache.addAll(assets);
    }))
});

// Activate event 
self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            // console.log(keys);
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
            )

        })
    )
});

// fetch event 
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    );
});
