import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const baseConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: ['media.licdn.com'],
  },
  output: 'export',
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  // Optional: Add remark/rehype plugins if needed
})

const nextConfig = withMDX(baseConfig)

export default nextConfig