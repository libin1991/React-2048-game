"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/React-2048-game/index.html","9c75bbe024665bdd33dbe93e2fab9785"],["/React-2048-game/static/css/main.8fa40bbc.css","8fa40bbc780bdccac2a979bcf959f5f0"],["/React-2048-game/static/css/main.8fa40bbc.css.gz","b7633cfd18a82dd2322e7be91775776d"],["/React-2048-game/static/js/main.e7db3a6c.js","3dd1eec8ed84b706366fef2741575624"],["/React-2048-game/static/js/main.e7db3a6c.js.gz","b7d61481c3b08af24f4e822d6442e873"],["/React-2048-game/static/media/arrow.9a627156.svg","9a627156ba7c9fb127987aa6cb7971f3"],["/React-2048-game/static/media/move.7d5eff42.mp3","7d5eff42a3e4c04c0cb2addc72a79d88"],["/React-2048-game/static/media/popup.4af4d408.mp3","4af4d408da57cd7e27d7293569b8a2be"],["/React-2048-game/static/media/reset.b42537e9.svg","b42537e92c36ea3e48bec5a536edc1d4"],["/React-2048-game/static/media/speaker-off.7ce4a47a.svg","7ce4a47afd90e9fa6f656a898e0a8568"],["/React-2048-game/static/media/speaker-on.bc2321a2.svg","bc2321a2378304d1a1933bf91c8f68b1"],["/React-2048-game/static/media/undo.3912048b.svg","3912048b3ecc86f4fb3d0bd0175b39d8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/React-2048-game/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});