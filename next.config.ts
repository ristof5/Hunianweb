import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{ //config image agar bisa digunakan di luar public dan seting untuk mendapatkan prfile google
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      }
    ]
  }
};

export default nextConfig;
