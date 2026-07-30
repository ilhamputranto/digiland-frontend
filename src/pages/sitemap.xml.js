// src/pages/sitemap.xml.js
//
// Sitemap dibuat manual (bukan pakai @astrojs/sitemap) supaya kita punya
// kontrol penuh dan tidak bergantung pada bug library eksternal.
// File ini adalah "endpoint" Astro - karena output: 'static', dia otomatis
// di-generate jadi file statis sitemap.xml saat `npm run build`.
//
// Mengumpulkan URL dari 3 sumber, semuanya fetch langsung dari WordPress
// saat build - jadi post/page/kategori baru otomatis ikut ter-include
// setiap kali build ulang, tanpa perlu ubah kode ini.

import { getAllPosts, getAllCategorySlugs, getAllPages } from '../lib/wordpress.js';

const SITE_URL = 'https://digiland.id';

function urlEntry(loc, lastmod) {
  // WPGraphQL mengembalikan date tanpa timezone designator (misal
  // "2026-07-25T15:21:06"), yang dianggap invalid oleh parser Google.
  // Ambil bagian tanggalnya saja (YYYY-MM-DD) - format ini valid W3C
  // Datetime dan tidak butuh info timezone sama sekali.
  const cleanDate = lastmod ? lastmod.split('T')[0] : null;
  return `  <url>
    <loc>${loc}</loc>${cleanDate ? `\n    <lastmod>${cleanDate}</lastmod>` : ''}
  </url>`;
}

export async function GET() {
  const entries = [];

  // 1) Halaman statis inti
  entries.push(urlEntry(`${SITE_URL}/`));
  entries.push(urlEntry(`${SITE_URL}/id`));
  entries.push(urlEntry(`${SITE_URL}/blog`));

  // 2) Semua post (ambil banyak sekaligus, cukup untuk situs skala blog biasa)
  try {
    const { nodes: posts } = await getAllPosts({ first: 200 });
    posts.forEach((p) => {
      entries.push(urlEntry(`${SITE_URL}/blog/${p.slug}`, p.date));
    });
  } catch (err) {
    console.error('sitemap: gagal ambil posts', err);
  }

  // 3) Semua kategori
  try {
    const categorySlugs = await getAllCategorySlugs();
    categorySlugs.forEach((slug) => {
      entries.push(urlEntry(`${SITE_URL}/category/${slug}`));
    });
  } catch (err) {
    console.error('sitemap: gagal ambil kategori', err);
  }

  // 4) Semua WordPress "Page" (lihat src/pages/[slug].astro)
  try {
    const pages = await getAllPages();
    pages.forEach((p) => {
      entries.push(urlEntry(`${SITE_URL}/${p.slug}`));
    });
  } catch (err) {
    console.error('sitemap: gagal ambil WP pages', err);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
