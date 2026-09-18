module.exports = {
  apps: [
    {
      name: "trxmod21x",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: "/home/trxmod21x/apps/trxmod21x",
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3024,
      },
    },
  ],
};
