<script setup lang="ts">
definePageMeta({ layout: false })
useHead({ title: 'Halaman Tidak Ditemukan | BantuBuatWeb' })
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center text-white">
    <div class="relative">
      <p class="text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-9xl text-neo-pink">404</p>
    </div>
    <h1 class="mt-4 text-xl font-bold sm:mt-6 sm:text-2xl lg:text-3xl">Halaman tidak ditemukan</h1>
    <p class="mt-3 max-w-md text-zinc-300">
      Halaman yang Anda cari mungkin sudah dipindahkan atau URL salah. Mari kembali ke beranda atau hubungi kami.
    </p>
    <div class="mt-8 flex flex-col gap-3 sm:flex-row">
      <NuxtLink to="/" class="neo-btn bg-neo-yellow text-black px-7 py-3 font-black">
        Kembali ke Beranda
      </NuxtLink>
      <a :href="wa('Halo BantuBuatWeb, saya menemukan halaman error di situs Anda')" target="_blank" rel="noopener"
        class="neo-btn bg-white text-black px-7 py-3 font-black">
        Hubungi Kami
      </a>
    </div>
  </div>
</template>