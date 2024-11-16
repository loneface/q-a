// 1.  Single threading - bitta ip orqali kodni ketma-ket bajarish, ya’ni, dastur bir vaqtning o'zida faqat bitta vazifani bajaradi.
// Multi threading esa bir vaqtning o'zida bir nechta (iplarni) bajarish imkoniyatini beradi.

// 2. Synxron dasturlashda kod satrlari birin-ketin bajariladi agar bitta vazifa ko‘p vaqt oladigan bo‘lsa, u keyingi vazifalarga to‘siq bo‘ladi.
// Asynxron dasturlashda esa kodni turli vazifalar orasida to‘xtatib, vaqt talab qiladigan vazifalarni fon jarayonida bajarish mumkin
// va dastur kutmasdan boshqa vazifalarni bajarishda davom etadi.

// 3. Event Loop — bu JavaScriptda asynxron vazifalarni (masalan, setTimeout, Promise) boshqaradigan mexanizm. JavaScript bir ipli bo‘lgani uchun,
// event loop bir vaqtning o‘zida kodning asosiy oqimini va tashqi vazifalarni kuzatib, asynxron operatsiyalarning bajarilishi ketma-ketligini ta’minlaydi.

// 4. Task Queue (Macrotask Queue) setTimeout, setInterval, setImmediate, va boshqa asynxron vazifalarni boshqarish uchun ishlatiladi.
// Bu vazifalar event loopda asosiy kod to‘liq bajarilgandan keyin bajariladi.
// Microtask Queue esa Promise kabi yuqori ustuvorlikdagi vazifalarni saqlaydi.
// Event loopda asosiy kod va barcha Microtask Queue tugagandan keyingina Task Queue’ga o'tiladi.

// 5. (1, 4, 3, 0, google, 2)

// 6. Web API — bu brauzer tomonidan taqdim etilgan, JavaScript orqali ishlatish mumkin bo'lgan API’lar majmui.
// Web API’lar brauzerda bir qator funksionalliklarni (masalan, DOM, setTimeout, fetch) taqdim etadi va JavaScript dasturlash tilida ishlatilishi mumkin.