const CACHE = "menu-v87";
const FILES = ["./", "index.html", "style.css", "app.js", "data.js", "icon.svg", "logo.svg", "manifest.webmanifest", "boutique.js", "boutique.css", "media/abone/sun.svg", "media/abone/word.svg", "media/boutique/bg-satin.jpg", "media/boutique/bow.webp", "media/card/solarium.webp", "media/card/packages.webp", "media/card/creams.webp", "media/card/lovers.webp", "media/qolbaq/qolbaq_1.webp", "media/qolbaq/qolbaq_2.webp", "media/qolbaq/qolbaq_3.webp", "media/qolbaq/qolbaq_4.webp", "media/qolbaq/qolbaq_5.webp", "media/qolbaq/qolbaq_6.webp",
  "media/bg2.webp", "media/Ad1.png", "media/Ad5.png", "media/Ad6.png", "media/Ad7.png", "media/ads/Ad1.webp", "media/ads/Ad2.webp", "media/ads/Ad3.webp", "media/ads/Ad4.webp", "media/ads/Ad5.webp", "media/ads/Ad6.webp", "media/ads/Ad7.webp", "media/ads/Ad8.webp", "media/ads/Ad9.webp", "media/ads/Ad10.webp", "media/ads/Ad11.webp"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// İnternet varsa həmişə ən yeni fayl, yoxdursa keş (offline işləsin)
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  if (new URL(e.request.url).search.includes("_=")) return; // yenilənmə yoxlaması keşlənmir
  e.respondWith(
    fetch(e.request)
      .then((r) => {
        if (r.ok) { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); }
        return r;
      })
      .catch(() => caches.match(e.request))
  );
});
