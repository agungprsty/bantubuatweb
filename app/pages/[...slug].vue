<script setup lang="ts">
definePageMeta({ layout: false })
useHead({ title: 'Halaman Tidak Ditemukan | BantuBuatWeb' })
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-black px-4 sm:px-6 text-center text-white py-12">
    <div class="relative">
      <p class="text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-tight text-neo-pink">404</p>
    </div>
    <h1 class="mt-3 sm:mt-6 text-xl sm:text-2xl lg:text-3xl font-black">Halaman tidak ditemukan</h1>
    <p class="mt-2 sm:mt-3 max-w-md text-xs sm:text-sm lg:text-base font-bold text-zinc-300 leading-relaxed">
      Halaman yang Anda cari mungkin sudah dipindahkan atau URL salah. Mari kembali ke beranda atau hubungi tim kami.
    </p>
    <div class="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row w-full max-w-xs sm:max-w-none justify-center">
      <NuxtLink to="/" class="neo-btn bg-neo-yellow text-black px-6 py-3 text-sm font-black w-full sm:w-auto">
        Kembali ke Beranda
      </NuxtLink>
      <a :href="wa('Halo BantuBuatWeb, saya menemukan halaman error di situs Anda')" target="_blank" rel="noopener"
        class="neo-btn bg-white text-black px-6 py-3 text-sm font-black w-full sm:w-auto">
        Hubungi Kami
      </a>
    </div>
  </div>
</template>