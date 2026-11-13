<script setup lang="ts">
definePageMeta({ layout: false })
useHead({ title: 'Login Admin | BantuBuatWeb' })

const route = useRoute()
const form = reactive({ email: '', password: '' })
const error = ref('')
const loading = ref(false)

async function submit() {
  loading.value = true
  error.value = ''
  try {
    await $fetch('/api/admin/auth/login', { method: 'POST', body: form })
    const next = String(route.query.next || '')
    // hanya ke dalam /admin, cegah open redirect
    await navigateTo(next.startsWith('/admin') ? next : '/admin')
  } catch (e: any) {
    error.value = e?.data?.message || 'Gagal login, coba lagi'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-black px-4 py-10 font-sans antialiased selection:bg-neo-pink selection:text-black">
    <div class="w-full max-w-sm">
      <div class="mb-6 flex justify-center">
        <AppLogo light />
      </div>

      <form class="neo-box space-y-4 p-6" @submit.prevent="submit">
        <h1 class="text-xl font-black">Login Admin</h1>

        <div>
          <label for="email" class="mb-1 block text-sm font-extrabold">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            autocomplete="username"
            required
            class="w-full rounded-lg border-2 border-black px-3 py-2 font-semibold outline-none focus:ring-4 focus:ring-neo-pink"
          >
        </div>

        <div>
          <label for="password" class="mb-1 block text-sm font-extrabold">Password</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            autocomplete="current-password"
            required
            class="w-full rounded-lg border-2 border-black px-3 py-2 font-semibold outline-none focus:ring-4 focus:ring-neo-pink"
          >
        </div>

        <p v-if="error" role="alert" class="rounded-lg border-2 border-black bg-neo-orange/20 px-3 py-2 text-sm font-bold">
          {{ error }}
        </p>

        <button type="submit" class="neo-btn w-full bg-neo-pink text-black disabled:opacity-60" :disabled="loading">
          {{ loading ? 'Memproses…' : 'Masuk' }}
        </button>
      </form>
    </div>
  </div>
</template>
