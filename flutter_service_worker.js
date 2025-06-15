'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d4f3681f3f19ba9cb59565b7109868be",
"version.json": "a5941a8449b484082c7c288d3ee2361d",
"index.html": "86d9aa23f4b27a7cec5f69dec70063a4",
"/": "86d9aa23f4b27a7cec5f69dec70063a4",
"main.dart.js": "b57ce409af364518d6915bd85b68d3aa",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "223238957041d7e9c93c189b430b74fa",
"index.html.bak": "c3a23520d795c87574e5fed2d18fc2c8",
"icons/Icon-192.png": "209118b9489f6d96f317e641a68eb38a",
"icons/Icon-maskable-192.png": "36bbf63635a144ffa21285300deb47ea",
"icons/Icon-maskable-512.png": "5cbb9f68379a8e6bc7ec7d6a3a8e16cd",
"icons/Icon-512.png": "bc32f363f57ab4cb97b983e837887c8d",
"manifest.json": "7dd7ffe1af27a05eb31c4b9c669014b0",
"assets/AssetManifest.json": "8e4718b32b0f5c301801be9c90a8f0c5",
"assets/NOTICES": "33ec64c19240e5b2d521f362f7b42e69",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "32d77694b365781526ec413afe3fd207",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/beigi_portfolio/assets/svg/guy.svg": "1bbe311bfa7c6d6850aa3a8f83aa7727",
"assets/packages/beigi_portfolio/assets/svg/person.svg": "00abbb5ba3e0acac159c8a7a664b7750",
"assets/packages/beigi_portfolio/assets/images/technology/flask.png": "8615243e0ddaab150399cf0eca65a5ff",
"assets/packages/beigi_portfolio/assets/images/technology/scrum.png": "e30c3d16f3c9fdf30db2545aa35f7f80",
"assets/packages/beigi_portfolio/assets/images/technology/git.png": "452bc8903a947cfb46e4581cb0b4d40c",
"assets/packages/beigi_portfolio/assets/images/technology/python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/packages/beigi_portfolio/assets/images/technology/razorpay.png": "368b761622d88029de7be2aadff6b7d3",
"assets/packages/beigi_portfolio/assets/images/technology/flutter.png": "47e4c5ea380dc3b9241ee7b4f8b65c20",
"assets/packages/beigi_portfolio/assets/images/technology/firebase.png": "d139ba1e59d9bcc1ed86617547dd51ee",
"assets/packages/beigi_portfolio/assets/images/technology/scenekit.jpeg": "dab8749c82628f14b8e5865b6a852cc3",
"assets/packages/beigi_portfolio/assets/images/technology/javascript.png": "5d1b82ec1260fed74d9a58961c29e1ad",
"assets/packages/beigi_portfolio/assets/images/technology/restAPI.png": "702d69f1e927b4218da90b3ac06422d5",
"assets/packages/beigi_portfolio/assets/images/technology/figma.png": "9109a878b5605cbabd228c63c817b006",
"assets/packages/beigi_portfolio/assets/images/technology/html.png": "18b1d25bf0de2147e65742e2f0aeebc7",
"assets/packages/beigi_portfolio/assets/images/technology/swift.png": "6740f74615e8d2b6558d7d31fc7edb1e",
"assets/packages/beigi_portfolio/assets/images/technology/c++.png": "8949bfc86fc10ef1505994eb643e940b",
"assets/packages/beigi_portfolio/assets/images/technology/networkAdmin.png": "5bab0ce1412c48b840a9f175f5dfeece",
"assets/packages/beigi_portfolio/assets/images/technology/php.png": "b187e3b1985b0aa738093d97ce028ab6",
"assets/packages/beigi_portfolio/assets/images/technology/css.png": "0d4d75245e18a852fe775fb0cf264852",
"assets/packages/beigi_portfolio/assets/images/technology/networkPlus.png": "69212bf6ffe01beb0836baf97baa2497",
"assets/packages/beigi_portfolio/assets/images/technology/Dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/packages/beigi_portfolio/assets/images/technology/WP.png": "3c43a8d41f95c8dfd7c6ce7438dd91ed",
"assets/packages/beigi_portfolio/assets/images/projects/8.png": "0128c0eb3fc59775b8202f796ff0052c",
"assets/packages/beigi_portfolio/assets/images/projects/flutter.png": "b751159d09a3c64baffd83f252b6a722",
"assets/packages/beigi_portfolio/assets/images/projects/comingSoon.jpg": "de1b8bed079001227071285499ee7292",
"assets/packages/beigi_portfolio/assets/images/projects/4.png": "e44652885a248522a52899415f43cc0c",
"assets/packages/beigi_portfolio/assets/images/projects/5.png": "f08c6a7603d279d9ff05e74aa2e52d16",
"assets/packages/beigi_portfolio/assets/images/projects/7.png": "be2d8cfc079cdbbb9e7c0460b8ff2519",
"assets/packages/beigi_portfolio/assets/images/projects/6.png": "e54c2759b0ac769fcd44bd63a3cd121c",
"assets/packages/beigi_portfolio/assets/images/projects/2.png": "5f349f37ec6adab44d8be72f0c1d1add",
"assets/packages/beigi_portfolio/assets/images/projects/dart.png": "6669a1546660d817ecbaa9ee7c41ff5d",
"assets/packages/beigi_portfolio/assets/images/projects/3.png": "67bb55b978e241db5f70a776ab099f99",
"assets/packages/beigi_portfolio/assets/images/projects/1.png": "1c22f121d99552eb5f6fecd78fac1d38",
"assets/packages/beigi_portfolio/assets/images/person.png": "670d16c2b16cb94cd8ff3159fa909391",
"assets/packages/beigi_portfolio/assets/images/social/email.png": "7a97194d3c075caa1a2f2fb89f793d4e",
"assets/packages/beigi_portfolio/assets/images/social/email-dark.png": "ed13e62563cec7b9f7fa081d9ae96be2",
"assets/packages/beigi_portfolio/assets/images/social/instagram.png": "db9e28760b4c72ee51d5c2c7b0772823",
"assets/packages/beigi_portfolio/assets/images/social/linkedin-logo-dark.png": "c1d133bc27ed84e84050a55ed86d5456",
"assets/packages/beigi_portfolio/assets/images/social/github-dark.png": "3fd573d3afdcdb97acd6685367c7b254",
"assets/packages/beigi_portfolio/assets/images/social/github.png": "46fd5ca3c4a5cbcad97fd9b11d845f48",
"assets/packages/beigi_portfolio/assets/images/social/medium-dark.png": "6385e8ac005370653326a4d1a649b8aa",
"assets/packages/beigi_portfolio/assets/images/social/linkedin-logo.png": "95e6c045dd5f8ea3ed14fc2de308d115",
"assets/packages/beigi_portfolio/assets/images/social/medium.png": "276ae11521896bd9a529e02aad79ff71",
"assets/packages/beigi_portfolio/assets/images/social/instagram-dark.png": "c5f26969de53635f18ce6012e937d046",
"assets/packages/beigi_portfolio/assets/images/logo.png": "d419be5a0531b8eaea9e34a31db7246c",
"assets/packages/beigi_portfolio/assets/resume.pdf": "7ecf241ec9233d5e95afedb35457c251",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "852c1184f7f2a7393ff40c4a40000c2f",
"assets/fonts/MaterialIcons-Regular.otf": "b467d8b18e8e365a86263a66fa4147ef",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
