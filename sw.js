const CACHE_VERSION = "qigo-app-v4-20260731";
const APP_SHELL = [
  "/",
  "/index.html",
  "/provider.html",
  "/styles.css?v=20260731-1",
  "/provider.css?v=20260731-2",
  "/app.js?v=20260731-1",
  "/provider.js?v=20260731-2",
  "/manifest.webmanifest?v=20260730-3",
  "/icons/qigo-app.svg",
  "/icons/qigo-app-192.png",
  "/icons/qigo-app-512.png",
  "/icons/qigo-maskable-512.png",
  "/icons/qigo-apple-touch.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key)),
      ))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    const fallbackPage = url.pathname.startsWith("/provider") ? "/provider.html" : "/index.html";
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(fallbackPage, copy));
          return response;
        })
        .catch(() => caches.match(fallbackPage)),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    }),
  );
});
