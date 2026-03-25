module.exports = {
  apps: [
    {
      name: "auth-service",
      script: "pnpm",
      args: "run dev",
      cwd: "./services/auth",
      env: { NODE_ENV: "production", PORT: 5000 }
    },
    {
      name: "admin-service",
      script: "pnpm",
      args: "run dev",
      cwd: "./services/admin",
      env: { NODE_ENV: "production", PORT: 5006 }
    },
    {
      name: "realtime-service",
      script: "pnpm",
      args: "run dev",
      cwd: "./services/realtime",
      env: { NODE_ENV: "production", PORT: 5004 }
    },
    {
      name: "restaurant-service",
      script: "pnpm",
      args: "run dev",
      cwd: "./services/restaurant",
      env: { NODE_ENV: "production", PORT: 5001 }
    },
    {
      name: "rider-service",
      script: "pnpm",
      args: "run dev",
      cwd: "./services/rider",
      env: { NODE_ENV: "production", PORT: 5005 }
    },
    {
      name: "utils-service",
      script: "pnpm",
      args: "run dev",
      cwd: "./services/utils",
      env: { NODE_ENV: "production", PORT: 5002 }
    }
  ]
};
