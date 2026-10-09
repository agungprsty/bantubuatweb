<script setup lang="ts">
export interface LegalSection {
  heading: string
  body: string[]
}

const props = withDefaults(defineProps<{
  title: string
  updated: string
  intro?: string
  sections: LegalSection[]
}>(), { intro: '' })
</script>

<template>
  <div class="bg-black text-white min-h-screen pt-16 sm:pt-24 pb-16 sm:pb-20">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb / Header Badge -->
      <nav class="flex items-center gap-2 text-xs font-black uppercase text-zinc-300" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:underline">Beranda</NuxtLink>
        <span>/</span>
        <span class="bg-neo-yellow text-black px-2 py-0.5 rounded border border-black shadow-[1.5px_1.5px_0px_0px_#fff]">Dokumen Legal</span>
      </nav>

      <!-- Page Header -->
      <div class="mt-6 space-y-3 sm:space-y-4 border-b-2 border-zinc-800 pb-6 sm:pb-8">
        <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          {{ title }}
        </h1>
        <div class="flex items-center gap-3 pt-1">
          <span class="inline-block rounded-md border-2 border-black bg-neo-pink px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-black text-black shadow-[2px_2px_0px_0px_#fff]">
            Terakhir diperbarui: {{ updated }}
          </span>
        </div>
        <p v-if="intro" class="text-xs sm:text-base font-bold text-zinc-300 leading-relaxed pt-2">
          {{ intro }}
        </p>
      </div>

      <!-- Legal Content Sections -->
      <div class="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
        <div
          v-for="s in sections"
          :key="s.heading"
          class="neo-box bg-white text-black p-4 sm:p-6 lg:p-8"
        >
          <h2 class="text-lg sm:text-xl lg:text-2xl font-black text-black border-b-2 border-black pb-2.5 sm:pb-3 mb-3 sm:mb-4">
            {{ s.heading }}
          </h2>
          <div class="space-y-2.5 sm:space-y-3">
            <p
              v-for="(b, i) in s.body"
              :key="i"
              class="text-xs sm:text-sm lg:text-base font-bold text-slate-800 leading-relaxed"
            >
              {{ b }}
            </p>
          </div>
        </div>
      </div>

      <!-- Help / Contact Box -->
      <div class="mt-10 sm:mt-12 neo-box bg-neo-yellow text-black p-5 sm:p-8 border-3 sm:border-4 shadow-[6px_6px_0px_0px_#fff] sm:shadow-[8px_8px_0px_0px_#fff]">
        <h3 class="text-lg sm:text-xl lg:text-2xl font-black text-black">Ada Pertanyaan Seputar Dokumen Ini?</h3>
        <p class="mt-2 text-xs sm:text-sm lg:text-base font-bold text-black leading-relaxed">
          Tim BantuBuatWeb siap membantu menjawab pertanyaan Anda melalui WhatsApp atau email di
          <a href="mailto:halo@bantubuat.web.id" class="underline font-black">halo@bantubuat.web.id</a>.
        </p>
        <div class="mt-5 sm:mt-6">
          <a
            :href="wa('Halo BantuBuatWeb, saya ada pertanyaan seputar syarat dan kebijakan di situs Anda.')"
            target="_blank"
            rel="noopener"
            class="neo-btn bg-black text-white px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-black shadow-[3px_3px_0px_0px_#fff] hover:bg-neo-pink hover:text-black w-full sm:w-auto inline-flex items-center justify-center"
          >
            <AppIcon name="whatsapp" class="mr-2 h-4 w-4 shrink-0" />
            Hubungi Tim Kami
          </a>
        </div>
      </div>
    </div>
  </div>
</template>