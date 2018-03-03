"use strict";var e=1520041207177,t={offline:"offline-v"+e,regular:"regular-v"+e},n="/offline",r=["/"];function c(e){var t=new Request(e,{cache:"reload"});if("cache"in t)return t;var n=new URL(e,self.location.href);return n.search+=(n.search?"&":"")+"cachebust="+Date.now(),new Request(n)}self.addEventListener("install",function(e){var a=fetch(c(n)).then(function(e){return caches.open(t.offline).then(function(t){return t.put(n,e)})}),i=caches.open(t.regular).then(function(e){return e.addAll(r)});e.waitUntil(Promise.all([a,i]))}),self.addEventListener("activate",function(e){var n=Object.keys(t).map(function(e){return t[e]});e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(-1===n.indexOf(e))return console.log("Deleting out of date cache:",e),caches.delete(e)}))}))}),self.addEventListener("fetch",function(e){("navigate"===e.request.mode||"GET"===e.request.method&&e.request.headers.get("accept").includes("text/html"))&&(console.log("Handling fetch event for",e.request.url),e.respondWith(fetch(e.request).catch(function(e){return console.log("Fetch failed; returning offline page instead.",e),caches.match(n)})))});