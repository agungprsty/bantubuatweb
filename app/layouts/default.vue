<script setup lang="ts">
import { ref, onMounted } from 'vue'

const route = useRoute()
const open = ref(false)
const isActive = (href: string) => route.path === href || route.path.startsWith(`${href}/`)

// menu mobile: tutup saat pindah halaman / Esc, dan kunci scroll halaman di belakangnya
watch(() => route.fullPath, () => { open.value = false })
watch(open, (v) => { document.documentElement.style.overflow = v ? 'hidden' : '' })
const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') open.value = false }
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.documentElement.style.overflow = ''
})
const settings = useSiteSettings()
const socials = computed(() => (['instagram', 'facebook', 'linkedin'] as const)
  .filter((s) => settings.value[s])
  .map((s) => ({ name: s, url: settings.value[s] })))

const nav = [
  { label: 'Layanan', href: '/layanan' },
  { label: 'Proyek', href: '/proyek' },
  { label: 'Blog', href: '/blog' },
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
    <div class="sticky top-0 z-50 border-b-2 border-black bg-neo-pink py-1 font-black text-[10px] sm:text-xs uppercase tracking-wider text-black overflow-hidden">
      <div class="animate-marquee whitespace-nowrap">
        <span v-for="i in 3" :key="i" class="inline-flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
          <span v-for="(item, idx) in marqueeItems" :key="idx" class="inline-flex items-center gap-4 sm:gap-6">
            <span>{{ item }}</span>
            <span class="text-xs sm:text-sm font-black">•</span>
          </span>
        </span>
      </div>
    </div>

    <!-- Header Navigation -->
    <header class="sticky top-[26px] sm:top-[32px] z-40 border-b-2 border-zinc-800 bg-black/95 backdrop-blur-md">
      <div class="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/" class="group flex items-center" aria-label="BantuBuatWeb, Jasa Pembuatan Website Indonesia">
          <AppLogo light />
        </NuxtLink>

        <nav class="hidden items-center gap-2 lg:gap-3 md:flex" aria-label="Navigasi utama">
          <NuxtLink
            v-for="item in nav"
            :key="item.href"
            :to="item.href"
            class="rounded-lg border-2 border-transparent px-2.5 lg:px-3 py-1.5 text-xs lg:text-sm font-extrabold text-white transition-all hover:border-black hover:bg-neo-yellow hover:text-black hover:shadow-[2px_2px_0px_0px_#fff]"
          >
            {{ item.label }}
          </NuxtLink>

          <a
            :href="wa('Halo BantuBuatWeb, saya ingin konsultasi pembuatan website untuk bisnis saya')"
            target="_blank"
            rel="noopener"
            class="neo-btn bg-neo-pink px-4 lg:px-5 py-2 text-xs lg:text-sm font-extrabold text-black ml-1 lg:ml-2 shadow-[3px_3px_0px_0px_#fff] hover:shadow-[5px_5px_0px_0px_#fff]"
          >
            <AppIcon name="whatsapp" class="mr-1.5 h-4 w-4" />
            Konsultasi Gratis
          </a>
        </nav>

        <button
          type="button"
          class="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border-2 border-white bg-neo-yellow text-black shadow-[2px_2px_0px_0px_#fff] md:hidden cursor-pointer"
          :aria-label="open ? 'Tutup menu navigasi' : 'Buka menu navigasi'"
          :aria-expanded="open"
          aria-controls="mobile-menu"
          @click="open = !open"
        >
          <AppIcon :name="open ? 'x' : 'menu'" class="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
    </header>

    <!-- Mobile Navigation: layar penuh di bawah header -->
    <Transition
      enter-active-class="motion-safe:transition motion-safe:duration-200 motion-safe:ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="motion-safe:transition motion-safe:duration-150 motion-safe:ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="open"
        id="mobile-menu"
        class="fixed inset-x-0 bottom-0 top-[84px] z-40 flex flex-col overflow-y-auto bg-black px-5 pb-8 pt-2 sm:top-[98px] md:hidden"
      >
        <nav aria-label="Menu mobile">
          <NuxtLink
            v-for="item in nav"
            :key="item.href"
            :to="item.href"
            :aria-current="isActive(item.href) ? 'page' : undefined"
            :class="[
              'group flex items-center justify-between border-b-2 border-zinc-800 py-4 text-2xl font-black tracking-tight transition-colors',
              isActive(item.href) ? 'text-neo-yellow' : 'text-white active:text-neo-yellow',
            ]"
          >
            {{ item.label }}
            <AppIcon name="arrowRight" class="h-5 w-5 text-zinc-500 transition-transform group-active:translate-x-1" />
          </NuxtLink>
        </nav>

        <div class="mt-auto space-y-4 pt-10">
          <p class="text-sm font-bold text-zinc-400">Siap bikin website untuk bisnis Anda? Konsultasi gratis, tanpa komitmen.</p>
          <a
            :href="wa('Halo BantuBuatWeb, saya ingin konsultasi pembuatan website')"
            target="_blank"
            rel="noopener"
            class="neo-btn w-full bg-neo-pink py-3 text-base text-black shadow-[3px_3px_0px_0px_#fff]"
          >
            <AppIcon name="whatsapp" class="mr-2 h-5 w-5" />
            Konsultasi via WhatsApp
          </a>
          <div class="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs font-bold text-zinc-400">
            <a :href="`mailto:${settings.email}`" class="hover:text-white">{{ settings.email }}</a>
            <span>{{ nomorLokal(settings.wa_number) }}</span>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t-4 border-zinc-800 bg-black text-white pt-12 sm:pt-16 pb-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
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
                v-for="s in socials"
                :key="s.name"
                :href="s.url"
                target="_blank"
                rel="noopener"
                :aria-label="`BantuBuatWeb di ${s.name}`"
                class="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-white bg-neo-yellow text-black shadow-[2px_2px_0px_0px_#fff] transition-transform hover:-translate-y-1"
              >
                <AppIcon :name="s.name" class="h-5 w-5" />
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
              <li v-for="l in [
                { name: 'Website Company Profile', path: '/layanan/website-company-profile' },
                { name: 'Toko Online & Payment Gateway', path: '/layanan/integrasi-payment-gateway' },
                { name: 'Chatbot AI & Integrasi LLM', path: '/layanan/chatbot-ai-customer-service' },
                { name: 'Implementasi Advance SEO', path: '/layanan/implementasi-advance-seo' },
                { name: 'Integrasi API Ongkir & Logistik', path: '/layanan/integrasi-api-ongkir-logistik' },
                { name: 'Otomasi Alur Kerja & CRM', path: '/layanan/otomasi-crm-workflow' },
              ]" :key="l.name">
                <NuxtLink :to="l.path" class="transition-colors hover:text-neo-yellow">
                  {{ l.name }}
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
              <li><NuxtLink to="/blog" class="transition-colors hover:text-neo-cyan">Blog &amp; Panduan</NuxtLink></li>
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
              <li v-if="settings.address" class="flex items-start gap-3">
                <AppIcon name="mapPin" class="mt-1 h-5 w-5 shrink-0 text-neo-yellow" />
                <span>{{ settings.address }}</span>
              </li>
              <li class="flex items-center gap-3">
                <AppIcon name="phone" class="h-5 w-5 shrink-0 text-neo-yellow" />
                <a :href="wa()" target="_blank" rel="noopener" class="transition-colors hover:text-neo-yellow">{{ nomorLokal(settings.wa_number) }}</a>
              </li>
              <li class="flex items-center gap-3">
                <AppIcon name="mail" class="h-5 w-5 shrink-0 text-neo-yellow" />
                <a :href="`mailto:${settings.email}`" class="break-all transition-colors hover:text-neo-yellow">{{ settings.email }}</a>
              </li>
              <li v-if="settings.hours" class="flex items-start gap-3">
                <AppIcon name="clock" class="mt-0.5 h-5 w-5 shrink-0 text-neo-yellow" />
                <span>{{ settings.hours }}</span>
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