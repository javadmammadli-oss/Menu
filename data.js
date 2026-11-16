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
    touch:    { az: "Menyu üçün toxunun", ru: "Коснитесь для меню", en: "Touch for menu" },
    note:     { az: "Qiymətlər manatla göstərilib", ru: "Цены указаны в манатах", en: "Prices are in AZN" }
  },

  /* ---------- SOLARİUM (çap olunmuş qiymət vərəqindən) ---------- */
  solarium: [
    {
      id: "vertical",
      name: { az: "Ayaqüstə", ru: "Стоя", en: "Standing" },
      prices: [
        { minutes: 5,  price: 10 },
        { minutes: 8,  price: 13 },
        { minutes: 10, price: 15 },
        { minutes: 12, price: 16 },
        { minutes: 15, price: 21 },
        { minutes: 18, price: 22 },
        { minutes: 20, price: 23 },
        { minutes: 22, price: 24 },
        { minutes: 25, price: 26 }
      ]
    },
    {
      id: "horizontal",
      name: { az: "Uzanan", ru: "Лёжа", en: "Lying" },
      prices: [
        { minutes: 5,  price: 11 },
        { minutes: 8,  price: 15 },
        { minutes: 10, price: 17 },
        { minutes: 12, price: 18 },
        { minutes: 15, price: 23 },
        { minutes: 18, price: 24 },
        { minutes: 20, price: 25 },
        { minutes: 22, price: 26 },
        { minutes: 25, price: 28 }
      ]
    }
  ],
  /* əlavə xidmətlər (istəməsən boş burax: []) — prefix: qiymətin qarşısındakı işarə */
  packages: [
    { name: { az: "Vibra-nano", ru: "Вибра-нано", en: "Vibra-nano" }, price: 3, prefix: "+" }
  ],
  /* ---------- İÇKİLƏR ---------- */
  drinkCategories: [
    { id: "energy", name: { az: "Enerji içkiləri", ru: "Энергетики", en: "Energy drinks" } },
    { id: "coffee", name: { az: "Qəhvə",           ru: "Кофе",       en: "Coffee" } },
    { id: "tea",    name: { az: "Çaylar",          ru: "Чай",        en: "Tea" } },
    { id: "soft",   name: { az: "Sərinləşdirici",  ru: "Прохладительные", en: "Soft drinks" } }
  ],
  drinks: [
    { cat: "energy", emoji: "⚡", name: { az: "Red Bull",  ru: "Red Bull",  en: "Red Bull" }, size: "250 ml", price: 4.5 },
    { cat: "energy", emoji: "⚡", name: { az: "Burn",      ru: "Burn",      en: "Burn" },     size: "250 ml", price: 3.5 },
    { cat: "coffee", emoji: "☕", name: { az: "Espresso",  ru: "Эспрессо",  en: "Espresso" },   size: "30 ml",  price: 3 },
    { cat: "coffee", emoji: "☕", name: { az: "Americano", ru: "Американо", en: "Americano" },  size: "200 ml", price: 3.5 },
    { cat: "coffee", emoji: "🥛", name: { az: "Cappuccino",ru: "Капучино",  en: "Cappuccino" }, size: "250 ml", price: 4.5 },
    { cat: "coffee", emoji: "🥛", name: { az: "Latte",     ru: "Латте",     en: "Latte" },      size: "300 ml", price: 5 },
    { cat: "tea",    emoji: "🍵", name: { az: "Qara çay",  ru: "Чёрный чай",en: "Black tea" },  size: "300 ml", price: 2 },
    { cat: "tea",    emoji: "🍵", name: { az: "Yaşıl çay", ru: "Зелёный чай",en: "Green tea" }, size: "300 ml", price: 2 },
    { cat: "tea",    emoji: "🍋", name: { az: "Limonlu çay",ru: "Чай с лимоном",en: "Lemon tea" }, size: "300 ml", price: 2.5 },
    { cat: "soft",   emoji: "💧", name: { az: "Su",        ru: "Вода",      en: "Water" },      size: "500 ml", price: 1 },
    { cat: "soft",   emoji: "🥤", name: { az: "Coca-Cola", ru: "Coca-Cola", en: "Coca-Cola" },  size: "330 ml", price: 2.5 },
    { cat: "soft",   emoji: "🍊", name: { az: "Fresh meyvə şirəsi", ru: "Свежевыжатый сок", en: "Fresh juice" }, size: "300 ml", price: 5 }
  ],

  /* ---------- REKLAM SLAYDLARI ----------
     type: "html"  → aşağıdakı animasiyalı HTML/CSS slayd (class: "a-sun", "a-promo", "a-vit")
           "image" → src: "media/foto.jpg"
           "video" → src: "media/video.mp4" (səssiz, avtomatik)
     seconds: slaydın qalma müddəti                                      */
  ads: [
    /* media/ qovluğundakı Ad1–Ad7 hazır afişalardır (992×1586 ≈ 5:8). Üstünə yazı əlavə edilmir. */
    { type: "poster", src: "media/Ad1.png", ratio: 0.6255, seconds: 12 },   /* Game Over (Devoted Creations) */
    { type: "poster", src: "media/Ad2.png", ratio: 0.6255, seconds: 12 },   /* Space 3000 */
    { type: "poster", src: "media/Ad3.png", ratio: 0.6255, seconds: 12 },   /* Extrasun+ 5600 */
    { type: "poster", src: "media/Ad4.png", ratio: 0.6259, seconds: 12 },   /* megaSun T200 */
    { type: "poster", src: "media/Ad5.png", ratio: 0.6255, seconds: 12 },   /* Bahama Bronzer (Tanovations) */
    { type: "poster", src: "media/Ad6.png", ratio: 0.6255, seconds: 12 },   /* Color Karma (Devoted Creations) */
    { type: "poster", src: "media/Ad7.png", ratio: 0.6255, seconds: 12 }    /* Somewhere on a Beach (Devoted Creations) */
    /* başqa növlər (nümunə):
    { type: "photo", src: "media/foto.webp", kb: "a", seconds: 10, eyebrow: {...}, title: {...}, text: {...} },
    { type: "image", src: "media/reklam1.jpg", seconds: 8 },
    { type: "video", src: "media/reklam2.mp4", seconds: 15 },
    */  ]
};
