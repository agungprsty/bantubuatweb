<script setup lang="ts">
const props = defineProps<{ item: Record<string, any> | null, projects: { id: number, title: string }[] }>()
const emit = defineEmits<{ saved: [], cancel: [] }>()

const blank = { name: '', role: '', project_id: '' as number | '', rating: '' as number | '', tag: '', quote: '', result: '', status: 'disetujui', featured: false, sort_order: 0, consent: false }
const form = reactive({ ...blank })
for (const key of Object.keys(blank) as (keyof typeof blank)[]) (form as any)[key] = props.item?.[key] ?? blank[key]
form.featured = !!props.item?.featured
form.consent = !!props.item?.consent

const saving = ref(false)
const error = ref('')

async function save() {
  saving.value = true
  error.value = ''
  try {
    await (props.item
      ? $fetch(`/api/admin/testimonials/${props.item.id}`, { method: 'PUT', body: form })
      : $fetch('/api/admin/testimonials', { method: 'POST', body: form }))
    emit('saved')
  } catch (e) {
    error.value = apiError(e)
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <form class="neo-box grid gap-4 p-4 sm:grid-cols-2 sm:p-5" @submit.prevent="save">
    <h2 class="font-black sm:col-span-2">{{ item ? 'Edit testimoni' : 'Tambah testimoni manual' }}</h2>
    <div>
      <label class="admin-label" for="tf-name">Nama *</label>
      <input id="tf-name" v-model="form.name" class="admin-input" required maxlength="80">
    </div>
    <div>
      <label class="admin-label" for="tf-role">Jabatan & usaha</label>
      <input id="tf-role" v-model="form.role" class="admin-input" maxlength="120">
    </div>
    <div>
      <label class="admin-label" for="tf-project">Proyek</label>
      <select id="tf-project" v-model="form.project_id" class="admin-input">
        <option value="">–</option>
        <option v-for="p in projects" :key="p.id" :value="p.id">{{ p.title }}</option>
      </select>
    </div>
    <div>
      <label class="admin-label" for="tf-rating">Rating</label>
      <select id="tf-rating" v-model="form.rating" class="admin-input">
        <option value="">–</option>
        <option v-for="i in 5" :key="i" :value="i">{{ '★'.repeat(i) }} ({{ i }})</option>
      </select>
    </div>
    <div class="sm:col-span-2">
      <label class="admin-label" for="tf-quote">Isi testimoni *</label>
      <textarea id="tf-quote" v-model="form.quote" rows="4" class="admin-input" required maxlength="1000" />
    </div>
    <div>
      <label class="admin-label" for="tf-result">Hasil</label>
      <input id="tf-result" v-model="form.result" class="admin-input" maxlength="120">
    </div>
    <div>
      <label class="admin-label" for="tf-tag">Tag</label>
      <input id="tf-tag" v-model="form.tag" class="admin-input" maxlength="60" placeholder="Toko Online">
    </div>
    <div>
      <label class="admin-label" for="tf-status">Status</label>
      <select id="tf-status" v-model="form.status" class="admin-input">
        <option v-for="(label, value) in TESTIMONIAL_STATUS" :key="value" :value="value">{{ label }}</option>
      </select>
    </div>
    <div>
      <label class="admin-label" for="tf-order">Urutan</label>
      <input id="tf-order" v-model.number="form.sort_order" type="number" min="0" step="1" class="admin-input">
    </div>
    <label class="flex cursor-pointer items-center gap-3 sm:col-span-2">
      <input v-model="form.featured" type="checkbox" class="h-5 w-5 accent-black">
      <span class="text-sm font-bold">Unggulan (tampil lebih dulu di beranda)</span>
    </label>
    <label class="flex cursor-pointer items-start gap-3 rounded-lg border-2 border-black bg-neo-yellow/40 p-3 sm:col-span-2">
      <input v-model="form.consent" type="checkbox" class="mt-0.5 h-5 w-5 shrink-0 accent-black">
      <span class="text-sm font-bold">Klien sudah mengizinkan testimoni ini dipublikasikan (wajib untuk status Disetujui)</span>
    </label>
    <p v-if="error" role="alert" class="rounded-lg border-2 border-black bg-red-300 px-3 py-2 text-sm font-bold sm:col-span-2">{{ error }}</p>
    <div class="flex gap-2 sm:col-span-2">
      <button type="submit" class="admin-btn bg-neo-pink" :disabled="saving">{{ saving ? 'Menyimpan…' : 'Simpan' }}</button>
      <button type="button" class="admin-btn bg-white" @click="emit('cancel')">Batal</button>
    </div>
  </form>
</template>
