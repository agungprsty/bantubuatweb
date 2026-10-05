<script setup lang="ts">
import { HOME_FAQ } from '~/data/homeData'
</script>

<template>
  <section class="border-b-2 border-zinc-800 bg-zinc-950 py-16 sm:py-24">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 space-y-4">
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-white">Pertanyaan Yang Sering Diajukan</h2>
      </div>

      <div class="space-y-6">
        <div v-for="(f, idx) in HOME_FAQ" :key="idx" class="neo-box bg-white text-black p-6">
          <h3 class="text-lg font-black text-black mb-2 flex items-center gap-3">
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-2 border-black bg-neo-yellow text-xs font-black">Q</span>
            <span>{{ f.q }}</span>
          </h3>
          <p class="text-sm font-bold text-slate-700 leading-relaxed pl-10 border-l-2 border-black ml-3 pt-1">
            {{ f.a }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
