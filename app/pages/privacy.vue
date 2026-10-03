<script setup lang="ts">
useHead({ title: 'Kebijakan Privasi | BantuBuatWeb' })
</script>

<template>
  <LegalPage
    title="Kebijakan Privasi"
    updated="1 Oktober 2026"
    intro="BantuBuatWeb menghormati privasi Anda. Kebijakan ini menjelaskan data apa yang kami kumpulkan, bagaimana data digunakan, dan hak Anda atas data tersebut."
    :sections="[
      {
        heading: '1. Data yang Kami Kumpulkan',
        body: [
          'Kami dapat mengumpulkan data yang Anda berikan secara sukarela melalui formulir kontak, chat WhatsApp, atau email, seperti nama, nomor telepon, alamat email, dan informasi bisnis.',
          'Kami juga mengumpulkan data teknis secara otomatis seperti alamat IP, jenis browser, halaman yang dikunjungi, dan durasi kunjungan melalui cookie dan teknologi serupa.',
        ],
      },
      {
        heading: '2. Penggunaan Data',
        body: [
          'Data digunakan untuk: merespons pertanyaan dan konsultasi, memproses pesanan dan pembayaran, meningkatkan kualitas layanan dan pengalaman pengguna, serta mengirim informasi terkait layanan yang Anda minta.',
          'Kami tidak menjual atau menyewakan data pribadi Anda kepada pihak ketiga.',
        ],
      },
      {
        heading: '3. Cookie & Teknologi Pelacakan',
        body: [
          'Situs ini menggunakan cookie untuk mengingat preferensi Anda, mengukur performa halaman, dan mendukung analitik. Anda dapat mengelola atau menonaktifkan cookie melalui pengaturan browser kapan saja.',
        ],
      },
      {
        heading: '4. Keamanan Data',
        body: [
          'Kami menerapkan langkah keamanan yang wajar, termasuk HTTPS dan perlindungan akses, untuk melindungi data Anda dari akses tidak sah.',
        ],
      },
      {
        heading: '5. Hak Anda',
        body: [
          'Anda berhak mengakses, memperbaiki, atau meminta penghapusan data pribadi Anda. Ajukan permintaan melalui email halo@bantubuatweb.com dan kami akan memprosesnya dalam waktu wajar.',
        ],
      },
    ]"
  />
</template>