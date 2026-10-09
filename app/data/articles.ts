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
    description: 'Berapa biaya riil membuat website bisnis di 2026? Simak rincian domain, hosting, biaya develop, hingga tips agar tidak boncos dan tertipu biaya tersembunyi.',
    date: '9 Oktober 2026',
    author: 'Agung Prasetyo',
    authorRole: 'Founder & Tech Lead BantuBuatWeb',
    category: 'Edukasi Bisnis',
    tags: ['Biaya Website', 'UMKM', 'Tips Bisnis', 'Domain Hosting'],
    readTime: '6 menit baca',
    image: '/og-cover.svg',
    content: `
Banyak pemilik bisnis dan pelaku UMKM ragu membuat website karena ketidakjelasan rincian biaya. Di satu sisi, ada penawaran instan dengan harga ratusan ribu, namun di sisi lain agensi mematok harga hingga puluhan juta rupiah.

Perbedaan harga ini wajar terjadi karena bergantung pada kualitas infrastruktur, desain, kecepatan, dan hak kepemilikan. Berikut adalah panduan transparan mengenai seluruh komponen biaya pembuatan website di Indonesia tahun 2026.

---

## Tiga Komponen Utama Biaya Website

Setiap website profesional berdiri di atas tiga komponen dasar:

### 1. Nama Domain (.com, .id, atau .co.id)
Domain adalah alamat digital resmi bisnis Anda di internet (misalnya \`namabisnis.com\` atau \`bantubuat.web.id\`).
- **Domain .com:** Rp 150.000 – Rp 220.000 per tahun
- **Domain .id (Resmi Indonesia):** Rp 200.000 – Rp 250.000 per tahun
- **Domain .web.id / .my.id:** Rp 30.000 – Rp 60.000 per tahun

### 2. Server Hosting
Tempat menyimpan file website, gambar produk, dan kode program agar dapat diakses 24 jam non-stop dari seluruh dunia.
- **Shared Hosting Dasar:** Rp 25.000 – Rp 80.000 per bulan (Cocok untuk website dengan pengunjung harian rendah).
- **Cloud Hosting / VPS Kencang:** Rp 120.000 – Rp 350.000 per bulan (Standar modern dengan waktu muat di bawah 1 detik dan kestabilan tinggi).

### 3. Biaya Desain & Pengembangan (Development Fee)
Biaya untuk merancang antarmuka (UI/UX), menulis kode yang bersih, optimasi kecepatan, setup struktur SEO, hingga integrasi tombol kontak WhatsApp.

---

## Estimasi Biaya Berdasarkan Kebutuhan Bisnis

Berikut adalah kisaran harga pasar yang sehat dan wajar di Indonesia:

| Kategori Website | Karakteristik & Halaman | Estimasi Biaya Wajar | Durasi Pengerjaan |
| :--- | :--- | :--- | :--- |
| **Landing Page Iklan** | 1 Halaman Fokus Konversi | Rp 800.000 – Rp 1.800.000 | 2 – 4 Hari Kerja |
| **Company Profile UMKM** | 4 – 8 Halaman Lengkap | Rp 1.500.000 – Rp 3.500.000 | 1 – 2 Minggu |
| **Toko Online / Katalog** | Daftar Produk + Order WA | Rp 2.200.000 – Rp 5.000.000 | 2 – 3 Minggu |
| **Aplikasi Web Custom** | Sistem Internal / Booking | Rp 6.000.000 – Rp 20.000.000+ | 3 – 6 Minggu |

---

## Hal Kritis yang Wajib Diwaspadai Sebelum Menyetujui Kontrak

Sebelum memutuskan vendor pembuatan website, pastikan 4 poin krusial ini sudah disepakati secara tertulis:

1. **Biaya Perpanjangan Tahunan:**  
   Banyak vendor menawarkan harga pembuatan sangat murah di tahun pertama, namun menagih biaya perpanjangan domain dan hosting yang tidak masuk akal di tahun kedua. Pastikan biaya tahun berikutnya transparan sejak awal.
2. **Hak Kepemilikan Source Code & Akun Domain:**  
   Pastikan domain didaftarkan atas nama bisnis Anda, dan Anda memiliki akses penuh terhadap source code website. Hindari sistem sewa yang membuat bisnis Anda terkunci.
3. **Sertifikat Keamanan SSL (HTTPS):**  
   Website modern wajib menggunakan enkripsi SSL agar tidak dilabeli "Tidak Aman" oleh browser dan aman untuk transaksi data pelanggan.
4. **Garansi Maintenance Pasca Peluncuran:**  
   Pilih penyedia yang memberikan jaminan perbaikan bug dan bantuan teknis minimal 30 hari setelah website online.

---

## Kesimpulan

Jika fokus bisnis Anda saat ini adalah menjalankan kampanye iklan digital di Meta Ads atau Google Ads, landing page satu halaman adalah opsi paling hemat dan efektif. Namun jika bisnis Anda membutuhkan profil kredibel untuk tender B2B dan proposal kerjasama, buatlah company profile resmi yang rapi.

Di BantuBuatWeb, kami menghadirkan paket pembuatan website yang transparan mulai dari Rp 800.000-an tanpa biaya tersembunyi, load cepat, dan garansi penuh.
`,
  },
  {
    slug: 'perbedaan-wordpress-vs-custom-code',
    title: 'WordPress vs Custom Code: Mana yang Lebih Menguntungkan untuk Website Bisnis Anda?',
    description: 'Perbandingan objektif WordPress vs Custom Web modern dari segi performa, keamanan, pemeliharaan jangka panjang, dan efisiensi biaya server.',
    date: '9 Oktober 2026',
    author: 'Agung Prasetyo',
    authorRole: 'Founder & Tech Lead BantuBuatWeb',
    category: 'Teknologi & Web',
    tags: ['WordPress', 'Custom Web', 'Nuxt', 'Kecepatan Website'],
    readTime: '7 menit baca',
    image: '/og-cover.svg',
    content: `
Salah satu pertanyaan mendasar yang sering dihadapi calon pemilik website adalah: apakah sebaiknya menggunakan platform WordPress atau membangun website kustom dengan teknologi modern (seperti Nuxt, Vue, atau React)?

Kedua solusi ini memiliki kelebihan dan konsekuensi masing-masing terhadap operasional bisnis jangka panjang. Berikut adalah perbandingan objektif untuk membantu Anda menentukan keputusan yang tepat.

---

## Perbandingan Parameter Kunci

| Parameter | WordPress (CMS Konvensional) | Custom Web Modern (Nuxt / Jamstack) |
| :--- | :--- | :--- |
| **Kecepatan Akses (PageSpeed)** | Bergantung pada beban plugin & tema | Konsisten kencang (< 1 detik) |
| **Beban Server & Hosting** | Membutuhkan resource PHP & MySQL | Ringan, hemat konsumsi resource |
| **Tingkat Keamanan** | Rentan jika plugin tidak diperbarui rutin | Sangat aman (tanpa database rentan injeksi) |
| **Kemudahan Manajemen Konten** | Sangat fleksibel via dashboard bawaan | Terstruktur rapi via data & markdown |
| **Risiko Kerusakan (Maintenance)** | Update plugin rentan memicu konflik | Sangat minim risiko kerusakan mendadak |

---

## Mengapa Kecepatan Website Mempengaruhi Hasil Penjualan?

Data riset performa web menunjukkan bahwa lebih dari 50% pengguna internet di Indonesia akan langsung menutup halaman website yang membutuhkan waktu muat lebih dari 3 detik.

WordPress yang dipasangi belasan plugin pembangun halaman (page builder, slider, pop-up, multi-tracker) seringkali menghasilkan file kode yang sangat berat. Hal ini membuat halaman terasa lambat dibuka di perangkat smartphone dengan jaringan seluler.

Sebaliknya, website yang dibangun dengan framework modern seperti Nuxt 4 hanya memuat kode yang benar-benar dibutuhkan oleh halaman tersebut. Hasilnya, halaman terbuka instan dan meningkatkan peluang konversi pengunjung menjadi pembeli.

---

## Faktor Keamanan dan Beban Perawatan Rutin

Sebagian besar serangan peretasan dan malware pada website bisnis bersumber dari plugin WordPress pihak ketiga yang memiliki celah keamanan atau telat diperbarui.

Ketika pemilik bisnis disibukkan dengan operasional harian, pemeliharaan rutin seperti update plugin seringkali terlewat. Hal ini dapat menimbulkan risiko website dialihkan ke situs lain yang merugikan nama baik brand.

Pada website kustom dengan arsitektur modern, sistem bekerja secara statis dan independen tanpa database terbuka, sehingga risiko peretasan otomatis dapat ditekan hingga titik terendah.

---

## Panduan Memilih Sesuai Kebutuhan

### Kapan Sebaiknya Memilih WordPress?
- Anda mengelola portal media atau blog berita dengan puluhan penulis harian yang memerlukan hak akses terpisah.
- Anda ingin mengutak-atik ribuan pilihan template instan secara mandiri tanpa bantuan developer.

### Kapan Sebaiknya Memilih Custom Web (BantuBuatWeb)?
- Anda membutuhkan **Company Profile, Landing Page Iklan, atau Katalog Bisnis** yang tampil elegan, unik, dan tidak pasaran.
- Anda menjalankan iklan berbayar dan memerlukan skor kualitas kecepatan tinggi agar biaya per klik (CPC) lebih efisien.
- Anda menginginkan website yang andal dan minim kebutuhan maintenance teknis berkala.

---

## Kesimpulan

Untuk kebutuhan profil bisnis modern dan landing page berkonversi tinggi, custom web berkecepatan tinggi merupakan investasi yang lebih efisien dan bebas dari kerumitan teknis jangka panjang.
`,
  },
  {
    slug: 'cara-membuat-landing-page-konversi-tinggi',
    title: '7 Prinsip Esensial Merancang Landing Page Iklan dengan Konversi Penjualan Tinggi',
    description: 'Pelajari struktur landing page yang efektif menghasilkan prospek dan penjualan: kejelasan penawaran, bukti sosial, hierarki visual, dan rute kontak langsung.',
    date: '9 Oktober 2026',
    author: 'Dery Andreansyah',
    authorRole: 'UI/UX & Growth Specialist BantuBuatWeb',
    category: 'Digital Marketing',
    tags: ['Landing Page', 'Google Ads', 'Facebook Ads', 'Konversi'],
    readTime: '5 menit baca',
    image: '/og-cover.svg',
    content: `
Banyak pelaku usaha mengalokasikan anggaran jutaan rupiah untuk beriklan di Meta Ads, TikTok Ads, maupun Google Ads, namun mendapatkan hasil yang minim dalam perolehan pesan atau penjualan.

Penyebab utamanya sering kali bukan pada materi iklannya, melainkan pada halaman tujuan (landing page) yang gagal meyakinkan calon pelanggan dalam beberapa detik pertama setelah mereka mengklik iklan.

Berikut adalah tujuh prinsip utama yang kami terapkan di BantuBuatWeb dalam merancang landing page dengan tingkat konversi optimal.

---

## 1. Judul Utama yang Langsung Menjawab Kebutuhan

Hindari judul umum yang tidak memberikan konteks jelas mengenai produk atau jasa Anda. Pengunjung internet membaca secara cepat dan ingin segera mengetahui manfaat nyata yang mereka dapatkan.

Susun judul dengan pola yang jelas: **Manfaat Pokok + Kecepatan Hasil + Kemudahan Proses**.

- **Kurang Efektif:** "Layanan Pembuatan Website Terbaik dan Terpercaya."
- **Lebih Efektif:** "Website Profesional untuk Bisnis Anda, Siap Online dalam 3 Hari Tanpa Kerumitan Teknis."

---

## 2. Satu Halaman, Satu Tujuan Utama (Single Focus Action)

Kesalahan umum pada landing page pemula adalah menyediakan terlalu banyak opsi tautan: media sosial, channel video, artikel blog, dan formulir panjang secara bersamaan.

Terlalu banyak pilihan justru membuat calon pembeli bimbang dan meninggalkan halaman tanpa melakukan tindakan apa pun. Arahkan seluruh navigasi dan tombol ke satu tujuan utama, misalnya langsung menghubungi tim Anda melalui WhatsApp.

---

## 3. Hierarki Visual Tegas dan Mudah Dipindai (Skimmable)

Calon pelanggan tidak membaca setiap kata di halaman web seperti membaca buku; mereka memindai poin-poin utama yang menarik perhatian.

Gunakan gaya desain dengan kontras yang jelas, pembagian section yang rapi, serta ukuran teks yang proporsional agar poin keunggulan produk langsung terbaca dalam hitungan detik.

---

## 4. Kecepatan Buka di Perangkat Mobile di Bawah 1,5 Detik

Mayoritas pengguna yang mengklik iklan digital di Indonesia menggunakan smartphone dengan koneksi internet seluler.

Jika landing page membutuhkan waktu lebih dari 2 detik untuk terbuka, rasio pengunjung yang batal membuka halaman akan meningkat drastis. Pastikan seluruh gambar dikompresi dengan format modern (WebP) dan kode halaman terstruktur efisien.

---

## 5. Cantumkan Bukti Nyata (Social Proof)

Kepercayaan adalah faktor penentu sebelum seseorang memutuskan bertransaksi. Sertakan elemen pembuktian nyata seperti:
- Tangkapan layar ulasan atau percakapan kepuasan dari pelanggan sebelumnya.
- Daftar brand, klien, atau instansi yang pernah menggunakan layanan Anda.
- Portofolio hasil karya nyata yang dapat dilihat langsung.

---

## 6. Minimalkan Risiko bagi Calon Pembeli (Risk Reversal)

Rasa ragu atau khawatir adalah hambatan terbesar dalam transaksi online. Turunkan keraguan tersebut dengan mencantumkan:
- Garansi perbaikan atau penyesuaian gratis jika ada ketidaksesuaian.
- Layanan konsultasi awal tanpa komitmen biaya.
- Penjelasan alur kerja yang transparan sejak awal.

---

## 7. Tombol WhatsApp dengan Pesan Pembuka Otomatis

Untuk perilaku konsumen di Indonesia, tombol WhatsApp dengan teks pembuka yang telah disiapkan secara otomatis terbukti mempermudah calon pelanggan untuk langsung memulai percakapan.

Pastikan pesan pembuka relevan dengan kampanye iklan yang sedang berjalan sehingga tim admin dapat langsung merespons konteks kebutuhan pelanggan secara tepat.

---

## Kesimpulan

Landing page yang berhasil bukan sekadar yang terlihat meriah, melainkan yang mampu menyampaikan solusi bisnis secara lugas, cepat diakses, dan memudahkan calon pembeli mengambil keputusan.
`,
  },
]

export const getArticleBySlug = (slug: string) => ARTICLES.find((a) => a.slug === slug)
