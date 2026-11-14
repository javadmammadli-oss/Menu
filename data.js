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
  night: { from: "00:00", to: "09:00", dim: 0.85 }, // gecə ekranı qaraldır (yanma olmasın)

  ui: {
    solarium: { az: "Solarium",  ru: "Солярий",  en: "Solarium" },
    drinks:   { az: "İçkilər",   ru: "Напитки",  en: "Drinks" },
    min:      { az: "dəq",       ru: "мин",      en: "min" },
    touch:    { az: "Menyu üçün toxunun", ru: "Коснитесь для меню", en: "Touch for menu" },
    note:     { az: "Qiymətlər manatla göstərilib", ru: "Цены указаны в манатах", en: "Prices are in AZN" }
  },

  /* ---------- SOLARİUM ---------- */
  solarium: [
    {
      id: "vertical",
      name: { az: "Vertikal solarium", ru: "Вертикальный солярий", en: "Vertical solarium" },
      desc: { az: "Dik vəziyyətdə, bərabər qaralma", ru: "Равномерный загар стоя", en: "Even tan, standing" },
      icon: "▮",
      prices: [
        { minutes: 3,  price: 3 },
        { minutes: 6,  price: 5 },
        { minutes: 9,  price: 7 },
        { minutes: 12, price: 9 }
      ]
    },
    {
      id: "horizontal",
      name: { az: "Horizontal solarium", ru: "Горизонтальный солярий", en: "Horizontal solarium" },
      desc: { az: "Maksimum rahatlıq, LED texnologiya", ru: "Максимальный комфорт, LED", en: "Maximum comfort, LED technology" },
      icon: "▬",
      prices: [
        { minutes: 10, price: 6 },
        { minutes: 15, price: 9 },
        { minutes: 20, price: 12 },
        { minutes: 25, price: 14 }
      ]
    }
  ],
  /* abunəlik / paketlər (istəməsən boş burax: []) */
  packages: [
    { name: { az: "5 seans paketi", ru: "Пакет 5 сеансов", en: "5-session pack" }, price: 40, badge: "-10%" },
    { name: { az: "10 seans paketi", ru: "Пакет 10 сеансов", en: "10-session pack" }, price: 75, badge: "-15%" }
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
    { type: "html", cls: "a-sun", seconds: 8,
      title: { az: "Mükəmməl qaralma", ru: "Идеальный загар", en: "The perfect tan" },
      text:  { az: "Alman keyfiyyəti · LED texnologiya", ru: "Немецкое качество · LED-технологии", en: "German quality · LED technology" } },
    { type: "html", cls: "a-promo", seconds: 8,
      title: { az: "10 seans paketi −15%", ru: "Пакет 10 сеансов −15%", en: "10-session pack −15%" },
      text:  { az: "Daimi müştərilər üçün xüsusi qiymət", ru: "Специальная цена для постоянных клиентов", en: "Special price for regular guests" } },
    { type: "html", cls: "a-vit", seconds: 8,
      title: { az: "Soyuq içkilər, isti qəhvə", ru: "Холодные напитки, горячий кофе", en: "Cold drinks, hot coffee" },
      text:  { az: "Seansdan sonra özünüzə bir fasilə verin", ru: "Сделайте паузу после сеанса", en: "Take a break after your session" } }
    /* nümunə şəkil/video:
    { type: "image", src: "media/reklam1.jpg", seconds: 8 },
    { type: "video", src: "media/reklam2.mp4", seconds: 15 },
    */
  ]
};
