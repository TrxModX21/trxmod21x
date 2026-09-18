module.exports = {
  apps: [
    {
      name: "trxmod21x",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "/home/trxmod21x/apps/trxmod21x",
      instances: 1,
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
