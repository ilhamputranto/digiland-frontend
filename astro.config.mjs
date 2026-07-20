import { defineConfig } from 'astro/config';

export default defineConfig({
  // 'static' = semua halaman di-generate jadi HTML saat build (SSG).
  // Ganti ke 'server' + tambahkan adapter (misal @astrojs/vercel)
  // kalau nanti butuh data selalu real-time (SSR).
  output: 'static',
  site: 'https://digiland.id',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
    routing: {
      // false = bahasa default (English) TIDAK dapat prefix di URL
      // (tetap di "/"), bahasa lain (Indonesia) dapat prefix "/id".
      prefixDefaultLocale: false,
    },
  },
});
