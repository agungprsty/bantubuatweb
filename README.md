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

Production berjalan di **VPS Contabo** (Ubuntu 24.04, dipakai bersama app lain): Node 24 LTS + PM2 (1 instance, port 3100) di belakang nginx (SSL Let's Encrypt via certbot) dan Cloudflare (CDN). File konfigurasi ada di [`deploy/`](deploy/).

Cek build production di lokal sebelum deploy:

```bash
npm run build && NUXT_DB_PATH=.data/dev.db node --env-file-if-exists=.env .output/server/index.mjs   # http://localhost:3000
```

### 1. Siapkan VPS (sekali, sebagai root)

```bash
# user aplikasi (non-root), login pakai SSH key yang sama dengan root
adduser bantubuat && usermod -aG sudo bantubuat
mkdir -p /home/bantubuat/.ssh && cp ~/.ssh/authorized_keys /home/bantubuat/.ssh/
chown -R bantubuat: /home/bantubuat/.ssh

# swap 2 GB, supaya `nuxt build` tidak kehabisan RAM
fallocate -l 2G /swapfile && chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile
echo '/swapfile none swap sw 0 0' >> /etc/fstab

# paket dasar (unattended-upgrades sudah aktif default di Ubuntu)
apt update && apt install -y git sqlite3 rclone fail2ban unattended-upgrades build-essential   # build-essential: compile better-sqlite3
curl -fsSL https://deb.nodesource.com/setup_24.x | bash - && apt install -y nodejs
npm install -g pm2

# folder database & backup, hanya bisa dibaca user aplikasi
mkdir -p /var/lib/bantubuat && chown bantubuat: /var/lib/bantubuat && chmod 700 /var/lib/bantubuat

# firewall
ufw allow OpenSSH && ufw allow 80,443/tcp && ufw enable
```

nginx + certbot sudah terpasang di VPS (dipakai situs lain). Jika belum: `apt install -y nginx certbot python3-certbot-nginx`.

Terakhir, matikan login password & root. **Pastikan `ssh bantubuat@<IP>` sudah berhasil di terminal lain** sebelum reload, supaya tidak terkunci di luar server:

```bash
printf 'PasswordAuthentication no\nPermitRootLogin no\n' > /etc/ssh/sshd_config.d/99-hardening.conf
sshd -t && systemctl reload ssh
```

### 2. Pasang aplikasi (sebagai `bantubuat`)

```bash
ssh-keygen -t ed25519 -C bantubuat-vps    # tambahkan ~/.ssh/id_ed25519.pub sebagai Deploy key (read-only) di repo GitHub
git clone git@github.com:agungprsty/bantubuatweb.git ~/app
cd ~/app && cp .env.example .env && chmod 600 .env
# isi .env: NUXT_DB_PATH=/var/lib/bantubuat/app.db, NUXT_SESSION_PASSWORD (openssl rand -hex 32), NUXT_ADMIN_EMAIL,
# NUXT_ADMIN_PASSWORD_HASH (read -rs PW && printf '%s' "$PW" | node scripts/hash-password.mjs && unset PW)
./deploy/deploy.sh                         # start pertama membuat tabel & mengisi data awal dari app/data

pm2 install pm2-logrotate
pm2 startup                                # jalankan perintah sudo yang dicetak, agar app hidup lagi setelah reboot

sudo cp deploy/nginx.conf /etc/nginx/sites-available/bantubuat.web.id
sudo ln -s /etc/nginx/sites-available/bantubuat.web.id /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

Cek situs sebelum DNS dipindah lewat tunnel: `ssh -L 3100:127.0.0.1:3100 bantubuat@<IP>`, lalu buka `http://localhost:3100`.

### 3. Pindah DNS dari Vercel ke VPS (Cloudflare)

1. Domain dikelola di Cloudflare (ganti nameserver di registrar jika belum).
2. Record `A` untuk `@` dan `www` → IP VPS, mode **DNS only** (awan abu-abu) dulu.
3. Pasang sertifikat: `sudo certbot --nginx -d bantubuat.web.id -d www.bantubuat.web.id --redirect`, lalu cek `https://bantubuat.web.id`.
4. Ubah record ke **Proxied** (awan oranye) dan set SSL/TLS ke **Full (strict)**.
5. Pasang monitor HTTPS di [UptimeRobot](https://uptimerobot.com) untuk `https://bantubuat.web.id/` (interval 5 menit).
6. Biarkan project Vercel tetap hidup ±1 minggu. Rollback darurat = kembalikan record DNS ke Vercel.

### Deploy rutin & rollback

```bash
ssh bantubuat@<IP> 'cd ~/app && ./deploy/deploy.sh'
```

Setiap deploy disimpan di `releases/` (3 terakhir). Rollback ke release sebelumnya:

```bash
cd ~/app && ls releases/
ln -sfn releases/<release-sebelumnya> current && pm2 reload bantubuat
```

Rollback kode tidak membatalkan migrasi database. Migrasi hanya boleh menambah (`server/database/migrations.ts`), jadi kode lama tetap jalan di DB yang lebih baru.

### Backup & restore database

Backup harian (`sqlite3 .backup` + cek integritas, simpan 7 hari di `/var/lib/bantubuat/backups`):

```bash
crontab -e   # sebagai bantubuat, tambahkan:
0 3 * * * /home/bantubuat/app/deploy/backup.sh >> /home/bantubuat/backup.log 2>&1
```

Salinan ke luar server: `rclone config`, buat remote storage (mis. Cloudflare R2 / Google Drive), lalu remote **crypt** bernama `backup` yang membungkusnya. `backup.sh` otomatis mengirim ke `backup:bantubuat` jika remote itu ada.

Restore (uji sekali setelah setup, lalu tiap kali dibutuhkan):

```bash
pm2 stop bantubuat
cp /var/lib/bantubuat/app.db /var/lib/bantubuat/app.db.sebelum-restore
gunzip -c /var/lib/bantubuat/backups/app-<tanggal>.db.gz > /var/lib/bantubuat/app.db
rm -f /var/lib/bantubuat/app.db-wal /var/lib/bantubuat/app.db-shm
pm2 start bantubuat
```

