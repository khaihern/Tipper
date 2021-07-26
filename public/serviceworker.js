const CACHE_NAME = 'tipper-v2';

const appShellFiles = [
    './',
    './../src/',
    './../src/index.js',
    './../src/index.css',
    './../src/App.js',

    './../src/images/',
    './../src/images/Banner.svg',

    './../src/contexts/',
    './../src/contexts/AppReducer.js',
    './../src/contexts/GlobalState.js',

    './../src/components/',
    './../src/components/Amount.js',
    './../src/components/Head.js',
    './../src/components/Overview.js',
    './../src/components/PartySize.js',
    './../src/Tip.js',
    
    // Fonts 
    // './../src/fonts/regular/poppins-400.eot',
    // './../src/fonts/regular/poppins-400.ttf',
    // './../src/fonts/regular/poppins-400.woff',

    // './../src/fonts/medium/poppins-500.eot',
    // './../src/fonts/medium/poppins-500.ttf',
    // './../src/fonts/medium/poppins-500.woff',

    // './../src/fonts/semibold/poppins-600.eot',
    // './../src/fonts/semibold/poppins-600.ttf',
    // './../src/fonts/semibold/poppins-600.woff',

    // './../src/fonts/bold/poppins-700.eot',
    // './../src/fonts/bold/poppins-700.ttf',
    // './../src/fonts/bold/poppins-700.woff',

    './images/logo-app.png',
    './images/logo-fav.png',
    './manifest.json',
    './static/media/Banner.853ce5e9.svg',

    './static/js/bundle.js',
    './static/js/main.chunk.js',
    './static/js/vendors~main.chunk.js'
];

const contentToCache = appShellFiles;

const self = this;

// Installing Service Worker
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
      const cache = await caches.open(CACHE_NAME);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
});

// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
    if (!(e.request.url.indexOf('http') === 0)) return;
    e.respondWith((async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) return r;
      const response = await fetch(e.request);
      const cache = await caches.open(CACHE_NAME);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
});

self.addEventListener("activate", function(event) {
    event.waitUntil(
        caches.keys().then(function(names) {
            for (let name of names)
                if (CACHE_NAME !== name) caches.delete(name);
        })
    );
});
