<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const steps = [
  {
    id: 1,
    time: '00:00 - 00:05',
    title: 'Konsultasi & Diskusi',
    desc: 'Diskusi gratis seputar bidang bisnis Anda, konten yang disiapkan, serta fitur utama yang dibutuhkan.',
    badge: 'FASE 1: PERENCANAAN',
    color: 'bg-neo-pink text-black',
  },
  {
    id: 2,
    time: '00:05 - 00:10',
    title: 'Desain & Tata Letak',
    desc: 'Penyusunan desain visual yang rapi, modern, dan mudah dibaca oleh calon pembeli.',
    badge: 'FASE 2: DESAIN TAMPILAN',
    color: 'bg-neo-yellow text-black',
  },
  {
    id: 3,
    time: '00:10 - 00:15',
    title: 'Pembuatan & Optimasi',
    desc: 'Pengodean website agar cepat dibuka di HP, pemasangan WhatsApp, dan optimasi Google Search.',
    badge: 'FASE 3: PEMBUATAN & KODE',
    color: 'bg-neo-cyan text-black',
  },
  {
    id: 4,
    time: '00:15 - 00:20',
    title: 'Uji Coba & Garansi',
    desc: 'Uji coba di HP & laptop, pendaftaran ke Google, peluncuran domain, dan garansi 30 hari.',
    badge: 'FASE 4: TAYANG & GARANSI',
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
  <section id="proses" class="border-b-2 border-zinc-800 bg-black py-16 sm:py-24 relative overflow-hidden">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
          Cara Bekerja
        </h2>
        <p class="text-base sm:text-lg font-bold text-zinc-400">
          Saksikan alur pembuatan website di BantuBuatWeb dalam 4 langkah praktis.
        </p>
      </div>

      <div class="grid lg:grid-cols-12 gap-8 items-center">
        
        <!-- STEP SELECTOR CARDS -->
        <div class="lg:col-span-5 space-y-4">
          <div
            v-for="s in steps"
            :key="s.id"
            @click="selectStep(s.id)"
            :class="[
              'cursor-pointer transition-all duration-200 p-5 rounded-xl border-2 border-black relative overflow-hidden',
              currentStep === s.id
                ? `${s.color} shadow-[6px_6px_0px_0px_#fff] translate-x-1`
                : 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-[3px_3px_0px_0px_#333]'
            ]"
          >
            <div class="flex items-center justify-between mb-1">
              <span
                :class="[
                  'text-[10px] font-black uppercase px-2.5 py-0.5 rounded border border-black',
                  currentStep === s.id ? 'bg-black text-white' : 'bg-zinc-800 text-zinc-300'
                ]"
              >
                {{ s.badge }}
              </span>
              <span class="text-xs font-mono font-bold opacity-80">{{ s.time }}</span>
            </div>

            <div class="flex items-start gap-3 mt-2">
              <span
                :class="[
                  'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-black font-black text-sm',
                  currentStep === s.id ? 'bg-black text-white' : 'bg-neo-yellow text-black'
                ]"
              >
                0{{ s.id }}
              </span>
              <div>
                <h4 class="text-base font-black tracking-tight leading-snug">{{ s.title }}</h4>
                <p
                  :class="[
                    'text-xs mt-1 font-bold leading-relaxed',
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
          <div class="neo-box bg-zinc-950 text-white p-0 border-4 border-white shadow-[8px_8px_0px_0px_#FF90E8] rounded-2xl overflow-hidden relative">
            
            <!-- Video Titlebar -->
            <div class="flex items-center justify-between border-b-2 border-zinc-800 bg-zinc-900 px-4 py-3">
              <div class="flex items-center gap-2">
                <span class="h-3 w-3 rounded-full bg-red-500 border border-black"></span>
                <span class="h-3 w-3 rounded-full bg-yellow-400 border border-black"></span>
                <span class="h-3 w-3 rounded-full bg-green-500 border border-black"></span>
                <span class="text-xs font-mono text-zinc-400 ml-2 hidden sm:inline">bantubuatweb_proses_animasi.mp4</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="neo-badge bg-neo-pink text-black text-[10px]">ALUR KERJA</span>
                <span class="flex items-center gap-1.5 bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded border border-black">
                  <span class="h-1.5 w-1.5 rounded-full bg-white animate-ping"></span>
                  LIVE DEMO
                </span>
              </div>
            </div>

            <!-- ANIMATED VIDEO VIEWPORT -->
            <div class="relative min-h-[340px] sm:min-h-[400px] flex items-center justify-center p-6 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black overflow-hidden">
              
              <!-- BACKGROUND GRID DECORATION -->
              <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

              <!-- STEP 1 ANIMATED SCENE -->
              <div v-if="currentStep === 1" class="relative z-10 w-full max-w-md space-y-4 animate-fade-in">
                <div class="neo-box bg-white text-black p-5 border-2 border-black shadow-[4px_4px_0px_0px_#FF90E8] relative">
                  <div class="flex items-center gap-3 border-b-2 border-black pb-3 mb-3">
                    <img src="/images/gumroad/blog-post-circle-1.svg" class="h-10 w-10 animate-bounce" alt="Konsultasi" />
                    <div>
                      <div class="text-xs font-black text-black uppercase">Langkah 01: Diskusi Awal</div>
                      <div class="text-sm font-black text-black">Analisis Kebutuhan Bisnis</div>
                    </div>
                  </div>
                  <div class="space-y-2 text-xs font-bold text-slate-800">
                    <div class="flex items-center justify-between p-2 rounded bg-neo-yellow/30 border border-black">
                      <span>Jenis Usaha</span>
                      <span class="font-black text-black bg-neo-yellow px-2 py-0.5 rounded border border-black">UMKM / Perusahaan</span>
                    </div>
                    <div class="flex items-center justify-between p-2 rounded bg-neo-cyan/30 border border-black">
                      <span>Tujuan Utama</span>
                      <span class="font-black text-black bg-neo-cyan px-2 py-0.5 rounded border border-black">Kontak WhatsApp Direct</span>
                    </div>
                  </div>
                </div>
                <div class="flex justify-center">
                  <img src="/images/gumroad/arrowhead-right.svg" class="h-8 w-8 rotate-90 animate-pulse" alt="Arrow" />
                </div>
              </div>

              <!-- STEP 2 ANIMATED SCENE -->
              <div v-if="currentStep === 2" class="relative z-10 w-full max-w-md space-y-4">
                <div class="neo-box bg-neo-yellow text-black p-5 border-2 border-black shadow-[4px_4px_0px_0px_#fff]">
                  <div class="flex items-center justify-between border-b-2 border-black pb-3 mb-3">
                    <div class="flex items-center gap-2">
                      <img src="/images/gumroad/design.svg" class="h-7 w-7" alt="Design Icon" />
                      <span class="text-xs font-black uppercase">Langkah 02: Desain Visual</span>
                    </div>
                    <span class="text-xs font-bold bg-black text-white px-2 py-0.5 rounded">Tampilan Rapi</span>
                  </div>
                  <div class="grid grid-cols-2 gap-3 text-center">
                    <div class="p-3 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                      <div class="text-xs font-black">Warna Khas</div>
                      <div class="flex justify-center gap-1 mt-2">
                        <span class="h-4 w-4 rounded-full bg-[#FF90E8] border border-black"></span>
                        <span class="h-4 w-4 rounded-full bg-[#FFC901] border border-black"></span>
                        <span class="h-4 w-4 rounded-full bg-[#23A6F0] border border-black"></span>
                        <span class="h-4 w-4 rounded-full bg-[#23C552] border border-black"></span>
                      </div>
                    </div>
                    <div class="p-3 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                      <div class="text-xs font-black">Penataan Konten</div>
                      <div class="text-[10px] font-mono font-bold mt-1 bg-zinc-100 p-1 rounded border border-black">Rapi &amp; Jelas</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- STEP 3 ANIMATED SCENE -->
              <div v-if="currentStep === 3" class="relative z-10 w-full max-w-md space-y-4">
                <div class="neo-box bg-zinc-900 text-white p-5 border-2 border-white shadow-[4px_4px_0px_0px_#23A6F0]">
                  <div class="flex items-center justify-between border-b border-zinc-700 pb-3 mb-3">
                    <div class="flex items-center gap-2">
                      <img src="/images/gumroad/software.svg" class="h-7 w-7" alt="Software Icon" />
                      <span class="text-xs font-black text-neo-cyan uppercase">Langkah 03: Pengodean</span>
                    </div>
                    <span class="text-[10px] font-mono bg-neo-green text-black font-black px-2 py-0.5 rounded border border-black">BERHASIL</span>
                  </div>
                  
                  <div class="space-y-2 font-mono text-xs text-zinc-300">
                    <div class="bg-black p-3 rounded border border-zinc-800">
                      <div class="text-green-400">✓ Kecepatan buka HP: Cepat &amp; Ringan</div>
                      <div class="text-yellow-400">✓ Integrasi Tombol WhatsApp: Siap</div>
                      <div class="text-cyan-400">✓ Pendaftaran Google Search: Siap</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- STEP 4 ANIMATED SCENE -->
              <div v-if="currentStep === 4" class="relative z-10 w-full max-w-md space-y-4 text-center">
                <div class="neo-box bg-white text-black p-6 border-2 border-black shadow-[6px_6px_0px_0px_#23C552] relative overflow-hidden">
                  <img src="/images/gumroad/new-sale.svg" class="h-16 w-auto mx-auto mb-2 animate-bounce" alt="New Sale" />
                  <h4 class="text-xl font-black text-black">Website Siap &amp; Online!</h4>
                  <p class="text-xs font-bold text-slate-700 mt-1">Website Anda siap diakses pelanggan 24 jam nonstop.</p>

                  <div class="flex justify-center gap-2 mt-4">
                    <img src="/images/gumroad/coin-1.svg" class="h-8 w-8 animate-bounce delay-100" alt="Coin" />
                    <img src="/images/gumroad/coin-2.svg" class="h-8 w-8 animate-bounce delay-200" alt="Coin" />
                    <img src="/images/gumroad/coin-3.svg" class="h-8 w-8 animate-bounce delay-300" alt="Coin" />
                    <img src="/images/gumroad/coin-4.svg" class="h-8 w-8 animate-bounce delay-400" alt="Coin" />
                    <img src="/images/gumroad/coin-5.svg" class="h-8 w-8 animate-bounce delay-500" alt="Coin" />
                  </div>
                </div>
              </div>

              <div class="absolute top-4 right-4 hidden sm:block">
                <img src="/images/gumroad/sell-anywhere.png" class="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity" alt="Sell Anywhere" />
              </div>

            </div>

            <!-- VIDEO PLAYER CONTROLS TOOLBAR -->
            <div class="border-t-2 border-zinc-800 bg-zinc-900 p-4 space-y-3">
              <div class="flex items-center gap-3">
                <span class="text-xs font-mono font-bold text-zinc-300">{{ formatTime(progress) }}</span>
                <div class="flex-1 bg-zinc-800 h-2.5 rounded-full overflow-hidden cursor-pointer border border-zinc-700 relative" @click="(e) => {
                  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
                  const clickX = e.clientX - rect.left
                  progress = Math.max(0, Math.min(100, (clickX / rect.width) * 100))
                  currentStep = Math.min(4, Math.floor(progress / 25) + 1)
                }">
                  <div class="bg-neo-pink h-full transition-all duration-100 ease-linear" :style="{ width: `${progress}%` }"></div>
                </div>
                <span class="text-xs font-mono font-bold text-zinc-400">00:20</span>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <button
                    @click="togglePlay"
                    class="neo-btn bg-neo-yellow text-black px-4 py-1.5 text-xs font-black hover:bg-white"
                    aria-label="Play or pause process video"
                  >
                    {{ isPlaying ? '❚❚ JEDA' : '▶ PUTAR' }}
                  </button>
                  <button
                    @click="toggleMute"
                    class="neo-btn bg-zinc-800 text-white px-3 py-1.5 text-xs font-bold hover:bg-zinc-700 border-zinc-600"
                    aria-label="Toggle video sound audio"
                  >
                    {{ isMuted ? '🔇 TANPA SUARA' : '🔊 SUARA AKTIF' }}
                  </button>
                </div>

                <div class="flex items-center gap-2 text-xs font-bold text-zinc-400">
                  <span class="hidden sm:inline">Langkah {{ currentStep }} dari 4</span>
                  <span class="h-2 w-2 rounded-full bg-neo-green"></span>
                  <span class="text-white font-mono font-black uppercase">PUTAR OTOMATIS</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>
