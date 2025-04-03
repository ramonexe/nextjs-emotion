import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true
  },
  experimental: {
    optimizeCss: true,
  }
};

export default nextConfig;
