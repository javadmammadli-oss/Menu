(function () {
  const D = window.MENU_DATA;
  const LANGS = ["az", "ru", "en"];
  const $ = (id) => document.getElementById(id);
  const store = {
    get: (k, d) => { try { return localStorage.getItem(k) || d; } catch (e) { return d; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  let lang = store.get("lang", "az");

  const t = (o) => (typeof o === "string" ? o : o[lang] || o.az);
  const money = (n) => (Number.isInteger(n) ? n : n.toFixed(2).replace(/0$/, "")) + " " + D.currency;

  /* ---------- QİYMƏT SİYAHISI ---------- */
  function renderCover() {
    $("langs").innerHTML = LANGS
      .map((l) => `<button class="lang ${lang === l ? "on" : ""}" data-lang="${l}">${l.toUpperCase()}</button>`).join("");
    $("note").textContent = t(D.ui.note);
    $("cover-title").textContent = t(D.ui.title);
    const img = $("cover-img"), src = D.cover && D.cover.image;
    if (src) { if (img.getAttribute("src") !== src) img.src = src; img.hidden = false; } else img.hidden = true;
    document.documentElement.lang = lang;
  }

  const row = (name, sub, price) =>
    `<div class="r"><span class="rn">${name}${sub ? `<small>${sub}</small>` : ""}</span><i class="lead"></i><span class="rp">${price}</span></div>`;
  const sec = (title, rows, i) =>
    `<section class="sec" style="--i:${i}"><h3>${title}</h3>${rows}</section>`;

  function renderSheet() {
    let i = 0;
    const sol = D.solarium.map((s) =>
      sec(t(s.name), s.prices.map((p) => row(`${p.minutes} ${t(D.ui.min)}`, "", money(p.price))).join(""), i++)).join("");
    const packs = D.packages.length
      ? sec(t(D.ui.packages), D.packages.map((p) =>
          row(t(p.name) + (p.badge ? `<b class="badge">${p.badge}</b>` : ""), "", money(p.price))).join(""), i++) : "";
    const bar = D.drinkCategories.map((c) =>
      sec(t(c.name), D.drinks.filter((d) => d.cat === c.id).map((d) => row(t(d.name), d.size || "", money(d.price))).join(""), i++)).join("");
    const c = D.contact;
    const contact = c ? `<footer class="contact">${[c.address, c.phone, c.instagram].filter(Boolean).map((x) => `<span>${x}</span>`).join("")}</footer>` : "";
    return `<div class="sheet">
      <div class="col"><div class="grp">${t(D.ui.solarium)}</div>${sol}${packs}</div>
      <div class="col"><div class="grp">${t(D.ui.drinks)}</div>${bar}</div>
    </div>${contact}`;
  }

  function render() {
    renderCover();
    const v = $("view");
    v.innerHTML = renderSheet();
    v.scrollTop = 0;
    v.style.animation = "none"; void v.offsetWidth; v.style.animation = "";
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (b && b.dataset.lang) { lang = b.dataset.lang; store.set("lang", lang); render(); }
  });

  /* ---------- ADS ---------- */
  let adOn = false, adTimer = null, adIdx = 0;

  function buildSlides() {
    $("slides").innerHTML = D.ads.map((a) => {
      if (a.type === "image") return `<div class="slide"><img src="${a.src}" alt=""></div>`;
      if (a.type === "video") return `<div class="slide"><video src="${a.src}" muted playsinline loop preload="auto"></video></div>`;
      return `<div class="slide ${a.cls || ""}"><div class="txt"><h1>${t(a.title)}</h1><p>${t(a.text)}</p></div></div>`;
    }).join("");
    $("hint").textContent = t(D.ui.touch);
  }

  function showSlide(i) {
    const els = $("slides").children;
    for (let k = 0; k < els.length; k++) {
      const on = k === i;
      els[k].classList.toggle("on", on);
      const v = els[k].querySelector("video");
      if (v) { if (on) { v.currentTime = 0; v.play().catch(() => {}); } else v.pause(); }
    }
    adTimer = setTimeout(() => { adIdx = (adIdx + 1) % els.length; showSlide(adIdx); }, (D.ads[i].seconds || 8) * 1000);
  }

  function startAd() {
    if (adOn || !D.ads.length) return;
    adOn = true; adIdx = 0;
    buildSlides();
    $("ad").classList.remove("hidden");
    showSlide(0);
  }

  function stopAd() {
    adOn = false;
    clearTimeout(adTimer);
    $("ad").classList.add("hidden");
    $("slides").innerHTML = "";
    render();   // siyahı hər dəfə yuxarıdan açılır
  }

  /* ---------- IDLE ---------- */
  let last = Date.now();
  const touch = (e) => {
    last = Date.now();
    if (adOn) { e.preventDefault(); e.stopPropagation(); stopAd(); }
  };
  ["pointerdown", "touchstart", "keydown"].forEach((ev) =>
    document.addEventListener(ev, touch, { capture: true, passive: false }));
  // reklamdan çıxış toxunuşu menyudakı düyməyə "keçməsin"
  document.addEventListener("click", (e) => { if (adOn) { e.stopPropagation(); e.preventDefault(); } }, true);

  setInterval(() => {
    if (!adOn && Date.now() - last > D.idleSeconds * 1000) startAd();
    // yeni versiya tapılıbsa, müştəri 10 san toxunmayanda yenilə
    if (updatePending && Date.now() - last > 10000) location.reload();
  }, 1000);

  /* ---------- AUTO UPDATE ---------- */
  const WATCH = ["index.html", "data.js", "app.js", "style.css", "logo.svg"];
  let version = null, updatePending = false;
  async function checkUpdate() {
    try {
      // 1-ci yoxlama: yüklənmiş (keşdəki) versiya = baza. Sonrakılar: serverdən məcburi təzə nüsxə
      // ("reload" brauzer keşini də yeniləyir, ona görə səhifə yenilənəndə köhnə fayl gəlmir)
      const mode = version === null ? "default" : "reload";
      const parts = await Promise.all(WATCH.map((f) =>
        fetch(f, { cache: mode }).then((r) => (r.ok ? r.text() : Promise.reject()))));
      const v = parts.join("\u0000");
      if (version === null) version = v;
      else if (v !== version) updatePending = true;
      showDebug("OK");
    } catch (e) { showDebug("internet yoxdur"); }
  }
  // test rejimi: linkin sonuna ?debug=1 əlavə et → altda son yoxlama saatı görünür
  const DEBUG = /[?&]debug=1/.test(location.search);
  function showDebug(state) {
    if (!DEBUG) return;
    const d = new Date(), p = (n) => String(n).padStart(2, "0");
    $("note").textContent = "Son yoxlama: " + p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds()) +
      " · " + state + (updatePending ? " · YENİ VERSİYA TAPILDI" : "") + " · hər 60 san";
  }
  checkUpdate();
  setInterval(checkUpdate, 60 * 1000);

  /* ---------- ALWAYS ON ---------- */
  let wl = null;
  async function keepAwake() {
    try { if ("wakeLock" in navigator) wl = await navigator.wakeLock.request("screen"); } catch (e) {}
  }
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") keepAwake(); });
  keepAwake();

  const mins = (s) => { const [h, m] = s.split(":").map(Number); return h * 60 + m; };
  function inRange(now, from, to) { return from <= to ? now >= from && now < to : now >= from || now < to; }
  let reloaded = false;
  setInterval(() => {
    const d = new Date(), now = d.getHours() * 60 + d.getMinutes();
    $("dim").style.opacity = D.night && inRange(now, mins(D.night.from), mins(D.night.to)) ? D.night.dim : 0;
    if (now === mins(D.reloadAt) && !reloaded) { reloaded = true; location.reload(); }
    if (now !== mins(D.reloadAt)) reloaded = false;
  }, 20000);

  // kontekst menyusunu və uzun basmanı blokla
  document.addEventListener("contextmenu", (e) => e.preventDefault());

  if (D.banner) {
    const p = (n) => String(n).padStart(2, "0"), d = new Date();
    const b = document.createElement("div");
    b.id = "banner";
    b.textContent = "✓ " + t(D.banner.text) + "  ·  push: " + D.banner.pushedAt +
      "  ·  tablet: " + p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds());
    document.body.appendChild(b);
  }

  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});

  render();
})();
