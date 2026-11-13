<script setup lang="ts">
const props = defineProps<{ project: { id: number, title: string, client_name: string, client_contact: string } }>()

const link = ref<{ url: string, expires: string } | null>(null)
const busy = ref(false)
const error = ref('')
const copied = ref(false)

async function create() {
  busy.value = true
  error.value = ''
  try {
    const r = await $fetch(`/api/admin/projects/${props.project.id}/testimonial-link`, { method: 'POST' })
    link.value = { url: `${window.location.origin}/testimoni/${r.token}`, expires: r.expires_at.slice(0, 10) }
  } catch (e) {
    error.value = apiError(e)
  } finally {
    busy.value = false
  }
}

async function copy() {
  try {
    await navigator.clipboard.writeText(link.value!.url)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    error.value = 'Gagal menyalin otomatis, salin link secara manual.'
  }
}

// Kirim ke nomor klien jika kontaknya berupa nomor HP, selain itu WA memilih kontak sendiri
const waUrl = computed(() => {
  if (!link.value) return ''
  const digits = props.project.client_contact.replace(/\D/g, '')
  const phone = digits.startsWith('0') ? `62${digits.slice(1)}` : digits
  const text = `Halo${props.project.client_name ? ` ${props.project.client_name}` : ''}, terima kasih sudah mempercayakan proyek ${props.project.title} kepada BantuBuatWeb. Boleh minta waktunya 2 menit untuk memberi testimoni? ${link.value.url}`
  return `https://wa.me/${phone.length >= 10 ? phone : ''}?text=${encodeURIComponent(text)}`
})
</script>

<template>
  <section class="neo-box p-4 sm:p-5">
    <div class="flex flex-wrap items-center justify-between gap-2">
      <div>
        <h2 class="font-black">Link testimoni</h2>
        <p class="text-xs font-semibold text-zinc-600">Link unik untuk klien, sekali pakai, berlaku 30 hari.</p>
      </div>
      <button type="button" class="admin-btn bg-neo-yellow px-3 py-1.5" :disabled="busy" @click="create">
        <AppIcon name="link" class="h-4 w-4" /> {{ link ? 'Buat link baru' : 'Buat link testimoni' }}
      </button>
    </div>

    <div v-if="link" class="mt-3 space-y-2">
      <div class="flex gap-2">
        <input :value="link.url" readonly class="admin-input min-w-0 flex-1 font-mono text-xs" aria-label="Link testimoni" @focus="($event.target as HTMLInputElement).select()">
        <button type="button" class="admin-btn shrink-0 bg-white px-3" @click="copy">
          <AppIcon name="copy" class="h-4 w-4" /> {{ copied ? 'Tersalin' : 'Salin' }}
        </button>
      </div>
      <div class="flex flex-wrap items-center gap-3">
        <a :href="waUrl" target="_blank" rel="noopener" class="admin-btn bg-neo-green px-3 py-1.5">
          <AppIcon name="whatsapp" class="h-4 w-4" /> Kirim lewat WA
        </a>
        <span class="text-xs font-semibold text-zinc-600">Berlaku sampai {{ tanggal(link.expires) }}</span>
      </div>
    </div>
    <p v-if="error" role="alert" class="mt-3 rounded-lg border-2 border-black bg-red-300 px-3 py-2 text-sm font-bold">{{ error }}</p>
  </section>
</template>
