<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const steps = [
  {
    id: 1,
    time: '00:00 - 00:05',
    title: 'Audit & Temukan Masalah',
    desc: 'Identifikasi bottleneck bisnis Anda: kebocoran leads, proses manual yang lambat, hingga penyebab rendahnya konversi penjualan.',
    badge: 'FASE 1: DIAGNOSIS & AUDIT',
    color: 'bg-neo-pink text-black',
  },
  {
    id: 2,
    time: '00:05 - 00:10',
    title: 'Pemetaan Blueprint Solusi',
    desc: 'Merancang arsitektur ekosistem digital: alur sales funnel, website modern, integrasi AI, payment, dan otomatisasi alur kerja.',
    badge: 'FASE 2: BLUEPRINT SOLUSI',
    color: 'bg-neo-yellow text-black',
  },
  {
    id: 3,
    time: '00:10 - 00:15',
    title: 'Pembangunan & Integrasi Sistem',
    desc: 'Pengembangan website super cepat, pemasangan Advance SEO, integrasi payment gateway, API kurir, chatbot AI, dan CRM.',
    badge: 'FASE 3: EKSEKUSI & INTEGRASI',
    color: 'bg-neo-cyan text-black',
  },
  {
    id: 4,
    time: '00:15 - 00:20',
    title: 'Peluncuran & Scale-Up Omzet',
    desc: 'Sistem live dan beroperasi penuh, pendampingan & panduan tim, garansi maintenance 30 hari, serta bisnis siap naik kelas.',
    badge: 'FASE 4: TAYANG & SCALE-UP',
    color: 'bg-neo-green text-black',
  },
]

const currentStep = ref(1)
const isPlaying = ref(true)
const progress = ref(0)
const isMuted = ref(false)
let timer: ReturnType<typeof setInterval> | null = null

const stepDuration = 5
const totalDuration = 20

const selectStep = (id: number) => {
  currentStep.value = id
  progress.value = ((id - 1) * 25)
}

const togglePlay = () => {
  isPlaying.value = !isPlaying.value
}

const toggleMute = () => {
  isMuted.value = !isMuted.value
}

onMounted(() => {
  timer = setInterval(() => {
    if (!isPlaying.value) return
    progress.value += 0.5
    if (progress.value >= 100) {
      progress.value = 0
    }
    const calculatedStep = Math.min(4, Math.floor(progress.value / 25) + 1)
    if (calculatedStep !== currentStep.value) {
      currentStep.value = calculatedStep
    }
  }, 100)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

const formatTime = (p: number) => {
  const currentSec = Math.floor((p / 100) * totalDuration)
  const secStr = currentSec < 10 ? `0${currentSec}` : `${currentSec}`
  return `00:${secStr}`
}
</script>

<template>
  <section id="proses" class="border-b-2 border-zinc-800 bg-black py-12 sm:py-20 lg:py-24 relative overflow-hidden">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 sm:space-y-4">
        <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
          Alur Transformasi Digital
        </h2>
        <p class="text-sm sm:text-base lg:text-lg font-bold text-zinc-400">
          Dari diagnosis masalah hingga ekosistem digital siap pakai yang melipatgandakan omzet bisnis Anda.
        </p>
      </div>

      <div class="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        
        <!-- STEP SELECTOR CARDS -->
        <div class="lg:col-span-5 space-y-3 sm:space-y-4">
          <div
            v-for="s in steps"
            :key="s.id"
            @click="selectStep(s.id)"
            :class="[
              'cursor-pointer transition-all duration-200 p-4 sm:p-5 rounded-xl border-2 border-black relative overflow-hidden',
              currentStep === s.id
                ? `${s.color} shadow-[4px_4px_0px_0px_#fff] sm:shadow-[6px_6px_0px_0px_#fff] translate-x-0.5 sm:translate-x-1`
                : 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-[2px_2px_0px_0px_#333] sm:shadow-[3px_3px_0px_0px_#333]'
            ]"
          >
            <div class="flex items-center justify-between mb-1">
              <span
                :class="[
                  'text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 rounded border border-black',
                  currentStep === s.id ? 'bg-black text-white' : 'bg-zinc-800 text-zinc-300'
                ]"
              >
                {{ s.badge }}
              </span>
              <span class="text-[11px] sm:text-xs font-mono font-bold opacity-80">{{ s.time }}</span>
            </div>

            <div class="flex items-start gap-2.5 sm:gap-3 mt-2">
              <span
                :class="[
                  'flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg border-2 border-black font-black text-xs sm:text-sm',
                  currentStep === s.id ? 'bg-black text-white' : 'bg-neo-yellow text-black'
                ]"
              >
                0{{ s.id }}
              </span>
              <div>
                <h3 class="text-sm sm:text-base font-black tracking-tight leading-snug">{{ s.title }}</h3>
                <p
                  :class="[
                    'text-[11px] sm:text-xs mt-1 font-bold leading-relaxed',
                    currentStep === s.id ? 'text-black/90' : 'text-zinc-400'
                  ]"
                >
                  {{ s.desc }}
                </p>
              </div>
            </div>

            <!-- Step Active Progress Bar Indicator -->
            <div
              v-if="currentStep === s.id"
              class="absolute bottom-0 left-0 right-0 h-1 bg-black/40"
            >
              <div
                class="h-full bg-black transition-all duration-100 ease-linear"
                :style="{ width: `${((progress % 25) / 25) * 100}%` }"
              ></div>
            </div>
          </div>
        </div>

        <!-- VIDEO ANIMATION SCREEN PLAYER -->
        <div class="lg:col-span-7">
          <div class="neo-box bg-zinc-950 text-white p-0 border-3 sm:border-4 border-white shadow-[6px_6px_0px_0px_#FF90E8] sm:shadow-[8px_8px_0px_0px_#FF90E8] rounded-2xl overflow-hidden relative">
            
            <!-- Video Titlebar -->
            <div class="flex items-center justify-between border-b-2 border-zinc-800 bg-zinc-900 px-3 sm:px-4 py-2.5 sm:py-3">
              <div class="flex items-center gap-1.5 sm:gap-2">
                <span class="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-500 border border-black"></span>
                <span class="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-400 border border-black"></span>
                <span class="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-green-500 border border-black"></span>
                <span class="text-[11px] sm:text-xs font-mono text-zinc-400 ml-1.5 sm:ml-2 hidden sm:inline">bantubuatweb_transformasi_digital.mp4</span>
              </div>
              <div class="flex items-center gap-1.5 sm:gap-2">
                <span class="neo-badge bg-neo-pink text-black text-[9px] sm:text-[10px]">ALUR KERJA</span>
                <span class="flex items-center gap-1 sm:gap-1.5 bg-red-600 text-white text-[9px] sm:text-[10px] font-black px-1.5 sm:px-2 py-0.5 rounded border border-black">
                  <span class="h-1.5 w-1.5 rounded-full bg-white animate-ping"></span>
                  LIVE DEMO
                </span>
              </div>
            </div>

            <!-- ANIMATED VIDEO VIEWPORT -->
            <div class="relative min-h-[230px] sm:min-h-[320px] lg:min-h-[380px] flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black overflow-hidden">
              
              <!-- BACKGROUND GRID DECORATION -->
              <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

              <!-- STEP 1 ANIMATED SCENE: AUDIT & TEMUKAN MASALAH -->
              <div v-if="currentStep === 1" class="relative z-10 w-full max-w-md space-y-3 sm:space-y-4">
                <div class="neo-box bg-white text-black p-4 sm:p-5 border-2 border-black shadow-[3px_3px_0px_0px_#FF90E8] sm:shadow-[4px_4px_0px_0px_#FF90E8] relative">
                  <div class="flex items-center gap-2.5 sm:gap-3 border-b-2 border-black pb-2.5 sm:pb-3 mb-2.5 sm:mb-3">
                    <img src="/images/gumroad/blog-post-circle-1.svg" class="h-8 w-8 sm:h-10 sm:w-10 animate-bounce" alt="Diagnosis Masalah" />
                    <div>
                      <div class="text-[10px] sm:text-xs font-black text-black uppercase">Langkah 01: Diagnosis &amp; Audit</div>
                      <div class="text-xs sm:text-sm font-black text-black">Identifikasi Bottleneck Bisnis</div>
                    </div>
                  </div>
                  <div class="space-y-2 text-[11px] sm:text-xs font-bold text-slate-800">
                    <div class="flex items-center justify-between p-2 rounded bg-red-100 border border-black">
                      <span class="flex items-center gap-1.5"><span class="text-red-600 font-black">!</span> Kebocoran Leads</span>
                      <span class="font-black text-[10px] sm:text-xs text-red-700 bg-white px-1.5 sm:px-2 py-0.5 rounded border border-black">Follow-up Lambat</span>
                    </div>
                    <div class="flex items-center justify-between p-2 rounded bg-neo-yellow/30 border border-black">
                      <span class="flex items-center gap-1.5"><span class="text-yellow-700 font-black">!</span> Alur Order &amp; CS</span>
                      <span class="font-black text-[10px] sm:text-xs text-black bg-neo-yellow px-1.5 sm:px-2 py-0.5 rounded border border-black">Proses Masih Manual</span>
                    </div>
                    <div class="flex items-center justify-between p-2 rounded bg-neo-cyan/30 border border-black">
                      <span class="flex items-center gap-1.5"><span class="text-blue-700 font-black">!</span> Target Bisnis</span>
                      <span class="font-black text-[10px] sm:text-xs text-black bg-neo-cyan px-1.5 sm:px-2 py-0.5 rounded border border-black">Otomasi &amp; Scale Omzet</span>
                    </div>
                  </div>
                </div>
                <div class="flex justify-center items-center gap-2">
                  <span class="text-[10px] sm:text-xs font-black uppercase bg-neo-green text-black px-2.5 py-1 rounded border border-black shadow-[2px_2px_0px_0px_#000]">
                    ✓ Status: 100% Masalah &amp; Kebutuhan Terpetakan
                  </span>
                </div>
              </div>

              <!-- STEP 2 ANIMATED SCENE: PEMETAAN BLUEPRINT SOLUSI -->
              <div v-if="currentStep === 2" class="relative z-10 w-full max-w-md space-y-3 sm:space-y-4">
                <div class="neo-box bg-neo-yellow text-black p-4 sm:p-5 border-2 border-black shadow-[3px_3px_0px_0px_#fff] sm:shadow-[4px_4px_0px_0px_#fff]">
                  <div class="flex items-center justify-between border-b-2 border-black pb-2.5 sm:pb-3 mb-2.5 sm:mb-3">
                    <div class="flex items-center gap-2">
                      <img src="/images/gumroad/design.svg" class="h-6 w-6 sm:h-7 sm:w-7" alt="Blueprint Icon" />
                      <span class="text-[10px] sm:text-xs font-black uppercase">Langkah 02: Blueprint Solusi</span>
                    </div>
                    <span class="text-[10px] sm:text-xs font-black bg-black text-white px-2 py-0.5 rounded">Rencana Ekosistem</span>
                  </div>
                  <div class="grid grid-cols-2 gap-2 sm:gap-2.5 text-left">
                    <div class="p-2 sm:p-2.5 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                      <div class="text-[10px] sm:text-[11px] font-black text-black uppercase">1. Web &amp; Funnel</div>
                      <div class="text-[10px] font-bold text-slate-700 mt-0.5">High-Converting UX</div>
                    </div>
                    <div class="p-2 sm:p-2.5 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                      <div class="text-[10px] sm:text-[11px] font-black text-black uppercase">2. Otomasi &amp; AI</div>
                      <div class="text-[10px] font-bold text-slate-700 mt-0.5">Chatbot 24/7 + LLM</div>
                    </div>
                    <div class="p-2 sm:p-2.5 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                      <div class="text-[10px] sm:text-[11px] font-black text-black uppercase">3. Payment &amp; Kurir</div>
                      <div class="text-[10px] font-bold text-slate-700 mt-0.5">Midtrans + Auto Ongkir</div>
                    </div>
                    <div class="p-2 sm:p-2.5 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                      <div class="text-[10px] sm:text-[11px] font-black text-black uppercase">4. Advance SEO</div>
                      <div class="text-[10px] font-bold text-slate-700 mt-0.5">Dominasi #1 Google</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- STEP 3 ANIMATED SCENE: EKSEKUSI & INTEGRASI SISTEM -->
              <div v-if="currentStep === 3" class="relative z-10 w-full max-w-md space-y-3 sm:space-y-4">
                <div class="neo-box bg-zinc-900 text-white p-4 sm:p-5 border-2 border-white shadow-[3px_3px_0px_0px_#23A6F0] sm:shadow-[4px_4px_0px_0px_#23A6F0]">
                  <div class="flex items-center justify-between border-b border-zinc-700 pb-2.5 sm:pb-3 mb-2.5 sm:mb-3">
                    <div class="flex items-center gap-2">
                      <img src="/images/gumroad/software.svg" class="h-6 w-6 sm:h-7 sm:w-7" alt="Software Icon" />
                      <span class="text-[10px] sm:text-xs font-black text-neo-cyan uppercase">Langkah 03: Integrasi Sistem</span>
                    </div>
                    <span class="text-[9px] sm:text-[10px] font-mono bg-neo-green text-black font-black px-2 py-0.5 rounded border border-black">LIVE INTEGRATION</span>
                  </div>
                  
                  <div class="space-y-1.5 font-mono text-[10px] sm:text-[11px] text-zinc-300">
                    <div class="bg-black p-2.5 sm:p-3 rounded border border-zinc-800 space-y-1">
                      <div class="text-green-400">✓ Web Modern (Speed &lt; 2s): Ready</div>
                      <div class="text-yellow-400">✓ Payment Midtrans &amp; QRIS: Connected</div>
                      <div class="text-cyan-400">✓ AI Chatbot &amp; WhatsApp: Active 24/7</div>
                      <div class="text-pink-400">✓ Advance SEO &amp; Schema: Verified</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- STEP 4 ANIMATED SCENE: PELUNCURAN & SCALE-UP OMZET -->
              <div v-if="currentStep === 4" class="relative z-10 w-full max-w-md space-y-3 sm:space-y-4 text-center">
                <div class="neo-box bg-white text-black p-5 sm:p-6 border-2 border-black shadow-[4px_4px_0px_0px_#23C552] sm:shadow-[6px_6px_0px_0px_#23C552] relative overflow-hidden">
                  <img src="/images/gumroad/new-sale.svg" class="h-12 w-auto sm:h-16 mx-auto mb-2 animate-bounce" alt="Scale Up Omzet" />
                  <span class="neo-badge bg-neo-green text-black text-[9px] sm:text-[10px] mb-1">EKOSISTEM DIGITAL AKTIF</span>
                  <h4 class="text-base sm:text-lg font-black text-black">Mesin Penjualan Siap Beroperasi!</h4>
                  <p class="text-[11px] sm:text-xs font-bold text-slate-700 mt-1">Ekosistem digital berjalan otomatis 24/7, siap melipatgandakan omzet bisnis Anda.</p>

                  <div class="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                    <img src="/images/gumroad/coin-1.svg" class="h-6 w-6 sm:h-8 sm:w-8 animate-bounce delay-100" alt="Coin" />
                    <img src="/images/gumroad/coin-2.svg" class="h-6 w-6 sm:h-8 sm:w-8 animate-bounce delay-200" alt="Coin" />
                    <img src="/images/gumroad/coin-3.svg" class="h-6 w-6 sm:h-8 sm:w-8 animate-bounce delay-300" alt="Coin" />
                    <img src="/images/gumroad/coin-4.svg" class="h-6 w-6 sm:h-8 sm:w-8 animate-bounce delay-400" alt="Coin" />
                    <img src="/images/gumroad/coin-5.svg" class="h-6 w-6 sm:h-8 sm:w-8 animate-bounce delay-500" alt="Coin" />
                  </div>
                </div>
              </div>

              <div class="absolute top-3 right-3 hidden sm:block">
                <img src="/images/gumroad/sell-anywhere.webp" class="h-10 sm:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity" alt="Sell Anywhere" />
              </div>

            </div>

            <!-- VIDEO PLAYER CONTROLS TOOLBAR -->
            <div class="border-t-2 border-zinc-800 bg-zinc-900 p-3 sm:p-4 space-y-2.5 sm:space-y-3">
              <div class="flex items-center gap-2.5 sm:gap-3">
                <span class="text-[11px] sm:text-xs font-mono font-bold text-zinc-300">{{ formatTime(progress) }}</span>
                <div class="flex-1 bg-zinc-800 h-2 sm:h-2.5 rounded-full overflow-hidden cursor-pointer border border-zinc-700 relative" @click="(e) => {
                  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
                  const clickX = e.clientX - rect.left
                  progress = Math.max(0, Math.min(100, (clickX / rect.width) * 100))
                  currentStep = Math.min(4, Math.floor(progress / 25) + 1)
                }">
                  <div class="bg-neo-pink h-full transition-all duration-100 ease-linear" :style="{ width: `${progress}%` }"></div>
                </div>
                <span class="text-[11px] sm:text-xs font-mono font-bold text-zinc-400">00:20</span>
              </div>

              <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-2 sm:gap-3">
                  <button
                    @click="togglePlay"
                    class="neo-btn bg-neo-yellow text-black px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-black hover:bg-white min-h-[36px] sm:min-h-[40px]"
                    aria-label="Play or pause process video"
                  >
                    {{ isPlaying ? '❚❚ JEDA' : '▶ PUTAR' }}
                  </button>
                  <button
                    @click="toggleMute"
                    class="neo-btn bg-zinc-800 text-white px-2.5 py-1.5 sm:px-3 sm:py-2 text-[11px] sm:text-xs font-bold hover:bg-zinc-700 border-zinc-600 min-h-[36px] sm:min-h-[40px]"
                    aria-label="Toggle video sound audio"
                  >
                    {{ isMuted ? '🔇 MUTE' : '🔊 SUARA' }}
                  </button>
                </div>

                <div class="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-zinc-400">
                  <span class="hidden xs:inline">Fase {{ currentStep }}/4</span>
                  <span class="h-2 w-2 rounded-full bg-neo-green"></span>
                  <span class="text-white font-mono font-black uppercase text-[10px] sm:text-xs">AUTO</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>
