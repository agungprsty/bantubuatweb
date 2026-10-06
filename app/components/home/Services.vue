<script setup lang="ts">
import { HOME_SERVICES } from '~/data/homeData'
</script>

<template>
  <section id="layanan" class="border-b-2 border-zinc-800 bg-zinc-950 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Layanan Utama Dari <span class="bg-neo-yellow text-black px-2.5 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_#fff]">BantuBuatWeb?</span>
        </h2>
        <p class="text-base sm:text-lg font-bold text-zinc-400 max-w-2xl mx-auto">
          Pilih jenis website yang sesuai dengan kebutuhan dan target pertumbuhan bisnis Anda.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(s, idx) in HOME_SERVICES"
          :key="idx"
          class="neo-box-interactive bg-white text-black p-6 flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <div :class="['flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000]', s.color]">
                <AppIcon :name="s.icon" class="h-6 w-6 text-black" />
              </div>
              <img :src="s.img" class="h-10 w-auto object-contain" :alt="s.title" />
            </div>

            <h3 class="text-xl font-black text-black mb-3">{{ s.title }}</h3>
            <p class="text-sm font-bold text-slate-700 leading-relaxed mb-6">{{ s.desc }}</p>
            
            <ul class="space-y-2 border-t-2 border-black pt-4 mb-6">
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
            class="neo-btn bg-black text-white w-full py-2.5 text-sm font-black hover:bg-neo-pink hover:text-black"
          >
            Konsultasi Layanan
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
