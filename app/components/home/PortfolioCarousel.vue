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
          <span class="neo-badge bg-neo-pink text-black text-[10px] mb-2 inline-block">HASIL KERJA</span>
          <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-1">Portofolio Pilihan Kami</h2>
        </div>
        <div class="flex items-center gap-2.5 sm:gap-3">
          <button
            @click="scrollCarousel(-1)"
            class="neo-btn bg-white text-black p-2.5 sm:p-3 shadow-[2px_2px_0px_0px_#fff] sm:shadow-[3px_3px_0px_0px_#fff] hover:bg-neo-yellow"
            aria-label="Portofolio sebelumnya"
          >
            ←
          </button>
          <button
            @click="scrollCarousel(1)"
            class="neo-btn bg-white text-black p-2.5 sm:p-3 shadow-[2px_2px_0px_0px_#fff] sm:shadow-[3px_3px_0px_0px_#fff] hover:bg-neo-yellow"
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
          class="neo-box-interactive min-w-[270px] sm:min-w-[340px] max-w-[340px] snap-start bg-white text-black p-4 sm:p-5 shrink-0 flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="neo-badge bg-neo-cyan text-black text-[9px] sm:text-[10px]">{{ item.tag }}</span>
            </div>
            <h3 class="text-base sm:text-lg lg:text-xl font-black text-black mb-1.5">{{ item.title }}</h3>
            <p class="text-xs font-bold text-slate-700 leading-relaxed mb-4">{{ item.desc }}</p>
          </div>
          
          <span class="text-[11px] sm:text-xs font-black text-green-700 bg-green-100 px-2 py-1 rounded border border-black mt-2 inline-block">{{ item.result }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
