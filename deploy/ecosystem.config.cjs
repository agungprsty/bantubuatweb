// PM2. Wajib 1 instance (fork): rate limit & cache SWR disimpan di memori proses.
module.exports = {
  apps: [
    {
      name: 'bantubuat',
      cwd: require('node:path').join(__dirname, '..'),
      // `current` = symlink ke release aktif, diganti oleh deploy.sh
      script: 'current/server/index.mjs',
      exec_mode: 'fork',
      instances: 1,
      node_args: '--env-file-if-exists=.env',
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        HOST: '127.0.0.1',
        PORT: 3000,
      },
    },
  ],
}
