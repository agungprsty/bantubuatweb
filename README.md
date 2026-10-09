# BantuBuatWeb | Jasa Pembuatan Website Professional

Platform & Layanan Jasa Pembuatan Website Professional di Indonesia: Company Profile, Toko Online (E-Commerce), Landing Page Iklan, dan Aplikasi Web Custom. Didesain dengan estetika **Neo-Brutalism**, responsif (mobile-first), super cepat, dan SEO optimized.

**Stack:** Nuxt 4 · Vue 3 · Tailwind CSS v4 · @nuxt/icon · TypeScript

**Live URL:** https://bantubuat.web.id

---

## 🚀 Fitur & Keunggulan

- **Neo-Brutalism Design System:** Tampilan modern, bold, dan eye-catching terinspirasi dari gaya desain kontemporer.
- **Super Fast & Lightweight:** Dibangun menggunakan Nuxt 4 & Vite untuk waktu muat halaman ultra cepat.
- **SEO Ready & Social Share:** Konfigurasi Meta Tags, Open Graph, Twitter Cards, JSON-LD Schema, serta sitemap otomatis.
- **Mobile-First & Responsive:** Tampilan rapi dan teroptimasi di berbagai layar (smartphone, tablet, desktop).
- **Integrasi WhatsApp Direct:** Kemudahan calon klien menghubungi langsung melalui aksi tombol WhatsApp.

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

