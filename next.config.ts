import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // other config options can go here

  
};
module.exports = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;