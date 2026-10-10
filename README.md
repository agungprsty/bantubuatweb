# BantuBuatWeb | Jasa Website & Solusi Transformasi Digital Bisnis

Platform & Layanan Jasa Pembuatan Website Professional dan Solusi Transformasi Digital di Indonesia. Kami membantu bisnis, UMKM, hingga enterprise membangun ekosistem digital terpadu untuk meningkatkan kredibilitas, mengotomatisasi alur kerja, dan melipatgandakan omzet penjualan: Company Profile, Toko Online (E-Commerce), Landing Page Iklan, Aplikasi Web Custom, serta Sistem Terintegrasi. Didesain dengan estetika **Neo-Brutalism**, responsif (mobile-first), super cepat, dan SEO-optimized.

**Stack:** Nuxt 4 · Vue 3 · Tailwind CSS v4 · @nuxt/icon · TypeScript

**Live URL:** https://bantubuat.web.id

---

## 🚀 Solusi & Keunggulan Utama

- **Transformasi Digital & Peningkatan Omzet:** Ekosistem digital end-to-end yang dirancang strategis untuk mengonversi pengunjung menjadi pelanggan setia dan mendongkrak penjualan bisnis.
- **Implementasi Advance SEO:** Optimasi arsitektur teknis mendalam, Core Web Vitals (skor 90+), Schema JSON-LD terstruktur, dan Local SEO untuk mendominasi peringkat teratas Google.
- **Chatbot AI & Integrasi LLM:** Otomatisasi CS 24/7 dan asisten cerdas berbasis OpenAI GPT / Claude / Gemini yang dilatih khusus dengan knowledge base bisnis Anda.
- **Integrasi Payment Gateway & 3rd Party API:** Pembayaran otomatis instan via QRIS, Virtual Account, E-Wallet (Midtrans, Xendit, Doku) serta API logistik & cek ongkir otomatis multi-ekspedisi.
- **Otomasi Alur Kerja & CRM:** Integrasi WhatsApp Business API, CRM, dan sistem operasional bisnis (n8n/Zapier) untuk alur kerja otomatis tanpa celah.
- **Neo-Brutalism Design System:** Identitas visual modern, berani (bold), dan berkarakter kuat terinspirasi dari standar desain global untuk membangun impresi profesional dan kredibel.
- **Super Fast & Lightweight Performa:** Dibangun dengan arsitektur Nuxt 4 & Vite untuk load time ultra cepat (< 2 detik) guna memaksimalkan retensi pengunjung dan konversi.
- **Mobile-First & High Conversion:** Antarmuka responsif dan teroptimasi penuh untuk smartphone, tablet, hingga desktop dengan alur navigasi intuitif.

---

## 💼 Katalog Layanan

1. **Website Development:**
   - Website Company Profile (Profil Usaha, Portfolio Proyek & Legalitas)
   - Toko Online / E-Commerce (Katalog Produk, Keranjang Belanja & Manajemen Stok)
   - Landing Page Iklan (High-Converting Page untuk Google & Meta Ads)
   - Portal Berita, Lembaga, Komunitas, Sekolah & Rumah Sakit
   - Jasa Pembuatan Website Wilayah (Jogja, Lampung, Jakarta & Seluruh Indonesia)
2. **AI & Transformasi Digital:**
   - **Implementasi Advance SEO:** Technical SEO, Schema Markup, Semantic HTML, Sitemap Dinamis & Local SEO
   - **Chatbot AI & Otomasi CS:** Asisten AI 24/7 untuk menjawab pertanyaan pelanggan & filter leads
   - **Integrasi LLM & AI Generatif:** Integrasi API OpenAI / Claude / Gemini, RAG Dokumen Bisnis & Smart Recommender
   - **Integrasi Payment Gateway:** Midtrans, Xendit, QRIS, Virtual Account & Webhook Verifikasi Otomatis
   - **Integrasi API Ongkir & Logistik:** Multi-kurir JNE, J&T, SiCepat, RajaOngkir, Biteship & Auto-AWB Resi
   - **Otomasi Alur Kerja & CRM:** Sinkronisasi WhatsApp API, Google Sheets/Notion, Email & Notifikasi Tim Sales

---

## 🛠️ Cara Memulai (Development Setup)

### Prasyarat
- Node.js `v18.x` atau lebih baru
- npm, pnpm, atau yarn

### Perintah Utama

```bash
# Install dependencies
npm install

# Jalankan server pengembangan (http://localhost:3000)
npm run dev

# Build untuk produksi (SSR / Node.js)
npm run build

# Preview hasil build produksi
npm run preview

# Generate situs statis (SSG)
npm run generate
```

---

## 📁 Struktur Direktori

```text
├── app/
│   ├── assets/
│   │   └── css/main.css         # Theme CSS, Neo-Brutalism styling & Tailwind setup
│   ├── components/
│   │   ├── home/                # Komponen Beranda (Hero, Keunggulan, Pricing, FAQ, Video, dll.)
│   │   ├── AppIcon.vue          # Wrapper icon serbaguna
│   │   ├── AppLogo.vue          # Komponen Logo BantuBuatWeb
│   │   └── LegalPage.vue        # Layout reusable untuk dokumen legal
│   ├── data/
│   │   ├── homeData.ts          # Data konten Beranda (FAQ, Keunggulan, Testimonial, dll.)
│   │   ├── portfolio.ts         # Data karya & proyek portofolio
│   │   └── services.ts          # Catalog daftar layanan & detailnya
│   ├── layouts/
│   │   └── default.vue          # Main Layout (Header, Footer, Floating CTA)
│   ├── pages/
│   │   ├── index.vue            # Halaman utama (Landing page)
│   │   ├── layanan/             # Daftar & detail layanan (/layanan & /layanan/[slug])
│   │   ├── proyek.vue           # Showroom portofolio proyek
│   │   ├── team.vue             # Profile tim & tentang kami
│   │   ├── terms.vue / privacy  # Halaman Syarat, Ketentuan & Privasi
│   │   └── [...slug].vue        # Halaman 404 Custom
│   └── utils/
│       └── wa.ts                # Generator URL WhatsApp & konfigurasi nomor
├── public/                      # Asset publik (favicon, og-cover.svg, robots.txt)
├── nuxt.config.ts               # Konfigurasi Nuxt 4, Meta SEO, Icon set & Vite
└── package.json                 # Dependency & npm scripts
```

---

## ⚙️ Kustomisasi Cepat

1. **Nomor WhatsApp:** Ubah nomor tujuan pada [`app/utils/wa.ts`](file:///home/farghani/freelance/bantubuat.web.id/app/utils/wa.ts) (`WA_NUMBER`).
2. **Daftar Layanan:** Tambahkan atau perbarui data layanan di [`app/data/services.ts`](file:///home/farghani/freelance/bantubuat.web.id/app/data/services.ts).
3. **Portofolio & Testimoni:** Sesuaikan daftar proyek di [`app/data/portfolio.ts`](file:///home/farghani/freelance/bantubuat.web.id/app/data/portfolio.ts) & [`app/data/homeData.ts`](file:///home/farghani/freelance/bantubuat.web.id/app/data/homeData.ts).
4. **Meta SEO & Head:** Perbarui judul default, deskripsi, dan Open Graph pada [`nuxt.config.ts`](file:///home/farghani/freelance/bantubuat.web.id/nuxt.config.ts).

---

## 🚢 Deployment

Proyek ini dapat di-deploy ke server Node.js maupun platform Jamstack/SSG (Vercel, Netlify, Cloudflare Pages):

- **SSR / Node Server:** Jalankan `npm run build`, lalu jalankan output via `node .output/server/index.mjs`.
- **Static Hosting (SSG):** Jalankan `npm run generate`, lalu upload folder `.output/public/`.

