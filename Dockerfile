# ============================================================
#  مرحله ۱ — Build (ساخت خروجی استاتیک با Astro)
# ============================================================
FROM node:24-alpine AS build
WORKDIR /app

# نصب وابستگی‌ها با کش‌پذیری بهتر لایه‌ها
COPY package.json package-lock.json ./
RUN npm ci

# کپی سورس و ساخت
COPY . .
RUN npm run build

# ============================================================
#  مرحله ۲ — Runtime (سرو خروجی با nginx سبک)
# ============================================================
FROM nginx:1.27-alpine AS runtime

# کانفیگ nginx (هدرهای امنیتی، کش، gzip)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# فقط خروجی استاتیک منتقل می‌شود (نه سورس و نه node_modules)
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# بررسی سلامت ساده
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -q --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
