'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "662ac5603bea7007dc1910a559c4a3d2",
"assets/assets/icons/adidas.png": "641d99d675dd0fa738f572c9cbe2d70b",
"assets/assets/icons/amazon.png": "89125570575c49e2dcc3242116583298",
"assets/assets/icons/billandrecharge.png": "8530bcd3ed3448f66522388ead539ad1",
"assets/assets/icons/boardband.png": "caf2902776bcb0d3c46b390808d872ae",
"assets/assets/icons/bronze.png": "56474bffd8d1efb2dd8cb3bf0dbdeb42",
"assets/assets/icons/Daily.png": "5ba2722f62124def4185ad7c825c898b",
"assets/assets/icons/dth.png": "f345c2c97e2f7e6557cb1bd1d94cb986",
"assets/assets/icons/education.png": "8b72ba597a1bd31b8a2073900d4e415f",
"assets/assets/icons/electricity.png": "4a90ea969553808771f4da13b9581e0e",
"assets/assets/icons/facebook.png": "f115a8052697832e95942d0f0b185676",
"assets/assets/icons/gas.png": "04a0211813429829cbe3baa5da7da9a6",
"assets/assets/icons/gold.png": "4cf565961c8db446f4acd97f3f1f3c5e",
"assets/assets/icons/google.png": "c6f82576c4239a0275be809360c277f4",
"assets/assets/icons/history.png": "a695f60c3e5b94e69812372580edeabc",
"assets/assets/icons/learder.png": "2f02f917a8d7635fbe3d507af928754d",
"assets/assets/icons/logout.png": "20e4d65c86d23beb05dd63de9bf7c787",
"assets/assets/icons/menu.png": "3acef508779e1b90c72c682ba3e932c1",
"assets/assets/icons/metro.png": "f44c413bf4fa5b6c6b3efe7135325a4a",
"assets/assets/icons/mobile_recharge.png": "d3e6283c78d484e867881bbe69c66e9e",
"assets/assets/icons/money.png": "6deefb4e11379b672028fee3801fab41",
"assets/assets/icons/Montly.png": "823f4ece2b08c557775b2adf820fa6d4",
"assets/assets/icons/Nike": "d8a108ddaad212532f93da2232d60df7",
"assets/assets/icons/Nike.jpg": "d8a108ddaad212532f93da2232d60df7",
"assets/assets/icons/notification.png": "d10c55d06ef45634eb3ccec3715ea87d",
"assets/assets/icons/pharmeasy.png": "05a818e8bd17623e8e78a2824600856a",
"assets/assets/icons/point.png": "3860f5420418f0f1b8bfe2a888e94af1",
"assets/assets/icons/prizepool.png": "3a54e3e12a0f5b2ad37b8a78b0b4a4eb",
"assets/assets/icons/rapido.png": "8019597a89fd8e48cd9f107b0bbe01fb",
"assets/assets/icons/recharge.png": "64d3b0c9c84eee5d96ad8ea31a673cfa",
"assets/assets/icons/referearn.png": "e08c186fd92bbfc48d2fc47ef4b89612",
"assets/assets/icons/scan.png": "e030330077ed163cc4adef5d05ccc962",
"assets/assets/icons/silver.png": "3f0fd35b3852046f6bf6a480f319001b",
"assets/assets/icons/Surprize.png": "13c937c1fe9723aa86c0097a48835337",
"assets/assets/icons/udemy.png": "e33db1eb4ef982ee9b4be7f6d2ccf427",
"assets/assets/icons/user0.png": "133072551b104d7d04cf70febfd5a0f0",
"assets/assets/icons/user1.png": "a348d082dff50f9f5cf7eb0617aea564",
"assets/assets/icons/user2.png": "340ef321165cd56271ebe7eca6426f88",
"assets/assets/icons/user3.png": "256d5ec2d20b10c2d6db39f0e5876719",
"assets/assets/icons/user4.png": "448c34d80efdc9b134379d948e431521",
"assets/assets/icons/user5.png": "b05ea22ef5e1dcb7a08e443a9c5422af",
"assets/assets/icons/user6.png": "133072551b104d7d04cf70febfd5a0f0",
"assets/assets/icons/user7.png": "448c34d80efdc9b134379d948e431521",
"assets/assets/icons/user8.png": "340ef321165cd56271ebe7eca6426f88",
"assets/assets/icons/voucher.png": "cecc76cd790996e62b5163f95ead4f7d",
"assets/assets/icons/water.png": "5da3de85f840f9507ff27801d1280a12",
"assets/assets/icons/Weekly.png": "86eadc04606687cb553953e4fd87bd53",
"assets/assets/icons/zee5.png": "81eda8c107a5d1ce31e72cdf8813e8dd",
"assets/assets/images/1.PNG": "5895dea7eb4acbfac660b36eeab682d4",
"assets/assets/images/141221599-orange-abstract-water-wave-vector-illustration-flat-design-background-.png": "59fe72c6bf28cd3863269183cc589052",
"assets/assets/images/2.PNG": "61c257bc98ad8a2ab919a761d8e42112",
"assets/assets/images/3.PNG": "6a9268c12c5be4ac855e2673f11f7009",
"assets/assets/images/3dman.png": "698aeda756ce60c1fbba4c909a6467b9",
"assets/assets/images/hand.png": "964ecb111ee14597e84f5354e1bfde77",
"assets/assets/images/leaderboardBG.jpg": "154277254054c012d83545f5ab6e1255",
"assets/assets/images/loginbg.png": "88c08295308fce50692cf9da0bfca304",
"assets/assets/images/owlclose.png": "96d5f6fd938ed9c7592e304265782647",
"assets/assets/images/owlopen.png": "6159007128393f485ea2af3961a0f6ba",
"assets/assets/images/paymentwala.png": "33aca0674872c63971cea18def7ab59c",
"assets/assets/images/paymentwala2.png": "6e850c41fa7b06000dd21164555d99bf",
"assets/assets/images/paymentwala3.png": "a751502d165e48872a6799eddbd5f6ac",
"assets/assets/images/paymentwala4.png": "87342271a0d9e8b373bcad7cae6be27f",
"assets/assets/images/podium.png": "398030dea6d28d4d13289b5702112016",
"assets/assets/images/podium1.png": "690d25b9ec7f5ee2548ea2c85fc07404",
"assets/assets/images/profile.png": "0f40c0473fd59623579edf104f274cd4",
"assets/assets/images/referfriend.png": "cd974cdf611d6dc493015b51d3c9f310",
"assets/assets/images/sidebanner.png": "f3b5ba9aac77bda03a8f2f008cbc9e4f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "fc92a25c0b57a9790ca19a9d30e184dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "fb165f170bdc32662b384920c36944c3",
"/": "fb165f170bdc32662b384920c36944c3",
"main.dart.js": "10226c21f8bd1c4a87a79935e9c1b28b",
"manifest.json": "6032024f04b1202a4e397f4d353b5e7e",
"version.json": "18cef2a5e7eaa5425361b3ce484ae063"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
