<script setup lang="ts">
const route = useRoute()
const open = ref(false)
const { data: me } = await useFetch('/api/admin/auth/me', { key: 'admin-me' })

// fase berikutnya menambah menu di sini
const nav = [
  { label: 'Dashboard', to: '/admin', icon: 'layout-dashboard' },
  { label: 'Analitik', to: '/admin/analitik', icon: 'chart-column' },
  { label: 'Proyek', to: '/admin/proyek', icon: 'folder-kanban' },
  { label: 'Keuangan', to: '/admin/keuangan', icon: 'wallet' },
  { label: 'Testimoni', to: '/admin/testimoni', icon: 'message-square-quote' },
  { label: 'Pengaturan', to: '/admin/pengaturan', icon: 'settings' },
]

const isActive = (to: string) => route.path === to || (to !== '/admin' && route.path.startsWith(`${to}/`))

watch(() => route.path, () => { open.value = false })

const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') open.value = false }
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))

async function logout() {
  await $fetch('/api/admin/auth/logout', { method: 'POST' })
  await navigateTo('/admin/login')
}
</script>

<template>
  <div class="min-h-screen bg-zinc-950 font-sans text-white antialiased selection:bg-neo-pink selection:text-black lg:flex">
    <!-- Topbar mobile & tablet -->
    <header class="sticky top-0 z-30 flex h-16 items-center justify-between border-b-2 border-zinc-800 bg-black px-4 sm:px-6 lg:hidden">
      <NuxtLink to="/admin" class="group" aria-label="Dashboard admin">
        <AppLogo light />
      </NuxtLink>
      <button
        type="button"
        class="rounded-lg border-2 border-white p-2 text-white transition-colors hover:bg-white hover:text-black"
        :aria-label="open ? 'Tutup menu' : 'Buka menu'"
        :aria-expanded="open"
        aria-controls="admin-sidebar"
        @click="open = !open"
      >
        <AppIcon :name="open ? 'x' : 'menu'" class="h-5 w-5" />
      </button>
    </header>

    <div v-if="open" class="fixed inset-0 z-40 bg-black/70 lg:hidden" aria-hidden="true" @click="open = false" />

    <!-- Sidebar: drawer di mobile, kolom tetap di desktop -->
    <aside
      id="admin-sidebar"
      :class="[
        'fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] flex-col border-r-2 border-zinc-800 bg-black',
        'lg:sticky lg:top-0 lg:z-auto lg:flex lg:h-screen lg:w-64 lg:shrink-0',
        open ? 'flex' : 'hidden',
      ]"
    >
      <div class="flex h-16 shrink-0 items-center border-b-2 border-zinc-800 px-5">
        <NuxtLink to="/admin" class="group" aria-label="Dashboard admin">
          <AppLogo light />
        </NuxtLink>
      </div>

      <nav class="flex-1 space-y-1.5 overflow-y-auto p-4" aria-label="Menu admin">
        <NuxtLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          :class="[
            'flex items-center gap-3 rounded-lg border-2 px-3 py-2.5 text-sm font-extrabold transition-colors',
            isActive(item.to) ? 'border-black bg-neo-yellow text-black shadow-neo-sm' : 'border-transparent text-zinc-300 hover:border-zinc-700 hover:text-white',
          ]"
          :aria-current="isActive(item.to) ? 'page' : undefined"
        >
          <AppIcon :name="item.icon" class="h-4 w-4 shrink-0" />
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="shrink-0 border-t-2 border-zinc-800 p-4">
        <p class="text-[10px] font-extrabold uppercase tracking-wider text-zinc-500">Masuk sebagai</p>
        <p class="mt-0.5 truncate text-sm font-bold text-zinc-200" :title="me?.email">{{ me?.email }}</p>
        <button
          type="button"
          class="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-black bg-white px-3 py-2 text-sm font-extrabold text-black shadow-neo-sm transition-colors hover:bg-neo-pink"
          @click="logout"
        >
          <AppIcon name="log-out" class="h-4 w-4" />
          Keluar
        </button>
      </div>
    </aside>

    <main class="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
      <slot />
    </main>
  </div>
</template>
