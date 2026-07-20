// src/i18n/ui.ts
//
// Satu sumber kebenaran untuk semua copy 2 bahasa (English = default,
// Indonesia = /id). Tiap komponen yang butuh teks terjemahan menerima
// prop `lang` ("en" | "id") lalu panggil t('key.nya') untuk ambil teks
// yang sesuai. Kalau suatu key belum ada terjemahan Indonesia-nya,
// otomatis fallback ke English supaya tidak pernah tampil kosong.

export const defaultLang = 'en';

export const languages = {
  en: { label: 'English', flag: '🇬🇧' },
  id: { label: 'Indonesia', flag: '🇮🇩' },
};

export const ui = {
  en: {
    // ---- nav ----
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.contactBtn': 'Contact Us',

    // ---- hero ----
    'hero.eyebrow': 'Digital Marketing Agency',
    'hero.title.line1': "Grow your business",
    'hero.title.connector': 'through',
    'hero.title.accent': 'SEO & Digital Marketing',
    'hero.subhead': 'Every business has a story worth telling — and an audience already waiting to hear it. We turn that story into visibility, combining data, creativity, and strategy into growth you can measure.',
    'hero.cta.primary': 'Free SEO Audit',
    'hero.cta.secondary': 'Our Services',
    'hero.trust': 'brands trust us',
    'hero.card.traffic': 'Organic Traffic',
    'hero.card.keyword': 'Keyword Ranking',
    'hero.card.keyword.value': 'Top 3',
    'hero.card.keyword.sub': '+15 Keywords',
    'hero.card.leads': 'Leads Generated',
    'hero.card.conversion': 'Conversion Rate',

    // ---- stats bar ----
    'stats.traffic': 'Average Increase in Traffic',
    'stats.clients': 'Happy Clients Across Indonesia',
    'stats.rating': 'Client Rating on Google',
    'stats.experience': 'Years Experience in Digital Marketing',

    // ---- about ----
    'about.eyebrow': 'About Us',
    'about.title': 'We help brands achieve remarkable results',
    'about.body': "Digiland.id started with a simple belief: great businesses deserve to be found by the people who need them most. For over 5 years, we've partnered with brands across Indonesia — combining deep SEO expertise, creative marketing, and honest data to turn overlooked websites into thriving digital destinations. Every strategy we build starts with your story, and ends with results you can measure.",
    'about.check1': 'Data-driven approach backed by deep research',
    'about.check2': 'Custom strategy tailored to your business needs',
    'about.check3': 'Experienced, certified team of specialists',
    'about.cta': 'Learn More About Us',
    'about.card.years': 'Years Experience',
    'about.card.projects': 'Projects Completed',

    // ---- services ----
    'services.eyebrow': 'What We Do',
    'services.title': 'Our Services',
    'services.subhead': 'A complete suite of digital marketing services to accelerate your business growth.',
    'services.seo.title': 'Search Engine Optimization (SEO)',
    'services.seo.desc': "Your customers are searching for you right now — we make sure they find you first. From technical audits to content strategy, we help your site climb the rankings and earn organic traffic that keeps growing.",
    'services.ppc.title': 'Pay-Per-Click (PPC Advertising)',
    'services.ppc.desc': 'Great products deserve fast visibility. Our targeted campaigns put your brand in front of the right audience at the right moment, turning clicks into customers without wasting your budget.',
    'services.social.title': 'Social Media Marketing',
    'services.social.desc': 'A brand is a conversation, not a broadcast. We build content and community strategies that turn followers into advocates — growing your audience where they already spend their time.',
    'services.web.title': 'Website Development',
    'services.web.desc': 'Your website is often the first impression — make it count. We design fast, mobile-friendly sites built not just to look good, but to convert visitors into leads.',
    'services.learnMore': 'Learn more',

    // ---- why choose us ----
    'why.eyebrow': 'Why Choose Us',
    'why.title': 'Why Clients Choose Digiland.id',
    'why.data.title': 'Data-Driven Strategy',
    'why.data.desc': 'Every decision we make is grounded in data, analysis, and up-to-date market research — never guesswork.',
    'why.transparent.title': 'Transparent & Honest',
    'why.transparent.desc': "Clear reporting, open communication, and absolutely no hidden fees. You'll always know exactly where your budget goes.",
    'why.client.title': 'Client-Centric Approach',
    'why.client.desc': "Your goals shape our strategy. We focus on outcomes that matter to your business, not vanity metrics.",
    'why.results.title': 'Results That Matter',
    'why.results.desc': "We measure success the way you do — through real growth, not just reports sitting in an inbox.",

    // ---- clients ----
    'clients.eyebrow': 'Trusted By Amazing Companies',

    // ---- testimonials ----
    'testimonials.eyebrow': 'Client Testimonials',
    'testimonials.title': 'What Our Clients Say',
    'testimonials.quote1': 'The team at Digiland.id is amazing! They understood our needs and delivered a tailored strategy that worked perfectly. Highly recommend!',
    'testimonials.name1': 'David R.',
    'testimonials.role1': 'Business Owner',
    'testimonials.quote2': "Digiland.id transformed our online presence! Their SEO expertise helped us rank higher, and we've seen a significant increase in traffic and sales.",
    'testimonials.name2': 'Yasni Lavinia',
    'testimonials.role2': 'Marketing Manager',
    'testimonials.quote3': 'Working with Digiland.id was a game changer. Our website now gets more traffic than ever, and the leads just keep coming!',
    'testimonials.name3': 'Fitri',
    'testimonials.role3': 'Business Owner',

    // ---- cta ----
    'cta.title': 'Ready to grow your business?',
    'cta.subhead': "Let's turn your next chapter into your best one yet. Reach out today and discover the strategy your brand has been waiting for.",
    'cta.button': 'Get Free SEO Audit',

    // ---- footer ----
    'footer.tagline': 'A digital marketing agency focused on growing your business in the digital era.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.resources': 'Resources',
    'footer.contact': 'Contact',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter.desc': 'Get the latest digital marketing insights every week.',
    'footer.newsletter.placeholder': 'Your email',
    'footer.rights': 'All Rights Reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  id: {
    // ---- nav ----
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.services': 'Layanan',
    'nav.portfolio': 'Portofolio',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontak',
    'nav.contactBtn': 'Hubungi Kami',

    // ---- hero ----
    'hero.eyebrow': 'Digital Marketing Agency',
    'hero.title.line1': 'Kembangkan bisnis Anda',
    'hero.title.connector': 'melalui',
    'hero.title.accent': 'SEO & Digital Marketing',
    'hero.subhead': 'Setiap bisnis punya cerita yang layak didengar — dan audiens yang sudah menunggu untuk mendengarnya. Kami mengubah cerita itu jadi visibilitas, memadukan data, kreativitas, dan strategi menjadi pertumbuhan yang bisa Anda ukur.',
    'hero.cta.primary': 'Free SEO Audit',
    'hero.cta.secondary': 'Layanan Kami',
    'hero.trust': 'klien percaya pada kami',
    'hero.card.traffic': 'Organic Traffic',
    'hero.card.keyword': 'Keyword Ranking',
    'hero.card.keyword.value': 'Top 3',
    'hero.card.keyword.sub': '+15 Keywords',
    'hero.card.leads': 'Leads Generated',
    'hero.card.conversion': 'Conversion Rate',

    // ---- stats bar ----
    'stats.traffic': 'Rata-rata Peningkatan Traffic',
    'stats.clients': 'Klien Puas di Seluruh Indonesia',
    'stats.rating': 'Rating Klien di Google',
    'stats.experience': 'Tahun Pengalaman di Digital Marketing',

    // ---- about ----
    'about.eyebrow': 'Tentang Kami',
    'about.title': 'Kami membantu brand meraih hasil yang luar biasa',
    'about.body': 'Digiland.id lahir dari satu keyakinan sederhana: bisnis yang hebat berhak ditemukan oleh orang-orang yang paling membutuhkannya. Selama lebih dari 5 tahun, kami telah bermitra dengan berbagai brand di Indonesia — memadukan keahlian SEO yang mendalam, pemasaran kreatif, dan data yang jujur untuk mengubah website yang terlewatkan menjadi destinasi digital yang berkembang. Setiap strategi yang kami susun dimulai dari cerita bisnis Anda, dan berakhir dengan hasil yang bisa diukur.',
    'about.check1': 'Pendekatan berbasis data & riset mendalam',
    'about.check2': 'Strategi custom sesuai kebutuhan bisnis',
    'about.check3': 'Tim ahli berpengalaman & bersertifikasi',
    'about.cta': 'Selengkapnya Tentang Kami',
    'about.card.years': 'Tahun Pengalaman',
    'about.card.projects': 'Proyek Selesai',

    // ---- services ----
    'services.eyebrow': 'Layanan Kami',
    'services.title': 'Layanan Kami',
    'services.subhead': 'Layanan digital marketing terlengkap untuk mengakselerasi pertumbuhan bisnis Anda.',
    'services.seo.title': 'Search Engine Optimization (SEO)',
    'services.seo.desc': 'Pelanggan Anda sedang mencari Anda sekarang juga — kami pastikan mereka menemukan Anda lebih dulu. Dari audit teknis hingga strategi konten, kami bantu website Anda naik peringkat dan meraih traffic organik yang terus bertumbuh.',
    'services.ppc.title': 'Pay-Per-Click (PPC Advertising)',
    'services.ppc.desc': 'Produk hebat layak mendapat visibilitas cepat. Kampanye iklan bertarget kami menempatkan brand Anda di depan audiens yang tepat, di momen yang tepat — mengubah klik jadi pelanggan tanpa memboroskan budget Anda.',
    'services.social.title': 'Social Media Marketing',
    'services.social.desc': 'Brand adalah percakapan, bukan siaran satu arah. Kami membangun konten dan strategi komunitas yang mengubah followers jadi pendukung setia — menumbuhkan audiens Anda di tempat mereka sudah menghabiskan waktu.',
    'services.web.title': 'Website Development',
    'services.web.desc': 'Website Anda seringkali menjadi kesan pertama — pastikan itu berarti. Kami merancang website yang cepat dan mobile-friendly, dibuat bukan cuma untuk terlihat bagus, tapi untuk mengubah pengunjung jadi leads.',
    'services.learnMore': 'Selengkapnya',

    // ---- why choose us ----
    'why.eyebrow': 'Kenapa Memilih Kami',
    'why.title': 'Mengapa Klien Memilih Digiland.id?',
    'why.data.title': 'Data-Driven Strategy',
    'why.data.desc': 'Setiap keputusan yang kami ambil berdasarkan data, analisis, dan riset pasar terkini — bukan tebakan.',
    'why.transparent.title': 'Transparan & Jujur',
    'why.transparent.desc': 'Laporan jelas, komunikasi terbuka, dan sama sekali tidak ada biaya tersembunyi. Anda akan selalu tahu persis ke mana budget Anda mengalir.',
    'why.client.title': 'Berorientasi pada Klien',
    'why.client.desc': 'Tujuan Anda yang membentuk strategi kami. Kami fokus pada hasil yang benar-benar berarti bagi bisnis Anda, bukan sekadar angka di atas kertas.',
    'why.results.title': 'Hasil yang Bermakna',
    'why.results.desc': 'Kami mengukur kesuksesan dengan cara yang sama seperti Anda — lewat pertumbuhan nyata, bukan sekadar laporan yang teronggok di inbox.',

    // ---- clients ----
    'clients.eyebrow': 'Dipercaya Perusahaan-Perusahaan Ternama',

    // ---- testimonials ----
    'testimonials.eyebrow': 'Testimoni Klien',
    'testimonials.title': 'Apa Kata Klien Kami',
    'testimonials.quote1': 'Tim Digiland.id sangat profesional dan memahami kebutuhan bisnis kami. Hasil SEO mereka luar biasa, traffic meningkat 3x lipat!',
    'testimonials.name1': 'David R.',
    'testimonials.role1': 'Business Owner',
    'testimonials.quote2': 'Pelayanan responsif, strategi tepat, dan hasil nyata. Kami sangat puas bekerja sama dengan Digiland.id.',
    'testimonials.name2': 'Yasni Lavinia',
    'testimonials.role2': 'Marketing Manager',
    'testimonials.quote3': 'Website baru kami lebih cepat, modern, dan konversinya meningkat signifikan. Terima kasih Digiland.id!',
    'testimonials.name3': 'Fitri',
    'testimonials.role3': 'Business Owner',

    // ---- cta ----
    'cta.title': 'Siap mengembangkan bisnis Anda?',
    'cta.subhead': 'Mari ubah babak berikutnya jadi yang terbaik. Hubungi kami hari ini dan temukan strategi yang selama ini brand Anda tunggu.',
    'cta.button': 'Dapatkan Free SEO Audit',

    // ---- footer ----
    'footer.tagline': 'Agensi digital marketing yang fokus pada pertumbuhan bisnis Anda di era digital.',
    'footer.services': 'Layanan',
    'footer.company': 'Perusahaan',
    'footer.resources': 'Sumber Daya',
    'footer.contact': 'Kontak',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter.desc': 'Dapatkan insight digital marketing terbaru setiap minggunya.',
    'footer.newsletter.placeholder': 'Email Anda',
    'footer.rights': 'Seluruh Hak Cipta Dilindungi.',
    'footer.privacy': 'Kebijakan Privasi',
    'footer.terms': 'Syarat Layanan',
  },
} as const;

export type Lang = keyof typeof ui;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['en']): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key] ?? key;
  };
}

/** Tukar path saat ini ke bahasa lain, misal "/blog" -> "/id/blog". */
export function getLocalizedPath(path: string, targetLang: Lang): string {
  const stripped = path.replace(/^\/id(\/|$)/, '/');
  if (targetLang === defaultLang) return stripped;
  return `/id${stripped}`.replace(/\/+$/, '') || '/id';
}
