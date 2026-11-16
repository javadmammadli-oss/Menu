/* ===========================================================
   MENYU MƏLUMATLARI — yalnız bu faylı dəyişmək kifayətdir.
   Qiymətlər NÜMUNƏDİR, öz real qiymətlərinlə əvəz et.
   Hər mətn 3 dildə: az / ru / en
   =========================================================== */
window.MENU_DATA = {
  brand: "megaSun",
  currency: "₼",
  idleSeconds: 45,                 // toxunulmasa neçə saniyədən sonra reklam başlasın
  reloadAt: "04:00",               // hər gün bu saatda səhifə özünü yeniləyir
  testButton: true,                // MÜVƏQQƏTİ: sol altda "▶ Reklam" düyməsi (reklamı dərhal test etmək üçün). Söndürmək: false
  night: null, // gecə qaralması söndürülüb. Yandırmaq üçün: { from: "00:00", to: "09:00", dim: 0.85 }

  /* TEST LÖVHƏSİ: yenilənmə vaxtını ölçmək üçün. Silmək üçün: banner: null */
  banner: null,

  /* Sol paneldəki şəkil (media qovluğunda). Şəkil istəmirsənsə: cover: { image: "" } */
  cover: { image: "media/cover.webp" },
  /* Siyahının altındakı əlaqə sətri. Doldurmaq üçün: contact: { address: "...", phone: "...", instagram: "@..." } */
  contact: null,

  ui: {
    title:    { az: "Qiymətlər", ru: "Цены",     en: "Price list" },
    packages: { az: "Əlavə",     ru: "Дополнительно", en: "Extra" },
    solarium: { az: "Solarium",  ru: "Солярий",  en: "Solarium" },
    drinks:   { az: "Bar",       ru: "Бар",      en: "Bar" },
    min:      { az: "dəq",       ru: "мин",      en: "min" },
    free:     { az: "Pulsuz",    ru: "Бесплатно", en: "Free" },
    preview:  { az: "Bax",       ru: "Вид",       en: "View" },
    touch:    { az: "Menyu üçün toxunun", ru: "Коснитесь для меню", en: "Touch for menu" },
    note:     { az: "Qiymətlər manatla göstərilib", ru: "Цены указаны в манатах", en: "Prices are in AZN" }
  },

  /* ---------- SOLARİUM (çap olunmuş qiymət vərəqindən) ---------- */
  solarium: [
    {
      id: "vertical",
      name: { az: "Ayaqüstə", ru: "Вертикальный", en: "Standing" },
      prices: [
        { minutes: 5,  price: 10 },
        { minutes: 8,  price: 14 },
        { minutes: 10, price: 16 },
        { minutes: 12, price: 17 },
        { minutes: 15, price: 22 },
        { minutes: 18, price: 23 },
        { minutes: 20, price: 24 },
        { minutes: 22, price: 25 },
        { minutes: 25, price: 27 }
      ]
    },
    {
      id: "horizontal",
      name: { az: "Uzanan", ru: "Горизонтальный", en: "Lying" },
      prices: [
        { minutes: 5,  price: 11 },
        { minutes: 8,  price: 16 },
        { minutes: 10, price: 18 },
        { minutes: 12, price: 19 },
        { minutes: 15, price: 24 },
        { minutes: 18, price: 25 },
        { minutes: 20, price: 26 },
        { minutes: 22, price: 27 },
        { minutes: 25, price: 29 }
      ]
    }
  ],
  /* əlavə xidmətlər (istəməsən boş burax: []) — prefix: qiymətin qarşısındakı işarə */
  packages: [
    { name: { az: "Vibra-nano", ru: "Вибра-нано", en: "Vibra-nano" }, price: 3, prefix: "+" }
  ],
  /* ---------- BAR (tək sütun, bu sırayla) ----------
     free: true  → qiymət əvəzinə "Pulsuz" yazılır
     preview: "media/X.png" → adın yanında "Bax" düyməsi çıxır, basanda afişa tam ekran açılır
     price: null → qiymət hələ bilinmir, "—" göstərilir (real qiyməti yaz)    */
  drinks: [
    { name: { az: "Çay",       ru: "Чай",       en: "Tea" },       free: true },
    { name: { az: "Nescafe",   ru: "Нескафе",   en: "Nescafe" },   free: true },
    { name: { az: "Red Bull",  ru: "Red Bull",  en: "Red Bull" },  price: 6 },
    { name: { az: "Americano", ru: "Американо", en: "Americano" }, price: 3.5 },
    { name: { az: "MegaSun çay set 1", ru: "MegaSun чай сет 1", en: "MegaSun tea set 1" }, price: null, preview: "media/Ad8.png" },
    { name: { az: "MegaSun çay set 2", ru: "MegaSun чай сет 2", en: "MegaSun tea set 2" }, price: null, preview: "media/Ad9.png" },
    { name: { az: "Kök şirəsi", ru: "Морковный сок", en: "Carrot juice" }, price: null },
    { name: { az: "Cola",      ru: "Кола",      en: "Cola" },      price: 2.5 },
    { name: { az: "Yaşıl çay", ru: "Зелёный чай", en: "Green tea" }, price: 2 }
  ],
  /* ---------- REKLAM SLAYDLARI ----------
     type: "html"  → aşağıdakı animasiyalı HTML/CSS slayd (class: "a-sun", "a-promo", "a-vit")
           "image" → src: "media/foto.jpg"
           "video" → src: "media/video.mp4" (səssiz, avtomatik)
     seconds: slaydın qalma müddəti                                      */
  ads: [
    /* media/ qovluğundakı Ad1–Ad9 hazır afişalardır (992×1586 ≈ 5:8). Üstünə yazı əlavə edilmir. */
    { type: "poster", src: "media/Ad1.png", ratio: 0.6255, seconds: 8 },   /* Game Over (Devoted Creations) */
    { type: "poster", src: "media/Ad2.png", ratio: 0.6255, seconds: 8 },   /* Space 3000 */
    { type: "poster", src: "media/Ad3.png", ratio: 0.6255, seconds: 8 },   /* Extrasun+ 5600 */
    { type: "poster", src: "media/Ad4.png", ratio: 0.6259, seconds: 8 },   /* megaSun T200 */
    { type: "poster", src: "media/Ad5.png", ratio: 0.6255, seconds: 8 },   /* Bahama Bronzer (Tanovations) */
    { type: "poster", src: "media/Ad6.png", ratio: 0.6255, seconds: 8 },   /* Color Karma (Devoted Creations) */
    { type: "poster", src: "media/Ad7.png", ratio: 0.6255, seconds: 8 },   /* Somewhere on a Beach (Devoted Creations) */
    { type: "poster", src: "media/Ad8.png", ratio: 0.6255, seconds: 8 },   /* MegaSun Çay Seti (fincan) */
    { type: "poster", src: "media/Ad9.png", ratio: 0.6255, seconds: 8 }    /* MegaSun Çay Seti (armudu stəkan) */
    /* başqa növlər (nümunə):
    { type: "photo", src: "media/foto.webp", kb: "a", seconds: 10, eyebrow: {...}, title: {...}, text: {...} },
    { type: "image", src: "media/reklam1.jpg", seconds: 8 },
    { type: "video", src: "media/reklam2.mp4", seconds: 15 },
    */  ]
};
