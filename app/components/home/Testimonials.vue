<script setup lang="ts">
// testimoni berstatus disetujui dari admin, unggulan lebih dulu
const { data } = await useFetch('/api/public/testimonials', { key: 'testimonials', default: () => [] })
const testimonials = computed(() => data.value.slice(0, 6))
</script>

<template>
  <section v-if="testimonials.length" class="border-b-2 border-zinc-800 bg-black py-12 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
        <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          Apa Kata Klien Tentang <span class="bg-neo-yellow text-black px-2.5 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_#fff]">BantuBuatWeb?</span>
        </h2>
        <p class="text-sm sm:text-base lg:text-lg font-bold text-zinc-400 max-w-2xl mx-auto">
          Cerita nyata para pemilik bisnis yang sukses melakukan transformasi digital dan melipatgandakan omzet bersama kami.
        </p>
      </div>

      <!-- Testimonial Grid -->
      <div class="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(t, idx) in testimonials"
          :key="idx"
          class="neo-box-interactive bg-white text-black p-5 sm:p-6 flex flex-col justify-between"
        >
          <div>
            <!-- Top Tag & Star Rating -->
            <div class="flex items-center justify-between gap-2 border-b-2 border-black pb-3 mb-3.5">
              <span v-if="t.tag" class="neo-badge bg-neo-cyan text-black text-[9px] sm:text-[10px]">{{ t.tag }}</span>
              <div class="ml-auto flex items-center gap-0.5 text-xs" :aria-label="`Rating ${t.rating ?? 5} dari 5`" role="img">
                <span v-for="i in 5" :key="i" :class="i <= (t.rating ?? 5) ? 'text-yellow-500' : 'text-zinc-300'" aria-hidden="true">★</span>
              </div>
            </div>

            <!-- Quote -->
            <p class="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed italic mb-4">
              "{{ t.quote }}"
            </p>
          </div>

          <div>
            <!-- Client Info Footer -->
            <div class="flex items-center gap-3 pt-3.5 border-t-2 border-black">
              <div class="min-w-0">
                <div class="font-black text-xs sm:text-sm text-black truncate">{{ t.name }}</div>
                <div class="text-[10px] sm:text-[11px] font-bold text-slate-700 truncate mt-0.5">{{ t.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
