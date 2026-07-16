# Digiland.id — Headless WordPress + Astro (Contoh Belajar)

## Struktur project

```
digiland-frontend/
├── astro.config.mjs
├── .env.example
├── src/
│   ├── lib/
│   │   └── wordpress.js       <- semua fungsi fetch ke WPGraphQL ada di sini
│   ├── layouts/
│   │   └── Layout.astro       <- kerangka HTML yang dipakai semua halaman
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   └── pages/
│       ├── index.astro        <- route: /
│       ├── blog/
│       │   ├── index.astro    <- route: /blog
│       │   └── [slug].astro   <- route: /blog/apapun-slug-nya (dinamis)
│       └── category/
│           └── [slug].astro   <- route: /category/apapun-slug-nya (dinamis)
```

## Flow fundamental yang perlu dipahami

**1. Routing berbasis file (file-based routing)**
Setiap file di `src/pages/` otomatis jadi satu URL. `pages/blog/index.astro`
→ `/blog`. Tidak perlu setup router manual seperti di React/Vue biasa.

**2. `[slug].astro` = dynamic route**
Nama file dengan `[ ]` artinya bagian URL itu variabel. Karena Astro
meng-generate HTML statis saat build, dia perlu tahu di awal semua
kemungkinan slug yang ada — makanya wajib ada fungsi `getStaticPaths()`
yang isinya "daftar semua slug dari WordPress". Dari daftar itu, Astro
generate satu file HTML per slug.

**3. Kode di dalam `---  ---` (frontmatter) jalan di server/build time**
Ini beda dengan React/Vue di mana semua kode component jalan di browser.
Di Astro, `fetch()` ke WordPress dijalankan sekali saat `npm run build`,
hasilnya langsung jadi HTML jadi. Tidak ada API key/endpoint yang bocor
ke browser, dan tidak ada loading spinner karena data sudah "baked in".

**4. `set:html={...}`**
WordPress mengirim `content`/`excerpt` dalam bentuk string HTML (hasil
editor Gutenberg/Elementor). `set:html` dipakai supaya string itu
di-render sebagai HTML, bukan ditampilkan sebagai teks mentah berisi tag.

**5. Satu file `wordpress.js` sebagai satu-satunya "pintu" ke API**
Semua halaman (`index.astro`, `[slug].astro`, dst) tinggal import fungsi
dari `lib/wordpress.js`, tidak menulis ulang query GraphQL di tiap halaman.
Ini pola yang enak dipertahankan saat project makin besar.

## Cara menjalankan

```bash
npm install
cp .env.example .env
# edit .env, isi WORDPRESS_API_URL sesuai domain WP kamu

npm run dev       # development, buka http://localhost:4321
npm run build     # generate HTML statis ke folder dist/
npm run preview   # preview hasil build
```

## Prasyarat di sisi WordPress

1. Install & aktifkan plugin **WPGraphQL**.
2. Kalau pakai custom field (ACF dsb), install juga
   **WPGraphQL for Advanced Custom Fields** supaya field-nya ikut
   muncul di query.
3. Cek endpoint GraphQL aktif di: `https://cms.digiland.id/graphql`
   (bisa dites langsung pakai GraphiQL IDE bawaan plugin, ada di
   menu GraphQL di wp-admin — enak untuk coba-coba query sebelum
   dipakai di kode).

## Urutan belajar yang disarankan

1. Pahami dulu `src/lib/wordpress.js` — coba jalankan query-nya langsung
   di GraphiQL IDE WordPress supaya paham bentuk data yang balik.
2. Baca `src/pages/index.astro` — ini yang paling sederhana (satu fetch,
   tampilkan list).
3. Baru masuk ke `[slug].astro` — konsep `getStaticPaths()` ini yang
   sering bikin bingung pemula, tapi begitu paham sekali, pola yang
   sama dipakai berulang di semua dynamic route.
4. Terakhir, coba tambah halaman baru sendiri (misal: halaman "Tentang
   Kami" statis tanpa fetch) supaya kebayang bedanya halaman statis
   murni vs halaman yang fetch data.

## Langkah lanjutan setelah paham dasar ini

- Tambahkan pagination di `/blog` (sudah ada `pageInfo.hasNextPage` dari
  query `getAllPosts`, tinggal dibuat UI-nya).
- Setup webhook dari WordPress → Vercel/Netlify supaya rebuild otomatis
  tiap ada post baru/diedit (karena mode `static` butuh rebuild manual
  kalau tidak ada webhook).
- Migrasikan komponen dari template HTML lama kamu satu per satu ke
  `src/components/`.
