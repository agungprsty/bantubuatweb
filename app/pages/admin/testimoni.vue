<script setup lang="ts">
definePageMeta({ layout: 'admin' })
useHead({ title: 'Testimoni | Admin BantuBuatWeb' })

const { data: items, error, refresh } = await useFetch('/api/admin/testimonials', { default: () => [] })
const { data: projects } = await useFetch('/api/admin/projects', { default: () => [] })
type Item = (typeof items.value)[number]

const filter = ref<TestimonialStatus | ''>('')
const filters = computed(() => [
  { value: '' as const, label: 'Semua', n: items.value.length },
  ...(Object.keys(TESTIMONIAL_STATUS) as TestimonialStatus[]).map((s) => ({
    value: s, label: TESTIMONIAL_STATUS[s], n: items.value.filter((t) => t.status === s).length,
  })),
])
const shown = computed(() => filter.value ? items.value.filter((t) => t.status === filter.value) : items.value)

// undefined = form tertutup, null = tambah baru
const editing = ref<Item | null | undefined>(undefined)
const busyId = ref<number | null>(null)
const actionError = ref('')

const statusColor: Record<TestimonialStatus, string> = { pending: 'bg-neo-yellow', disetujui: 'bg-neo-green', ditolak: 'bg-red-300' }

async function act(t: Item, fn: () => Promise<unknown>) {
  busyId.value = t.id
  actionError.value = ''
  try {
    await fn()
    await refresh()
  } catch (e) {
    actionError.value = `${t.name}: ${apiError(e)}`
  } finally {
    busyId.value = null
  }
}
const update = (t: Item, patch: Partial<Item>) => act(t, () => $fetch(`/api/admin/testimonials/${t.id}`, { method: 'PUT', body: { ...t, ...patch } }))
const remove = (t: Item) => confirm(`Hapus testimoni dari ${t.name}?`) && act(t, () => $fetch(`/api/admin/testimonials/${t.id}`, { method: 'DELETE' }))

function openForm(t: Item | null) {
  editing.value = t
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
async function onSaved() {
  editing.value = undefined
  await refresh()
}
</script>

<template>
  <div class="space-y-5">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <h1 class="text-2xl font-black sm:text-3xl">Testimoni</h1>
      <button type="button" class="admin-btn bg-neo-pink" @click="openForm(null)">
        <AppIcon name="plus" class="h-4 w-4" /> Tambah manual
      </button>
    </div>

    <AdminTestimonialForm
      v-if="editing !== undefined"
      :key="editing?.id ?? 'baru'"
      :item="editing"
      :projects="projects"
      @saved="onSaved"
      @cancel="editing = undefined"
    />

    <div class="flex flex-wrap gap-2" role="group" aria-label="Filter status">
      <button
        v-for="f in filters"
        :key="f.value"
        type="button"
        :aria-pressed="filter === f.value"
        :class="['rounded-lg border-2 px-3 py-1.5 text-sm font-extrabold', filter === f.value ? 'border-black bg-neo-yellow text-black shadow-neo-sm' : 'border-zinc-700 text-zinc-300 hover:text-white']"
        @click="filter = f.value"
      >
        {{ f.label }} <span class="opacity-70">{{ f.n }}</span>
      </button>
    </div>

    <p v-if="error || actionError" role="alert" class="rounded-lg border-2 border-black bg-red-300 px-3 py-2 text-sm font-bold text-black">
      {{ actionError || apiError(error) }}
    </p>

    <div class="grid gap-4 lg:grid-cols-2">
      <article v-for="t in shown" :key="t.id" class="neo-box flex flex-col p-4 sm:p-5">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <p class="font-black">{{ t.name }}<span v-if="t.featured" class="ml-1.5 text-yellow-500" title="Unggulan">★</span></p>
            <p v-if="t.role" class="text-xs font-semibold text-zinc-600">{{ t.role }}</p>
          </div>
          <span :class="['neo-badge shrink-0 text-black', statusColor[t.status]]">{{ TESTIMONIAL_STATUS[t.status] }}</span>
        </div>

        <p class="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs font-bold text-zinc-600">
          <span v-if="t.project_title">{{ t.project_title }}</span>
          <span v-if="t.rating" class="text-yellow-600" :aria-label="`Rating ${t.rating}`">{{ '★'.repeat(t.rating) }}</span>
          <span>{{ t.source === 'form' ? 'Form klien' : 'Input admin' }}</span>
          <span>{{ tanggal(t.created_at.slice(0, 10)) }}</span>
        </p>

        <p class="mt-3 flex-1 text-sm leading-relaxed text-zinc-800">“{{ t.quote }}”</p>
        <p v-if="t.result" class="mt-2 text-xs font-black">Hasil: {{ t.result }}</p>
        <p v-if="!t.consent" class="mt-2 text-xs font-bold text-red-600">Belum ada izin publikasi dari klien.</p>

        <div class="mt-4 flex flex-wrap gap-2 border-t-2 border-zinc-200 pt-3">
          <button v-if="t.status !== 'disetujui'" type="button" class="admin-btn bg-neo-green px-3 py-1 text-xs" :disabled="busyId === t.id" @click="update(t, { status: 'disetujui' })">Setujui</button>
          <button v-if="t.status !== 'ditolak'" type="button" class="admin-btn bg-white px-3 py-1 text-xs" :disabled="busyId === t.id" @click="update(t, { status: 'ditolak' })">Tolak</button>
          <button type="button" class="admin-btn bg-white px-3 py-1 text-xs" :aria-pressed="!!t.featured" :disabled="busyId === t.id" @click="update(t, { featured: t.featured ? 0 : 1 })">
            {{ t.featured ? '★ Unggulan' : '☆ Jadikan unggulan' }}
          </button>
          <span class="ml-auto flex gap-1.5">
            <button type="button" class="admin-btn bg-white p-1.5" :aria-label="`Edit testimoni ${t.name}`" @click="openForm(t)"><AppIcon name="pencil" class="h-3.5 w-3.5" /></button>
            <button type="button" class="admin-btn bg-white p-1.5" :aria-label="`Hapus testimoni ${t.name}`" :disabled="busyId === t.id" @click="remove(t)"><AppIcon name="trash-2" class="h-3.5 w-3.5" /></button>
          </span>
        </div>
      </article>
      <p v-if="!shown.length" class="neo-box p-6 text-center text-sm font-semibold text-zinc-600 lg:col-span-2">Belum ada testimoni.</p>
    </div>
  </div>
</template>
