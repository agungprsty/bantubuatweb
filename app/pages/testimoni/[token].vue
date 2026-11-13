<script setup lang="ts">
// Halaman mandiri untuk klien: tanpa header/footer situs agar fokus mengisi
definePageMeta({ layout: false })
useHead({
  title: 'Beri Testimoni | BantuBuatWeb',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
  // main.css memberi html latar hitam; samakan dengan halaman ini (terlihat di area scrollbar)
  htmlAttrs: { style: 'background-color: #FFF6D6' },
})

const route = useRoute()
const token = String(route.params.token)
const { data: info, error: linkError } = await useFetch(`/api/testimoni/${token}`)
const googleReviewUrl = useRuntimeConfig().public.googleReviewUrl

// website = honeypot, harus tetap kosong
const form = reactive({ name: '', role: '', rating: 5, quote: '', result: '', consent: false, website: '' })
const sending = ref(false)
const error = ref('')
const done = ref(false)

const ratingLabels = ['Kurang', 'Cukup', 'Baik', 'Sangat baik', 'Luar biasa']
const hover = ref(0)
const shownRating = computed(() => hover.value || form.rating)

// Kalimat pembuka supaya klien tidak bingung mulai menulis
const prompts = [
  'Sebelum punya website, ',
  'Yang paling saya suka dari tim BantuBuatWeb adalah ',
  'Setelah website jadi, ',
  'Saya merekomendasikan BantuBuatWeb karena ',
]
const quoteEl = ref<HTMLTextAreaElement | null>(null)
// Hanya satu kalimat pembuka: memilih yang lain menggantinya, klik yang sama membatalkannya
const selectedPrompt = ref('')
watch(() => form.quote, (q) => {
  // klien mengubah kalimat pembukanya sendiri: anggap tidak ada pembuka terpilih
  if (selectedPrompt.value && !q.startsWith(selectedPrompt.value)) selectedPrompt.value = ''
})
function choosePrompt(p: string) {
  const rest = form.quote.slice(selectedPrompt.value.length).trimStart()
  selectedPrompt.value = selectedPrompt.value === p ? '' : p
  form.quote = selectedPrompt.value + rest
  nextTick(() => {
    quoteEl.value?.focus()
    quoteEl.value?.setSelectionRange(form.quote.length, form.quote.length)
  })
}
const quoteLength = computed(() => form.quote.trim().length)

async function submit() {
  sending.value = true
  error.value = ''
  try {
    await $fetch(`/api/testimoni/${token}`, { method: 'POST', body: form })
    done.value = true
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch (e) {
    error.value = apiError(e)
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#FFF6D6] font-sans text-black antialiased selection:bg-neo-pink">
    <div class="mx-auto flex min-h-screen max-w-xl flex-col px-4 py-6 sm:py-10">
      <header class="flex justify-center">
        <AppLogo />
      </header>

      <main class="flex flex-1 flex-col justify-center py-6 sm:py-8">
        <!-- Link tidak valid / kedaluwarsa / sudah dipakai -->
        <div v-if="linkError" class="rounded-2xl border-2 border-black bg-white p-5 text-center shadow-neo-lg sm:p-8">
          <h1 class="text-xl font-black sm:text-2xl">Link tidak bisa dipakai</h1>
          <p class="mt-2 text-sm font-semibold text-zinc-600 sm:text-base">{{ apiError(linkError) }}</p>
          <a :href="wa('Halo BantuBuatWeb, saya ingin memberi testimoni tapi link-nya tidak bisa dibuka')" target="_blank" rel="noopener" class="neo-btn mt-6 bg-neo-green text-black">
            <AppIcon name="whatsapp" class="mr-2 h-5 w-5" /> Hubungi Kami
          </a>
        </div>

        <!-- Terima kasih -->
        <div v-else-if="done" class="rounded-2xl border-2 border-black bg-white p-5 text-center shadow-neo-lg sm:p-10" role="status">
          <h1 class="text-2xl font-black leading-tight sm:text-3xl">Terima kasih, {{ form.name.split(' ')[0] }}!</h1>
          <p class="mt-3 text-sm font-semibold text-zinc-600 sm:text-base">Testimoni Anda sudah kami terima dan akan kami tinjau sebelum tampil di website.</p>
          <div v-if="googleReviewUrl" class="mt-6 rounded-xl border-2 border-dashed border-black bg-neo-yellow/20 p-4">
            <p class="text-sm font-bold text-zinc-700">Satu langkah kecil lagi? Ulasan di Google sangat membantu bisnis kecil seperti kami.</p>
            <a :href="googleReviewUrl" target="_blank" rel="noopener" class="neo-btn mt-3 bg-neo-yellow text-black">Beri Ulasan di Google</a>
          </div>
          <NuxtLink to="/" class="mt-6 inline-block text-sm font-bold underline underline-offset-4">Lihat website BantuBuatWeb</NuxtLink>
        </div>

        <!-- Form -->
        <template v-else-if="info">
          <div class="text-center">
            <h1 class="text-2xl font-black leading-tight sm:text-4xl">Ceritakan pengalaman <span class="underline decoration-neo-pink decoration-[6px] underline-offset-[6px]">Anda</span></h1>
            <p class="mx-auto mt-2 max-w-md text-sm font-semibold text-zinc-600 sm:mt-3 sm:text-base">
              Terima kasih telah mempercayakan proyek <strong class="text-black">{{ info.project }}</strong> kepada kami.
              Hanya butuh sekitar 2 menit.
            </p>
          </div>

          <form class="mt-6 space-y-5 rounded-2xl border-2 border-black bg-white p-4 shadow-neo-lg sm:mt-8 sm:p-7" @submit.prevent="submit">
            <!-- 1. Tentang Anda -->
            <section class="space-y-3">
              <h2 class="font-black">1. Tentang Anda</h2>
              <div>
                <label class="admin-label" for="t-name">Nama *</label>
                <input id="t-name" v-model="form.name" class="admin-input" required maxlength="80" autocomplete="name">
              </div>
              <div>
                <label class="admin-label" for="t-role">Jabatan & nama usaha *</label>
                <input id="t-role" v-model="form.role" class="admin-input" required maxlength="120" :placeholder="`Owner ${info.project}`">
              </div>
            </section>

            <!-- 2. Penilaian -->
            <section class="space-y-2 border-t-2 border-dashed border-black pt-5">
              <h2 class="font-black">2. Seberapa puas Anda?</h2>
              <fieldset>
                <legend class="sr-only">Rating</legend>
                <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <div class="flex" @mouseleave="hover = 0">
                    <label v-for="i in 5" :key="i" class="cursor-pointer" @mouseenter="hover = i">
                      <input v-model="form.rating" type="radio" name="rating" :value="i" class="peer sr-only">
                      <span
                        :class="[
                          'block rounded-md px-1 text-[2rem] leading-none transition-colors peer-focus-visible:ring-4 peer-focus-visible:ring-neo-pink sm:text-4xl',
                          i <= shownRating ? 'text-amber-400' : 'text-zinc-200',
                        ]"
                        aria-hidden="true"
                      >★</span>
                      <span class="sr-only">{{ i }} bintang, {{ ratingLabels[i - 1] }}</span>
                    </label>
                  </div>
                  <span class="whitespace-nowrap text-sm font-bold text-zinc-600" aria-live="polite">{{ ratingLabels[shownRating - 1] }}</span>
                </div>
              </fieldset>
            </section>

            <!-- 3. Cerita -->
            <section class="space-y-3 border-t-2 border-dashed border-black pt-5">
              <h2 class="font-black">3. Cerita Anda</h2>
              <div>
                <p id="prompt-hint" class="mb-2 text-xs font-bold text-zinc-600">Bingung mulai dari mana? Pilih salah satu kalimat pembuka:</p>
                <div class="flex flex-wrap gap-2" role="group" aria-labelledby="prompt-hint">
                  <button
                    v-for="p in prompts"
                    :key="p"
                    type="button"
                    :aria-pressed="selectedPrompt === p"
                    :class="[
                      'rounded-lg border-2 border-black px-3 py-1.5 text-left text-xs font-bold transition-colors',
                      selectedPrompt === p ? 'bg-neo-pink/40 shadow-neo-sm' : 'bg-white hover:bg-neo-yellow/30',
                    ]"
                    @click="choosePrompt(p)"
                  >
                    {{ p.trim() }}…
                  </button>
                </div>
              </div>
              <div>
                <label class="admin-label" for="t-quote">Testimoni *</label>
                <textarea id="t-quote" ref="quoteEl" v-model="form.quote" rows="5" class="admin-input text-base" required minlength="30" maxlength="1000" />
                <div class="mt-1.5 flex items-center gap-3">
                  <div class="h-2 flex-1 overflow-hidden rounded-full border border-black bg-white" aria-hidden="true">
                    <div class="h-full bg-neo-green transition-all" :style="{ width: `${Math.min(quoteLength / 30, 1) * 100}%` }" />
                  </div>
                  <p class="shrink-0 text-xs font-semibold text-zinc-500">
                    {{ quoteLength < 30 ? `${30 - quoteLength} karakter lagi` : `${quoteLength}/1000` }}
                  </p>
                </div>
              </div>
              <div>
                <label class="admin-label" for="t-result">Hasil yang dirasakan <span class="normal-case text-zinc-400">(opsional)</span></label>
                <input id="t-result" v-model="form.result" class="admin-input" maxlength="120" placeholder="Contoh: Order via WA naik 40%">
              </div>
            </section>

            <!-- honeypot: disembunyikan dari manusia, diisi oleh bot -->
            <div class="absolute -left-[9999px]" aria-hidden="true">
              <label for="t-website">Website</label>
              <input id="t-website" v-model="form.website" tabindex="-1" autocomplete="off">
            </div>

            <label class="flex cursor-pointer items-start gap-3 rounded-xl border-2 border-black bg-neo-cyan/15 p-3">
              <input v-model="form.consent" type="checkbox" class="mt-0.5 h-5 w-5 shrink-0 accent-black" required>
              <span class="text-sm font-semibold text-zinc-700">Saya mengizinkan BantuBuatWeb menampilkan nama, jabatan, dan testimoni ini di website dan materi promosi. *</span>
            </label>

            <p v-if="error" role="alert" class="rounded-lg border-2 border-red-600 bg-red-50 px-3 py-2 text-sm font-bold text-red-700">{{ error }}</p>

            <button type="submit" class="neo-btn w-full bg-neo-pink py-3 text-base text-black disabled:opacity-60" :disabled="sending">
              {{ sending ? 'Mengirim…' : 'Kirim Testimoni' }}
            </button>
          </form>
        </template>
      </main>

      <footer class="text-center text-xs font-semibold text-zinc-600">
        Data Anda hanya dipakai untuk testimoni · © BantuBuatWeb
      </footer>
    </div>
  </div>
</template>
