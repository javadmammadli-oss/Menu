(function () {
  const D = window.MENU_DATA;
  const LANGS = ["az", "ru", "en"];
  const $ = (id) => document.getElementById(id);
  const store = {
    get: (k, d) => { try { return localStorage.getItem(k) || d; } catch (e) { return d; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  let lang = store.get("lang", "az");
  let tab = "solarium";
  let cat = D.drinkCategories[0].id;

  const t = (o) => (typeof o === "string" ? o : o[lang] || o.az);
  const money = (n) => (Number.isInteger(n) ? n : n.toFixed(2).replace(/0$/, "")) + " " + D.currency;

  /* ---------- MENU ---------- */
  function renderHeader() {
    $("tabs").innerHTML = ["solarium", "drinks"]
      .map((k) => `<button class="tab ${tab === k ? "on" : ""}" data-tab="${k}">${t(D.ui[k])}</button>`).join("");
    $("langs").innerHTML = LANGS
      .map((l) => `<button class="lang ${lang === l ? "on" : ""}" data-lang="${l}">${l.toUpperCase()}</button>`).join("");
    $("note").textContent = t(D.ui.note);
    document.documentElement.lang = lang;
  }

  function renderSolarium() {
    const cards = D.solarium.map((s) => `
      <div class="card">
        <h2>${t(s.name)}</h2><p>${t(s.desc)}</p>
        ${s.prices.map((p) => `<div class="row"><span class="t">${p.minutes} <small>${t(D.ui.min)}</small></span><span class="price">${money(p.price)}</span></div>`).join("")}
      </div>`).join("");
    const packs = D.packages.length
      ? `<div class="pk">${D.packages.map((p) => `<div class="pack"><span>${t(p.name)}${p.badge ? `<span class="badge">${p.badge}</span>` : ""}</span><span class="price">${money(p.price)}</span></div>`).join("")}</div>` : "";
    return `<div class="cols">${cards}</div>${packs}`;
  }

  function renderDrinks() {
    const chips = D.drinkCategories
      .map((c) => `<button class="chip ${cat === c.id ? "on" : ""}" data-cat="${c.id}">${t(c.name)}</button>`).join("");
    const items = D.drinks.filter((d) => d.cat === cat).map((d) => `
      <div class="item"><div class="em">${d.emoji || "🥤"}</div><div class="nm">${t(d.name)}</div>
      <div class="sz">${d.size || ""}</div><div class="price">${money(d.price)}</div></div>`).join("");
    return `<div class="chips">${chips}</div><div class="grid">${items}</div>`;
  }

  function render() {
    renderHeader();
    const v = $("view");
    v.innerHTML = tab === "solarium" ? renderSolarium() : renderDrinks();
    v.style.animation = "none"; void v.offsetWidth; v.style.animation = "";
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.tab) { tab = b.dataset.tab; render(); }
    else if (b.dataset.lang) { lang = b.dataset.lang; store.set("lang", lang); render(); }
    else if (b.dataset.cat) { cat = b.dataset.cat; render(); }
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
    tab = "solarium"; cat = D.drinkCategories[0].id;   // menyu hər dəfə əvvəldən açılır
    render();
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
      const parts = await Promise.all(WATCH.map((f) =>
        fetch(f + "?_=" + Date.now(), { cache: "no-store" }).then((r) => (r.ok ? r.text() : Promise.reject()))));
      const v = parts.join("\u0000");
      if (version === null) version = v;
      else if (v !== version) updatePending = true;
    } catch (e) { /* internet yoxdur — növbəti dəfə yoxla */ }
  }
  checkUpdate();
  setInterval(checkUpdate, 5 * 60 * 1000);

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

  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});

  render();
})();
