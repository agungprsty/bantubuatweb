<script setup lang="ts">
const { data: faqs, refresh } = await useFetch('/api/admin/faqs', { default: () => [] })
type Faq = (typeof faqs.value)[number]

const form = reactive({ question: '', answer: '' })
// undefined = form tertutup, null = FAQ baru
const editing = ref<Faq | null | undefined>(undefined)
const busy = ref(false)
const error = ref('')

function open(f: Faq | null) {
  Object.assign(form, { question: f?.question ?? '', answer: f?.answer ?? '' })
  editing.value = f
  error.value = ''
}

async function call(fn: () => Promise<unknown>, close = true) {
  busy.value = true
  error.value = ''
  try {
    await fn()
    if (close) editing.value = undefined
    await refresh()
  } catch (e) {
    error.value = apiError(e)
  } finally {
    busy.value = false
  }
}

const save = () => call(() => editing.value
  ? $fetch(`/api/admin/faqs/${editing.value.id}`, { method: 'PUT', body: form })
  : $fetch('/api/admin/faqs', { method: 'POST', body: form }))
const remove = (f: Faq) => confirm(`Hapus FAQ "${f.question}"?`) && call(() => $fetch(`/api/admin/faqs/${f.id}`, { method: 'DELETE' }), false)
const move = (i: number, dir: -1 | 1) => call(() => $fetch('/api/admin/faqs/reorder', { method: 'POST', body: { ids: moved(faqs.value, i, dir).map((f) => f.id) } }), false)
</script>

<template>
  <div class="space-y-5">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <p class="text-sm font-semibold text-zinc-400">Tampil di bagian "Pertanyaan Yang Sering Diajukan" beranda.</p>
      <button type="button" class="admin-btn bg-neo-yellow" @click="open(null)"><AppIcon name="plus" class="h-4 w-4" /> Tambah FAQ</button>
    </div>

    <form v-if="editing !== undefined" class="neo-box space-y-4 p-4 sm:p-5" @submit.prevent="save">
      <h2 class="font-black">{{ editing ? 'Edit FAQ' : 'FAQ baru' }}</h2>
      <div>
        <label class="admin-label" for="f-q">Pertanyaan *</label>
        <input id="f-q" v-model="form.question" class="admin-input" required maxlength="200">
      </div>
      <div>
        <label class="admin-label" for="f-a">Jawaban *</label>
        <textarea id="f-a" v-model="form.answer" rows="5" class="admin-input" required maxlength="2000" />
      </div>
      <p v-if="error" role="alert" class="rounded-lg border-2 border-black bg-red-300 px-3 py-2 text-sm font-bold">{{ error }}</p>
      <div class="flex gap-2">
        <button type="submit" class="admin-btn bg-neo-pink" :disabled="busy">Simpan</button>
        <button type="button" class="admin-btn bg-white" @click="editing = undefined">Batal</button>
      </div>
    </form>
    <p v-else-if="error" role="alert" class="rounded-lg border-2 border-black bg-red-300 px-3 py-2 text-sm font-bold text-black">{{ error }}</p>

    <ol class="space-y-3">
      <li v-for="(f, i) in faqs" :key="f.id" class="neo-box flex items-start gap-3 p-4">
        <span class="mt-0.5 w-6 shrink-0 text-sm font-black text-zinc-500">{{ i + 1 }}.</span>
        <div class="min-w-0 flex-1">
          <p class="font-black">{{ f.question }}</p>
          <p class="mt-1 line-clamp-2 text-sm text-zinc-700">{{ f.answer }}</p>
        </div>
        <div class="flex shrink-0 flex-wrap justify-end gap-1.5">
          <button type="button" class="admin-btn bg-white p-1.5" aria-label="Naikkan" :disabled="busy || i === 0" @click="move(i, -1)"><AppIcon name="arrow-up" class="h-3.5 w-3.5" /></button>
          <button type="button" class="admin-btn bg-white p-1.5" aria-label="Turunkan" :disabled="busy || i === faqs.length - 1" @click="move(i, 1)"><AppIcon name="arrow-down" class="h-3.5 w-3.5" /></button>
          <button type="button" class="admin-btn bg-white p-1.5" :aria-label="`Edit FAQ ${i + 1}`" @click="open(f)"><AppIcon name="pencil" class="h-3.5 w-3.5" /></button>
          <button type="button" class="admin-btn bg-white p-1.5" :aria-label="`Hapus FAQ ${i + 1}`" :disabled="busy" @click="remove(f)"><AppIcon name="trash-2" class="h-3.5 w-3.5" /></button>
        </div>
      </li>
      <li v-if="!faqs.length" class="neo-box p-6 text-center text-sm font-semibold text-zinc-600">Belum ada FAQ. Bagian FAQ disembunyikan dari beranda.</li>
    </ol>
  </div>
</template>
