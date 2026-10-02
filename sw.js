const CACHE='curtain-app-v3';
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','manifest.webmanifest','icons/icon.svg']))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{if(e.request.method==='GET')e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});

