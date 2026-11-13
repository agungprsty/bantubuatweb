#!/usr/bin/env bash
# Deploy di VPS: ./deploy/deploy.sh
# Build di .output, lalu disalin ke releases/<waktu>. App jalan dari symlink `current`,
# jadi proses lama tidak rusak saat `nuxt build` menghapus .output.
# Rollback: ln -sfn releases/<sebelumnya> current && pm2 reload bantubuat
set -euo pipefail
cd "$(dirname "$0")/.."

git pull --ff-only
npm ci
npm run build

release="releases/$(date +%Y%m%d-%H%M%S)"
mkdir -p releases
cp -a .output "$release"
ln -sfn "$release" current

pm2 startOrReload deploy/ecosystem.config.cjs
pm2 save

# simpan 3 release terakhir untuk rollback
ls -1d releases/*/ | sort -r | tail -n +4 | xargs -r rm -rf

echo "Deploy selesai: $release"
