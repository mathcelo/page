import createMDX from '@next/mdx'
import type { NextConfig } from 'next'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

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
  options: {
    rehypePlugins: [
      rehypeHighlight, // Adds syntax highlighting
      rehypeSlug,     // Adds IDs to headings (optional but useful)
    ],
  },
})

const nextConfig = withMDX(baseConfig)

export default nextConfig