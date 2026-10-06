<script setup lang="ts">
const features = [
  {
    id: 'speed',
    badge: 'PERFORMA RINGAN',
    stat: '< 1.5 Detik',
    statLabel: 'Rata-rata Loading',
    title: 'Kecepatan Buka Super Cepat',
    desc: 'Dibangun dengan kode khusus tanpa plugin yang memberatkan. Website Anda terbuka cepat saat diakses lewat HP, sehingga pengunjung tidak malas menunggu.',
    color: 'bg-neo-yellow text-black border-2 border-black shadow-[6px_6px_0px_0px_#fff]',
    img: '/images/gumroad/easy.svg',
    colSpan: 'lg:col-span-7',
    iconBg: 'bg-black text-neo-yellow',
  },
  {
    id: 'design',
    badge: 'TAMPILAN MENONJOL',
    stat: 'Beda & Rapi',
    statLabel: 'Desain Khas',
    title: 'Desain Menonjol & Khas',
    desc: 'Tampilan modern yang rapi dan mudah diingat. Membuang kesan template pasaran agar bisnis Anda tampil lebih terpercaya.',
    color: 'bg-neo-pink text-black border-2 border-black shadow-[6px_6px_0px_0px_#fff]',
    img: '/images/gumroad/price-tag.svg',
    colSpan: 'lg:col-span-5',
    iconBg: 'bg-black text-neo-pink',
  },
  {
    id: 'seo',
    badge: 'TERDAFTAR DI GOOGLE',
    stat: 'Siap Cari',
    statLabel: 'Pencarian Google',
    title: 'Siap Ditemukan di Google',
    desc: 'Sudah dilengkapi pengaturan judul, deskripsi, dan pendaftaran ke Google Search agar profil atau produk bisnis Anda bisa dicari di internet.',
    color: 'bg-white text-black border-2 border-black shadow-[6px_6px_0px_0px_#FF90E8]',
    img: '/images/gumroad/sales-graph.svg',
    colSpan: 'lg:col-span-4',
    iconBg: 'bg-neo-cyan text-black',
  },
  {
    id: 'responsive',
    badge: 'RESPONSIF SEMUA LAYAR',
    stat: '100%',
    statLabel: 'HP & Laptop',
    title: 'Rapi di HP, Tablet & Laptop',
    desc: 'Tampilan otomatis menyesuaikan ukuran layar HP Android, iPhone, Tablet, maupun Komputer. Pengunjung nyaman membaca dari perangkat apa pun.',
    color: 'bg-neo-cyan text-black border-2 border-black shadow-[6px_6px_0px_0px_#fff]',
    img: '/images/gumroad/blog-post-circle-1.svg',
    colSpan: 'lg:col-span-4',
    iconBg: 'bg-black text-neo-cyan',
  },
  {
    id: 'guarantee',
    badge: 'GARANSI PEMELIHARAAN',
    stat: '30 Hari',
    statLabel: 'Bantuan Gratis',
    title: 'Garansi & Bantuan Teknis',
    desc: 'Garansi 30 hari penuh setelah website tayang. Jika ada masalah teknis atau ingin ubah tulisan ringan, kami bantu sampai Anda paham.',
    color: 'bg-neo-green text-black border-2 border-black shadow-[6px_6px_0px_0px_#fff]',
    img: '/images/gumroad/thumbsup.svg',
    colSpan: 'lg:col-span-4',
    iconBg: 'bg-black text-neo-green',
  },
  {
    id: 'cta',
    badge: 'PESAN LANGSUNG VIA WA',
    stat: '1 Klik',
    statLabel: 'Order WhatsApp',
    title: 'Terhubung Langsung ke WhatsApp',
    desc: 'Calon pembeli bisa langsung menghubungi atau bertanya mengenai produk Anda melalui tombol WhatsApp yang selalu tersedia.',
    color: 'bg-zinc-900 text-white border-2 border-white shadow-[6px_6px_0px_0px_#FFC901]',
    img: '/images/gumroad/new-sale.svg',
    colSpan: 'lg:col-span-12',
    iconBg: 'bg-neo-pink text-black',
  },
]

const comparison = [
  {
    feature: 'Kecepatan',
    us: '< 2 Detik (Sangat Cepat)',
    them: '4-8 Detik (Lambat & Berat)',
    isBetter: true,
  },
  {
    feature: 'Desain Tampilan',
    us: 'Desain Khas & Rapi',
    them: 'Template Pasaran',
    isBetter: true,
  },
  {
    feature: 'Kemudahan Pencarian',
    us: 'Siap Didaftarkan ke Google Search',
    them: 'Harus Beli Tambahan Pengaturan',
    isBetter: true,
  },
  {
    feature: 'Garansi Pemeliharaan',
    us: 'Garansi 30 Hari Pemeliharaan',
    them: 'Selesai Buat Langsung Dilepas',
    isBetter: true,
  },
]
</script>

<template>
  <section id="keunggulan" class="border-b-2 border-zinc-800 bg-zinc-950 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Kenapa Harus Buat Website di <span class="bg-neo-yellow text-black px-2.5 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_#fff]">BantuBuatWeb?</span>
        </h2>
        <p class="text-base sm:text-lg font-bold text-zinc-400 max-w-2xl mx-auto">
          Kami membuatkan website yang ringan dan buka cepat di HP, rapi saat dilihat calon pembeli, serta mudah ditemukan di pencarian Google.
        </p>
      </div>

      <div class="space-y-12">
        
        <!-- FEATURE BENTO GRID -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div
            v-for="f in features"
            :key="f.id"
            :class="[
              'neo-box-interactive p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden',
              f.colSpan,
              f.color
            ]"
          >
            <!-- Top Badge & Stat -->
            <div>
              <!-- Feature Image / Visual Illustration -->
              <div class="flex items-center justify-between gap-6 mb-6">
                <div class="space-y-2 max-w-lg">
                  <h3 class="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                    {{ f.title }}
                  </h3>
                  <p class="text-sm font-bold leading-relaxed opacity-90">
                    {{ f.desc }}
                  </p>
                </div>
                
                <div class="shrink-0 hidden sm:block">
                  <img
                    :src="f.img"
                    class="h-24 sm:h-28 w-auto object-contain drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]"
                    :alt="f.title"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- COMPARISON TABLE -->
        <div class="neo-box bg-white text-black p-6 sm:p-10 border-4 border-black shadow-[8px_8px_0px_0px_#23C552]">
          <div class="text-center max-w-2xl mx-auto mb-8">
            <h3 class="text-2xl sm:text-4xl font-black text-black mt-2">
              Perbandingan Hasil Pembuatan Website
            </h3>
            <p class="text-xs sm:text-sm font-bold text-slate-700 mt-1">
              Bandingkan layanan BantuBuatWeb dengan pembuat website biasa.
            </p>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b-2 border-black bg-zinc-100 text-black">
                  <th class="p-3 text-xs sm:text-sm font-black uppercase">Fitur Utama</th>
                  <th class="p-3 text-xs sm:text-sm font-black uppercase bg-neo-yellow text-black border-x-2 border-black">
                    BantuBuatWeb
                  </th>
                  <th class="p-3 text-xs sm:text-sm font-black uppercase text-slate-500">
                    Pembuat Biasa
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y-2 divide-black text-xs sm:text-sm font-bold">
                <tr v-for="(c, idx) in comparison" :key="idx" class="hover:bg-zinc-50">
                  <td class="p-3 font-black text-slate-900">{{ c.feature }}</td>
                  <td class="p-3 font-black bg-neo-yellow/30 text-black border-x-2 border-black">
                    {{ c.us }}
                  </td>
                  <td class="p-3 text-slate-600 opacity-80">
                    {{ c.them }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
