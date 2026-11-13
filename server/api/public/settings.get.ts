export default defineEventHandler((): SiteSettings => {
  try {
    return getSettings()
  } catch (e) {
    // situs publik tetap tampil walau DB bermasalah
    console.error('[settings] fallback ke default:', e)
    return SETTINGS_DEFAULTS
  }
})
