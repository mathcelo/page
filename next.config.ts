import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Required by output: 'export' — no image optimisation server exists.
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

export default nextConfig;
