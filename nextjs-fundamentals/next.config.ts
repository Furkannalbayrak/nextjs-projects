import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tr.web.img4.acsta.net', // Inception için
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',   // Interstellar için
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org', // Dark Knight ve Oppenheimer için
      },
    ],
  },
};

export default nextConfig;