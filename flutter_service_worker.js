'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4bed68ccd4562bb3306022141997e8f0",
"assets/AssetManifest.bin.json": "13a3d9d33a2caa17cac3fe07672093a5",
"assets/AssetManifest.json": "4a407de5c58781f16df0f5b09a170ed8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4b75a851160123e49ac2b2e21d4af43a",
"assets/NOTICES": "a794b2b151b7125f077a8f4d93564c63",
"assets/packages/beigi_portfolio/assets/images/logo.png": "d419be5a0531b8eaea9e34a31db7246c",
"assets/packages/beigi_portfolio/assets/images/person.png": "670d16c2b16cb94cd8ff3159fa909391",
"assets/packages/beigi_portfolio/assets/images/projects/1.jpeg": "323240fb1b1bf14fa7b4ed4d28abbca4",
"assets/packages/beigi_portfolio/assets/images/projects/2.jpeg": "8d95c6eb176a94d08d65b66cb5fab03e",
"assets/packages/beigi_portfolio/assets/images/projects/3.jpeg": "c9f588e4843b5cf7c6e614b4a17ee46c",
"assets/packages/beigi_portfolio/assets/images/projects/4.jpeg": "cce4265499da546fa4f19dafda74a277",
"assets/packages/beigi_portfolio/assets/images/projects/5.jpeg": "99aa5e4c06f65c1d5ad86c9db51e57bd",
"assets/packages/beigi_portfolio/assets/images/projects/6.jpeg": "563048f821e840ebdbc7000e9c6b834a",
"assets/packages/beigi_portfolio/assets/images/projects/7.jpg": "0fcd00a5b4581e26131df5536b157497",
"assets/packages/beigi_portfolio/assets/images/projects/8.png": "89d789a30c2b1581b7a27c8f120647c8",
"assets/packages/beigi_portfolio/assets/images/projects/9.png": "1080996957e565554ac58546452b892a",
"assets/packages/beigi_portfolio/assets/images/social/email-dark.png": "ed13e62563cec7b9f7fa081d9ae96be2",
"assets/packages/beigi_portfolio/assets/images/social/email.png": "7a97194d3c075caa1a2f2fb89f793d4e",
"assets/packages/beigi_portfolio/assets/images/social/github-dark.png": "3fd573d3afdcdb97acd6685367c7b254",
"assets/packages/beigi_portfolio/assets/images/social/github.png": "46fd5ca3c4a5cbcad97fd9b11d845f48",
"assets/packages/beigi_portfolio/assets/images/social/instagram-dark.png": "c5f26969de53635f18ce6012e937d046",
"assets/packages/beigi_portfolio/assets/images/social/instagram.png": "db9e28760b4c72ee51d5c2c7b0772823",
"assets/packages/beigi_portfolio/assets/images/social/linkedin-logo-dark.png": "c1d133bc27ed84e84050a55ed86d5456",
"assets/packages/beigi_portfolio/assets/images/social/linkedin-logo.png": "95e6c045dd5f8ea3ed14fc2de308d115",
"assets/packages/beigi_portfolio/assets/images/social/medium-dark.png": "6385e8ac005370653326a4d1a649b8aa",
"assets/packages/beigi_portfolio/assets/images/social/medium.png": "276ae11521896bd9a529e02aad79ff71",
"assets/packages/beigi_portfolio/assets/images/technology/c++.png": "8949bfc86fc10ef1505994eb643e940b",
"assets/packages/beigi_portfolio/assets/images/technology/css.png": "0d4d75245e18a852fe775fb0cf264852",
"assets/packages/beigi_portfolio/assets/images/technology/figma.png": "9109a878b5605cbabd228c63c817b006",
"assets/packages/beigi_portfolio/assets/images/technology/firebase.png": "d139ba1e59d9bcc1ed86617547dd51ee",
"assets/packages/beigi_portfolio/assets/images/technology/flask.png": "8615243e0ddaab150399cf0eca65a5ff",
"assets/packages/beigi_portfolio/assets/images/technology/flutter.png": "47e4c5ea380dc3b9241ee7b4f8b65c20",
"assets/packages/beigi_portfolio/assets/images/technology/git.png": "452bc8903a947cfb46e4581cb0b4d40c",
"assets/packages/beigi_portfolio/assets/images/technology/html.png": "18b1d25bf0de2147e65742e2f0aeebc7",
"assets/packages/beigi_portfolio/assets/images/technology/javascript.png": "5d1b82ec1260fed74d9a58961c29e1ad",
"assets/packages/beigi_portfolio/assets/images/technology/networkAdmin.png": "5bab0ce1412c48b840a9f175f5dfeece",
"assets/packages/beigi_portfolio/assets/images/technology/networkPlus.png": "69212bf6ffe01beb0836baf97baa2497",
"assets/packages/beigi_portfolio/assets/images/technology/php.png": "b187e3b1985b0aa738093d97ce028ab6",
"assets/packages/beigi_portfolio/assets/images/technology/python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/packages/beigi_portfolio/assets/images/technology/razorpay.png": "368b761622d88029de7be2aadff6b7d3",
"assets/packages/beigi_portfolio/assets/images/technology/restAPI.png": "702d69f1e927b4218da90b3ac06422d5",
"assets/packages/beigi_portfolio/assets/images/technology/scenekit.jpeg": "dab8749c82628f14b8e5865b6a852cc3",
"assets/packages/beigi_portfolio/assets/images/technology/scrum.png": "e30c3d16f3c9fdf30db2545aa35f7f80",
"assets/packages/beigi_portfolio/assets/images/technology/swift.png": "6740f74615e8d2b6558d7d31fc7edb1e",
"assets/packages/beigi_portfolio/assets/images/technology/WP.png": "3c43a8d41f95c8dfd7c6ce7438dd91ed",
"assets/packages/beigi_portfolio/assets/svg/guy.svg": "1bbe311bfa7c6d6850aa3a8f83aa7727",
"assets/packages/beigi_portfolio/assets/svg/person.svg": "00abbb5ba3e0acac159c8a7a664b7750",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "6246d5e626c3fe28252f70c6d4556b50",
"canvaskit/canvaskit.wasm": "9aa20344ab9af128547d21d668be5e62",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "de6ad45a91e33c40e752385ae408f0fc",
"canvaskit/chromium/canvaskit.wasm": "92d2e33907bcea96b0edebf449b10815",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "a1056258d1fbc4f6a82d8afcd74c0082",
"canvaskit/skwasm.wasm": "3d2de89ba738501eff0aaf0c52fd7fcc",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "e4d47370b154f83b1c7136c0f8921085",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9ff1dd1a30eff734bf2f86f978aef047",
"/": "9ff1dd1a30eff734bf2f86f978aef047",
"main.dart.js": "ea2a501b4cd0cce3a59d8527da1d6b82",
"manifest.json": "9a0de1ff26661cd281cb9deb3db33b02",
"version.json": "ac2c1b50325b237673ee69eec268a9e4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
