// src/lib/content.js
//
// Dua utilitas kecil yang bekerja di atas HTML content dari WordPress
// (bukan fetch ke API, murni olah string) - dipakai di halaman single
// artikel untuk fitur "reading time" dan "Table of Contents" otomatis.

/**
 * Estimasi waktu baca dari HTML content.
 * Asumsi kecepatan baca rata-rata 200 kata/menit.
 */
export function estimateReadingTime(html = '') {
  const text = html.replace(/<[^>]+>/g, ' ');
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(wordCount / 200));
  return minutes;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

/**
 * Cari semua heading <h2>/<h3> di HTML content, kasih masing-masing
 * atribut id (kalau belum ada), lalu kembalikan:
 * - html: versi content yang sudah disisipi id
 * - toc: daftar { text, id, level } untuk dirender sebagai sidebar TOC
 *
 * Dipakai supaya link di TOC ("1. Gunakan Keyword di Title Tag") bisa
 * lompat langsung ke heading yang sesuai di body artikel (anchor link).
 */
export function buildTableOfContents(html = '') {
  const toc = [];
  const usedIds = new Set();

  const withIds = html.replace(/<h([23])([^>]*)>(.*?)<\/h\1>/gi, (match, level, attrs, inner) => {
    const text = decodeEntities(inner.replace(/<[^>]+>/g, '').trim());
    let id = slugify(text) || `section-${toc.length + 1}`;
    let unique = id;
    let n = 2;
    while (usedIds.has(unique)) {
      unique = `${id}-${n++}`;
    }
    usedIds.add(unique);
    toc.push({ text, id: unique, level: Number(level) });

    const hasIdAlready = /\sid=/.test(attrs);
    const newAttrs = hasIdAlready ? attrs : `${attrs} id="${unique}"`;
    return `<h${level}${newAttrs}>${inner}</h${level}>`;
  });

  return { html: withIds, toc };
}

/**
 * Format tanggal ISO dari WordPress ("2026-03-12T08:00:00") ke format
 * Indonesia yang enak dibaca ("12 Maret 2026").
 */
export function formatDateID(isoDate) {
  return new Date(isoDate).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
function decodeEntities(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, '’')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&hellip;/g, '…');
}
