import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/nextjs-github-pages",
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com'
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
