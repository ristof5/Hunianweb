import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    //config image agar bisa digunakan di luar public dan seting untuk mendapatkan prfile google
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "4py6ryqcr4ohftrl.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
