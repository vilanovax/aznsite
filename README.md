# موسسه حسابرسی آزموده کاران — وب‌سایت

وب‌سایت معرفی موسسه حسابرسی آزموده کاران؛ ساخته‌شده با **Astro** + **Tailwind CSS**، کاملاً استاتیک، فارسی (RTL).

## اجرا

```bash
npm install      # نصب وابستگی‌ها
npm run dev      # سرور توسعه روی http://localhost:4321
npm run build    # خروجی استاتیک در پوشه dist/
npm run preview  # پیش‌نمایش خروجی build
```

## ساختار

- `src/data/site.js` — اطلاعات شرکت، خدمات، مدیران، کلمات کلیدی (محل ویرایش محتوا)
- `src/pages/` — صفحات سایت (خانه، درباره، خدمات، مدیران، مقالات، تماس)
- `src/content/blog/` — مقالات بلاگ (فایل‌های Markdown)
- `src/components/` — کامپوننت‌های قابل‌استفاده مجدد
- `public/` — فایل‌های استاتیک (favicon، robots.txt، og)

## استک

Astro · Tailwind CSS v4 · فونت وزیرمتن · داده‌ساختاریافته JSON-LD برای سئو
