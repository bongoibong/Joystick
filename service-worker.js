// service-worker.js
const CACHE_NAME = 'joystick-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',  // Thêm các file CSS, JS, và hình ảnh cần thiết
    '/script.js',
    // Các tài nguyên khác
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response; // Tài nguyên đã có trong cache
                }
                return fetch(event.request); // Tải tài nguyên từ mạng nếu không có trong cache
            })
    );
});
