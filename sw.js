var cacheName = 'hello-pwa'; 
var filesToCache = [
'/',    
'/index.html',    
'/style.css',  
'/js/main.js',
'/js/bootstrap.js',
'/js/jquery.flexslider.js',
'/js/jquery.flexslider-min.js',
'/js/window-scroll.js'  ];  
self.addEventListener('install', function(e) { 
e.waitUntil(
caches.open(cacheName).then(function(cache) { 
return cache.addAll(filesToCache);   
})    
);  
}); 
/* Serve cached content when offline */ 
self.addEventListener('fetch', function(e) {  
e.respondWith(      caches.match(e.request).then(function(response) {  
return response || fetch(e.request);
})   
);  
});