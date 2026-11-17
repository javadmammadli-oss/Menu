/* Butik dizaynı: tək səhifə, 3:4. Bütün ölçülər orijinal dizaynın piksel koordinatlarıdır (1086×1448),
   ekrana --k vahidi ilə miqyaslanır. Mətnlər data.js-dəki D.boutique-dən gəlir (3 dildə). */
(function () {
  const D = window.MENU_DATA, B = D && D.boutique, host = document.getElementById("boutique");
  if (!B || !host) return;
  /* Dizayn seçimi: data.js-də design: "classic" (köhnə menyu) və ya "boutique" (yeni). Test üçün linkdə ?design=boutique / ?design=classic */
  const want = (location.search.match(/[?&]design=(classic|boutique)/) || [])[1] || D.design || "boutique";
  if (want !== "boutique") return;
  document.body.classList.add("bq-on");

  const LANGS = ["az", "ru", "en"];
  let lang = "az";
  let bro = 0;   // qolbaqlarda cari başlanğıc indeksi
  try { const l = localStorage.getItem("lang"); if (LANGS.includes(l)) lang = l; } catch (e) {}
  const L = (o) => (o == null ? "" : typeof o === "string" ? o : o[lang] || o.az || "");

  const S = (o) => Object.entries(o).map(([k, v]) => `--${k}:${v}`).join(";");
  const a = (x, y, w, h, cls, inner = "") => `<div class="a ${cls}" style="${S({ x, y, w, h })}">${inner}</div>`;
  const pic = (src) => (src ? `<img src="${src}" alt="" draggable="false">` : "");
  const IM = B.images || {};
  const LOGO = "<path fill-rule=\"evenodd\" d=\"M332.4,37.7v21.8c0,5.6,1.1,10,3.4,13.1c2.3,3.2,6,4.7,10.9,4.7c4,0,7-1.1,9.1-3.3v2.6h10.2V37.7h-10.2V59 c0,3.2-0.6,5.5-1.8,6.9c-1,1.2-2.6,1.9-4.8,1.9c-2.2,0-3.8-0.7-4.8-1.9c-1.2-1.5-1.8-3.8-1.8-7.1v-21H332.4z M258.9,67.1 c-0.8-1-1.2-2.1-1.2-3.6c0-3.2,1.9-4.8,5.9-4.8c3,0,5.4,0.5,7,1.5v4.9c-0.5,1-1.4,1.8-2.6,2.5c-1.4,0.7-2.9,1.1-4.4,1.1 C261.5,68.7,260,68.2,258.9,67.1 M181.4,42.6c-3.3,3.8-4.9,8.7-4.9,14.6c0,6.2,1.6,11,4.9,14.6c3.3,3.7,7.7,5.5,13.3,5.5 c2.6,0,5.2-0.5,7.7-1.5c2.6-1.2,4.7-2.7,6.2-4.7l-7.3-6c-1.5,1.8-3.7,2.7-6.6,2.7c-2.1,0-3.8-0.5-5.2-1.6c-1.6-1.4-2.6-3.3-2.7-5.8 h23.1l0.3-3.2c0-5.8-1.5-10.6-4.4-14.3c-3-4-7-6-12-6C188.8,36.9,184.7,38.8,181.4,42.6z M143.4,38.1c-1.6-0.8-3.7-1.2-6-1.2 c-3.6,0-6.5,1.1-8.5,3.4v-2.6h-10.2v38.9h10.2V55.3c0-3.2,0.5-5.5,1.5-6.9c1-1.2,2.6-1.9,4.8-1.9c2.1,0,3.7,0.7,4.7,1.9 c1,1.4,1.5,3.7,1.5,7.1v21h10.2V55.3c0-3.2,0.5-5.5,1.5-6.9c1-1.2,2.6-1.9,4.8-1.9c2.1,0,3.7,0.7,4.7,1.9c1,1.4,1.5,3.7,1.5,7.1v21 h10.2v-22c0-11.8-4.7-17.7-13.9-17.7c-2.9,0-5.5,0.5-7.6,1.5c-1.6,0.7-3.3,1.9-4.8,3.6C146.4,40.2,144.9,38.8,143.4,38.1 M252,53.9 c-3,2.3-4.5,5.5-4.5,9.6c0,4.4,1.5,7.8,4.5,10.4c2.6,2.2,5.9,3.3,9.9,3.3c3.7,0,6.6-1.1,8.7-3.3v2.6h10.3v-26 c0-4.3-1.5-7.7-4.4-10.2c-2.9-2.3-6.6-3.6-11.4-3.6c-3,0-5.6,0.4-8,1.1c-1.9,0.5-4.1,1.5-6.6,2.9l4,7.1c1.8-1,3.3-1.6,4.8-2.1 l5.8-0.5c1.8,0,3.3,0.4,4.3,1.4c0.8,1,1.2,2.1,1.2,3.6v1.9c-2.1-1.1-4.5-1.6-7.4-1.6C258.6,50.6,254.9,51.7,252,53.9z M200.1,52.8 h-13.2c0.1-2.1,0.8-3.7,1.9-4.9c1.1-1.4,2.6-2.1,4.4-2.1c2.1,0,3.8,0.7,5.1,2.2C199.4,49.2,200,50.7,200.1,52.8 M222.1,56.5 c0,7.6,2.2,11.3,6.6,11.3c2.6,0,4.7-1.1,6.3-3.3V49.8c-1.5-2.2-3.8-3.3-6.9-3.3C224.1,46.5,222.1,49.8,222.1,56.5z M226.9,36.9 c3.2,0,5.9,1.1,8.1,3.2v-2.3h10.2V70c0,5.9-0.8,10.4-2.3,13.3c-1.8,3.3-5.1,5.5-9.6,6.6c-2.9,1-6.7,1.2-11.7,1.1l-3-7.7h2.1 l6.3-0.5c3.2-0.5,5.2-1.5,6.5-2.7c1.1-1.2,1.6-3.2,1.6-5.9c-2.3,2.1-5.1,3.2-8.1,3.2c-4.5,0-8.1-1.6-10.7-4.8 c-2.9-3.7-4.4-8.9-4.4-15.8c0-5.9,1.4-10.7,4-14.2C218.4,38.8,222.1,36.9,226.9,36.9 M400.2,41.7c-2.5-3.2-6-4.8-10.9-4.8 c-4,0-7,1.1-9.1,3.4v-2.6h-10.3v38.9h10.3V55.3c0-3.2,0.6-5.5,1.7-6.9c1.1-1.2,2.7-1.9,4.9-1.9c2.2,0,3.8,0.7,4.8,1.9 c1.2,1.5,1.8,3.8,1.8,7.1v21h10.2v-22C403.6,48.9,402.5,44.7,400.2,41.7z M401.6,19.6c-1.2-1.2-2.7-1.8-4.4-1.8 c-1.6,0-3.2,0.5-4.4,1.8c-1.2,1.2-1.8,2.8-1.8,4.6c0,1.9,0.5,3.5,1.8,4.8c1.2,1.2,2.8,1.8,4.4,1.8c1.8,0,3.2-0.5,4.4-1.8 c1.2-1.2,1.9-2.8,1.9-4.8C403.6,22.3,402.9,20.8,401.6,19.6 M400.6,20.7c0.9,0.9,1.4,2.1,1.4,3.5c0,1.6-0.5,2.8-1.4,3.7 c-0.9,0.9-1.9,1.4-3.4,1.4c-1.2,0-2.5-0.5-3.4-1.4c-0.9-0.9-1.4-2.1-1.4-3.7c0-1.4,0.5-2.7,1.4-3.5c0.9-0.9,2.1-1.4,3.4-1.4 C398.6,19.2,399.7,19.8,400.6,20.7 M397.4,23.8h-1.2v-1.9h1.2c0.9,0,1.4,0.4,1.4,0.9C398.8,23.5,398.3,23.8,397.4,23.8 M394.7,20.8 v7.1h1.4v-3h0.9l1.8,3h1.4l-1.8-3c1.2-0.2,1.8-0.7,1.8-1.9c0-1.4-0.9-2.1-2.7-2.1H394.7z\"/><path fill-rule=\"evenodd\" d=\"M284.2,37.4c0,5.4,1.7,9.5,4.9,12.2c2.9,2.3,8.1,4.4,15.4,6.2c3.7,0.8,6.3,1.7,7.8,2.5 c1.2,0.7,1.9,1.7,1.9,2.7c0,1.4-0.6,2.3-1.7,2.9c-1,0.5-2.9,0.8-5.8,0.8c-2.6,0-5.5-0.6-8.8-1.8c-3.2-1.2-5.8-2.5-8-4l-7.7,12.4 c3.2,2.1,6.7,3.8,10.9,5.1c4.4,1.2,8.8,1.9,13.3,1.9c7.3,0,12.9-1.4,16.9-4.3c4.5-3.2,6.7-8,6.7-14.3c0-5.1-1.7-9.1-4.9-12 c-3.2-2.6-8.4-4.8-15.9-6.6c-3.7-0.8-6.2-1.5-7.4-2.2c-1.2-0.7-1.9-1.5-1.9-2.6c0-2.3,1.9-3.4,5.9-3.4c5.4,0,10.6,1.8,15.9,5.4 l7.7-12.5c-6.2-4.4-13.9-6.6-22.8-6.6c-6.9,0-12.4,1.6-16.5,4.9C286.3,27.5,284.2,31.9,284.2,37.4z\"/><path d=\"M78.4,87.6c-25.8,19.7-63.9,8.9-75.3-21.3c-0.9-2.5-2-5.4-2-8l32.8,32.8l3.6-5.7L12.8,60.6 c-0.9-0.8-1.6,0.9-2.4,0.3L0,44.6l0-0.4l0.5,0.1l34.3,34.2l0,0l11.1,11.1c0,0,0,0,0,0l0.7,0.7l-0.7-1l-3.5-5.1l-2.1-3l0.6-1.3 l1.8-3.7L21.4,55c-0.6-0.8-2,1-2.4,0.7L2.6,34c-0.3-0.2-0.2-1.7,0.3-1.5l41.2,41.1c0,0,0,0,0,0l13,13l0-0.1L46,72.3l2.3-3.7 l-1.6-1.5L29.4,49.8c-1-0.8-1.7,1.3-2.5,0.4l-20-25.4c-0.5-0.6-0.4-0.9,0.2-1.4l43.6,43.4l0.4,0.4l14.3,14.2l0,0L53.4,66.2l0,0 l-2-2.5c-0.2-0.7,2.4-3.2,1.9-4.2L37.9,44.1c-0.4-0.3-1.2,0.4-1.7,0.7c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0,0,0,0,0 c0,0,0,0,0,0c-0.1,0-0.2,0-0.2,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l-2.9-3.5l-8.4-10.1l-12-14.4 c-0.3-0.4-0.1-1.3,0.5-1.2l61.2,60.2l-17-21.1c-0.6-1.1,2.1-3,1.6-4c-1.8-1.2-11.7-12.5-12.6-12.4c-0.5,0.1-1.5,1.5-2.3,1L20.4,9.2 l0.7-0.4l60.3,60.5L62.1,46.3c-0.3-0.6,2.1-2.9,1.7-3.7l-9-9C53.7,33,53,35,52.2,34.1L28.6,4.6c-0.2-0.5,0.6-0.4,0.8-0.1 c11.5,11.4,22.9,22.9,34.3,34.4l0,0l0.2,0.2l10.2,10.3c1.2,1.2,2.4,2.4,3.6,3.6c1.4,1.4,2.8,2.9,4.3,4.3c1.4,1.4,2.8,2.7,4.3,4 L71.1,41.9l0,0c-1.1-1.3-2.1-2.7-3.1-4.1c-0.8-1.3,1.6-2.4,1-3.6l-6-6c-0.8-0.5-2,1.3-2.6,1L38.6,1.1c0.3-0.3,1-0.1,1.3,0.1 l49.3,49.4L72.9,29c-0.3-0.6,1.7-2,1.2-3c-0.1-0.2-2.9-3-3.1-3c-0.9-0.3-1.7,1.2-2.4,0.9L51.5,0h1.4l21.9,22l13.6,13.5l0.4,0.4 l0.4,0.4v0l0.4,0.4l-1-1.4l-9.4-13.1L78,20.7l2.1-3.7l-3.2,1.7L64.6,2.9c-0.1-0.3,0-0.4,0.3-0.3c0.8,0.2,2.5,1,3.3,1.4 C102.3,18.9,108,64.9,78.4,87.6\"/>";   // logo.svg-nin yolları (inline: mask/CORS/keş problemləri olmasın)
  const fit = (s, base, maxW, k = 0.47) => Math.min(base, Math.floor(maxW / (String(s).replace(/&amp;/g, "&").length * k)));   // yazı bloka sığmasa, ölçü avtomatik kiçilir
  const BOW = { x: 833, y: 78, w: 279, h: 282 };
  const tx = (s, x, y, fs, cls = "") => `<span class="t ${cls}" style="${S({ x, y, fs })}">${s}</span>`;      // x = sol kənar, y = şaquli mərkəz
  const rt = (s, x, y, fs, cls = "") => tx(s, x, y, fs, "r " + cls);
  const tc = (s, x, y, fs, cls = "") => tx(s, x, y, fs, "c " + cls);                                       // x = mərkəz
  const slot = (x, y, w, h, cls, ph, src) => `<div class="a ${cls} slot" style="${S({ x, y, w, h })};--ph:${ph}">${pic(src)}</div>`;   // şəkil yeri: şəkil verilməyibsə rəngli boş sahə                                          // x = sağ kənar
  const line = (x, y, w, h) => `<i class="a ln" style="${S({ x, y, w, h })}"></i>`;

  const svg = {
    chat: '<path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-8l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.4 2"/>',
    crown: '<path d="M3 8l4.2 4L12 5l4.8 7L21 8l-2 11H5L3 8z"/><path d="M5.5 19h13"/>',
    cup: '<path d="M6 4h12l-1.6 16H7.6L6 4z"/><path d="M6.6 9h10.8"/>',
    bag: '<path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
    drink: '<path d="M7 8h10l-1 12H8L7 8z"/><path d="M6 8h12"/><path d="M12.5 8V3.5l3-1"/><path d="M8 13h8"/>',
    icecream: '<path d="M7.5 11h9L12 22l-4.5-11z"/><path d="M7 11a5 5 0 0 1 10 0"/><path d="M12 4V2.8"/>',
    cake: '<path d="M4 14h16v5H4z"/><path d="M4 14l2-5h12l2 5"/><path d="M12 9V6"/><path d="M10 6h4"/>',
    caviar: '<ellipse cx="12" cy="11" rx="9" ry="3.4"/><path d="M3 11v4c0 1.9 4 3.4 9 3.4s9-1.5 9-3.4v-4"/><path d="M8 10.6h8"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1"/>',
    calendar: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/><path d="M12 12.4l.9 1.9 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3z"/>'
  };
  const ico = (name, x, y, w, h, cls = "") => `<svg class="a ic ${cls}" style="${S({ x, y, w, h })}" viewBox="0 0 24 24">${svg[name] || ""}</svg>`;

  function build() {
    const s = B.sessions, cr = B.creams;
    let h = "";

    /* ---- başlıq (vektor mətn; qolbaq fonun özündədir) ---- */
    h += `<svg class="a bqlogo" style="${S({ x: 378, y: 42, w: 330, h: 80 })}" viewBox="0 0 403.6 97.8" preserveAspectRatio="xMidYMid meet">${LOGO}</svg>`;   // logo.svg ichindən (vektor, maska yoxdur)   // logo.svg, yazı rəngində (maska)
    h += tc(L(B.studio), 543, 146, 18, "sub");
    h += a(BOW.x, BOW.y, BOW.w, BOW.h, "bow", pic("media/boutique/bow.webp"));   // lent (şəffaf şəkil), nümunədəki yerdə

    /* ---- 4 blok EYNİ ÖLÇÜDƏ: şəkil 320×249, şüşə 712×249 (dizayn koordinatı). Yalnız yuxarı kənar fərqlənir ---- */
    const TW = 320, BH = 249, GX = 350, GW = 712, TOP = [197, 465, 734, 1002];
    const TCX = 28 + TW / 2;   // blok mərkəzi: tile yazıları bloka görə ortalanır
    const tile = (n, ph, src) => slot(28, TOP[n], TW, BH, "tile" + (src ? " has" : ""), ph, src);
    const glass = (n) => a(GX, TOP[n], GW, BH, "glass");

    /* ---- 1. Solarium Sessions ---- */
    { const d = -8.5;
      h += tile(0, "linear-gradient(145deg,#b39a8b,#8d7466)", IM.solarium);
      { const C = TOP[0] + BH / 2, sn = L(B.tiles.solarium); h += ico("sun", TCX - 27, C - 62 - 27, 54, 54, "sun") + tc(sn, TCX, C + 2, fit(sn, 74, 270, 0.42), "script lt") + ico("sun", TCX - 27, C + 58 - 27, 54, 54, "sun"); }
      h += glass(0);
      h += tx(L(s.title), 388, 242 + d, 40, "h");
      const REAL = D.solarium && D.solarium[0] ? [5, 10, 15, 20].map((m) => { const p = D.solarium[0].prices.find((x) => x.minutes === m); return p ? [m, p.price + " AZN"] : null; }).filter(Boolean) : null;
      (REAL && REAL.length ? REAL : s.rows).forEach((r, i) => {
        const y = 294 + d + i * 41;
        h += tx(r[0] + " " + L(s.unit), 390, y, 25) + tx("—", 553, y, 25, "dim") + rt(r[1], 675, y, 25);
      });
      h += line(719, 275 + d, 1.4, 155);
      s.notes.forEach((n, i) => {
        const y = (i ? 397 : 300) + d;
        h += ico(n[0], 760, y - 18, 38, 36) + `<p class="note a" style="${S({ x: 815, y: y - 33, w: 215, h: 66 })}"><span>${L(n[1])}</span></p>`;
      });
    }

    h += `<button class="a hit" data-open="solarium" aria-label="Solarium" style="${S({ x: 28, y: 197, w: 1034, h: 249 })}"></button>`;
    h += `<span class="a go-arrow" style="${S({ x: 1010, y: 214, w: 34, h: 34 })}"><svg viewBox="0 0 24 24"><path d="M9.5 6.5L15 12l-5.5 5.5"/></svg></span>`;

    /* ---- 2. Packages & Memberships ---- */
    { const d = -7;
      h += tile(1, "linear-gradient(145deg,#b98560,#946146)", IM.packages);
      { const p = L(B.tiles.packages), C = TOP[1] + BH / 2; h += tc(p[0], TCX, C - 23, fit(p[0], 42, 270), "ser lt") + tc(p[1], TCX, C + 23, fit(p[1], 40, 270), "ser lt"); }
      h += glass(1);
      const py = [519, 584, 657];
      B.packages.forEach((p, i) => {
        const y = py[i] + d, sub = L(p.sub);
        if (p.icon) h += ico(p.icon, 391, y - 17, 37, 34);
        h += tx(L(p.name), p.icon ? 446 : 390, y, 25) + tx(p.price, 637, sub ? y - 6 : y, 24);
        if (sub) h += tx(sub, 637, y + 27, 17, "dim");
        h += `<span class="pill a" style="${S({ x: 742, y: y - 18, w: 200, h: 37 })}">${L(p.bonus)}</span>`;
      });
      h += line(390, 551 + d, 525, 1.2) + line(390, 620 + d, 525, 1.2);
      h += `<svg class="a heart" style="${S({ x: 982, y: 566 + d, w: 62, h: 68 })}" viewBox="0 0 60 66"><path d="M30 60C9 44 3 29 8 17 13 6 26 8 30 20 34 8 48 5 53 16 58 28 51 44 30 60z"/></svg>`;
    }

    /* ---- 3. Tanning Creams ---- */
    { const d = -8;
      h += tile(2, "linear-gradient(145deg,#cbb0a0,#a98b7c)", IM.creams);
      { const p = L(B.tiles.creams), C = TOP[2] + BH / 2; h += tc(p[0], TCX, C - 38.5, fit(p[0], 44, 270), "ser lt") + tc(p[1], TCX, C + 11.5, fit(p[1], 44, 270), "ser lt") + tc(B.tiles.brand, TCX, C + 48.5, fit(B.tiles.brand, 24, 270, 0.5), "rom lt"); }
      h += glass(2);
      cr.left.forEach((r, i) => { const y = 765 + d + i * 33.7; h += tx(r[0], 386, y, 20) + tx("—", 575, y, 20, "dim") + rt(r[1], 685, y, 20); });
      cr.right.forEach((r, i) => { const y = 762 + d + i * 29; h += tx(r[0], 732, y, 19) + tx("—", 936, y, 19, "dim") + rt(r[1], 1040, y, 19); });
      h += line(708, 748 + d, 1.4, 178);
      h += a(383, 940 + d, 447, 45, "chip");
      h += ico("cup", 403, 949 + d, 28, 28) + line(441, 951 + d, 1.3, 24);
      h += tx(cr.samples[0].replace("ml", L(B.ml)), 456, 963 + d, 20) + line(635, 951 + d, 1.3, 24) + tx(cr.samples[1].replace("ml", L(B.ml)), 670, 963 + d, 20);
    }

    /* ---- 4. Bracelets ---- */
    { const d = -8;
      h += tile(3, "linear-gradient(145deg,#c9b09e,#9d8374)", IM.lovers);
      { const sb = L(B.tiles.loversSub), C = TOP[3] + BH / 2; h += tc(B.tiles.lovers[0], TCX, C - 33, 44, "ser lt") + tc(B.tiles.lovers[1], TCX, C + 11, 44, "ser lt") + tc(sb, TCX, C + 45, fit(sb, 21, 280, 0.52), "rom lt sp"); }
      h += glass(3);
      const BR = IM.bracelets || [];
      /* qolbaqlar + ox bir qrup kimi şüşənin tam ortasında (üfüqi və şaquli); yazı qolbaqların altında mərkəzdə */
      const GAP = 8, AW = 30, hasArrow = BR.length > 4, rowW = 4 * 144 + 3 * 10, grpW = rowW + (hasArrow ? 2 * (GAP + AW) : 0);
      const gx = GX + (GW - grpW) / 2, ty = TOP[3] + (BH - (142 + 12 + 46)) / 2, tx0 = gx + (hasArrow ? GAP + AW : 0);
      const PH = "linear-gradient(160deg,#eadccf,#d9c5b6)", NB = BR.length;
      const items = hasArrow ? Array.from({ length: NB * 5 }, (_, i) => BR[i % NB]) : [0, 1, 2, 3].map((i) => BR[i] || "");
      h += `<div class="a brwin" style="${S({ x: tx0 - 8, y: ty - 12, w: rowW + 16, h: 142 + 34 })}"><div class="brtrack" style="--p:${hasArrow ? NB * 2 + bro : 0}">` +
        items.map((src) => `<div class="thumb slot" style="--ph:${PH}">${pic(src)}</div>`).join("") + `</div></div>`;
      if (hasArrow) {
        const ay = ty + 71 - AW / 2;
        h += `<button class="arrow a prev" data-step="-4" aria-label="Previous" style="${S({ x: gx, y: ay, w: AW, h: AW })}"><svg viewBox="0 0 24 24"><path d="M14.5 6.5L9 12l5.5 5.5"/></svg></button>`;
        h += `<button class="arrow a" data-step="4" aria-label="Next" style="${S({ x: tx0 + rowW + GAP, y: ay, w: AW, h: AW })}"><svg viewBox="0 0 24 24"><path d="M9.5 6.5L15 12l-5.5 5.5"/></svg></button>`;
      }
      h += tc(L(B.script), tx0 + rowW / 2, ty + 142 + 12 + 23, fit(L(B.script), 46, 300, 0.4), "script");
    }

    /* ---- xidmətlər (alt sıra) ---- */
    const sx = [[25, 205], [243, 147], [402, 153], [568, 154], [735, 153], [900, 162]];
    B.services.forEach((v, i) => {
      const [x, w] = sx[i], cx = x + w / 2;
      h += a(x, 1270, w, 142, "glass sv");
      h += ico(v[0], cx - 21, 1292, 42, 42);
      h += `<span class="svt a" style="${S({ x: x + 6, y: 1340, w: w - 12, h: 66 })}"><b>${L(v[1])}</b><small>${L(v[2])}</small></span>`;
    });

    /* ---- dil seçimi (sağ yuxarı) ---- */
    h += `<div class="langs a" style="${S({ x: 878, y: 38, w: 180, h: 30 })}">` +
      LANGS.map((l) => `<button class="lg${l === lang ? " on" : ""}" data-lang="${l}">${l.toUpperCase()}</button>`).join("") + `</div>`;

    return h + (/[?&]ref=1/.test(location.search) ? '<img id="bqref" src="media/boutique/ref.jpg" alt="">' : "") + `<span id="bqver">${D.version || ""}</span>`;
  }

  /* Fon yansıması bloklara düşməsin: bütün blokların yerində "deşik" olan maska (SVG, evenodd) */
  function shineMask(bq) {
    const open = bq.classList.contains("page-open");
    const holes = [...bq.querySelectorAll(".glass,.tile")].filter((el) => !(open && el.closest(".mg"))).map((el) => {
      const g = (n) => parseFloat(el.style.getPropertyValue("--" + n)), x = g("x"), y = g("y"), w = g("w"), h = g("h"), r = el.classList.contains("sv") ? 26 : 30;
      return `M${x + r} ${y}H${x + w - r}A${r} ${r} 0 0 1 ${x + w} ${y + r}V${y + h - r}A${r} ${r} 0 0 1 ${x + w - r} ${y + h}H${x + r}A${r} ${r} 0 0 1 ${x} ${y + h - r}V${y + r}A${r} ${r} 0 0 1 ${x + r} ${y}Z`;
    }).join("");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1086 1448" preserveAspectRatio="none"><path fill-rule="evenodd" d="M0 0H1086V1448H0Z${holes}"/></svg>`;
    const url = "url(\"data:image/svg+xml," + encodeURIComponent(svg) + "\")";
    const s = bq.querySelector("#bqshine").style;
    s.webkitMaskImage = url; s.maskImage = url;
  }

  /* ======================= SOLARIUM DAXİLİ SƏHİFƏ =======================
     Blokа basanda: əvvəl blokun şəkli işıqlanır, sonra səhifə bloku genişlənərək açılır (clip-path), məzmun pillə-pillə gəlir.
     Siyahı data.js-dəki D.solarium (Ayaqüstə / Uzanan) və D.packages (Vibra-nano)-dan götürülür. */
  let pageOpen = false, pageBusy = false;
  const BLOCK = { x: 28, y: 197, w: 1034, h: 249, r: 30 };   // basılan blokun dizayn koordinatı (şəkil + şüşə)

  function pageHTML(cls) {
    const s = B.sessions, SOL = D.solarium || [], pk = (D.packages || [])[0];
    let n = 0, h = `<div id="bqpage" class="pg ${cls}">`;
    const grp = (inner) => `<div class="pgrow" style="--n:${n++}">${inner}</div>`;
    h += grp(`<button class="a pgback" data-close="1" style="${S({ x: 28, y: 196, w: 150, h: 46 })}"><svg viewBox="0 0 24 24"><path d="M14.5 6.5L9 12l5.5 5.5"/></svg><span>${L(B.back)}</span></button>` + tc(L(s.title), 543, 219, 44, "pgt"));
    h += grp(a(28, 270, 1030, 992, "glass pgcard"));
    h += grp(SOL.slice(0, 2).map((c, ci) => tx(L(c.name), ci ? 566 : 70, 335, 26, "pghead up")).join(""));
    const rows = Math.max(...SOL.slice(0, 2).map((c) => c.prices.length), 0);
    for (let i = 0; i < rows; i++) {
      const y = 412 + i * 82;
      h += grp(SOL.slice(0, 2).map((c, ci) => {
        const p = c.prices[i]; if (!p) return "";
        const x0 = ci ? 566 : 70;
        return tx(p.minutes + " " + L(s.unit), x0, y, 30, "pgrw") + rt(p.price + " AZN", x0 + 450, y, 30, "pgrw") + (i < rows - 1 ? line(x0, y + 41, 450, 1.2) : "");
      }).join(""));
    }
    if (pk) h += grp(line(70, 1122, 946, 1.4) + tx(L(pk.name), 70, 1172, 30, "pgrw") + rt((pk.prefix || "") + pk.price + " AZN", 1016, 1172, 30, "pgrw"));
    h += grp(s.notes.map((nt, i) => {
      const x = i ? 566 : 70;
      return ico(nt[0], x, 1317, 38, 36) + `<p class="note a" style="${S({ x: x + 54, y: 1304, w: 410, h: 62 })}"><span>${L(nt[1])}</span></p>`;
    }).join(""));
    return h + "</div>";
  }
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  /* Əsas səhifənin elementlərini şaquli zolaqlara (başlıq, 4 blok, xidmətlər) qruplaşdır: hər zolaq ayrıca sürüşür, bir qat kimi yüngül */
  const BANDS = [0, 197, 456, 725, 993, 1262];
  function groupify(bq) {
    const groups = BANDS.map((_, i) => { const g = document.createElement("div"); g.className = "mg"; g.dataset.g = i; return g; });
    const fixed = document.createElement("div"); fixed.className = "msf"; fixed.style.cssText = "position:absolute;inset:0;pointer-events:none";   // logo + alt yazı: sürüşmür, hər iki ekranda sabit
    [...bq.children].forEach((el) => {
      if (el.id === "bqshine" || el.id === "bqpage" || el.id === "bqver" || el.classList.contains("langs")) return;
      if (el.classList.contains("bqlogo") || el.classList.contains("sub")) { fixed.appendChild(el); return; }
      const y = parseFloat(el.style.getPropertyValue("--y"));
      let gi = 0; if (!isNaN(y)) BANDS.forEach((s, i) => { if (y >= s) gi = i; });
      groups[gi].appendChild(el);
    });
    const ref = bq.querySelector(".langs") || null;
    groups.forEach((g) => bq.insertBefore(g, ref));
    bq.insertBefore(fixed, ref);
  }
  const EASE = "cubic-bezier(.65,.02,.25,1)";
  async function openSolarium() {
    if (pageOpen || pageBusy) return;
    pageBusy = true;
    const bq = document.getElementById("bq"), tile = bq.querySelector(".tile"), W = bq.clientWidth;
    const shine = bq.querySelector("#bqshine"); if (shine) shine.style.opacity = 0;   // keçid zamanı yansıma gizlədilir (köhnə blok kəsikləri görünməsin)
    if (tile) tile.classList.add("lit");                   // 1) tab üzərindəki tünd örtük azalır
    await wait(260);
    bq.insertAdjacentHTML("beforeend", pageHTML("go"));
    const pg = bq.querySelector("#bqpage"), groups = [...bq.querySelectorAll(".mg:not(.ms)")];
    pg.style.transform = "translateX(" + W + "px)";
    groups.forEach((g, i) => g.animate([{ transform: "translateX(0)" }, { transform: "translateX(" + -(W + 40) + "px)" }], { duration: 700, delay: i * 55, easing: EASE, fill: "forwards" }));   // 2) bütün tablar sola
    pg.style.opacity = 0;
    pg.animate([{ transform: "translateX(" + W + "px)", opacity: 0 }, { transform: "translateX(0)", opacity: 1, offset: .55 }, { transform: "translateX(0)", opacity: 1 }], { duration: 760, delay: 140, easing: EASE, fill: "forwards" });       // 3) siyahı sağdan sola
    await wait(140 + 760 + 80);
    pg.getAnimations().forEach((an) => an.cancel());
    groups.forEach((g) => g.getAnimations().forEach((an) => an.cancel()));
    pg.style.transform = ""; pg.style.opacity = "";
    bq.classList.add("page-open");                         // əsas səhifə gizlədilir (səhifə açıq qalır)
    shineMask(bq); if (shine) shine.style.opacity = "";    // yansıma indi yalnız siyahı kartından yan keçir
    pg.classList.remove("go"); pg.classList.add("open");
    if (tile) tile.classList.remove("lit");
    pageOpen = true; pageBusy = false;
  }
  async function closeSolarium(instant) {
    const bq = document.getElementById("bq"), pg = bq && bq.querySelector("#bqpage");
    if (!pg) { pageOpen = false; pageBusy = false; bq && bq.classList.remove("page-open"); return; }
    if (instant) { pg.remove(); bq.classList.remove("page-open"); shineMask(bq); pageOpen = false; pageBusy = false; return; }
    if (pageBusy) return;
    pageBusy = true;
    const W = bq.clientWidth, groups = [...bq.querySelectorAll(".mg:not(.ms)")], shine = bq.querySelector("#bqshine");
    if (shine) shine.style.opacity = 0;
    pg.classList.remove("open"); pg.classList.add("closing");
    bq.classList.remove("page-open");
    groups.forEach((g, i) => g.animate([{ transform: "translateX(" + -(W + 40) + "px)" }, { transform: "translateX(0)" }], { duration: 700, delay: 120 + (groups.length - 1 - i) * 45, easing: EASE, fill: "both" }));   // tablar sağdan yerinə qayıdır
    pg.animate([{ transform: "translateX(0)", opacity: 1 }, { transform: "translateX(" + W + "px)", opacity: 0 }], { duration: 700, easing: EASE, fill: "forwards" });                                                                  // siyahı sağa çəkilir
    await wait(120 + groups.length * 45 + 700 + 80);
    groups.forEach((g) => g.getAnimations().forEach((an) => an.cancel()));
    pg.remove();
    shineMask(bq); if (shine) shine.style.opacity = "";   // yansıma yenidən əsas blokların ətrafına
    pageOpen = false; pageBusy = false;
  }
  new MutationObserver(() => { if (document.body.classList.contains("ad-on") && pageOpen) closeSolarium(true); })
    .observe(document.body, { attributes: true, attributeFilter: ["class"] });

  function paint(animate) {
    let bq = document.getElementById("bq");
    if (!bq) { host.innerHTML = '<div id="bq"></div>'; bq = document.getElementById("bq"); }
    bq.dataset.lang = lang;
    document.documentElement.lang = lang;
    bq.innerHTML = "<div id=\"bqshine\"><i></i></div>" + build() + (pageOpen ? pageHTML("open") : "");
    groupify(bq);
    if (pageOpen) bq.classList.add("page-open");
    shineMask(bq);
    curP = null;
    if (animate) { bq.classList.remove("swap"); void bq.offsetWidth; bq.classList.add("swap"); }
  }

  /* ox düyməsi: növbəti 4 qolbaq (sona çatanda başa qayıdır), yumşaq keçidlə */
  const STEP = 154;                                      // bir qolbağın addımı (144 + 10), dizayn pikselində
  let curP = null, settleT = null;
  const kpx = () => document.getElementById("bq").getBoundingClientRect().width / 1086;
  function setP(tr, p, animate) {
    tr.style.transition = animate ? "" : "none";
    tr.style.setProperty("--p", p); curP = p;
    if (!animate) { void tr.offsetWidth; tr.style.transition = ""; }
  }
  function settle(tr, target) {                          // hədəfə yumşaq sürüş, sonra səssizcə 0..n aralığına qaytar (sonsuz dövr)
    const n = (IM.bracelets || []).length, base = n * 2;
    setP(tr, target, true);
    clearTimeout(settleT);
    settleT = setTimeout(() => { bro = ((target - base) % n + n) % n; setP(tr, base + bro, false); }, 900);
  }
  function livePos(tr) {                                 // animasiya gedərkən cari mövqe (düymə/toxunuş yarıda kəsə bilsin)
    const m = new DOMMatrix(getComputedStyle(tr).transform);
    return -m.m41 / (STEP * kpx());
  }
  function stepBracelets(d) {
    const tr = host.querySelector(".brtrack"); if (!tr) return;
    settle(tr, Math.round(curP == null ? livePos(tr) : curP) + d);
  }
  /* barmaq/siçan: sürüşdür, buraxanda ən yaxın şəklə otur (sürətli çəkmə daha uzağa aparır) */
  let drag = null;
  host.addEventListener("pointerdown", (e) => {
    const w = e.target.closest(".brwin"), tr = w && w.querySelector(".brtrack");
    if (!tr || (IM.bracelets || []).length <= 4) return;
    clearTimeout(settleT);
    const p0 = livePos(tr); setP(tr, p0, false);
    drag = { w, tr, x0: e.clientX, p0, pts: [[performance.now(), e.clientX]], id: e.pointerId };
    try { w.setPointerCapture(e.pointerId); } catch (err) {}
    w.classList.add("dragging");
  });
  host.addEventListener("pointermove", (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const p = drag.p0 - (e.clientX - drag.x0) / (STEP * kpx());
    drag.tr.style.transition = "none"; drag.tr.style.setProperty("--p", p); curP = p;
    drag.pts.push([performance.now(), e.clientX]); if (drag.pts.length > 6) drag.pts.shift();
  });
  const endDrag = (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const { w, tr, pts } = drag; drag = null; w.classList.remove("dragging");
    const a = pts[0], b = pts[pts.length - 1], dt = Math.max(1, b[0] - a[0]);
    const vel = -((b[1] - a[1]) / dt) * 1000 / (STEP * kpx());       // qolbaq/saniyə
    const target = Math.round(curP + Math.max(-4, Math.min(4, vel * 0.25)));
    tr.style.transition = "";
    settle(tr, target);
  };
  host.addEventListener("pointerup", endDrag);
  host.addEventListener("pointercancel", endDrag);
  BR_PRELOAD();
  function BR_PRELOAD() { (IM.bracelets || []).forEach((s) => { const i = new Image(); i.src = s; }); }

  host.addEventListener("click", (e) => {
    if (e.target.closest("[data-open]")) { openSolarium(); return; }
    if (e.target.closest("[data-close]")) { closeSolarium(); return; }
    const sb = e.target.closest("[data-step]"); if (sb) { stepBracelets(+sb.dataset.step); return; }
    const b = e.target.closest("[data-lang]");
    if (!b || b.dataset.lang === lang) return;
    lang = b.dataset.lang;
    try { localStorage.setItem("lang", lang); } catch (err) {}
    // gizli köhnə posterin dilini də eyniləşdir (reklam mətnləri üçün)
    const old = document.querySelector('#langs [data-lang="' + lang + '"]'); if (old) old.click();
    paint(true);
  });

  paint(false);
})();
