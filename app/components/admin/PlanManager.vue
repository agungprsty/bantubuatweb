<script setup lang="ts">
const { data: plans, refresh } = await useFetch('/api/admin/plans', { default: () => [] })
type Plan = (typeof plans.value)[number]

const blank = () => ({
  name: '', description: '', price: '', original: '', renewal: '', cta: '', badge: '', featured: false,
  color: Object.keys(PLAN_COLORS)[0] as string, icon: '/images/gumroad/feature-receipt-1.svg', perks: '',
})
const form = reactive(blank())
// undefined = form tertutup, null = paket baru
const editing = ref<Plan | null | undefined>(undefined)
const busy = ref(false)
const error = ref('')

function open(p: Plan | null) {
  Object.assign(form, blank(), p ? { ...p, original: p.original ?? '', badge: p.badge ?? '', featured: !!p.featured, perks: p.perks.join('\n') } : {})
  editing.value = p
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
  ? $fetch(`/api/admin/plans/${editing.value.id}`, { method: 'PUT', body: form })
  : $fetch('/api/admin/plans', { method: 'POST', body: form }))
const remove = (p: Plan) => confirm(`Hapus paket "${p.name}"?`) && call(() => $fetch(`/api/admin/plans/${p.id}`, { method: 'DELETE' }), false)
const move = (i: number, dir: -1 | 1) => call(() => $fetch('/api/admin/plans/reorder', { method: 'POST', body: { ids: moved(plans.value, i, dir).map((p) => p.id) } }), false)
</script>

<template>
  <div class="space-y-5">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <p class="text-sm font-semibold text-zinc-400">Tampil di bagian "Pilihan Paket Investasi" beranda, sesuai urutan di bawah.</p>
      <button type="button" class="admin-btn bg-neo-yellow" @click="open(null)"><AppIcon name="plus" class="h-4 w-4" /> Tambah paket</button>
    </div>

    <form v-if="editing !== undefined" class="neo-box grid gap-4 p-4 sm:grid-cols-2 sm:p-5" @submit.prevent="save">
      <h2 class="font-black sm:col-span-2">{{ editing ? `Edit ${editing.name}` : 'Paket baru' }}</h2>
      <div>
        <label class="admin-label" for="p-name">Nama paket *</label>
        <input id="p-name" v-model="form.name" class="admin-input" required maxlength="60">
      </div>
      <div>
        <label class="admin-label" for="p-badge">Badge</label>
        <input id="p-badge" v-model="form.badge" class="admin-input" maxlength="30" placeholder="PALING POPULER">
      </div>
      <div>
        <label class="admin-label" for="p-price">Harga *</label>
        <input id="p-price" v-model="form.price" class="admin-input" required maxlength="40" placeholder="Rp 4,9jt">
      </div>
      <div>
        <label class="admin-label" for="p-original">Harga coret</label>
        <input id="p-original" v-model="form.original" class="admin-input" maxlength="40" placeholder="Rp 6.500.000">
      </div>
      <div>
        <label class="admin-label" for="p-renewal">Perpanjangan</label>
        <input id="p-renewal" v-model="form.renewal" class="admin-input" maxlength="60" placeholder="+ Rp 1,2jt/tahun">
      </div>
      <div>
        <label class="admin-label" for="p-cta">Teks tombol</label>
        <input id="p-cta" v-model="form.cta" class="admin-input" maxlength="60" placeholder="Pilih Company Profile">
      </div>
      <div class="sm:col-span-2">
        <label class="admin-label" for="p-desc">Deskripsi</label>
        <input id="p-desc" v-model="form.description" class="admin-input" maxlength="200">
      </div>
      <div class="sm:col-span-2">
        <label class="admin-label" for="p-perks">Fitur (satu per baris)</label>
        <textarea id="p-perks" v-model="form.perks" rows="6" class="admin-input" />
      </div>
      <fieldset>
        <legend class="admin-label">Warna kartu</legend>
        <div class="flex flex-wrap gap-2">
          <label v-for="(label, cls) in PLAN_COLORS" :key="cls" class="cursor-pointer">
            <input v-model="form.color" type="radio" :value="cls" class="peer sr-only">
            <span :class="['block rounded-lg border-2 px-3 py-1.5 text-xs font-extrabold peer-checked:ring-4 peer-checked:ring-neo-pink peer-focus-visible:ring-4 peer-focus-visible:ring-neo-pink', cls]">{{ label }}</span>
          </label>
        </div>
      </fieldset>
      <div class="flex items-end gap-3">
        <div class="flex-1">
          <label class="admin-label" for="p-icon">Ikon</label>
          <input id="p-icon" v-model="form.icon" class="admin-input" maxlength="300">
        </div>
        <img v-if="form.icon" :src="form.icon" alt="" class="h-10 w-10 shrink-0 object-contain">
      </div>
      <label class="flex cursor-pointer items-center gap-3 sm:col-span-2">
        <input v-model="form.featured" type="checkbox" class="h-5 w-5 accent-black">
        <span class="text-sm font-bold">Tonjolkan (bingkai tebal & tombol hitam)</span>
      </label>
      <p v-if="error" role="alert" class="rounded-lg border-2 border-black bg-red-300 px-3 py-2 text-sm font-bold sm:col-span-2">{{ error }}</p>
      <div class="flex gap-2 sm:col-span-2">
        <button type="submit" class="admin-btn bg-neo-pink" :disabled="busy">Simpan</button>
        <button type="button" class="admin-btn bg-white" @click="editing = undefined">Batal</button>
      </div>
    </form>
    <p v-else-if="error" role="alert" class="rounded-lg border-2 border-black bg-red-300 px-3 py-2 text-sm font-bold text-black">{{ error }}</p>

    <ul class="grid gap-3 md:grid-cols-2">
      <li v-for="(p, i) in plans" :key="p.id" class="neo-box flex items-start gap-3 p-4">
        <span :class="['mt-0.5 h-10 w-3 shrink-0 rounded border-2', p.color]" aria-hidden="true" />
        <div class="min-w-0 flex-1">
          <p class="font-black">{{ p.name }} <span v-if="p.featured" class="text-xs font-bold text-zinc-500">· ditonjolkan</span></p>
          <p class="text-sm font-bold">{{ p.price }} <span v-if="p.original" class="text-xs text-zinc-500 line-through">{{ p.original }}</span></p>
          <p class="text-xs font-semibold text-zinc-600">{{ p.perks.length }} fitur</p>
        </div>
        <div class="flex shrink-0 flex-wrap justify-end gap-1.5">
          <button type="button" class="admin-btn bg-white p-1.5" :aria-label="`Naikkan ${p.name}`" :disabled="busy || i === 0" @click="move(i, -1)"><AppIcon name="arrow-up" class="h-3.5 w-3.5" /></button>
          <button type="button" class="admin-btn bg-white p-1.5" :aria-label="`Turunkan ${p.name}`" :disabled="busy || i === plans.length - 1" @click="move(i, 1)"><AppIcon name="arrow-down" class="h-3.5 w-3.5" /></button>
          <button type="button" class="admin-btn bg-white p-1.5" :aria-label="`Edit ${p.name}`" @click="open(p)"><AppIcon name="pencil" class="h-3.5 w-3.5" /></button>
          <button type="button" class="admin-btn bg-white p-1.5" :aria-label="`Hapus ${p.name}`" :disabled="busy" @click="remove(p)"><AppIcon name="trash-2" class="h-3.5 w-3.5" /></button>
        </div>
      </li>
      <li v-if="!plans.length" class="neo-box p-6 text-center text-sm font-semibold text-zinc-600 md:col-span-2">Belum ada paket. Bagian harga disembunyikan dari beranda.</li>
    </ul>
  </div>
</template>
