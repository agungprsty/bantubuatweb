<script setup lang="ts">
import { SERVICES } from '~/data/services'

const props = defineProps<{ project?: Record<string, any> | null }>()
const emit = defineEmits<{ saved: [] }>()

const blank = {
  title: '', client_name: '', client_contact: '', service_slug: '', plan_id: '' as number | '', status: 'lead',
  domain: '', url: '', start_date: '', due_date: '', done_date: '', notes: '',
  contract_value: 0, discount: 0,
  is_public: false, public_tag: '', public_desc: '', public_result: '', public_image: '',
  public_grad: PORTFOLIO_GRADIENTS[0] as string, public_order: 0,
}
const form = reactive({ ...blank })

watch(() => props.project, (p) => {
  if (!p) return
  for (const key of Object.keys(blank) as (keyof typeof blank)[]) (form as any)[key] = p[key] ?? blank[key]
  form.is_public = !!p.is_public
}, { immediate: true })

const { data: plans } = await useFetch('/api/admin/plans', { default: () => [] })

const saving = ref(false)
const error = ref('')
const savedAt = ref(false)

async function save() {
  saving.value = true
  error.value = ''
  try {
    if (props.project) {
      await $fetch(`/api/admin/projects/${props.project.id}`, { method: 'PUT', body: form })
      savedAt.value = true
      setTimeout(() => { savedAt.value = false }, 2500)
      emit('saved')
    } else {
      const { id } = await $fetch('/api/admin/projects', { method: 'POST', body: form })
      await navigateTo(`/admin/proyek/${id}`)
    }
  } catch (e) {
    error.value = apiError(e)
  } finally {
    saving.value = false
  }
}

async function remove() {
  if (!props.project || !confirm(`Hapus proyek "${props.project.title}"? Biaya proyek ini akan menjadi biaya umum.`)) return
  try {
    await $fetch(`/api/admin/projects/${props.project.id}`, { method: 'DELETE' })
    await navigateTo('/admin/proyek')
  } catch (e) {
    error.value = apiError(e)
  }
}
</script>

<template>
  <form class="space-y-5" @submit.prevent="save">
    <section class="neo-box p-4 sm:p-5">
      <h2 class="mb-4 font-black">Klien & Proyek</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label class="admin-label" for="title">Nama proyek *</label>
          <input id="title" v-model="form.title" class="admin-input" required maxlength="120">
        </div>
        <div>
          <label class="admin-label" for="client_name">Nama klien</label>
          <input id="client_name" v-model="form.client_name" class="admin-input" maxlength="120">
        </div>
        <div>
          <label class="admin-label" for="client_contact">Kontak klien</label>
          <input id="client_contact" v-model="form.client_contact" class="admin-input" maxlength="120" placeholder="No. WA / email">
        </div>
        <div>
          <label class="admin-label" for="service_slug">Kategori layanan</label>
          <select id="service_slug" v-model="form.service_slug" class="admin-input">
            <option value="">–</option>
            <option v-for="s in SERVICES" :key="s.slug" :value="s.slug">{{ s.title }}</option>
          </select>
        </div>
        <div>
          <label class="admin-label" for="plan_id">Paket</label>
          <select id="plan_id" v-model="form.plan_id" class="admin-input">
            <option value="">–</option>
            <option v-for="p in plans" :key="p.id" :value="p.id">{{ p.name }}</option>
          </select>
        </div>
        <div>
          <label class="admin-label" for="status">Status</label>
          <select id="status" v-model="form.status" class="admin-input">
            <option v-for="(label, value) in PROJECT_STATUS" :key="value" :value="value">{{ label }}</option>
          </select>
        </div>
        <div>
          <label class="admin-label" for="domain">Domain</label>
          <input id="domain" v-model="form.domain" class="admin-input" maxlength="120" placeholder="contoh.com">
        </div>
        <div class="sm:col-span-2">
          <label class="admin-label" for="url">URL website</label>
          <input id="url" v-model="form.url" type="url" class="admin-input" maxlength="300" placeholder="https://contoh.com">
        </div>
      </div>
    </section>

    <section class="neo-box p-4 sm:p-5">
      <h2 class="mb-4 font-black">Jadwal & Nilai</h2>
      <div class="grid gap-4 sm:grid-cols-3">
        <div>
          <label class="admin-label" for="start_date">Mulai</label>
          <input id="start_date" v-model="form.start_date" type="date" class="admin-input">
        </div>
        <div>
          <label class="admin-label" for="due_date">Target selesai</label>
          <input id="due_date" v-model="form.due_date" type="date" class="admin-input">
        </div>
        <div>
          <label class="admin-label" for="done_date">Selesai</label>
          <input id="done_date" v-model="form.done_date" type="date" class="admin-input">
        </div>
        <div>
          <label class="admin-label" for="contract_value">Nilai kontrak (Rp)</label>
          <input id="contract_value" v-model.number="form.contract_value" type="number" min="0" step="1" inputmode="numeric" class="admin-input">
          <p class="mt-1 text-xs font-bold text-zinc-600">{{ rupiah(form.contract_value || 0) }}</p>
        </div>
        <div>
          <label class="admin-label" for="discount">Diskon (Rp)</label>
          <input id="discount" v-model.number="form.discount" type="number" min="0" step="1" inputmode="numeric" class="admin-input">
          <p class="mt-1 text-xs font-bold text-zinc-600">{{ rupiah(form.discount || 0) }}</p>
        </div>
        <div>
          <p class="admin-label">Kontrak bersih</p>
          <p class="py-2 text-sm font-black">{{ rupiah((form.contract_value || 0) - (form.discount || 0)) }}</p>
        </div>
        <div class="sm:col-span-3">
          <label class="admin-label" for="notes">Catatan</label>
          <textarea id="notes" v-model="form.notes" rows="3" class="admin-input" maxlength="5000" />
        </div>
      </div>
    </section>

    <section class="neo-box p-4 sm:p-5">
      <label class="flex cursor-pointer items-center gap-3">
        <input v-model="form.is_public" type="checkbox" class="h-5 w-5 accent-black">
        <span class="font-black">Tampilkan di Portofolio</span>
      </label>
      <p class="mt-1 text-xs font-semibold text-zinc-600">Muncul di halaman /proyek dan carousel beranda (±1 menit setelah disimpan).</p>

      <div v-if="form.is_public" class="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label class="admin-label" for="public_tag">Tag *</label>
          <input id="public_tag" v-model="form.public_tag" class="admin-input" maxlength="60" required placeholder="Toko Online">
        </div>
        <div>
          <label class="admin-label" for="public_result">Hasil</label>
          <input id="public_result" v-model="form.public_result" class="admin-input" maxlength="120" placeholder="Omzet naik 3×">
        </div>
        <div class="sm:col-span-2">
          <label class="admin-label" for="public_desc">Deskripsi *</label>
          <textarea id="public_desc" v-model="form.public_desc" rows="3" class="admin-input" maxlength="400" required />
        </div>
        <div>
          <label class="admin-label" for="public_image">Gambar</label>
          <input id="public_image" v-model="form.public_image" class="admin-input" maxlength="300" placeholder="/images/portfolio/nama.webp">
        </div>
        <div>
          <label class="admin-label" for="public_order">Urutan</label>
          <input id="public_order" v-model.number="form.public_order" type="number" min="0" step="1" class="admin-input">
        </div>
        <fieldset class="sm:col-span-2">
          <legend class="admin-label">Warna (dipakai jika tanpa gambar)</legend>
          <div class="flex flex-wrap gap-2">
            <label v-for="g in PORTFOLIO_GRADIENTS" :key="g" class="cursor-pointer">
              <input v-model="form.public_grad" type="radio" :value="g" class="peer sr-only">
              <span :class="['block h-9 w-14 rounded-lg border-2 border-black bg-gradient-to-br peer-checked:ring-4 peer-checked:ring-black peer-focus-visible:ring-4 peer-focus-visible:ring-neo-pink', g]" :title="g" />
            </label>
          </div>
        </fieldset>
      </div>
    </section>

    <p v-if="error" role="alert" class="rounded-lg border-2 border-black bg-red-300 px-3 py-2 text-sm font-bold text-black">{{ error }}</p>

    <div class="flex flex-wrap items-center gap-3">
      <button type="submit" class="admin-btn bg-neo-pink" :disabled="saving">
        {{ saving ? 'Menyimpan…' : project ? 'Simpan perubahan' : 'Buat proyek' }}
      </button>
      <span v-if="savedAt" role="status" class="text-sm font-bold text-neo-green">Tersimpan</span>
      <button v-if="project" type="button" class="admin-btn ml-auto bg-white" @click="remove">
        <AppIcon name="trash-2" class="h-4 w-4" /> Hapus proyek
      </button>
    </div>
  </form>
</template>
