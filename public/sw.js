// No caching: this is a fully static export, so a stale cache would only
// serve old content on a redeploy. This worker exists so the browser
// considers the site installable.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
