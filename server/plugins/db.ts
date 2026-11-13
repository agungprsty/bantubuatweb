// Buka DB & jalankan migrasi saat start, supaya path/izin yang salah langsung gagal saat deploy.
export default defineNitroPlugin((nitroApp) => {
  const db = useDb()
  nitroApp.hooks.hook('close', () => db.close())
})
