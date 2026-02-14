// src/app/blog/[slug]/page.tsx

import React from 'react';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/app/mdx-components';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import { BLOG_CONTENT_DIRECTORY } from '@/app/blog/config';

// Generates static params for all blog posts
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const directory = BLOG_CONTENT_DIRECTORY;

  try {
    if (!fs.existsSync(directory)) {
      console.warn('Blog directory not found, returning placeholder slug');
      // Return a placeholder to satisfy static export requirements
      return [{ slug: 'placeholder' }];
    }

    const files = fs.readdirSync(directory);
    const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

    if (mdxFiles.length === 0) {
      console.warn(
        'No MDX files found in blog directory, returning placeholder slug'
      );
      // Return a placeholder to satisfy static export requirements
      return [{ slug: 'placeholder' }];
    }

    return mdxFiles.map((file) => ({
      slug: file.replace(/\.mdx$/, ''),
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    // Return a placeholder to satisfy static export requirements
    return [{ slug: 'placeholder' }];
  }
}

// Reads and parses a blog post by slug
interface BlogPost {
  content: string;
  data: Record<string, string>;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_CONTENT_DIRECTORY, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const rawContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(rawContent);
  return { content, data };
}

// The blog post page component
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactElement> {
  // Await the params Promise in Next.js 15
  const { slug } = await params;

  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className='prose prose-invert mx-auto p-4'>
      <h1 className='text-4xl font-bold mb-2'>{post.data.title}</h1>
      {post.data.excerpt && (
        <p className='text-xl text-neutral-400 italic mb-4'>{post.data.excerpt}</p>
      )}
      <time className='text-neutral-5 mb-6 block'>
        {new Date(post.data.date).toLocaleDateString()}
      </time>
      <MDXRemote
        source={post.content}
        components={mdxComponents}
        options={{
          mdxOptions: {
            rehypePlugins: [rehypeHighlight, rehypeSlug],
          },
        }}
      />
    </article>
  );
}
