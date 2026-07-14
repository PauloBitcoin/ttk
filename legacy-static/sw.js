self.addEventListener('install', (e) => {
  //e.waitUntil();
});

self.addEventListener('fetch', (e) => {
  
	  e.respondWith(
	    caches.match(e.request).then((response) => response || fetch(e.request)),
	  );
	
});
