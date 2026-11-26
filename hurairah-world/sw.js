/* Hurairah World: cache only its own static assets. */
const CACHE="hurairah-world-092";
const ROOT=new URL("./",self.registration.scope);
const INDEX=new URL("./index.html",ROOT).href;
const assets=["./index.html","./manifest.webmanifest","./icon.svg"].map(x=>new URL(x,ROOT).href);
self.addEventListener("install",event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(assets)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith("hurairah-world-")&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",event=>{const url=new URL(event.request.url);if(event.request.method!=="GET"||url.origin!==ROOT.origin)return;const isHome=url.pathname===ROOT.pathname||url.pathname===new URL(INDEX).pathname;
if(event.request.mode==="navigate"&&isHome){event.respondWith((async()=>{try{const response=await fetch(event.request);if(response.ok){try{const cache=await caches.open(CACHE);await cache.put(INDEX,response.clone());}catch(_){}return response;}const cached=await caches.match(INDEX,{cacheName:CACHE});return cached||response;}catch(_){return await caches.match(INDEX,{cacheName:CACHE})||new Response("Buka Hurairah World saat online terlebih dahulu.",{status:503});}})());return;}
if(assets.includes(url.href)){event.respondWith(caches.match(event.request,{cacheName:CACHE}).then(response=>response||fetch(event.request)));}});
