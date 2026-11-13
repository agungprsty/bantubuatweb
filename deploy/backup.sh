#!/usr/bin/env bash
# Backup harian SQLite. Pasang di crontab user bantubuat (crontab -e):
#   0 3 * * * /home/bantubuat/app/deploy/backup.sh >> /home/bantubuat/backup.log 2>&1
# Salinan ke luar server memakai remote rclone bernama `backup` (tipe crypt, jadi terenkripsi), jika sudah dibuat.
set -euo pipefail

db="${NUXT_DB_PATH:-/var/lib/bantubuat/app.db}"
dir="$(dirname "$db")/backups"
file="$dir/app-$(date +%F).db"

mkdir -p "$dir"
sqlite3 "$db" ".backup '$file'"   # aman dijalankan saat app hidup (WAL)
[ "$(sqlite3 "$file" 'PRAGMA integrity_check')" = ok ] || { echo "backup rusak: $file" >&2; exit 1; }
gzip -f "$file"

# simpan 7 hari di server
find "$dir" -name 'app-*.db.gz' -mtime +7 -delete

if command -v rclone >/dev/null && rclone listremotes | grep -qx 'backup:'; then
  rclone copy "$file.gz" backup:bantubuat
fi

echo "$(date -Is) backup ok: $file.gz"
