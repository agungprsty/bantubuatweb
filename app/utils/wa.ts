// Nomor & pesan default diisi plugins/settings.ts dari Pengaturan admin.
// shortcut: variabel modul dipakai bersama semua request di server; aman karena nilainya sama untuk semua pengunjung.
let number = SETTINGS_DEFAULTS.wa_number
let message = SETTINGS_DEFAULTS.wa_message

export const setWa = (n: string, m: string) => {
  number = n
  message = m
}

export const wa = (text?: string) => `https://wa.me/${number}?text=${encodeURIComponent(text || message)}`
