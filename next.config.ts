import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["*.trycloudflare.com", "*.ngrok-free.app"],
  reactCompiler: true,
};

export default nextConfig;
