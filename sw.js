// Kill-switch service worker.
//
// The previous Gatsby site (startergate/startergate.dev-v1, before it moved
// under the /v1 path prefix) registered a gatsby-plugin-offline worker at
// /sw.js with scope /. That worker keeps serving the cached old site to
// returning visitors. Browsers re-fetch /sw.js on navigation, so serving this
// file at the same path replaces the old worker, which then clears its caches,
// unregisters itself and reloads open tabs onto the new site.
//
// Keep this file deployed for a while (several months) so most returning
// visitors get cleaned up. The v1 site's own worker lives at /v1/sw.js and is
// not affected by this file.

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      for (const client of clients) {
        client.navigate(client.url);
      }
    })(),
  );
});
