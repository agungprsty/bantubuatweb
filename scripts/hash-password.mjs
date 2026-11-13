// Buat nilai NUXT_ADMIN_PASSWORD_HASH. Password dibaca dari stdin agar tidak tersimpan di shell history:
//   read -rs PW && printf '%s' "$PW" | node scripts/hash-password.mjs && unset PW
import { text } from 'node:stream/consumers'
import { hashPassword } from '../server/utils/password.ts'

const password = (await text(process.stdin)).replace(/\r?\n$/, '')
if (password.length < 12) {
  console.error('Password minimal 12 karakter')
  process.exit(1)
}
console.log(hashPassword(password))
