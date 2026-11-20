(function () {
  const D = window.MENU_DATA;
  const LANGS = ["az", "ru", "en"];
  const $ = (id) => document.getElementById(id);
  const store = {
    get: (k, d) => { try { return localStorage.getItem(k) || d; } catch (e) { return d; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  let lang = store.get("lang", "az");

  // versiya nömrəsi (data.js-dəki version): hər push-dan sonra artır, tabletin yeniləndiyini göstərir
  $("ver").textContent = D.version || "";

  const t = (o) => (typeof o === "string" ? o : o[lang] || o.az);
  const money = (n) => (Number.isInteger(n) ? n : n.toFixed(2).replace(/0$/, "")) + " " + D.currency;

  /* ---------- QİYMƏT SİYAHISI ---------- */
  const ic = {
    pin: '<svg viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    tel: '<svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
    ig: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".6"/></svg>'
  };
  let view = store.get("view", "solarium");   // "solarium" | "bar"
  const TITLES = {
    solarium: { az: ["Qiymət", "Siyahısı"], ru: ["Прайс", "Лист"], en: ["Price", "List"] },
    bar:      { az: ["Bar", "Menyusu"],     ru: ["Бар", "Меню"],    en: ["Bar", "Menu"] },
    creams:   { az: ["Solarium", "Kremləri"], ru: ["Кремы для", "солярия"], en: ["Tanning", "Creams"] },
    subs:     { az: ["Abunəlik", "Kartları"], ru: ["Клубные", "карты"], en: ["Membership", "Cards"] }
  };
  const TABS = [["solarium", "solarium"], ["bar", "drinks"], ["creams", "creams"]];
  if (D.subscriptions) TABS.push(["subs", "subs"]);   // [view, D.ui açarı]

  const row = (name, sub, price) =>
    `<div class="row"><div class="n">${name}${sub ? `<small>${sub}</small>` : ""}</div><div class="p">${price}</div></div>`;

  function renderSolarium() {
    const cols = D.solarium.map((s) =>
      `<div class="colx"><div class="grp">${t(s.name)}</div>` +
      s.prices.map((p) => row(`${p.minutes} ${t(D.ui.min)}`, "", money(p.price))).join("") + `</div>`).join("");
    let h = `<div class="cols">${cols}</div>`;
    if (D.packages.length) {
      h += `<div class="extras">` +
        D.packages.map((p) => row(t(p.name) + (p.badge ? `<span class="badge">${p.badge}</span>` : ""), "", (p.prefix || "") + money(p.price))).join("") + `</div>`;
    }
    return h;
  }

  // "Bax" düyməsi: adın yanında, basanda afişa tam ekran açılır
  const EYE = '<svg viewBox="0 0 24 24"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';
  const pvBtn = (src) => `<button class="pv" data-pv="${src}">${EYE}<span>${t(D.ui.preview)}</span></button>`;

  // bar: tək sütun, data.js-dəki sıra ilə
  function renderBar() {
    const price = (d) => (d.free ? `<span class="free">${t(D.ui.free)}</span>` : d.price == null ? "—" : money(d.price));
    return `<div class="cols bar"><div class="colx">` +
      D.drinks.map((d) => row(t(d.name) + (d.preview ? pvBtn(d.preview) : ""), d.size || "", price(d))).join("") + `</div></div>`;
  }
  // kremlər: dairədə şəkil + ad; basanda məlumat pəncərəsi açılır
  function renderCreams() {
    return `<div class="creams">` + (D.creams || []).map((c, i) =>
      `<button class="cr-item" data-cr="${i}"><span class="cr-c" style="background-image:url('${c.img}');background-position:50% ${c.pos}%"></span><span class="cr-n">${c.name}</span><small>${c.brand}</small></button>`).join("") + `</div>`;
  }
  // abunəliklər: yuxarıda megaSun kartı, altında abonement növləri
  const CROWN = '<svg viewBox="0 0 24 24"><path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5z"/></svg>';
  function renderSubs() {
    const S = D.subscriptions;
    const card = `<div class="mcard-wrap"><div class="mcard">` +
      `<img class="ms-sun" src="media/abone/sun.svg" alt=""><img class="ms-word" src="media/abone/word.svg" alt="megaSun">` +
      `<span class="ms-no">${(S.card && S.card.number) || ""}</span><i class="ms-shine"></i></div></div>`;
    const plans = S.plans.map((p) =>
      `<div class="row sub-row${p.vip ? " vip" : ""}"><div class="n">${p.vip ? `<span class="crown">${CROWN}</span>` : ""}${t(p.name)}` +
      `${p.sub ? `<small>${t(p.sub)}</small>` : ""}</div>` +
      `<div class="p">${money(p.price)}</div>` +
      `<div class="b">${p.bonus ? `+${money(p.bonus)}<small>${t(S.bonus)}</small>` : ""}</div></div>`).join("");
    const notes = (S.notes || []).map((n) => `<p class="sub-note">${t(n)}</p>`).join("");
    return `<div class="subs">${card}<div class="sub-list">${plans}</div>${notes}</div>`;
  }
  // aktiv tab-ın altındakı ağ lövhə: düymənin real ölçüsü və yerinə görə (tab-ların eni fərqli ola bilər)
  function placeThumb(i) {
    const tabs = $("tabs"), btns = tabs.querySelectorAll(".tab"), th = tabs.querySelector(".thumb");
    if (!th || !btns[i]) return;
    th.style.width = btns[i].offsetWidth + "px";
    th.style.transform = `translateX(${btns[i].offsetLeft - btns[0].offsetLeft}px)`;
  }
  window.addEventListener("resize", () => placeThumb(TABS.findIndex(([v]) => v === view)));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => placeThumb(TABS.findIndex(([v]) => v === view)));

  function render() {
    $("langs").innerHTML = LANGS
      .map((l) => `<button class="lang ${lang === l ? "on" : ""}" data-lang="${l}">${l.toUpperCase()}</button>`).join("");
    const T = (TITLES[view] || TITLES.solarium)[lang] || TITLES.solarium.az;
    $("t1").textContent = T[0]; $("t2").textContent = T[1];
    // tab-lar bir dəfə qurulur (lövhənin sürüşmə animasiyası kəsilməsin deyə yenidən yaradılmır)
    const tabs = $("tabs");
    if (!tabs.children.length) {
      tabs.dataset.n = String(TABS.length);
      tabs.innerHTML = `<i class="thumb"></i>` + TABS.map(([v]) => `<button class="tab" data-view="${v}"></button>`).join("");
    }
    tabs.dataset.on = String(TABS.findIndex(([v]) => v === view));
    tabs.querySelectorAll(".tab").forEach((b, i) => {
      b.textContent = t(D.ui[TABS[i][1]]);
      b.classList.toggle("on", b.dataset.view === view);
    });
    placeThumb(TABS.findIndex(([v]) => v === view));
    $("note").textContent = t(D.ui.note);
    const c = D.contact || {};
    $("contact").innerHTML = [["pin", c.address], ["tel", c.phone], ["ig", c.instagram]]
      .filter((x) => x[1]).map((x) => `<span>${ic[x[0]]}${x[1]}</span>`).join("");
    $("view").innerHTML = view === "bar" ? renderBar() : view === "creams" ? renderCreams() : view === "subs" && D.subscriptions ? renderSubs() : renderSolarium();
    document.documentElement.lang = lang;
  }

  /* ---------- KEÇİD ANİMASİYASI (dil və ya Solarium/Bar): köhnə mətn yumşaq çıxır, yenisi pillə-pillə gəlir ---------- */
  const FX = "#t1,#t2,#note,.grp,.row";
  let swapT = null, inT = null;
  function animateIn() {
    const poster = $("poster");
    poster.classList.remove("in");
    // başlıqlar əvvəl, sonra iki sütun EYNİ VAXTDA yuxarıdan aşağı pillə-pillə, ən axırda alt qeyd
    const d = (sel, v) => { const el = poster.querySelector(sel); if (el) el.style.setProperty("--d", v); };
    d("#t1", 0); d("#t2", 1);
    d(".tabs", 2);
    poster.querySelectorAll(".creams .cr-item").forEach((el, i) => el.style.setProperty("--d", 4 + i * 2));
    poster.querySelectorAll(".colx").forEach((col) =>
      col.querySelectorAll(".grp,.row").forEach((el, i) => el.style.setProperty("--d", 4 + i)));
    d(".mcard-wrap", 3);
    poster.querySelectorAll(".sub-row").forEach((el, i) => el.style.setProperty("--d", 7 + i * 2));
    poster.querySelectorAll(".sub-note").forEach((el) => el.style.setProperty("--d", 14));
    poster.querySelectorAll(".extras .row").forEach((el) => el.style.setProperty("--d", 15));
    d("#note", 16);
    void poster.offsetWidth;
    poster.classList.add("in");
    clearTimeout(inT);
    inT = setTimeout(() => poster.classList.remove("in", "tabs-too"), 2400);
  }
  function swapContent(change, withTabs) {
    const poster = $("poster");
    poster.classList.remove("in");
    poster.classList.toggle("tabs-too", !!withTabs);
    poster.classList.add("out");
    clearTimeout(swapT);
    swapT = setTimeout(() => { change(); render(); poster.classList.remove("out"); animateIn(); }, 280);
  }
  function swapLang(l) {
    if (l === lang) return;
    document.querySelectorAll(".lang").forEach((b) => b.classList.toggle("on", b.dataset.lang === l));
    swapContent(() => { lang = l; store.set("lang", l); }, true);
  }
  function swapView(v) {
    if (v === view) return;
    $("tabs").dataset.on = String(TABS.findIndex(([x]) => x === v));
    placeThumb(TABS.findIndex(([x]) => x === v));   // lövhə dərhal sürüşməyə başlayır
    document.querySelectorAll(".tab").forEach((b) => b.classList.toggle("on", b.dataset.view === v));
    swapContent(() => { view = v; store.set("view", v); }, false);
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.cr) openCream(+b.dataset.cr);
    else if (b.id === "crclose") closeCream();
    else if (b.dataset.pv) openPreview(b.dataset.pv);
    else if (b.id === "pvclose") closePreview();
    else if (b.dataset.lang) swapLang(b.dataset.lang);
    else if (b.dataset.view) swapView(b.dataset.view);
  });
  /* ---------- AFİŞA ÖNİZLƏMƏ (Bar → "Bax") ---------- */
  function openPreview(src) {
    const box = $("pv");
    $("pvimg").src = src;
    $("pvbg").style.backgroundImage = `url('${src}')`;
    box.classList.remove("hidden");
    void box.offsetWidth;
    box.classList.add("show");
  }
  function closePreview() {
    const box = $("pv");
    if (!box || box.classList.contains("hidden")) return;
    box.classList.remove("show");
    setTimeout(() => { if (!box.classList.contains("show")) box.classList.add("hidden"); }, 300);
  }
  /* ---------- KREM MƏLUMATI ---------- */
  function openCream(i) {
    const c = (D.creams || [])[i]; if (!c) return;
    $("crimg").src = c.img;
    $("crbg").style.backgroundImage = `url('${c.img}')`;
    $("crinfo").innerHTML = `<div class="crbrand">${c.brand}</div><h2 class="crname">${c.name}</h2><div class="crtype">${t(c.type)}</div>` +
      `<span class="crvol">${c.vol}</span><p class="crdesc">${t(c.desc)}</p><ul class="crfeats">${(c.feats[lang] || c.feats.az).map((f) => `<li>${f}</li>`).join("")}</ul>`;
    const box = $("cr");
    box.classList.remove("hidden");
    void box.offsetWidth;
    box.classList.add("show");
  }
  function closeCream() {
    const box = $("cr");
    if (!box || box.classList.contains("hidden")) return;
    box.classList.remove("show");
    setTimeout(() => { if (!box.classList.contains("show")) box.classList.add("hidden"); }, 300);
  }
  $("cr").addEventListener("click", (e) => { if (!e.target.closest(".crinfo,.crimg")) closeCream(); });
  $("pv").addEventListener("click", closePreview);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closePreview(); closeCream(); } });
  /* ---------- ADS ---------- */
  let adOn = false, adTimer = null, adIdx = 0;

  function buildSlides() {
    $("slides").innerHTML = D.ads.map((a) => {
      if (a.type === "image") return `<div class="slide"><img src="${a.src}" alt=""></div>`;
      if (a.type === "video") return `<div class="slide"><video src="${a.src}" muted playsinline loop preload="auto"></video></div>`;
      if (a.type === "poster") {
        // hazır dizayn edilmiş afişa (üstünə yazı çıxmır) + göstərilən yerlərdə növbə ilə işıq vurğusu
        const glows = (a.glows || []).map((g, n) =>
          `<i class="glow" style="--gx:${g[0]}%;--gy:${g[1]}%;--gw:${g[2]}%;--gh:${g[3]}%;--gi:${n}"></i>`).join("");
        return `<div class="slide poster"><div class="pbg" style="background-image:url('${a.src}')"></div><div class="pbox" style="--arn:${a.ratio || 0.5625}">` +
          `<img src="${a.src}" alt="">${glows}<i class="psheen"></i></div></div>`;
      }
      if (a.type === "photo") {
        // foto + yavaş zoom (Ken Burns) + söz-söz gələn başlıq + işıq keçidi + irəliləyiş xətti
        const words = t(a.title).split(" ").map((w, n) => `<span class="w" style="--i:${n}">${w}</span>`).join(" ");
        // fit:"frame" — kvadrat/uyğunsuz nisbətli məhsul şəkli: bulanıq fon + ortada çərçivəli şəkil
        const frame = a.fit === "frame" ? `<div class="frm"><img src="${a.src}" alt=""></div>` : "";
        return `<div class="slide photo${a.fit === "frame" ? " frame" : ""} kb-${a.kb || "a"}${a.pos ? " cap-" + a.pos : ""}"><div class="ph" style="background-image:url('${a.src}')"></div>` +
          `<i class="shade"></i>${frame}<i class="sheen"></i><img class="ad-logo" src="logo.svg" alt="">` +
          `<div class="cap">${a.eyebrow ? `<small>${t(a.eyebrow)}</small>` : ""}<h1>${words}</h1><p>${t(a.text)}</p></div>` +
          `<i class="prog" style="--s:${a.seconds || 8}s"></i></div>`;
      }
      return `<div class="slide ${a.cls || ""}"><div class="txt"><h1>${t(a.title)}</h1><p>${t(a.text)}</p></div></div>`;
    }).join("");
    $("hint").textContent = t(D.ui.touch);
  }

  function showSlide(i) {
    const els = $("slides").children;
    const cnt = $("adcount"); if (cnt) cnt.textContent = (i + 1) + " / " + els.length;
    for (let k = 0; k < els.length; k++) {
      const on = k === i;
      // köhnə slayd solarkən animasiyası sıçramasın deyə 1.4 san "out" saxlanılır
      if (!on && els[k].classList.contains("on")) {
        els[k].classList.add("out");
        setTimeout((el) => el.classList.remove("out"), 1400, els[k]);
      }
      if (on) els[k].classList.remove("out");
      els[k].classList.toggle("on", on);
      const v = els[k].querySelector("video");
      if (v) { if (on) { v.currentTime = 0; v.play().catch(() => {}); } else v.pause(); }
    }
    adTimer = setTimeout(() => { adIdx = (adIdx + 1) % els.length; showSlide(adIdx); }, (D.ads[i].seconds || 8) * 1000);
  }

  function startAd() {
    if (adOn || !D.ads.length) return;
    adOn = true; adIdx = 0;
    closePreview(); closeCream();
    document.body.classList.add("ad-on");   // reklam açıqkən menyu animasiyaları dayanır (enerji qənaəti)
    buildSlides();
    $("ad").classList.remove("hidden");
    showSlide(0);
  }

  function stopAd() {
    adOn = false;
    clearTimeout(adTimer);
    $("ad").classList.add("hidden");
    $("slides").innerHTML = "";
    document.body.classList.remove("ad-on");
    view = "solarium"; store.set("view", view);   // reklamdan sonra həmişə qiymət siyahısı açılır
    render();   // siyahı hər dəfə yuxarıdan açılır
    animateIn();
  }

  /* ---------- IDLE ---------- */
  let last = Date.now();
  const touch = (e) => {
    last = Date.now();
    if (adOn && e.target.closest && e.target.closest(".adnav")) return;   // test düymələri reklamı bağlamasın
    if (adOn) { e.preventDefault(); e.stopPropagation(); stopAd(); }
  };
  ["pointerdown", "touchstart", "keydown"].forEach((ev) =>
    document.addEventListener(ev, touch, { capture: true, passive: false }));
  // reklamdan çıxış toxunuşu menyudakı düyməyə "keçməsin"
  document.addEventListener("click", (e) => {
    if (!adOn) return;
    e.stopPropagation(); e.preventDefault();
    const nb = e.target.closest && e.target.closest(".adnav");
    if (nb) navAd(nb.dataset.d);
  }, true);

  /* TEST: reklam slaydları arasında keçid (◀ ▶ ✕). testButton: false olanda görünmür */
  function navAd(d) {
    if (d === "x") { stopAd(); return; }
    const n = $("slides").children.length;
    if (!n) return;
    clearTimeout(adTimer);
    adIdx = (adIdx + Number(d) + n) % n;
    showSlide(adIdx);
  }
  if (!D.testButton) { const nav = $("adnav"); if (nav) nav.remove(); }

  setInterval(() => {
    if (!adOn && Date.now() - last > D.idleSeconds * 1000) startAd();
    // yeni versiya tapılıbsa, müştəri 10 san toxunmayanda yenilə
    if (updatePending && Date.now() - last > 10000) location.reload();
  }, 1000);

  /* ---------- AUTO UPDATE ---------- */
  const WATCH = ["index.html", "data.js", "app.js", "style.css", "logo.svg", "boutique.js", "boutique.css"];
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
  document.addEventListener("contextmenu", (e) => { if (!/[?&]inspect=1/.test(location.search)) e.preventDefault(); });   // kioskda sağ klik bağlıdır; inspect üçün ?inspect=1

  /* TEST DÜYMƏSİ: reklamı dərhal göstərir. Söndürmək üçün data.js-də testButton: false */
  if (D.testButton) {
    const tb = document.createElement("button");
    tb.id = "testad";
    tb.textContent = "▶ Reklam";
    tb.addEventListener("click", (e) => { e.stopPropagation(); startAd(); });
    document.body.appendChild(tb);
  }

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
  animateIn();
})();
