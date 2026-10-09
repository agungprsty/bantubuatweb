<script setup lang="ts">
import { HOME_SERVICES } from '~/data/homeData'
</script>

<template>
  <section id="layanan" class="border-b-2 border-zinc-800 bg-zinc-950 py-12 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
        <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          Layanan Utama Dari <span class="bg-neo-yellow text-black px-2.5 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_#fff]">BantuBuatWeb?</span>
        </h2>
        <p class="text-sm sm:text-base lg:text-lg font-bold text-zinc-400 max-w-2xl mx-auto">
          Pilih jenis website yang sesuai dengan kebutuhan dan target pertumbuhan bisnis Anda.
        </p>
      </div>

      <div class="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(s, idx) in HOME_SERVICES"
          :key="idx"
          class="neo-box-interactive bg-white text-black p-5 sm:p-6 flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <div :class="['flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000]', s.color]">
                <AppIcon :name="s.icon" class="h-5 w-5 sm:h-6 sm:w-6 text-black" />
              </div>
              <img :src="s.img" class="h-8 sm:h-10 w-auto object-contain" :alt="s.title" />
            </div>

            <h3 class="text-lg sm:text-xl font-black text-black mb-2 sm:mb-3">{{ s.title }}</h3>
            <p class="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed mb-4 sm:mb-6">{{ s.desc }}</p>
            
            <ul class="space-y-2 border-t-2 border-black pt-3 sm:pt-4 mb-5 sm:mb-6">
              <li v-for="(item, i) in s.items" :key="i" class="flex items-start text-xs font-extrabold text-slate-900">
                <span class="mr-2 text-black font-black">✓</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <a
            :href="wa(`Halo BantuBuatWeb, saya tertarik dengan layanan ${s.title}`)"
            target="_blank"
            rel="noopener"
            class="neo-btn bg-black text-white w-full py-2.5 text-xs sm:text-sm font-black hover:bg-neo-pink hover:text-black"
          >
            Konsultasi Layanan
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
