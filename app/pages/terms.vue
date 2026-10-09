<script setup lang="ts">
useHead({ title: 'Syarat & Ketentuan | BantuBuatWeb' })
</script>

<template>
  <LegalPage
    title="Syarat & Ketentuan"
    updated="1 Oktober 2026"
    intro="Dengan mengakses atau menggunakan situs web bantubuat.web.id dan layanan BantuBuatWeb, Anda dianggap telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan berikut."
    :sections="[
      {
        heading: '1. Layanan',
        body: [
          'BantuBuatWeb menyediakan jasa pembuatan website, toko online, aplikasi web, dan optimasi SEO. Seluruh penawaran harga yang tercantum di situs bersifat transparan sesuai kesepakatan tertulis/WhatsApp.',
        ],
      },
      {
        heading: '2. Hak Atas Kekayaan Intelektual',
        body: [
          'Setelah pembayaran dilunasi, hak kepemilikan atas kode dan konten website menjadi milik Anda (klien). BantuBuatWeb berhak mencantumkan portofolio proyek pada situs kami kecuali atas permintaan tertulis untuk menjaga kerahasiaan.',
        ],
      },
      {
        heading: '3. Pembayaran & Garansi',
        body: [
          'Pembayaran dilakukan sesuai kesepakatan tertulis. Garansi 30 hari berlaku bila hasil tidak sesuai kesepakatan desain dan fungsional pada penawaran.',
        ],
      },
      {
        heading: '4. Estimasi Waktu Penyelesaian',
        body: [
          'Estimasi pengerjaan yang disampaikan terhitung sejak material konten dan persetujuan desain diterima. Keterlambatan penyampaian konten oleh klien dapat menggeser jadwal peluncuran tanpa melanggar kesepakatan.',
        ],
      },
      {
        heading: '5. Konten & Tindakan yang Dilarang',
        body: [
          'Kami tidak bersedia membuat konten yang melanggar hukum Republik Indonesia, termasuk namun tidak terbatas pada perjudian, konten menyesatkan, penipuan, atau materi yang merugikan pihak ketiga. Klien bertanggung jawab penuh atas konten yang diunggah ke website miliknya.',
        ],
      },
      {
        heading: '6. Batasan Tanggung Jawab',
        body: [
          'BantuBuatWeb menjaga keakuratan serta keamanan website, namun tidak bertanggung jawab atas kerugian langsung maupun tidak langsung akibat penggunaan website, downtime dari penyedia hosting, atau kebijakan pihak ketiga seperti payment gateway dan jasa pengiriman.',
        ],
      },
      {
        heading: '7. Perubahan Ketentuan',
        body: [
          'Dokumen ini dapat diperbarui sewaktu-waktu. Perubahan yang signifikan akan diumumkan melalui halaman ini dengan tanggal pembaruan terbaru.',
        ],
      },
    ]"
  />
</template>