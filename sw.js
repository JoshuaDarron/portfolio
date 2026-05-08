var CACHE_NAME = 'portfolio-v5';

var STATIC_ASSETS = [
	'./',
	'./index.html',
	'./assets/css/main.css',
	'./assets/css/animations.css',
	'./assets/css/experience.css',
	'./assets/css/blog.css',
	'./assets/css/case-study.css',
	'./assets/js/nav.js',
	'./assets/js/reveal.js',
	'./assets/js/hero.js',
	'./assets/js/cards.js',
	'./assets/js/spotlight.js',
	'./assets/js/theme.js',
	'./assets/js/back-to-top.js',
	'./assets/js/blog.js',
	'./assets/js/timeline.js',
	'./assets/js/analytics.js',
	'./assets/js/experience.js',
	'./assets/js/case-study.js',
	'./favicon.svg'
];

// Install: cache static assets
self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.addAll(STATIC_ASSETS);
		})
	);
});

// Activate: clean up old caches
self.addEventListener('activate', function (event) {
	event.waitUntil(
		caches.keys().then(function (cacheNames) {
			return Promise.all(
				cacheNames
					.filter(function (name) {
						return name !== CACHE_NAME;
					})
					.map(function (name) {
						return caches.delete(name);
					})
			);
		})
	);
});

// Fetch: network-first for HTML, cache-first for static assets
self.addEventListener('fetch', function (event) {
	var request = event.request;

	if (request.method !== 'GET') return;

	// HTML pages: network-first
	if (request.headers.get('accept') && request.headers.get('accept').includes('text/html')) {
		event.respondWith(
			fetch(request)
				.then(function (response) {
					var clone = response.clone();
					caches.open(CACHE_NAME).then(function (cache) {
						cache.put(request, clone);
					});
					return response;
				})
				.catch(function () {
					return caches.match(request);
				})
		);
		return;
	}

	// Static assets: cache-first
	event.respondWith(
		caches.match(request).then(function (cached) {
			if (cached) return cached;
			return fetch(request).then(function (response) {
				var clone = response.clone();
				caches.open(CACHE_NAME).then(function (cache) {
					cache.put(request, clone);
				});
				return response;
			});
		})
	);
});
