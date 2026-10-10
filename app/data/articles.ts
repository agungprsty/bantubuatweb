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

Berikut adalah rincian estimasi biaya investasi dan durasi pengerjaan profesional yang kami sediakan di BantuBuatWeb sesuai dengan skala kebutuhan bisnis Anda:

| Kategori / Paket | Karakteristik & Cakupan Fitur | Biaya Investasi | Durasi Pengerjaan |
| :--- | :--- | :--- | :--- |
| **Starter Bisnis (Landing Page)** | 1 Halaman Siap Konversi (1–5 Section), Fast Load, Tombol WhatsApp & Google Maps | Rp 2.500.000 | 2 – 10 Hari Kerja |
| **Company Profile UMKM** | Hingga 10 Halaman Lengkap, Email Bisnis Resmi (@bisnis.com), Basic SEO & Desain Custom | Rp 4.900.000 | 2 – 5 Minggu |
| **Toko Online & Payment** | Katalog & Stok, Payment Gateway (QRIS/VA), Hitung Ongkir Otomatis & Notifikasi WA | Rp 10.000.000 | 6 – 8 Minggu |
| **Custom System / AI** | Arsitektur Web & Database Bebas Request, Integrasi Chatbot AI/LLM, CRM & Dashboard | Mulai Rp 15.000.000+ | 9 – 15 Minggu |

---

## Hal Kritis yang Wajib Diwaspadai Sebelum Menyetujui Kontrak

Sebelum memutuskan vendor pembuatan website, pastikan 4 poin krusial ini sudah disepakati secara tertulis:

1. **Biaya Perpanjangan Tahunan:**  
   Banyak vendor menawarkan harga pembuatan sangat murah di tahun pertama, namun menagih biaya perpanjangan domain dan hosting yang tidak masuk akal di tahun kedua. Pastikan biaya tahun berikutnya transparan sejak awal (misal di BantuBuatWeb, perpanjangan sudah jelas mulai Rp 800rb/tahun untuk server cloud & domain .com).
2. **Hak Kepemilikan Source Code & Akun Domain:**  
   Pastikan domain didaftarkan atas nama bisnis Anda, dan Anda memiliki akses penuh terhadap source code website. Hindari sistem sewa yang membuat bisnis Anda terkunci.
3. **Sertifikat Keamanan SSL (HTTPS):**  
   Website modern wajib menggunakan enkripsi SSL agar tidak dilabeli "Tidak Aman" oleh browser dan aman untuk transaksi data pelanggan.
4. **Garansi Maintenance Pasca Peluncuran:**  
   Pilih penyedia yang memberikan jaminan perbaikan bug dan bantuan teknis minimal 30–60 hari setelah website online.

---

## Kesimpulan

Jika fokus bisnis Anda saat ini adalah menjalankan kampanye iklan digital di Meta Ads atau Google Ads, paket **Starter Bisnis (Landing Page)** adalah opsi paling efisien untuk memvalidasi penawaran dan konversi. Namun jika bisnis Anda membutuhkan profil kredibel untuk tender B2B, legalitas, dan proposal kerjasama, buatlah **Company Profile** multi-halaman resmi.

Di BantuBuatWeb, kami menghadirkan paket investasi pembuatan website yang transparan mulai dari paket **Starter Bisnis Rp 2.500.000** tanpa biaya tersembunyi, load ultra-cepat, gratis domain & cloud hosting tahun pertama, serta garansi pemeliharaan teknis.
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
  {
    slug: 'strategi-go-digital-bisnis-umkm',
    title: 'Strategi Go Digital untuk Bisnis & UMKM: Roadmap Lengkap dari Nol hingga Banjir Orderan',
    description: 'Panduan taktis strategi go digital untuk bisnis dan UMKM di 2026. Mulai dari membangun aset digital milik sendiri, SEO lokal, integrasi WhatsApp, hingga automasi sistem tanpa boncos.',
    date: '10 Oktober 2026',
    author: 'Agung Prasetyo',
    authorRole: 'Founder & Tech Lead BantuBuatWeb',
    category: 'Edukasi Bisnis',
    tags: ['Go Digital', 'Strategi Bisnis', 'UMKM', 'Transformasi Digital', 'Website Bisnis'],
    readTime: '7 menit baca',
    image: '/og-cover.svg',
    content: `
Banyak pemilik bisnis dan pelaku UMKM beranggapan bahwa "Go Digital" cukup dengan membuat akun media sosial, mengunggah konten secara acak, lalu menunggu pembeli berdatangan. Faktanya, sebagian besar bisnis yang hanya mengandalkan cara tersebut akhirnya berhenti di tengah jalan karena kelelahan mengejar algoritma yang terus berubah tanpa ada peningkatan penjualan yang terukur.

Go digital yang sesungguhnya bukanlah tentang sekadar hadir di internet, melainkan **membangun sistem dan ekosistem digital yang bekerja menghasilkan prospek dan penjualan untuk bisnis Anda secara konsisten**, bahkan saat Anda sedang beristirahat.

Berikut adalah roadmap strategis langkah demi langkah transformasi go digital yang terbukti efektif untuk UMKM dan bisnis modern di Indonesia tahun 2026.

---

## Kesalahan Fatal: Menggantungkan Bisnis pada "Tanah Sewa"

Sebelum membahas langkah praktis, pahami prinsip dasar ini: **Media sosial dan marketplace adalah lahan sewaan, bukan aset milik Anda.**

1. **Algoritma yang Fluktuatif:** Hari ini postingan Anda dilihat 10.000 orang, bulan depan jangkauan organik bisa dipangkas drastis menjadi hanya beberapa ratus orang kecuali Anda membayar iklan.
2. **Kenaikan Biaya Layanan (Marketplace Fee):** Potongan biaya admin di marketplace kian meningkat (bisa mencapai 8% – 15%+ per transaksi), menggerus margin laba bersih produk Anda.
3. **Data Pelanggan Tidak Anda Miliki:** Anda tidak memiliki database nomor telepon, email, atau riwayat perilaku pembeli untuk dilakukan follow-up di kemudian hari.

Oleh karena itu, strategi go digital yang sehat wajib menerapkan formula: **Gunakan media sosial dan iklan sebagai penarik perhatian (Traffic), lalu arahkan ke aset milik sendiri (Owned Media) untuk transaksi dan retensi.**

---

## 4 Pilar Ekosistem Go Digital yang Menghasilkan Penjualan

### Pilar 1: Memiliki "Rumah Digital" Resmi (Website / Landing Page)
Website dengan nama domain bisnis Anda sendiri (seperti \`namabisnis.com\`) adalah pusat dari seluruh aktivitas digital Anda. 
- **Kredibilitas Instan:** Pelanggan dan rekanan B2B jauh lebih percaya pada bisnis yang memiliki website profesional ketimbang bisnis yang hanya mengandalkan profil media sosial gratisan.
- **Bebas Potongan Komisi:** Transaksi yang terjadi langsung di website Anda menghasilkan profit margin 100% tanpa potongan persentase pihak ketiga.
- **Informasi 24/7 Terstruktur:** Calon klien dapat mempelajari profil usaha, katalog produk, ulasan pelanggan, dan daftar harga secara lengkap tanpa perlu bolak-balik bertanya hal mendasar ke admin.

### Pilar 2: Kuasai Pencarian Lokal Niat Beli Tinggi (Local SEO & Google Maps)
Ada perbedaan mendasar antara audiens di media sosial dan audiens di mesin pencari Google:
- **Pengguna Media Sosial:** Sedang mencari hiburan (low buying intent).
- **Pengguna Google Search:** Sedang mencari solusi sekarang juga (high buying intent). Misalnya: *"jasa interior semarang terdekat"*, *"supplier kopi lampung"*, atau *"klinik gigi surabaya"*.

Dengan mengoptimalkan **Google Profil Bisnis (Google Maps)** yang terhubung langsung ke website resmi Anda, bisnis Anda akan langsung ditemukan oleh orang-orang yang sudah siap melakukan transaksi.

### Pilar 3: Alur Pemesanan Cepat Tanpa Hambatan (Frictionless WhatsApp Flow)
Perilaku konsumen di Indonesia sangat menggemari transaksi interaktif (conversational commerce). Jangan paksa calon pembeli mengisi formulir registrasi yang rumit dengan password dan aktivasi email jika tidak diperlukan.

Sediakan tombol pemesanan langsung ke **WhatsApp** dengan pesan pembuka otomatis (auto-text) yang spesifik. Misalnya: *"Halo Admin, saya tertarik memesan Paket Catering Wedding dari website, mohon info ketersediaan tanggal."* Pendekatan ini terbukti meningkatkan rasio konversi hingga 3x lipat.

### Pilar 4: Otomatisasi & Digitalisasi Operasional
Setelah arus pesanan mulai stabil, mulailah mengotomatiskan hal-hal rutin:
- **Payment Gateway Otomatis:** Sediakan pembayaran instan via QRIS, Virtual Account bank, dan e-wallet agar pelanggan tidak perlu lagi mengirimkan bukti transfer manual dan Anda tidak perlu mengecek mutasi rekening berulang kali.
- **Chatbot AI Layanan Pelanggan:** Integrasikan kecerdasan buatan berbasis data produk bisnis Anda untuk menjawab pertanyaan seputar spesifikasi, ongkos kirim, dan jam buka selama 24 jam nonstop.

---

## Roadmap 4 Tahap Go Digital untuk Bisnis Anda

Gunakan tabel tahapan berikut sebagai panduan prioritas agar anggaran dan energi bisnis Anda tidak terbuang sia-sia:

| Tahapan | Fokus Eksekusi | Aset & Tools Kunci | Indikator Keberhasilan (KPI) |
| :--- | :--- | :--- | :--- |
| **Fase 1: Fondasi Kredibilitas** | Membangun identitas digital resmi & portofolio | Website / Landing Page, Email Bisnis, Logo | Website aktif (< 1 detik), domain terdaftar resmi |
| **Fase 2: Visibilitas Lokal** | Menjaring pencari solusi di sekitar area Anda | Google Profil Bisnis, Review Klien, Local SEO | Muncul di 3 besar Google Maps lokal, klik arah jalan |
| **Fase 3: Akuisisi & Konversi** | Mendatangkan traffic tertarget secara konsisten | Iklan Meta / Google Ads, Tombol WhatsApp | Biaya per lead (CPL) stabil, rasio konversi > 5% |
| **Fase 4: Otomasi & Retensi** | Mempercepat transaksi & repeat order | Payment Gateway (QRIS/VA), Chatbot AI, CRM | Transaksi otomatis berjalan, repeat order pelanggan naik |

---

## 3 Kesalahan Umum yang Wajib Dihindari

1. **Buru-Buru Beriklan Tanpa Landing Page yang Bagus:**  
   Banyak bisnis menghabiskan jutaan rupiah untuk iklan, tetapi halaman tujuannya lambat dibuka (> 3 detik) atau navigasinya membingungkan. Akibatnya, uang iklan terbuang sia-sia.
2. **Membuat Website yang Terlalu Berat dan Lambat:**  
   Hindari menggunakan template murahan yang dipenuhi animasi berlebih dan plugin yang tidak perlu. Website bisnis harus cepat dibuka di perangkat smartphone dengan koneksi seluler.
3. **Mengabaikan Follow-Up Data Prospek:**  
   Setiap kontak yang masuk via website atau WhatsApp harus dicatat rapi. Pelanggan yang belum membeli hari ini bisa menjadi pembeli bulan depan jika Anda melakukan edukasi berkala.

---

## Kesimpulan

Go digital bukanlah tentang siapa yang memiliki pengikut media sosial paling banyak, melainkan siapa yang berhasil membangun ekosistem digital paling efisien untuk melayani pelanggan dan mencetak profit yang berkelanjutan.

Mulailah dengan membangun fondasi paling kokoh: miliki website resmi yang kencang, terpercaya, dan dirancang khusus untuk mengubah pengunjung menjadi pembeli setia.

Di **BantuBuatWeb**, kami siap mendampingi perjalanan transformasi digital bisnis Anda—mulai dari perancangan landing page siap konversi, company profile resmi, hingga integrasi sistem toko online dan AI modern.
`,
  },
]

export const getArticleBySlug = (slug: string) => ARTICLES.find((a) => a.slug === slug)

const MONTH_MAP: Record<string, number> = {
  januari: 0,
  februari: 1,
  maret: 2,
  april: 3,
  mei: 4,
  juni: 5,
  juli: 6,
  agustus: 7,
  september: 8,
  oktober: 9,
  november: 10,
  desember: 11,
}

export const parseIndoDate = (dateStr: string): number => {
  const parts = dateStr.trim().split(/\s+/)
  if (parts.length >= 3) {
    const day = parseInt(parts[0], 10)
    const month = MONTH_MAP[parts[1].toLowerCase()] ?? 0
    const year = parseInt(parts[2], 10)
    return new Date(year, month, day).getTime()
  }
  return 0
}

export const getSortedArticles = () => [...ARTICLES].sort((a, b) => parseIndoDate(b.date) - parseIndoDate(a.date))
