export interface Article {
  slug: string
  title: string
  description: string
  date: string
  author: string
  authorRole: string
  category: string
  tags: string[]
  readTime: string
  image: string
  content: string
}

export const ARTICLES: Article[] = [
  {
    slug: 'rincian-biaya-pembuatan-website',
    title: 'Rincian Biaya Pembuatan Website 2026: Panduan Lengkap & Transparan untuk UMKM',
    description: 'Berapa biaya riil membuat website bisnis di 2026? Simak rincian domain, hosting, biaya develop, hingga tips agar tidak boncos & tertipu biaya tersembunyi.',
    date: '2026-10-09',
    author: 'Agung Prasetyo',
    authorRole: 'Founder & Tech Lead BantuBuatWeb',
    category: 'Edukasi Bisnis',
    tags: ['Biaya Website', 'UMKM', 'Tips Bisnis', 'Domain Hosting'],
    readTime: '6 min baca',
    image: '/og-cover.svg',
    content: `
Banyak pemilik bisnis dan pelaku UMKM yang ragu membuat website karena simpang siur mengenai estimasi biaya. Di satu sisi, ada tawaran "bikin website 100 ribu", namun di sisi lain agensi besar mematok harga hingga puluhan juta rupiah.

Mengapa perbedaannya bisa sangat ekstrem? Di artikel ini, kita bedah secara transparan seluruh komponen biaya pembuatan website di Indonesia tahun 2026 agar Anda tidak salah langkah.

---

## 1. Tiga Komponen Utama Biaya Website

Setiap website di dunia membutuhkan 3 komponen fundamental:

### A. Nama Domain (.com / .id / .co.id)
Domain adalah alamat digital bisnis Anda (contoh: \`namabisnis.com\` atau \`bantubuat.web.id\`).
- **Domain .com:** Rp 150.000 – Rp 220.000 / tahun
- **Domain .id (ccTLD Indonesia):** Rp 200.000 – Rp 250.000 / tahun
- **Domain .web.id / .my.id:** Rp 30.000 – Rp 60.000 / tahun

### B. Hosting / Server Cloud
Tempat menyimpan aset gambar, database, dan kode program website.
- **Shared Hosting Murah:** Rp 20.000 – Rp 80.000 / bulan (Cocok untuk traffic sangat rendah, namun rentan lambat).
- **Cloud Hosting / VPS Cepat:** Rp 100.000 – Rp 400.000 / bulan (Standar modern dengan kecepatan tinggi dan uptime 99.9%).

### C. Biaya Jasa Desain & Pengembangan (Development Fee)
Ini adalah upah untuk merancang tampilan UI/UX, menulis kode program, mengoptimasi SEO on-page, hingga mengintegrasikan tombol WhatsApp & payment gateway.

---

## 2. Estimasi Paket Biaya Berdasarkan Jenis Website

Berikut adalah kisaran harga pasar yang wajar dan realistis di Indonesia:

| Jenis Website | Kebutuhan Halaman | Estimasi Biaya Wajar | Waktu Pengerjaan |
| :--- | :--- | :--- | :--- |
| **Landing Page Iklan** | 1 Halaman Fokus | Rp 800.000 – Rp 2.000.000 | 2 – 5 Hari Kerja |
| **Company Profile UMKM** | 3 – 7 Halaman | Rp 1.500.000 – Rp 4.500.000 | 1 – 2 Minggu |
| **Toko Online / Katalog** | Katalog + Checkout WA | Rp 2.500.000 – Rp 6.000.000 | 2 – 3 Minggu |
| **Aplikasi Web Custom** | Dashboard / Sistem Khusus | Rp 7.000.000 – Rp 25.000.000+ | 3 – 8 Minggu |

---

## 3. Waspadai "Biaya Tersembunyi" (Hidden Cost)

Sebelum menyetujui kontrak kerja sama dengan jasa pembuatan website mana pun, tanyakan 4 hal penting ini:

1. **Apakah ada biaya perpanjangan tak masuk akal di tahun ke-2?**  
   Beberapa penyedia memberi harga awal murah Rp 300rb, namun menagih biaya perpanjangan Rp 2.5jt di tahun berikutnya.
2. **Siapa pemilik hak cipta kode dan domain?**  
   Pastikan akun domain didaftarkan atas nama Anda dan Anda memegang kendali penuh atas source code.
3. **Apakah sudah termasuk sertifikat keamanan SSL (HTTPS)?**  
   Website tanpa HTTPS akan dilabeli *"Not Secure"* oleh Google Chrome dan merusak reputasi bisnis.
4. **Berapa lama masa garansi maintenance?**  
   Pilihlah penyedia yang memberikan garansi minimal 30 hari pasca peluncuran untuk perbaikan bug tanpa biaya tambahan.

---

## 4. Kesimpulan: Mana yang Harus Anda Pilih?

Jika bisnis Anda baru mulai dan ingin langsung mencoba beriklan di Meta Ads atau Google Ads, **Landing Page satu halaman** adalah opsi paling hemat biaya dan cepat menghasilkan ROI. Namun jika Anda membutuhkan kredibilitas untuk tender B2B dan proposal kerjasama, buatlah **Company Profile** yang rapi.

Di **BantuBuatWeb**, kami menyediakan paket pembuatan website transparan mulai dari **Rp 800.000-an** tanpa biaya tersembunyi, load cepat di bawah 1 detik, dan bergaransi penuh.
`,
  },
  {
    slug: 'perbedaan-wordpress-vs-custom-code',
    title: 'WordPress vs Custom Code: Mana yang Lebih Menguntungkan untuk Website Bisnis Anda?',
    description: 'Perbandingan lengkap WordPress vs Custom Web (Nuxt/Vue/React) dari segi kecepatan (Core Web Vitals), keamanan, kemudahan update, dan biaya jangka panjang.',
    date: '2026-10-09',
    author: 'Agung Prasetyo',
    authorRole: 'Founder & Tech Lead BantuBuatWeb',
    category: 'Teknologi & Web',
    tags: ['WordPress', 'Custom Web', 'Nuxt', 'Kecepatan Website'],
    readTime: '7 min baca',
    image: '/og-cover.svg',
    content: `
Ketika hendak membuat website bisnis, salah satu perdebatan paling klasik adalah: **"Sebaiknya menggunakan WordPress atau Custom Code (Nuxt / Vue / React)?"**

Keduanya memiliki keunggulan dan kelemahan masing-masing. Memilih platform yang salah bisa berakibat pada website yang lambat, rentan dibobol hacker, atau biaya operasional bulanan yang membengkak.

Mari kita komparasikan kedua pendekatan ini secara objektif.

---

## 1. Perbandingan Head-to-Head

| Parameter | WordPress (CMS Tradisional) | Custom Code Modern (Nuxt 4 / Jamstack) |
| :--- | :--- | :--- |
| **Kecepatan Loading** | Sedang – Lambat (Tergantung plugin & tema) | **Sangat Cepat (< 1 Detik, Skor PageSpeed 95+)** |
| **Kebutuhan Server** | Butuh database MySQL + PHP runtime | Ringan (Bisa di Node.js / Serverless Edge) |
| **Keamanan** | Rentan malware jika plugin terlambat update | **Sangat Aman (Tanpa database vulnerable)** |
| **Kemudahan Edit Konten** | Sangat mudah via dashboard wp-admin | Mudah dengan Markdown / Data Content |
| **Kebutuhan Maintenance** | Rutin update plugin mingguan | **Zero-maintenance / Jarang rusak** |
| **Biaya Hosting** | Makin besar traffic, makin mahal server | Sangat hemat resource server |

---

## 2. Mengapa Kecepatan Website Sangat Berdampak pada Omset?

Berdasarkan studi dari Google Research:
- **53% pengunjung mobile akan meninggalkan website** jika halaman membutuhkan waktu loading lebih dari 3 detik.
- Setiap peningkatan kecepatan 0.1 detik meningkatkan konversi penjualan rata-rata sebesar 8.4%.

WordPress yang dipasangi 20+ plugin (Elementor, WooCommerce, Yoast, Slider, Pop-up) cenderung menghasilkan kode HTML yang berat (*DOM bloat*), sehingga skor Google Core Web Vitals sering berada di zona merah.

Sebaliknya, website modern dengan stack **Nuxt 4 + Vite** mengkompilasi halaman menjadi kode minimalis, menghasilkan waktu muat secepat kilat bahkan di koneksi 4G seluler.

---

## 3. Faktor Keamanan: Ancaman Malware & Plugin

Lebih dari **90% website yang diretas di seluruh dunia adalah situs berbasis WordPress** yang menggunakan tema bajakan atau plugin yang lupa diperbarui.

Ketika plugin memiliki celah keamanan (*vulnerability*), bot otomatis hacker bisa menyisipkan script judi online atau mengarahkan (*redirect*) pengunjung bisnis Anda ke situs berbahaya.

Pada website **Custom Code / Static**, tidak ada celah database yang bisa disuntikkan SQL Injection, sehingga bisnis Anda jauh lebih tenang dan terbebas dari serangan malware.

---

## 4. Kapan Anda Harus Memilih WordPress?
Pilihlah WordPress jika:
- Anda mengelola portal berita besar dengan puluhan jurnalis yang harus login bersamaan.
- Anda ingin menginstall ribuan template siap pakai sendiri tanpa bantuan programmer.

## 5. Kapan Anda Harus Memilih Custom Code (BantuBuatWeb)?
Pilihlah Custom Code Modern jika:
- Anda ingin website **Company Profile, Landing Page, atau Toko Online** yang tampil unik, tidak pasaran, dan cepat dibuka.
- Anda mengandalkan **iklan berbayar (Meta/Google Ads)** dan butuh skor kualitas iklan (*Quality Score*) yang tinggi.
- Anda tidak ingin pusing memikirkan update plugin yang sering membuat tampilan web rusak tiba-tiba.

---

## Kesimpulan

Untuk kebutuhan website profil bisnis, katalog produk, dan landing page konversi tinggi di era 2026, **Custom Web berkecepatan tinggi** adalah investasi jangka panjang terbaik. Tim **BantuBuatWeb** siap membantu Anda membangun website kustom dengan standar performa modern.
`,
  },
  {
    slug: 'cara-membuat-landing-page-konversi-tinggi',
    title: '7 Formula Rahasia Membuat Landing Page Iklan dengan Konversi Penjualan Tinggi',
    description: 'Pelajari anatomi landing page yang terbukti menghasilkan leads & order: Headline memikat, social proof, visual kontras Neo-Brutalism, & integrasi WhatsApp Direct.',
    date: '2026-10-09',
    author: 'Dery Andreansyah',
    authorRole: 'UI/UX & Growth Specialist BantuBuatWeb',
    category: 'Digital Marketing',
    tags: ['Landing Page', 'Google Ads', 'Facebook Ads', 'Konversi'],
    readTime: '5 min baca',
    image: '/og-cover.svg',
    content: `
Sudah menghabiskan jutaan rupiah untuk beriklan di Instagram Ads, TikTok Ads, atau Google Ads tapi hasilnya nihil leads atau penjualan? 

Masalah utamanya seringkali bukan pada materi iklan Anda, melainkan pada **Landing Page yang tidak mampu meyakinkan calon pelanggan dalam 5 detik pertama**.

Berikut adalah 7 formula esensial yang kami terapkan di **BantuBuatWeb** untuk menciptakan landing page berkonversi tinggi (*high-converting*).

---

## 1. Headline Tajam yang Menyelesaikan Masalah

Jangan gunakan headline klise seperti *"Selamat Datang di Website Kami"*. Calon pembeli tidak peduli dengan Anda; mereka peduli dengan solusi untuk masalah mereka.

Gunakan rumus: **[Hasil yang Diinginkan] + [Jangka Waktu] + [Tanpa Rasa Sakit/Kekhawatiran]**.

> **Contoh Kurang Efektif:** "Jasa Pembuatan Website Terbaik di Indonesia."  
> **Contoh Efektif:** "Website Profesional untuk Bisnis Anda Siap Tayang dalam 3 Hari Tanpa Ribet Coding."

---

## 2. Satu Halaman, Satu Tujuan (Single Call to Action)

Kesalahan fatal pembuat landing page pemula adalah memberikan terlalu banyak tombol: link ke Instagram, link ke YouTube, link ke marketplace, dan form email.

Semakin banyak pilihan yang Anda berikan, semakin bingung calon pembeli (*Paradox of Choice*). 
- Arahkan **seluruh tombol** ke satu aksi utama: **Chat WhatsApp Langsung** atau **Isi Form Penawaran**.

---

## 3. Desain Eye-Catching & Kontras Tinggi (Neo-Brutalism Style)

Pengguna internet membaca dengan cara *scanning* (memindai cepat). Desain yang monoton dengan warna pudar akan membuat mereka cepat bosan dan menekan tombol *back*.

Penggunaan gaya **Neo-Brutalism** (garis border hitam tebal, bayangan kontras, dan aksen warna cerah) terbukti meningkatkan *focal point* pengunjung langsung ke poin keunggulan produk dan tombol Call-to-Action.

---

## 4. Kecepatan Akses Mobile (< 1.5 Detik)

Lebih dari 90% lalu lintas iklan di Indonesia berasal dari pengguna smartphone. Jika landing page Anda lambat dibuka:
- Anda membayar biaya klik iklan secara sia-sia (*ad spend waste*).
- Calon pembeli menutup browser sebelum membaca penawaran Anda.

Pastikan gambar sudah terkompresi dengan format **WebP** dan script tracking (Pixel/GTM) dimuat secara asinkron tanpa menghambat rendering halaman.

---

## 5. Tampilkan Bukti Sosial (Social Proof & Testimonial)

Orang membeli karena percaya pada pengalaman orang lain. Cantumkan:
- Tangkapan layar chat WhatsApp testimoni dari pembeli asli.
- Logo klien atau brand yang pernah bekerja sama.
- Angka pencapaian nyata (contoh: *150+ Website Telah Dibuat*).

---

## 6. Elemen Risk Reversal (Garansi & Tanpa Risiko)

Rasa takut tertipu adalah penghalang terbesar dalam transaksi digital. Hilangkan keraguan ini dengan menawarkan:
- Garansi uang kembali atau garansi revisi gratis.
- Konsultasi gratis di awal sebelum bayar sepeser pun.
- Layanan *after-sales* dan tutorial pengelolaan.

---

## 7. Direct WhatsApp Link Generator

Untuk pasar Indonesia, tombol WhatsApp dengan pesan pembuka otomatis (*pre-filled message*) terbukti menghasilkan konversi 3x lebih tinggi dibanding form email biasa.

> **Tips:** Buat teks pembuka otomatis yang spesifik, misalnya:  
> *"Halo BantuBuatWeb, saya tertarik membuat landing page iklan untuk produk fashion saya. Boleh minta penawarannya?"*

---

## Siap Bikin Landing Page yang Menghasilkan Penjualan?

Tim **BantuBuatWeb** siap merancang landing page iklan profesional, super cepat, dan dioptimasi khusus untuk memaksimalkan hasil belanja iklan Anda. Konsultasikan kebutuhan landing page Anda bersama kami sekarang!
`,
  },
]

export const getArticleBySlug = (slug: string) => ARTICLES.find((a) => a.slug === slug)
