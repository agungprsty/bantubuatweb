<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { PORTFOLIO } from '~/data/portfolio'

const displayPortfolio = [...PORTFOLIO.slice(0, 6), ...PORTFOLIO.slice(0, 6), ...PORTFOLIO.slice(0, 6)]

const carouselRef = ref<HTMLElement | null>(null)
const isHovering = ref(false)
let autoTimer: ReturnType<typeof setInterval> | null = null
let resumeTimer: ReturnType<typeof setTimeout> | null = null

const getCardWidth = () => {
  const el = carouselRef.value
  const first = el?.firstElementChild as HTMLElement | null
  return (first?.offsetWidth ?? 320) + 20
}

const scrollCarousel = (dir: number) => {
  const el = carouselRef.value
  if (!el) return
  el.scrollBy({ left: dir * getCardWidth(), behavior: 'smooth' })
  pauseAuto()
}

const handleInfinite = () => {
  const el = carouselRef.value
  if (!el) return
  const w = getCardWidth()
  const setW = w * 6
  if (el.scrollLeft < setW * 0.5) {
    el.style.scrollBehavior = 'auto'
    el.scrollLeft += setW
    void el.offsetHeight
    el.style.scrollBehavior = 'smooth'
  } else if (el.scrollLeft > setW * 2.5) {
    el.style.scrollBehavior = 'auto'
    el.scrollLeft -= setW
    void el.offsetHeight
    el.style.scrollBehavior = 'smooth'
  }
}

const stopAuto = () => {
  if (autoTimer) clearInterval(autoTimer)
  autoTimer = null
}

const startAuto = () => {
  stopAuto()
  autoTimer = setInterval(() => {
    if (isHovering.value || document.hidden) return
    const el = carouselRef.value
    if (!el) return
    el.scrollBy({ left: getCardWidth(), behavior: 'smooth' })
  }, 3000)
}

const pauseAuto = () => {
  stopAuto()
  if (resumeTimer) clearTimeout(resumeTimer)
  resumeTimer = setTimeout(startAuto, 3500)
}

onMounted(() => {
  const el = carouselRef.value
  if (!el) return
  const init = () => {
    const w = getCardWidth()
    el.style.scrollBehavior = 'auto'
    el.scrollLeft = w * 6
    void el.offsetHeight
    el.style.scrollBehavior = 'smooth'
  }
  requestAnimationFrame(() => requestAnimationFrame(init))
  el.addEventListener('scroll', handleInfinite, { passive: true })
  startAuto()
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAuto()
    else startAuto()
  })
})

onBeforeUnmount(() => {
  stopAuto()
  if (resumeTimer) clearTimeout(resumeTimer)
  carouselRef.value?.removeEventListener('scroll', handleInfinite)
})
</script>

<template>
  <section class="border-b-2 border-zinc-800 bg-black py-12 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
        <div>
          <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-1">
            Portofolio &amp; Hasil Klien
          </h2>
          <p class="text-xs sm:text-sm lg:text-base font-bold text-zinc-400 mt-2 max-w-2xl">
            Lihat bagaimana solusi website modern dan ekosistem digital kami membantu berbagai bisnis melipatgandakan prospek dan omzet penjualan.
          </p>
        </div>
        <div class="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <NuxtLink
            to="/proyek"
            class="neo-btn bg-neo-yellow text-black text-xs sm:text-sm font-black px-3.5 py-2 sm:px-4 sm:py-2.5 hover:bg-white shadow-[2px_2px_0px_0px_#fff]"
          >
            Lihat Semua Proyek →
          </NuxtLink>
          <button
            @click="scrollCarousel(-1)"
            class="neo-btn bg-white text-black p-2 sm:p-2.5 shadow-[2px_2px_0px_0px_#fff] hover:bg-neo-pink"
            aria-label="Portofolio sebelumnya"
          >
            ←
          </button>
          <button
            @click="scrollCarousel(1)"
            class="neo-btn bg-white text-black p-2 sm:p-2.5 shadow-[2px_2px_0px_0px_#fff] hover:bg-neo-pink"
            aria-label="Portofolio berikutnya"
          >
            →
          </button>
        </div>
      </div>

      <!-- Carousel Track -->
      <div
        ref="carouselRef"
        class="flex gap-4 sm:gap-6 overflow-x-auto pb-6 sm:pb-8 scrollbar-none snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
        @mouseenter="isHovering = true"
        @mouseleave="isHovering = false"
      >
        <div
          v-for="(item, idx) in displayPortfolio"
          :key="idx"
          class="neo-box-interactive min-w-[280px] sm:min-w-[350px] max-w-[350px] snap-start bg-white text-black p-4 sm:p-5 shrink-0 flex flex-col justify-between"
        >
          <div>
            <!-- Thumbnail Preview if available -->
            <div v-if="item.image" class="mb-3 rounded-lg overflow-hidden border-2 border-black aspect-video bg-zinc-100 relative group">
              <img :src="item.image" :alt="item.title" class="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div v-else :class="['mb-3 rounded-lg border-2 border-black aspect-video bg-gradient-to-br flex items-center justify-center p-4 relative', item.grad]">
              <span class="text-xs sm:text-sm font-black text-black bg-white/95 px-3 py-1 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] text-center">
                {{ item.title }}
              </span>
            </div>

            <h3 class="text-base sm:text-lg font-black text-black mb-1.5 leading-snug">{{ item.title }}</h3>
            <p class="text-xs font-bold text-slate-700 leading-relaxed mb-4 line-clamp-2 sm:line-clamp-3">{{ item.desc }}</p>
          </div>
          
          <div class="pt-3 border-t-2 border-black/10">
            <span class="text-[11px] sm:text-xs font-black text-green-900 bg-green-200 px-2.5 py-1.5 rounded-lg border-2 border-black shadow-[1.5px_1.5px_0px_0px_#000] inline-flex items-center gap-1.5 w-full justify-center">
              <span>{{ item.result }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
