// Pengaturan situs dari admin; diisi sekali oleh plugins/settings.ts
export const useSiteSettings = () => useState<SiteSettings>('site-settings', () => SETTINGS_DEFAULTS)
