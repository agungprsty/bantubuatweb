// Muat pengaturan situs sekali: di server saat render, lalu terbawa ke browser lewat payload
export default defineNuxtPlugin(async () => {
  const settings = useSiteSettings()
  // di browser hanya diambil jika belum terbawa payload (halaman admin dirender tanpa SSR)
  if (import.meta.server || settings.value === SETTINGS_DEFAULTS) {
    settings.value = await $fetch('/api/public/settings').catch(() => SETTINGS_DEFAULTS)
  }
  setWa(settings.value.wa_number, settings.value.wa_message)
})
