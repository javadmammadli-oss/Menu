/* Butik dizaynı: tək səhifə, 3:4. Bütün ölçülər orijinal dizaynın piksel koordinatlarıdır (1086×1448),
   ekrana --k vahidi ilə miqyaslanır. Mətnlər data.js-dəki D.boutique-dən gəlir (3 dildə). */
(function () {
  const D = window.MENU_DATA, B = D && D.boutique, host = document.getElementById("boutique");
  if (!B || !host) return;
  document.body.classList.add("bq-on");

  const LANGS = ["az", "ru", "en"];
  let lang = "az";
  try { const l = localStorage.getItem("lang"); if (LANGS.includes(l)) lang = l; } catch (e) {}
  const L = (o) => (o == null ? "" : typeof o === "string" ? o : o[lang] || o.az || "");

  const S = (o) => Object.entries(o).map(([k, v]) => `--${k}:${v}`).join(";");
  const a = (x, y, w, h, cls, inner = "") => `<div class="a ${cls}" style="${S({ x, y, w, h })}">${inner}</div>`;
  const img = (src) => `<img src="media/boutique/${src}.jpg" alt="" draggable="false">`;
  const tx = (s, x, y, fs, cls = "") => `<span class="t ${cls}" style="${S({ x, y, fs })}">${s}</span>`;      // x = sol kənar, y = şaquli mərkəz
  const rt = (s, x, y, fs, cls = "") => tx(s, x, y, fs, "r " + cls);                                          // x = sağ kənar
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
    calendar: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/><path d="M12 12.4l.9 1.9 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3z"/>'
  };
  const ico = (name, x, y, w, h) => `<svg class="a ic" style="${S({ x, y, w, h })}" viewBox="0 0 24 24">${svg[name] || ""}</svg>`;

  function build() {
    const s = B.sessions, cr = B.creams;
    let h = "";

    /* ---- başlıq (şəkil: loqo yazısı, qolbaq, bant) ---- */
    h += a(0, 0, 1086, 196, "hdr", img("header"));

    /* ---- 1. Solarium Sessions ---- */
    h += a(28, 197, 320, 263, "tile", img("tile-solarium"));
    h += a(350, 200, 712, 260, "glass");
    h += tx(L(s.title), 388, 242, 40, "h");
    s.rows.forEach((r, i) => {
      const y = 294 + i * 41;
      h += tx(r[0] + " " + L(s.unit), 390, y, 25) + tx("—", 553, y, 25, "dim") + rt(r[1], 675, y, 25);
    });
    h += line(719, 275, 1.4, 155);
    s.notes.forEach((n, i) => {
      const y = i ? 397 : 300;
      h += ico(n[0], 760, y - 18, 38, 36) + `<p class="note a" style="${S({ x: 815, y: y - 33, w: 215, h: 66 })}"><span>${L(n[1])}</span></p>`;
    });
    h += a(985, 196, 101, 160, "tail", img("tail"));

    /* ---- 2. Packages & Memberships ---- */
    h += a(28, 480, 320, 229, "tile", img("tile-packages"));
    h += a(350, 483, 712, 229, "glass");
    const py = [519, 584, 657];
    B.packages.forEach((p, i) => {
      const y = py[i], sub = L(p.sub);
      if (p.icon) h += ico(p.icon, 391, y - 17, 37, 34);
      h += tx(L(p.name), p.icon ? 446 : 390, y, 25) + tx(p.price, 637, sub ? y - 6 : y, 24);
      if (sub) h += tx(sub, 637, y + 27, 17, "dim");
      h += `<span class="pill a" style="${S({ x: 742, y: y - 18, w: 200, h: 37 })}">${L(p.bonus)}</span>`;
    });
    h += line(390, 551, 525, 1.2) + line(390, 620, 525, 1.2);
    h += `<svg class="a heart" style="${S({ x: 982, y: 566, w: 62, h: 68 })}" viewBox="0 0 60 66"><path d="M30 60C9 44 3 29 8 17 13 6 26 8 30 20 34 8 48 5 53 16 58 28 51 44 30 60z"/></svg>`;

    /* ---- 3. Tanning Creams ---- */
    h += a(28, 732, 320, 267, "tile", img("tile-creams"));
    h += a(350, 735, 712, 263, "glass");
    cr.left.forEach((r, i) => { const y = 765 + i * 33.7; h += tx(r[0], 386, y, 20) + tx("—", 575, y, 20, "dim") + rt(r[1], 685, y, 20); });
    cr.right.forEach((r, i) => { const y = 762 + i * 29; h += tx(r[0], 732, y, 19) + tx("—", 936, y, 19, "dim") + rt(r[1], 1040, y, 19); });
    h += line(708, 748, 1.4, 178);
    h += a(383, 940, 447, 45, "chip");
    h += ico("cup", 403, 949, 28, 28) + line(441, 951, 1.3, 24);
    h += tx(cr.samples[0], 456, 963, 20) + line(635, 951, 1.3, 24) + tx(cr.samples[1], 670, 963, 20);

    /* ---- 4. Bracelets ---- */
    h += a(28, 1018, 343, 233, "tile", img("tile-lovers"));
    h += a(372, 1018, 690, 233, "glass");
    [408, 564, 720, 875].forEach((x, i) => { h += a(x, 1040, i === 3 ? 143 : 146, 142, "thumb", img("b" + (i + 1))); });
    h += `<span class="arrow a" style="${S({ x: 1017, y: 1098, w: 34, h: 34 })}"><svg viewBox="0 0 24 24"><path d="M9.5 6.5L15 12l-5.5 5.5"/></svg></span>`;
    h += tx(L(B.script), 570, 1212, 46, "script");

    /* ---- xidmətlər (alt sıra) ---- */
    const sx = [[25, 205], [243, 147], [402, 153], [568, 154], [735, 153], [900, 162]];
    B.services.forEach((v, i) => {
      const [x, w] = sx[i], cx = x + w / 2;
      h += a(x, 1270, w, 142, "glass sv");
      h += ico(v[0], cx - 21, 1292, 42, 42);
      h += `<span class="svt a" style="${S({ x: x + 6, y: 1340, w: w - 12, h: 66 })}"><b>${L(v[1])}</b><small>${L(v[2])}</small></span>`;
    });

    /* ---- dil seçimi (alt mərkəz) ---- */
    h += `<div class="langs a" style="${S({ x: 453, y: 1415, w: 180, h: 30 })}">` +
      LANGS.map((l) => `<button class="lg${l === lang ? " on" : ""}" data-lang="${l}">${l.toUpperCase()}</button>`).join("") + `</div>`;

    return h + (/[?&]ref=1/.test(location.search) ? '<img id="bqref" src="media/boutique/ref.jpg" alt="">' : "") + `<span id="bqver">${D.version || ""}</span>`;
  }

  function paint(animate) {
    let bq = document.getElementById("bq");
    if (!bq) { host.innerHTML = '<div id="bq"></div>'; bq = document.getElementById("bq"); }
    bq.dataset.lang = lang;
    document.documentElement.lang = lang;
    bq.innerHTML = build();
    if (animate) { bq.classList.remove("swap"); void bq.offsetWidth; bq.classList.add("swap"); }
  }

  host.addEventListener("click", (e) => {
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
