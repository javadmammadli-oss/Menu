/* ===========================================================
   MENYU MƏLUMATLARI — yalnız bu faylı dəyişmək kifayətdir.
   Qiymətlər NÜMUNƏDİR, öz real qiymətlərinlə əvəz et.
   Hər mətn 3 dildə: az / ru / en
   =========================================================== */
window.MENU_DATA = {
  brand: "megaSun",
  version: "v9 · 20.11 20:01",                   // hər push-da avtomatik artır (bump.ps1), ekranın sağ aşağısında kiçik görünür
  /* DİZAYN: "classic" = köhnə menyu (Solarium / Bar / Kremlər), "boutique" = yeni butik dizaynı. Dəyişib push etmək kifayətdir. Linkdə ?design=boutique ilə də sınaya bilərsən */
  design: "classic",
  currency: "₼",
  idleSeconds: 45,                 // toxunulmasa neçə saniyədən sonra reklam başlasın
  reloadAt: "04:00",               // hər gün bu saatda səhifə özünü yeniləyir
  testButton: true,                // MÜVƏQQƏTİ: sol altda "▶ Reklam" düyməsi (reklamı dərhal test etmək üçün). Söndürmək: false
  night: null, // gecə qaralması söndürülüb. Yandırmaq üçün: { from: "00:00", to: "09:00", dim: 0.85 }

  /* TEST LÖVHƏSİ: yenilənmə vaxtını ölçmək üçün. Silmək üçün: banner: null */
  banner: null,

  /* Sol paneldəki şəkil (media qovluğunda). Şəkil istəmirsənsə: cover: { image: "" } */
  cover: { image: "media/cover.webp" },
  /* ---------- BUTİK DİZAYNI (tək səhifə, 3:4). Qiymətləri/mətnləri burada dəyiş. Bu blok silinsə köhnə menyu qayıdır ---------- */
  boutique: {
    /* Mətn: ya sadə sətir (bütün dillərdə eyni), ya da { az: "...", ru: "...", en: "..." } */
    sessions: {
      title: { az: "Solarium Sessions", ru: "Сеансы солярия", en: "Solarium Sessions" },
      unit: { az: "dəqiqə", ru: "минут", en: "minutes" },
      rows: [[5, "10 AZN"], [10, "18 AZN"], [15, "25 AZN"], [20, "32 AZN"]],     // [dəqiqə, qiymət]
      notes: [
        ["chat",  { az: "İlk seans üçün konsultasiya — pulsuz və məcburidir.", ru: "Консультация перед первым сеансом — бесплатно и обязательно.", en: "Consultation before the first session — free and mandatory." }],
        ["clock", { az: "Seanslar arasında minimum 24 saat fasilə.", ru: "Минимальный перерыв между сеансами — 24 часа.", en: "Minimum 24 hours between sessions." }]
      ]
    },
    packages: [
      { name: { az: "Abonement №1", ru: "Абонемент №1", en: "Membership №1" }, price: "100 AZN", bonus: { az: "+ 40 AZN bonus", ru: "+ 40 AZN бонус", en: "+ 40 AZN bonus" } },
      { name: { az: "Abonement №2", ru: "Абонемент №2", en: "Membership №2" }, price: "200 AZN", bonus: { az: "+ 100 AZN bonus", ru: "+ 100 AZN бонус", en: "+ 100 AZN bonus" } },
      { name: { az: "VIP Abonement", ru: "VIP абонемент", en: "VIP Membership" }, icon: "crown", price: "200 AZN",
        sub: { az: "(məhdud sayda)", ru: "(ограниченно)", en: "(limited)" }, bonus: { az: "+ 150 AZN bonus", ru: "+ 150 AZN бонус", en: "+ 150 AZN bonus" } }
    ],
    creams: {
      left:  [["Ride or Tide", "115 AZN"], ["Going Tropik", "115 AZN"], ["Caribbean Cool", "115 AZN"], ["Game Over", "115 AZN"], ["Sunshine Superstar", "125 AZN"]],
      right: [["Somewhere on a Beach", "125 AZN"], ["Bali Beach", "125 AZN"], ["Bahama Bronzer", "125 AZN"], ["Neon Rose", "125 AZN"], ["Color Karma", "135 AZN"], ["Sunset Strip", "135 AZN"]],
      samples: ["15 ml — 10 AZN", "6 ml — 6 AZN"]
    },
    /* bracelets: istənilən sayda şəkil; 4-dən çox olanda ox düyməsi növbəti 4-lüyü göstərir (dövrə vurur). Şəkil yerləri: fayl yolunu yaz (məs. "media/boutique/solarium.jpg"). Boş qalsa rəngli boş sahə görünür. */
    images: { solarium: "media/card/solarium.webp", packages: "media/card/packages.webp", creams: "media/card/creams.webp", lovers: "media/card/lovers.webp", bracelets: ["media/qolbaq/qolbaq_1.webp", "media/qolbaq/qolbaq_2.webp", "media/qolbaq/qolbaq_3.webp", "media/qolbaq/qolbaq_4.webp", "media/qolbaq/qolbaq_5.webp", "media/qolbaq/qolbaq_6.webp"] },
    /* Başlıq altı, blok yazıları və qalan sabit mətnlər (3 dildə). Sətir massivləri = ayrı sətirlər */
    back: { az: "Geri", ru: "Назад", en: "Back" },
    studio: { az: "SOLARİUM STUDİYASI &amp; BUTİK", ru: "СОЛЯРИЙ-СТУДИЯ И БУТИК", en: "SOLARIUM STUDIO &amp; BOUTIQUE" },
    tiles: {
      solarium: { az: "Solarium", ru: "Солярий", en: "Solarium" },
      packages: { az: ["Paketlər", "və abonementlər"], ru: ["Пакеты", "и абонементы"], en: ["Packages", "&amp; Memberships"] },
      creams: { az: ["Bronzlaşdırıcı", "kremlər"], ru: ["Кремы", "для загара"], en: ["Tanning", "Creams"] },
      brand: "Devoted Creations",
      lovers: ["MegaSun", "Lovers"],
      loversSub: { az: "Qolbaq kolleksiyası", ru: "Коллекция браслетов", en: "Bracelet Collection" }
    },
    ml: { az: "ml", ru: "мл", en: "ml" },
    script: { az: "Ürəyini daşı", ru: "Носи своё сердце", en: "Wear your heart" },
    services: [
      ["bag", { az: "Butik", ru: "Бутик", en: "Boutique" }, { az: "(Alo Yoga, Lululemon, On Cloud və s.)", ru: "(Alo Yoga, Lululemon, On Cloud и др.)", en: "(Alo Yoga, Lululemon, On Cloud, etc.)" }],
      ["drink", { az: "Təravət", ru: "Освежись", en: "Refresh" }, { az: "(Təzə şirələr)", ru: "(Свежевыжатые соки)", en: "(Fresh juice)" }],
      ["icecream", { az: "Dondurma", ru: "Мороженое", en: "Ice Cream" }, { az: "MegaSun-dan", ru: "от MegaSun", en: "by MegaSun" }],
      ["cake", "Tiramisu Bar", { az: "(Catering)", ru: "(Кейтеринг)", en: "(Catering)" }],
      ["caviar", { az: "Kürü Atelyesi", ru: "Икорное ателье", en: "Caviar Atelier" }, { az: "(Catering)", ru: "(Кейтеринг)", en: "(Catering)" }],
      ["calendar", { az: "Tədbirlər", ru: "Мероприятия", en: "Events" }, { az: "& Özəl catering", ru: "& частный кейтеринг", en: "& Private Catering" }]
    ]
  },
  /* Siyahının altındakı əlaqə sətri. Doldurmaq üçün: contact: { address: "...", phone: "...", instagram: "@..." } */
  contact: null,

  ui: {
    title:    { az: "Qiymətlər", ru: "Цены",     en: "Price list" },
    packages: { az: "Əlavə",     ru: "Дополнительно", en: "Extra" },
    solarium: { az: "Solarium",  ru: "Солярий",  en: "Solarium" },
    drinks:   { az: "Bar",       ru: "Бар",      en: "Bar" },
    creams:   { az: "Kremlər",   ru: "Кремы",    en: "Creams" },
    subs:     { az: "Abunəliklər", ru: "Абонементы", en: "Memberships" },
    min:      { az: "dəq",       ru: "мин",      en: "min" },
    free:     { az: "Pulsuz",    ru: "Бесплатно", en: "Free" },
    preview:  { az: "Bax",       ru: "Вид",       en: "View" },
    info:     { az: "Info",      ru: "Инфо",      en: "Info" },
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
    { name: { az: "Vibra-nano", ru: "Вибра-нано", en: "Vibra-nano" }, price: 3, prefix: "+", info: "media/Ad10.png" }
  ],
  /* ---------- ABUNƏLİKLƏR (kart şəkli + abonement növləri) ----------
     card.number: kartın üzərindəki nömrə. price/bonus: manatla (rəqəm).
     vip: true → tac işarəsi və qızılı vurğu. sub: adın altında kiçik yazı.
     notes: kartın altındakı qısa qeydlər (istəməsən boş burax: [])          */
  subscriptions: {
    card: { number: "000000" },
    plans: [
      { name: "Gold",    price: 100, bonus: 40 },
      { name: "Diamond", price: 200, bonus: 100 }
    ],
    bonus: { az: "bonus", ru: "бонус", en: "bonus" },
    notes: []
  },
  /* ---------- BAR (tək sütun, bu sırayla) ----------
     free: true  → qiymət əvəzinə "Pulsuz" yazılır
     preview: "media/X.png" → adın yanında "Bax" düyməsi çıxır, basanda afişa tam ekran açılır
     (Əlavə xidmətlərdə info: "media/X.png" → adın yanında "Info" düyməsi)
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
  /* ---------- KREMLƏR (dairədə şəkil + ad; basanda məlumat). img: afişa, pos: dairədə şəklin şaquli yeri (%) ---------- */
  creams: [
    { img: "media/Ad1.png", pos: 50, name: "Game Over", brand: "Devoted Creations", vol: "251 ml",
      type: { az: "Ultra-tünd qara bronzlaşdırıcı losyon", ru: "Ультра-тёмный чёрный лосьон для загара", en: "Ultra-dark black tanning lotion" },
      desc: { az: "Ultra-tünd XXX qara bronzlaşdırıcı formula. Döymələri və rəngi solmadan qoruyur, həssas dəri üçün uyğundur.", ru: "Ультра-тёмная формула XXX с чёрным бронзатором. Защищает татуировки и цвет от выцветания, подходит для чувствительной кожи.", en: "Ultra-dark XXX black bronzing formula. Protects tattoos and colour from fading and suits sensitive skin." },
      feats: { az: ["Ultra-tünd qara bronzer", "Döymə və rəngi solmadan qoruyur", "Həssas dəri üçün formula"], ru: ["Ультра-тёмный чёрный бронзатор", "Защита татуировок и цвета от выцветания", "Формула для чувствительной кожи"], en: ["Ultra-dark black bronzer", "Tattoo and colour fade protection", "Sensitive skin formula"] } },
    { img: "media/Ad5.png", pos: 64, name: "Bahama Bronzer", brand: "Tanovations", vol: "330 ml",
      type: { az: "Tünd bronzlaşdırıcı losyon", ru: "Лосьон для тёмного загара", en: "Dark tanning lotion" },
      desc: { az: "Ananas və hibiskus ekstraktları ilə zənginləşdirilmiş, izsiz qalan tünd bronzer.", ru: "Тёмный бронзатор, не оставляющий следов, с экстрактами ананаса и гибискуса.", en: "Transfer-resistant dark bronzer blended with pineapple and hibiscus extracts." },
      feats: { az: ["Daha dərin və bərabər qaralma", "Dərini nəmləndirir və qidalandırır", "Ananas və hibiskus ekstraktları"], ru: ["Более глубокий и ровный загар", "Увлажняет и питает кожу", "Экстракты ананаса и гибискуса"], en: ["Deeper, more even tan", "Moisturises and nourishes the skin", "Pineapple and hibiscus extracts"] } },
    { img: "media/Ad6.png", pos: 67, name: "Color Karma", brand: "Devoted Creations", vol: "362 ml",
      type: { az: "Tünd bronzlaşdırıcı bronzer", ru: "Бронзатор для тёмного загара", en: "Dark tanning bronzer" },
      desc: { az: "Dərini bərpa edən, parıltılı ani bronzer. Gözəllik aktivləri ilə daha tez və dərin qaralma verir.", ru: "Восстанавливающий мерцающий бронзатор мгновенного действия с бьюти-активами для быстрого и глубокого загара.", en: "Repair-infused, ultra-glittering instant bronzer with beauty boosters for a faster, deeper tan." },
      feats: { az: ["Daha tez və dərin qaralma", "Parlaq və bərabər bəronz", "Dərini bərpa edir və nəmləndirir", "Dərinin elastikliyini artırır"], ru: ["Более быстрый и глубокий загар", "Сияющий и ровный бронзовый цвет", "Восстанавливает и увлажняет кожу", "Повышает эластичность кожи"], en: ["Faster, deeper tan", "Radiant, even bronze", "Repairs and moisturises the skin", "Improves skin elasticity"] } },
    { img: "media/Ad7.png", pos: 67, name: "Somewhere on a Beach", brand: "Devoted Creations", vol: "360 ml",
      type: { az: "Tünd bronzlaşdırıcı losyon", ru: "Лосьон для тёмного загара", en: "Dark tanning lotion" },
      desc: { az: "Hindistan cevizi yağı və dəniz itburnu giləmeyvəsi ilə zənginləşdirilmiş ani tünd bronzlaşdırıcı losyon (solarium və açıq havada).", ru: "Лосьон мгновенного тёмного загара с кокосовым маслом и облепихой (для солярия и улицы).", en: "Indoor/outdoor instant dark tanning lotion infused with coconut oil and sea buckthorn berry." },
      feats: { az: ["Dərin, uzunmüddətli qaralma", "Qidalandırır və nəmləndirir", "Dərini yumşaldır və bərpa edir", "Təbii və bərabər bronzluq"], ru: ["Глубокий, стойкий загар", "Питает и увлажняет", "Смягчает и восстанавливает кожу", "Естественный и ровный бронзовый тон"], en: ["Deep, long-lasting tan", "Nourishes and moisturises", "Softens and restores the skin", "Natural, even bronze"] } }
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
    { type: "poster", src: "media/Ad9.png", ratio: 0.6255, seconds: 8 },   /* MegaSun Çay Seti (armudu stəkan) */
    { type: "poster", src: "media/Ad10.png", ratio: 0.6255, seconds: 8 }   /* Vibra-nano */
    /* başqa növlər (nümunə):
    { type: "photo", src: "media/foto.webp", kb: "a", seconds: 10, eyebrow: {...}, title: {...}, text: {...} },
    { type: "image", src: "media/reklam1.jpg", seconds: 8 },
    { type: "video", src: "media/reklam2.mp4", seconds: 15 },
    */  ]
};
