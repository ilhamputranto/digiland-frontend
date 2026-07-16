import { defineConfig } from 'astro/config';

export default defineConfig({
  // 'static' = semua halaman di-generate jadi HTML saat build (SSG).
  // Ganti ke 'server' + tambahkan adapter (misal @astrojs/vercel)
  // kalau nanti butuh data selalu real-time (SSR).
  output: 'static',
  site: 'https://digiland.id',
});
