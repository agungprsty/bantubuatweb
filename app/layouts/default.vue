<script setup lang="ts">
import { ref, onMounted } from 'vue'

const open = ref(false)

const nav = [
  { label: 'Layanan', href: '/layanan' },
  { label: 'Proses', href: '/#proses' },
  { label: 'Harga', href: '/#harga' },
  { label: 'Proyek', href: '/proyek' },
  { label: 'Tim', href: '/team' },
]

const marqueeItems = [
  'WEBSITES UNTUK BISNIS & STARTUP',
  'DESAIN MODERN & MEMORABLE',
  'HIGH-CONVERTING LANDING PAGES',
  'SUPER CEPAT & SEO OPTIMIZED',
  'GARANSI MAINTAIN 30 HARI',
  'SOLUSI DIGITAL #1 INDONESIA',
]

onMounted(() => {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          io.unobserve(e.target)
        }
      }
    },
    { threshold: 0.1 },
  )
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
})
</script>

<template>
  <div class="min-h-screen bg-black font-sans text-white antialiased selection:bg-neo-pink selection:text-black">
    <!-- Top Announcement Marquee Ticker -->
    <div class="sticky top-0 z-50 border-b-2 border-black bg-neo-pink py-1.5 font-black text-xs uppercase tracking-wider text-black overflow-hidden">
      <div class="animate-marquee whitespace-nowrap">
        <span v-for="i in 3" :key="i" class="inline-flex items-center gap-6 pr-6">
          <span v-for="(item, idx) in marqueeItems" :key="idx" class="inline-flex items-center gap-6">
            <span>{{ item }}</span>
            <span class="text-sm font-black">•</span>
          </span>
        </span>
      </div>
    </div>

    <!-- Header Navigation -->
    <header class="sticky top-[33px] z-40 border-b-2 border-zinc-800 bg-black/90 backdrop-blur-md">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/" class="group flex items-center" aria-label="BantuBuatWeb, Jasa Pembuatan Website Indonesia">
          <AppLogo light />
        </NuxtLink>

        <nav class="hidden items-center gap-3 md:flex" aria-label="Navigasi utama">
          <NuxtLink
            v-for="item in nav"
            :key="item.href"
            :to="item.href"
            class="rounded-lg border-2 border-transparent px-3 py-1.5 text-sm font-extrabold text-white transition-all hover:border-black hover:bg-neo-yellow hover:text-black hover:shadow-[2px_2px_0px_0px_#fff]"
          >
            {{ item.label }}
          </NuxtLink>

          <a
            :href="wa('Halo BantuBuatWeb, saya ingin konsultasi pembuatan website untuk bisnis saya')"
            target="_blank"
            rel="noopener"
            class="neo-btn bg-neo-pink px-5 py-2 text-sm font-extrabold text-black ml-2 shadow-[3px_3px_0px_0px_#fff] hover:shadow-[5px_5px_0px_0px_#fff]"
          >
            <AppIcon name="whatsapp" class="mr-2 h-4 w-4" />
            Konsultasi Gratis
          </a>
        </nav>

        <button
          class="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-white bg-neo-yellow text-black shadow-[2px_2px_0px_0px_#fff] md:hidden"
          aria-label="Buka menu"
          @click="open = !open"
        >
          <AppIcon :name="open ? 'x' : 'menu'" class="h-6 w-6" />
        </button>
      </div>
    </header>

    <!-- Mobile Navigation Drawer -->
    <div
      v-if="open"
      class="fixed inset-x-0 top-[97px] z-40 border-b-4 border-white bg-zinc-900 p-5 shadow-[0_10px_0_0_#fff] md:hidden"
    >
      <nav class="flex flex-col gap-2" aria-label="Menu mobile">
        <NuxtLink
          v-for="item in nav"
          :key="item.href"
          :to="item.href"
          class="rounded-xl border-2 border-black bg-white px-4 py-3 text-base font-black text-black shadow-[3px_3px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5"
          @click="open = false"
        >
          {{ item.label }}
        </NuxtLink>
        <a
          :href="wa('Halo BantuBuatWeb, saya ingin konsultasi pembuatan website')"
          target="_blank"
          rel="noopener"
          class="neo-btn mt-2 bg-neo-pink py-3.5 text-center text-base font-black text-black shadow-[4px_4px_0px_0px_#fff]"
          @click="open = false"
        >
          <AppIcon name="whatsapp" class="mr-2 h-5 w-5" />
          Hubungi via WhatsApp
        </a>
      </nav>
    </div>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t-4 border-zinc-800 bg-black text-white pt-14 pb-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <!-- Brand Info -->
          <div class="space-y-4">
            <NuxtLink to="/" class="inline-flex items-center" aria-label="BantuBuatWeb">
              <AppLogo light />
            </NuxtLink>
            <p class="text-sm font-medium leading-relaxed text-zinc-400">
              Partner digital terpercaya untuk UMKM, Startup, dan Perusahaan di seluruh Indonesia. Website profesional, modern, super cepat &amp; high-converting.
            </p>
            <div class="flex gap-3 pt-2">
              <a
                v-for="s in ['instagram', 'facebook', 'linkedin']"
                :key="s"
                href="#"
                :aria-label="`BantuBuatWeb di ${s}`"
                class="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-white bg-neo-yellow text-black shadow-[2px_2px_0px_0px_#fff] transition-transform hover:-translate-y-1"
              >
                <AppIcon :name="s" class="h-5 w-5" />
              </a>
            </div>
          </div>

          <!-- Services -->
          <div>
            <h4 class="inline-block rounded-md border-2 border-white bg-neo-pink px-3 py-1 text-sm font-black uppercase text-black shadow-[2px_2px_0px_0px_#fff]">
              Layanan Utama
            </h4>
            <ul class="mt-5 space-y-2.5 text-sm font-bold text-zinc-300">
              <li>
                <NuxtLink to="/layanan" class="transition-colors hover:text-neo-yellow">
                  Semua Layanan Kami
                </NuxtLink>
              </li>
              <li v-for="l in ['Website Company Profile', 'Toko Online (E-Commerce)', 'Landing Page High-Converting', 'Aplikasi Web &amp; Sistem Custom']" :key="l">
                <NuxtLink to="/layanan" class="transition-colors hover:text-neo-yellow">
                  {{ l }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="inline-block rounded-md border-2 border-white bg-neo-cyan px-3 py-1 text-sm font-black uppercase text-black shadow-[2px_2px_0px_0px_#fff]">
              Perusahaan
            </h4>
            <ul class="mt-5 space-y-2.5 text-sm font-bold text-zinc-300">
              <li><NuxtLink to="/team" class="transition-colors hover:text-neo-cyan">Tim &amp; Expert</NuxtLink></li>
              <li><a href="/#proses" class="transition-colors hover:text-neo-cyan">Cara Bekerja</a></li>
              <li><a href="/#harga" class="transition-colors hover:text-neo-cyan">Paket &amp; Harga</a></li>
              <li><NuxtLink to="/proyek" class="transition-colors hover:text-neo-cyan">Portofolio Karya</NuxtLink></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="inline-block rounded-md border-2 border-white bg-neo-green px-3 py-1 text-sm font-black uppercase text-black shadow-[2px_2px_0px_0px_#fff]">
              Hubungi Kami
            </h4>
            <ul class="mt-5 space-y-3 text-sm font-bold text-zinc-300">
              <li class="flex items-start gap-3">
                <AppIcon name="mapPin" class="mt-1 h-5 w-5 shrink-0 text-neo-yellow" />
                <span>Jakarta &amp; Bandar Lampung (Melayani Seluruh Indonesia)</span>
              </li>
              <li class="flex items-center gap-3">
                <AppIcon name="phone" class="h-5 w-5 shrink-0 text-neo-yellow" />
                <span>0896-8680-4015</span>
              </li>
              <li class="flex items-center gap-3">
                <AppIcon name="mail" class="h-5 w-5 shrink-0 text-neo-yellow" />
                <span>halo@bantubuatweb.com</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Sub-footer -->
        <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t-2 border-zinc-800 pt-8 text-xs font-bold text-zinc-400 sm:flex-row">
          <p>© 2026 BantuBuatWeb. Hak cipta dilindungi undang-undang.</p>
          <nav class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Halaman legal">
            <NuxtLink to="/terms" class="transition-colors hover:text-white">Syarat &amp; Ketentuan</NuxtLink>
            <NuxtLink to="/privacy" class="transition-colors hover:text-white">Kebijakan Privasi</NuxtLink>
            <NuxtLink to="/cookie" class="transition-colors hover:text-white">Kebijakan Cookie</NuxtLink>
          </nav>
        </div>
      </div>
    </footer>
  </div>
</template>