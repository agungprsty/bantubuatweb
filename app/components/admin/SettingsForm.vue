<script setup lang="ts">
const { data } = await useFetch('/api/admin/settings')
const form = reactive({ ...SETTINGS_DEFAULTS })
watch(data, (d) => { if (d) Object.assign(form, d) }, { immediate: true })

const saving = ref(false)
const error = ref('')
const saved = ref(false)

async function save() {
  saving.value = true
  error.value = ''
  try {
    // server menormalkan nomor WA (0812… → 62812…), tampilkan hasilnya
    Object.assign(form, await $fetch('/api/admin/settings', { method: 'PUT', body: form }))
    saved.value = true
    setTimeout(() => { saved.value = false }, 2500)
  } catch (e) {
    error.value = apiError(e)
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <form class="space-y-5" @submit.prevent="save">
    <section class="neo-box grid gap-4 p-4 sm:grid-cols-2 sm:p-5">
      <h2 class="font-black sm:col-span-2">Kontak & bisnis</h2>
      <div>
        <label class="admin-label" for="s-wa">Nomor WhatsApp *</label>
        <input id="s-wa" v-model="form.wa_number" class="admin-input" required inputmode="tel" placeholder="0812xxxxxxxx">
        <p class="mt-1 text-xs font-semibold text-zinc-600">Dipakai semua tombol WhatsApp di website.</p>
      </div>
      <div>
        <label class="admin-label" for="s-email">Email *</label>
        <input id="s-email" v-model="form.email" type="email" class="admin-input" required maxlength="120">
      </div>
      <div class="sm:col-span-2">
        <label class="admin-label" for="s-wamsg">Pesan default WhatsApp *</label>
        <input id="s-wamsg" v-model="form.wa_message" class="admin-input" required maxlength="300">
        <p class="mt-1 text-xs font-semibold text-zinc-600">Dipakai tombol WA yang tidak punya pesan khusus (mis. nomor di footer).</p>
      </div>
      <div>
        <label class="admin-label" for="s-address">Alamat</label>
        <input id="s-address" v-model="form.address" class="admin-input" maxlength="200">
      </div>
      <div>
        <label class="admin-label" for="s-hours">Jam operasional</label>
        <input id="s-hours" v-model="form.hours" class="admin-input" maxlength="120" placeholder="Senin–Sabtu, 08.00–21.00">
      </div>
    </section>

    <section class="neo-box grid gap-4 p-4 sm:grid-cols-3 sm:p-5">
      <h2 class="font-black sm:col-span-3">Sosial media <span class="text-xs font-semibold text-zinc-600">(kosongkan untuk menyembunyikan ikonnya)</span></h2>
      <div v-for="s in (['instagram', 'facebook', 'linkedin'] as const)" :key="s">
        <label class="admin-label capitalize" :for="`s-${s}`">{{ s }}</label>
        <input :id="`s-${s}`" v-model="form[s]" type="url" class="admin-input" maxlength="300" placeholder="https://">
      </div>
    </section>

    <section class="neo-box grid gap-4 p-4 sm:p-5">
      <div>
        <h2 class="font-black">SEO default</h2>
        <p class="text-xs font-semibold text-zinc-600">Dipakai beranda dan halaman yang tidak punya judul/deskripsi sendiri.</p>
      </div>
      <div>
        <label class="admin-label" for="s-title">Judul *</label>
        <input id="s-title" v-model="form.seo_title" class="admin-input" required maxlength="90">
        <p :class="['mt-1 text-xs font-semibold', form.seo_title.length > 60 ? 'text-orange-600' : 'text-zinc-600']">{{ form.seo_title.length }} karakter (ideal ≤ 60)</p>
      </div>
      <div>
        <label class="admin-label" for="s-desc">Deskripsi *</label>
        <textarea id="s-desc" v-model="form.seo_description" rows="3" class="admin-input" required maxlength="300" />
        <p :class="['mt-1 text-xs font-semibold', form.seo_description.length > 160 ? 'text-orange-600' : 'text-zinc-600']">{{ form.seo_description.length }} karakter (ideal ≤ 160)</p>
      </div>
      <div>
        <label class="admin-label" for="s-kw">Keywords</label>
        <textarea id="s-kw" v-model="form.seo_keywords" rows="2" class="admin-input" maxlength="500" />
      </div>
      <div class="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <label class="admin-label" for="s-og">Gambar share (OG)</label>
          <input id="s-og" v-model="form.og_image" class="admin-input" maxlength="300" placeholder="/og-cover.webp">
          <p class="mt-1 text-xs font-semibold text-zinc-600">Ukuran 1200×630. Tampil saat link website dibagikan di WA/medsos.</p>
        </div>
        <img v-if="form.og_image" :src="form.og_image" alt="Pratinjau gambar share" class="h-20 w-auto rounded-lg border-2 border-black object-cover sm:h-24">
      </div>
    </section>

    <p v-if="error" role="alert" class="rounded-lg border-2 border-black bg-red-300 px-3 py-2 text-sm font-bold text-black">{{ error }}</p>
    <div class="flex items-center gap-3">
      <button type="submit" class="admin-btn bg-neo-pink" :disabled="saving">{{ saving ? 'Menyimpan…' : 'Simpan pengaturan' }}</button>
      <span v-if="saved" role="status" class="text-sm font-bold text-neo-green">Tersimpan. Tampil di website ±1 menit lagi.</span>
    </div>
  </form>
</template>
