# Daftar Gambar yang Perlu Di-download

Simpan semua file di bawah ke folder: `public/images/` (buat foldernya kalau
belum ada). Nama file di kolom kanan HARUS PERSIS sama, karena itu yang
dipanggil di kode komponen.

Cara download: buka URL di browser -> klik kanan -> "Save Image As" -> rename
sesuai kolom "Simpan sebagai".

## Header / Footer
| URL asli | Simpan sebagai |
|---|---|
| https://digiland.id/wp-content/uploads/2025/01/logo-digiland.id-black.webp | logo-digiland.id-black.webp |
| https://digiland.id/wp-content/uploads/2021/09/logo-digiland.id-black.png | logo-digiland.id-footer.png |

## About section
| URL asli | Simpan sebagai |
|---|---|
| https://digiland.id/wp-content/uploads/2021/10/work-1-1160x1080.jpg | work-1.jpg |
| https://digiland.id/wp-content/uploads/2021/10/Coworking-Office-1024x649.jpg | coworking-office.jpg |
| https://digiland.id/wp-content/uploads/2021/10/workspace-1.jpeg | workspace-1.jpeg |
| https://digiland.id/wp-content/uploads/2021/10/guide-to-coworking-spaces-1160x630.jpg | guide-to-coworking-spaces.jpg |

## Services section
| URL asli | Simpan sebagai |
|---|---|
| https://digiland.id/wp-content/uploads/2025/01/SEO-Image.webp | service-seo.webp |
| https://digiland.id/wp-content/uploads/2025/01/PPC.webp | service-ppc.webp |
| https://digiland.id/wp-content/uploads/2025/01/Social-Media.webp | service-social-media.webp |
| https://digiland.id/wp-content/uploads/2025/01/web-development.webp | service-web-development.webp |

## Testimonials
| URL asli | Simpan sebagai |
|---|---|
| https://digiland.id/wp-content/uploads/2025/01/Hendra-Widjaya.webp | testimonial-hendra-widjaya.webp |
| https://digiland.id/wp-content/uploads/2025/01/Yasni-Lavinia-Sinar-Sakti-Union-2.webp | testimonial-yasni-lavinia.webp |
| https://digiland.id/wp-content/uploads/2025/01/Fitri-Bussiness-Owner.webp | testimonial-fitri.webp |

## Clients (PERLU DICEK MANUAL)
Logo klien (Terra Indonesia, Henwa, West Vista, Kalaniasia) tidak
ke-capture URL-nya saat saya fetch — kemungkinan lazy-loaded atau pakai
teknik custom Elementor. Cara cari manual:
1. Buka https://digiland.id, scroll ke section "Our Client".
2. Klik kanan salah satu logo -> **Inspect**.
3. Di panel DevTools, cari atribut `src` atau `data-src` pada tag `<img>`.
4. Copy URL-nya, download, simpan sebagai: `client-terra-indonesia.png`,
   `client-henwa.png`, `client-west-vista.png`, `client-kalaniasia.png`
   (sesuaikan ekstensi file kalau ternyata bukan .png).

---

Setelah semua gambar tersimpan di `public/images/`, jalankan lagi
`npm run dev` dan cek `http://localhost:4321` — semua gambar harusnya
langsung muncul karena path-nya sudah dikodekan di komponen.
