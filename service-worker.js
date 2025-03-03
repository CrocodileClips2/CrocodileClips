const cacheName = 'crocodile-clips-v1';
const staticAssets = [
    'home.html',
    'g@mes.html',
    'about.html',
    'styles.css',
    'main.js',
    'about.js',
    'favicon.png',
    'Crocodile Clips Logo.png',
    'icon-192x192.png',
    'icon-512x512.png',
    'manifest.json'
];

self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    const req = event.request;
    event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(req);
    return cachedResponse || fetch(req);
}