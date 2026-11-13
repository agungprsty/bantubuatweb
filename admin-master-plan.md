# Master Plan: Panel Admin BantuBuatWeb

> Status: **revisi 3, hosting pindah dari Vercel ke VPS** · Diperbarui: 13 November 2026
> Ruang lingkup rilis pertama: **MVP saja**. Panel `/admin` untuk analitik, proyek, anggaran, testimoni (list + form), dan pengaturan website.

---

## 0. Keputusan Hasil Review

| # | Topik | Keputusan | Dampak ke plan |
|---|---|---|---|
| 1 | Hosting | Pindah ke **VPS** (Node server, 1 proses) | Database **SQLite lokal** di disk VPS, tanpa layanan DB eksternal. Rate limit cukup di memori. Upload file kini memungkinkan, tapi tetap di Backlog (keputusan #8) |
| 2 | Pengguna admin | **1 akun** | Tanpa tabel user & role |
| 3 | Analitik | **First-party + GA4 tetap jalan** | GA4 Data API / Search Console tidak dikerjakan |
| 4 | Form testimoni | **Hanya via link unik per proyek** | Tidak ada form testimoni terbuka di website |
| 5 | Blog | **Tetap markdown + Git** | Tidak ada editor blog di admin |
| 6 | Data lama | **Migrasi apa adanya** dari `homeData.ts` & `portfolio.ts` | Seed langsung dari file TS yang ada |
| 7 | Keuangan | **Rupiah saja, tanpa pajak** | Tidak ada kolom pajak / mata uang |
| 8 | Enhancement | **MVP saja dulu** | Semua item non-MVP dipindah ke Backlog (bagian 9) |

---

## 1. Hasil Riset Kondisi Saat Ini

| Area | Kondisi sekarang | Dampak ke panel admin |
|---|---|---|
| Stack | Nuxt 4.5 + Vue 3 + Tailwind v4, saat ini deploy di Vercel | Pindah ke VPS dengan preset Nitro `node-server`. Server API Nitro (`server/api`) jalan di proses Node yang sama, tanpa backend terpisah. Kode tidak memakai fitur khusus Vercel |
| Data konten | Hardcode di `app/data/portfolio.ts` (PORTFOLIO), `homeData.ts` (HOME_TESTIMONIALS, HOME_PLANS, HOME_FAQ), `services.ts` (SERVICES) | Testimoni, portofolio, harga, FAQ dipindah ke database |
| Blog | Markdown di `content/blog/*.md`, dibaca saat build | Tidak berubah |
| Analitik | GA4 + plugin `analytics.client.ts` yang sudah melacak `page_view` & `click_cta_whatsapp` | Plugin yang sama ditambah kirim event ke endpoint sendiri |
| Kontak | `WA_NUMBER` hardcode di `app/utils/wa.ts` | Dipindah ke Pengaturan |
| SEO | Meta default di `nuxt.config.ts`, `public/sitemap.xml` statis | Meta default bisa diatur dari admin. Sitemap tetap statis (backlog) |
| Backend | Belum ada `server/`, DB, maupun auth | Dibangun dari nol di Fase 0 |
| Design system | Neo-Brutalism (token `neo-*`, `.neo-box`, `shadow-neo-*`) | Panel admin memakai token & kelas yang sama |

---

## 2. Keputusan Arsitektur

### 2.1 Database: SQLite lokal via `better-sqlite3`
- `better-sqlite3` dipakai langsung lewat `useDb()` di `server/utils/db.ts`, tanpa `db0` / `nitro.experimental.database` (tidak experimental, API sinkron, ada transaksi). Dependency baru: **`better-sqlite3`** (satu-satunya; prebuild sudah ikut di paket, tanpa compile).
- File DB di luar folder aplikasi: `/var/lib/bantubuat/app.db` di production lewat env runtime `NUXT_DB_PATH` (wajib; app gagal start jika kosong), `.data/dev.db` saat `npm run dev`. Deploy ulang atau `git clean` tidak menyentuh data.
- Saat start: `PRAGMA journal_mode=WAL`, `busy_timeout=5000`, `foreign_keys=ON`.
- **Migrasi:** daftar langkah di `server/database/migrations.ts`, dijalankan sekali per DB dan dicatat di `PRAGMA user_version`. Seed adalah salah satu langkahnya, jadi data awal tidak terisi ulang setelah dihapus admin. Langkah baru hanya boleh ditambah di akhir.
- Latensi query nyaris nol karena DB berada di disk yang sama dengan aplikasi.
- **Backup:** cron harian `sqlite3 app.db ".backup …"` → simpan 7 hari di VPS + salin ke luar server (Cloudflare R2 / Google Drive via `rclone`). Restore diuji sekali di Fase 0.

### 2.2 Autentikasi: 1 admin, session cookie bawaan h3
- `useSession()` dari h3 (cookie terenkripsi, `httpOnly`, `secure`, `sameSite=lax`, 7 hari). Tidak perlu library auth.
- Env: `NUXT_ADMIN_EMAIL`, `NUXT_ADMIN_PASSWORD_HASH` (hash awal, scrypt `node:crypto`), `NUXT_SESSION_PASSWORD` (≥32 karakter).
- Fitur ganti password menyimpan hash baru di tabel `settings`. Hash di env hanya dipakai kalau belum ada hash di DB.
- Proteksi dua lapis: server middleware `/api/admin/**` (wajib) + route middleware halaman `/admin/**` (UX).

### 2.3 Analitik first-party
- `analytics.client.ts` ditambah `navigator.sendBeacon('/api/track', …)` di dua titik yang sudah ada (page view & klik WA). Path `/admin` dan `/testimoni` diabaikan.
- Disimpan: path, domain referrer, device, UTM, tipe event, label CTA, waktu.
- **Tanpa IP mentah.** Pengunjung unik = `HMAC(secret, tanggal + IP + UA)`. Salt harian diturunkan dari secret + tanggal, jadi tidak perlu disimpan.
- GA4 tetap berjalan seperti sekarang.

### 2.4 Rendering & cache
- `/admin/**` di-render sebagai SPA (`ssr: false` via `routeRules`) + header `X-Robots-Tag: noindex`.
- Halaman publik tetap SSR dan mengambil data lewat `/api/public/**`. Endpoint ini memakai `routeRules: { swr: 60 }`, jadi di-cache oleh Nitro di memori server. Perubahan dari admin tampil di situs dalam ±1 menit.
- Aset build `/_nuxt/**` sudah dikirim Nitro dengan cache `immutable` 1 tahun. Cloudflare (proxy, paket gratis) di depan VPS sebagai CDN + perlindungan DDoS.
- Jika query DB gagal, endpoint publik memakai data seed (`app/data/*.ts`) sebagai fallback supaya beranda tidak error.

### 2.5 UI
- Layout baru `app/layouts/admin.vue` (sidebar + topbar), memakai ulang `AppIcon`/`AppLogo` dan token Neo-Brutalism.
- Grafik: SVG sederhana (bar & garis), tanpa library chart.

### 2.6 Server & deploy
- **VPS:** 1 vCPU / 2 GB RAM + swap 2 GB (untuk `nuxt build`), Ubuntu 24.04, lokasi Jakarta (latensi lokal rendah, data di Indonesia sesuai UU PDP). Node 24 LTS.
- **Proses:** PM2 menjalankan `current/server/index.mjs` sebagai **1 instance (fork mode)**, auto-restart dan start saat boot. Wajib 1 instance karena rate limit & cache SWR disimpan di memori.
- **Reverse proxy:** Caddy (SSL otomatis) → `127.0.0.1:3000`, dengan `lb_try_duration` supaya pengunjung tidak kena 502 selama reload. Node hanya listen di localhost.
- **Deploy:** `deploy/deploy.sh` di server: `git pull` → `npm ci` → `npm run build` → salin `.output` ke `releases/<waktu>` → ganti symlink `current` → `pm2 reload`. App tidak rusak saat build berjalan, dan 3 release terakhir disimpan untuk rollback. Dijalankan manual via SSH (GitHub Actions di backlog).
- **Preset Nitro tidak di-set di `nuxt.config.ts`:** build di VPS otomatis `node-server`, build di Vercel otomatis `vercel`. Jadi Vercel tetap bisa jadi rollback selama masa transisi.
- **Env:** file `.env` di server (`chmod 600`, milik user aplikasi), tidak masuk Git.
- **Log:** PM2 log + `pm2-logrotate` agar disk tidak penuh.
- **Monitoring:** UptimeRobot (gratis) cek `/` dan `/api/public/settings` setiap 5 menit, notifikasi ke email/Telegram.
---

## 3. Modul & Fitur MVP

### 3.1 Dashboard
- Kartu ringkasan: pengunjung 30 hari, klik WhatsApp, conversion rate (klik WA / pengunjung), proyek aktif, piutang belum tertagih, testimoni menunggu moderasi.
- Grafik pengunjung & klik WA harian selama 30 hari.

### 3.2 Analitik
- Filter rentang: 7 / 30 / 90 hari / custom.
- Halaman teratas, sumber trafik (referrer + UTM), perangkat.
- Klik WA per halaman & per label tombol CTA.

### 3.3 Proyek
- CRUD proyek: nama klien, kontak, nama proyek, kategori layanan (slug dari `SERVICES`), paket (dari tabel `plans`), domain/URL, tanggal mulai / target / selesai, catatan.
- Status: `lead → negosiasi → deal → dikerjakan → review → selesai → maintenance → batal`.
- Tabel dengan filter status/kategori + pencarian.
- **Toggle "Tampilkan di Portofolio"** + field publik (tag, gambar, deskripsi, hasil, gradient, urutan). `/proyek` dan carousel beranda membaca dari sini, menggantikan `PORTFOLIO`.
- Gambar portofolio tetap disimpan di `public/images/portfolio/` lewat Git. Admin cukup mengisi path-nya. Upload langsung dari admin ada di Backlog.

### 3.4 Detail Anggaran
- Per proyek: nilai kontrak & diskon.
- **Termin pembayaran**: label (DP 50%, Pelunasan, …), nominal, jatuh tempo, tanggal bayar, metode, status `belum` / `lunas`.
- **Biaya**: kategori (domain, hosting, lisensi/plugin, API/AI credit, freelancer, iklan, lain-lain), nominal, tanggal, catatan. Biaya boleh tanpa proyek (biaya umum).
- Hitungan otomatis: total diterima, sisa piutang, total biaya, margin (Rp & %).
- Halaman rekap keuangan: pendapatan & biaya per bulan, total piutang berjalan, margin per kategori layanan.
- Semua nominal disimpan sebagai **integer Rupiah**.

### 3.5 Testimoni
**Admin**
- Tabel: nama, peran, proyek, rating, isi, status (`pending` / `disetujui` / `ditolak`), sumber (form klien / input admin).
- Aksi: setujui, tolak, edit, hapus, tandai unggulan, atur urutan.
- Input manual untuk testimoni yang diterima lewat WA.
- `home/Testimonials.vue` hanya menampilkan testimoni berstatus `disetujui`.

**Form klien `/testimoni/[token]`**
- Di detail proyek, admin klik "Buat link testimoni", lalu salin link atau kirim lewat tombol WA (helper `wa()` yang sudah ada).
- Field: nama, jabatan & nama usaha, rating 1–5, testimoni (min. 30 karakter), hasil yang dirasakan (opsional), **centang izin publikasi** (wajib).
- Token acak, sekali pakai, berlaku 30 hari. Nama proyek terisi otomatis dari token.
- Anti-spam: honeypot, batas panjang input, rate limit per IP.
- Setelah kirim: halaman terima kasih + ajakan memberi review di Google Business Profile.

### 3.6 Pengaturan
- **Kontak & bisnis**: nomor WA (menggantikan `WA_NUMBER`), pesan default WA, email, alamat, jam operasional.
- **Sosial media**: Instagram, Facebook, LinkedIn.
- **SEO default**: judul, deskripsi, keywords, gambar OG. Dipasang lewat `useHead` di `app.vue`. Meta di `nuxt.config.ts` tetap sebagai fallback.
- **Paket harga** (HOME_PLANS) & **FAQ** (HOME_FAQ): tambah, edit, hapus, urutkan.
- **Akun**: ganti password.

---

## 4. Skema Data

```text
settings            key (PK), value (JSON), updated_at        -- termasuk admin_password_hash
projects            id, client_name, client_contact, title, service_slug, plan_id → plans, status,
                    domain, url, start_date, due_date, done_date, notes,
                    contract_value, discount,                                  -- integer Rupiah
                    is_public, public_tag, public_desc, public_result,
                    public_image, public_grad, public_order,
                    created_at, updated_at
payments            id, project_id → projects, label, amount, due_date, paid_date, method, status
expenses            id, project_id → projects (nullable), category, amount, date, note
testimonials        id, project_id → projects (nullable), name, role, rating, quote, result,
                    avatar, initial, tag, status, featured, sort_order, source, consent, created_at
testimonial_tokens  token (PK), project_id, expires_at, used_at
plans               id, name, description, price, original, renewal, cta, featured, color, icon,
                    badge, perks (JSON), sort_order
faqs                id, question, answer, sort_order
events              id, type ('pageview'|'wa_click'), path, referrer, utm_source, utm_medium,
                    utm_campaign, device, label, visitor_hash, created_at
```

- Indeks: `events(type, created_at)`, `projects(status)`, `payments(status, due_date)`.
- Rate limit tidak butuh tabel: disimpan di `Map` memori karena hanya ada 1 proses. Reset saat restart, dan itu tidak masalah.

---

## 5. Struktur File

```text
server/
├── database/
│   ├── migrations.ts           # schema + langkah migrasi (PRAGMA user_version)
│   └── seed.ts                 # app/data/*.ts → DB, langkah migrasi ke-2
├── plugins/db.ts               # buka DB + migrasi saat start
├── middleware/admin-auth.ts
├── utils/                      # db, adminSession, password (scrypt), rateLimit + clientIp
└── api/
    ├── track.post.ts
    ├── public/                 # settings, plans, faqs, testimonials, portfolio (GET, cache SWR 60 dtk)
    ├── testimoni/[token].get.ts, [token].post.ts
    └── admin/
        ├── auth/               # login, logout, me
        ├── projects/           # CRUD + [id]/testimonial-link.post.ts (token testimoni)
        ├── payments/, expenses/ # termin & biaya (expenses?umum=1 = biaya umum)
        ├── plans/              # pilihan paket untuk form proyek
        ├── testimonials/
        ├── analytics/
        ├── finance/summary.get.ts
        └── settings/           # settings, plans, faqs, password

app/
├── layouts/admin.vue
├── components/admin/       # Stat, StatusBadge, ProjectForm, PaymentManager, ExpenseManager, TestimonialForm, TestimonialLink
├── composables/usePortfolio.ts
├── middleware/admin.ts
└── pages/
    ├── admin/
    │   ├── login.vue
    │   ├── index.vue           # dashboard
    │   ├── analitik.vue
    │   ├── proyek/index.vue, [id].vue   # detail + tab anggaran + link testimoni
    │   ├── keuangan.vue
    │   ├── testimoni.vue
    │   └── pengaturan.vue
    └── testimoni/[token].vue

deploy/
├── deploy.sh                   # pull, install, build, pm2 reload
├── backup.sh                   # sqlite .backup + rclone ke luar server (cron harian)
├── Caddyfile
└── ecosystem.config.cjs        # PM2, 1 instance
```

Perubahan pada file yang sudah ada:
- `nuxt.config.ts`: `routeRules` untuk `/admin/**` & `/api/public/**`, `runtimeConfig`.
- `app/plugins/analytics.client.ts`: tambah beacon ke `/api/track`.
- `home/Testimonials.vue`, `Pricing.vue`, `Faq.vue`, `PortfolioCarousel.vue`, `pages/proyek.vue`: data dari `/api/public/**`.
- `shared/utils/admin.ts`: status proyek, status termin, kategori biaya, dan daftar gradient portofolio (dipakai server & admin).
- `app/utils/wa.ts`, `layouts/default.vue`: nomor WA & sosial media dari settings.
- `public/robots.txt`: `Disallow: /admin` dan `Disallow: /testimoni/`.
- `app/data/portfolio.ts`, `homeData.ts`: tetap ada sebagai sumber seed dan fallback.
- `package.json`: tambah `better-sqlite3`.
- `README.md`: bagian deploy diganti panduan VPS.

---

## 6. Keamanan

- Semua endpoint `/api/admin/**` dicek session di server.
- Password di-hash dengan scrypt. Cookie session `httpOnly`, `secure`, `sameSite=lax`.
- Rate limit (memori): login 5x / 15 menit, form testimoni, dan `/api/track`.
- IP klien diambil dari header `X-Real-IP`, yang selalu ditimpa Caddy dengan `{client_ip}`. Caddy hanya membaca `CF-Connecting-IP` jika request datang dari rentang IP Cloudflare (`trusted_proxies`), jadi tidak bisa dipalsukan. Node listen di `127.0.0.1`.
- Middleware admin mengecek path yang sudah di-decode (`/api/%61dmin/...` juga dicek), karena router Nitro men-decode path.
- Semua input divalidasi di server (tipe, panjang, enum status, nominal ≥ 0). Query parameterized lewat prepared statement `better-sqlite3`.
- Testimoni dirender sebagai teks biasa, **tanpa `v-html`**.
- Token testimoni dari `crypto.randomBytes`, sekali pakai, ada masa berlaku.
- `noindex` untuk `/admin/**` & `/testimoni/**`.
- Token testimoni disamarkan (`/testimoni/_`) di semua data yang dikirim ke GA4, dan halaman `/admin` tidak dilacak GA4.
- Testimoni hanya bisa berstatus Disetujui jika ada izin publikasi (`consent`), baik dari form klien maupun input admin.
- Analitik tidak menyimpan IP mentah.
- Secret (session password, hash admin) hanya di `.env` server, tidak masuk Git.
- **Hardening VPS:** login SSH hanya dengan key (password & root login dimatikan), `ufw` hanya buka 22/80/443, `unattended-upgrades` untuk patch keamanan, `fail2ban` untuk SSH. Aplikasi jalan sebagai user non-root.
- File DB & backup hanya bisa dibaca user aplikasi (`chmod 600`). Backup di luar server dienkripsi (`rclone crypt`).

---

## 7. Roadmap

| Fase | Isi | Estimasi |
|---|---|---|
| **0a. Migrasi ke VPS** | Sewa & hardening VPS, Node + PM2 + Caddy, `deploy/*`, Cloudflare + pindah DNS dari Vercel, uptime monitor. Situs publik harus sama persis sebelum DNS dipindah | 1–2 hari |
| **0b. Fondasi** | SQLite + backup (uji restore), schema, seed dari `app/data`, auth, layout admin, middleware, robots/noindex | 2–3 hari |
| **1. Proyek & Anggaran** | CRUD proyek, status, termin, biaya, margin, rekap keuangan, toggle portofolio → `/proyek` & carousel baca dari DB | 3–4 hari |
| **2. Testimoni** | Moderasi, input manual, token + form `/testimoni/[token]`, beranda baca dari DB | 2–3 hari |
| **3. Analitik & Dashboard** | `/api/track`, update plugin, agregasi, halaman analitik, kartu & grafik dashboard | 2–3 hari |
| **4. Pengaturan** | Kontak/sosial/SEO, plans, FAQ, ganti password | 2 hari |

Total sekitar **12–17 hari kerja**. Setiap fase dirilis terpisah. Karena tidak ada preview deployment, cek dulu dengan `npm run build && node .output/server/index.mjs` di lokal, baru deploy ke production. Project Vercel dibiarkan hidup ±1 minggu setelah DNS pindah sebagai rollback cepat. Halaman publik harus tampil sama sebelum & sesudah migrasi (cek beranda, `/proyek`, harga, FAQ).

---

## 8. Risiko

| Risiko | Mitigasi |
|---|---|
| VPS mati / crash (satu titik kegagalan) | PM2 auto-restart, UptimeRobot memberi notifikasi, halaman publik fallback ke data seed jika DB error |
| Disk VPS rusak, data hilang | Backup harian di luar server + restore sudah diuji |
| Disk penuh (log, event analitik) | `pm2-logrotate`; event mentah dihapus berkala (backlog); cek kapasitas di monitoring |
| Server dibobol | Hardening di bagian 6; patch keamanan otomatis |
| Lonjakan trafik melebihi kapasitas VPS | Cloudflare cache aset statis; SWR di endpoint publik; upgrade paket VPS jika perlu |
| `better-sqlite3` modul native tidak cocok dengan server | Prebuild Linux x64/arm64 ikut di paket dan disalin Nitro ke `.output`; `npm ci` & build tetap dijalankan di VPS itu sendiri |
| Data keuangan bocor | Bagian 6 |

---

## 9. Backlog (setelah MVP)

Tidak dikerjakan di rilis pertama. Dipilih lagi setelah MVP berjalan.

- Dashboard "Perlu tindakan" (termin jatuh tempo, testimoni pending) + grafik pendapatan 12 bulan
- Kanban proyek, checklist milestone
- Tracker perpanjangan domain/hosting
- Cetak invoice/kuitansi (halaman print)
- Inbox leads dari form konsultasi
- Analitik per artikel blog & per landing page wilayah, ekspor CSV
- Schema JSON-LD `Review`/`AggregateRating` dari testimoni
- Upload foto klien / gambar portofolio (disimpan di `/var/lib/bantubuat/uploads`, ikut backup)
- Notifikasi testimoni baru / jatuh tempo via WA atau email
- Sitemap dinamis, banner pengumuman, ekspor data JSON
- Retensi event analitik otomatis (Nitro scheduled task atau cron VPS)
- Subdomain staging di VPS yang sama (pengganti preview deployment Vercel)
- Deploy otomatis via GitHub Actions (SSH ke VPS) saat push ke `main`
- Audit log, 2FA
