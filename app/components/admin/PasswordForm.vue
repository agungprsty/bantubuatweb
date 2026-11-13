<script setup lang="ts">
const form = reactive({ current: '', next: '', confirm: '' })
const { data: me } = useNuxtData<{ email?: string }>('admin-me')
const busy = ref(false)
const error = ref('')
const done = ref(false)

async function save() {
  error.value = ''
  done.value = false
  if (form.next !== form.confirm) {
    error.value = 'Konfirmasi password baru tidak sama'
    return
  }
  busy.value = true
  try {
    await $fetch('/api/admin/settings/password', { method: 'POST', body: { current: form.current, next: form.next } })
    Object.assign(form, { current: '', next: '', confirm: '' })
    done.value = true
  } catch (e) {
    error.value = apiError(e)
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <form class="neo-box max-w-md space-y-4 p-4 sm:p-5" @submit.prevent="save">
    <h2 class="font-black">Ganti password</h2>
    <!-- username tersembunyi agar password manager menyimpan ke akun yang benar -->
    <input type="text" autocomplete="username" :value="me?.email" class="hidden" aria-hidden="true" tabindex="-1" readonly>
    <div>
      <label class="admin-label" for="pw-current">Password lama</label>
      <input id="pw-current" v-model="form.current" type="password" autocomplete="current-password" class="admin-input" required>
    </div>
    <div>
      <label class="admin-label" for="pw-next">Password baru</label>
      <input id="pw-next" v-model="form.next" type="password" autocomplete="new-password" class="admin-input" required minlength="12">
      <p class="mt-1 text-xs font-semibold text-zinc-600">Minimal 12 karakter.</p>
    </div>
    <div>
      <label class="admin-label" for="pw-confirm">Ulangi password baru</label>
      <input id="pw-confirm" v-model="form.confirm" type="password" autocomplete="new-password" class="admin-input" required minlength="12">
    </div>
    <p v-if="error" role="alert" class="rounded-lg border-2 border-black bg-red-300 px-3 py-2 text-sm font-bold">{{ error }}</p>
    <p v-if="done" role="status" class="rounded-lg border-2 border-black bg-neo-green px-3 py-2 text-sm font-bold">Password berhasil diganti. Pakai password baru saat login berikutnya.</p>
    <button type="submit" class="admin-btn bg-neo-pink" :disabled="busy">{{ busy ? 'Menyimpan…' : 'Ganti password' }}</button>
  </form>
</template>
