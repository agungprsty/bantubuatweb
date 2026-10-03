<script setup lang="ts">
useHead({ title: 'Kebijakan Cookie | BantuBuatWeb' })
</script>

<template>
  <LegalPage
    title="Kebijakan Cookie"
    updated="1 Oktober 2026"
    intro="Cookie adalah file kecil yang disimpan di perangkat Anda saat mengunjungi situs web. Kebijakan ini menjelaskan cookie yang kami gunakan dan opsi yang tersedia bagi Anda."
    :sections="[
      {
        heading: '1. Cookie yang Kami Gunakan',
        body: [
          'Cookie penting (essential): diperlukan agar situs berfungsi dengan benar, termasuk navigasi dan sesi keamanan.',
          'Cookie analitik: membantu kami memahami bagaimana pengunjung menggunakan situs agar konten dan performa terus membaik. Data yang dikumpulkan bersifat agregat dan anonim.',
        ],
      },
      {
        heading: '2. Cookie Pihak Ketiga',
        body: [
          'Kami dapat menyematkan konten atau layanan pihak ketiga yang menggunakan cookie milik penyedia tersebut. Penggunaan mereka tunduk pada kebijakan privasi masing-masing penyedia.',
        ],
      },
      {
        heading: '3. Mengelola Cookie',
        body: [
          'Anda dapat menolak atau menghapus cookie melalui pengaturan browser Anda. Perhatikan bahwa menonaktifkan cookie tertentu dapat memengaruhi fungsi situs.',
        ],
      },
      {
        heading: '4. Kontak',
        body: [
          'Jika ada pertanyaan seputar kebijakan cookie ini, silakan hubungi kami di halo@bantubuatweb.com.',
        ],
      },
    ]"
  />
</template>