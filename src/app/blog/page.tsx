import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BLOG_CONTENT_DIRECTORY } from '@/app/blog/config';
import BlogPostCard from '@/app/components/BlogPostCard';

export default function BlogIndexPage(): React.ReactElement {
  const blogDir = BLOG_CONTENT_DIRECTORY;

  if (!fs.existsSync(blogDir)) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-neutral-1 to-neutral-2 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-neutral-7 mb-4'>Blog</h1>
          <p className='text-neutral-5 text-lg'>
            No blog posts found yet. Check back soon!
          </p>
        </div>
      </div>
    );
  }

  const filenames = fs.readdirSync(blogDir);
  const posts = filenames
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => {
      const filePath = path.join(blogDir, name);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);

      return {
        slug: name.replace(/\.mdx$/, ''),
        title: data.title,
        date: data.date,
        excerpt: data.excerpt || data.description || '',
        tags: (data.tags || []) as string[],
      };
    })
    .sort((postA, postB) => new Date(postB.date).getTime() - new Date(postA.date).getTime());

  return (
    <div className='min-h-screen bg-gradient-to-br from-neutral-1 to-neutral-2'>
      <div className='max-w-5xl mx-auto px-4 py-12'>
        <header className='text-center mb-12'>
          <p className='text-neutral-6 text-lg max-w-2xl mx-auto'>
            Thoughts, insights, and notes from my journey in security,
            cryptography, and computing.
          </p>
        </header>

        <div className='grid gap-8'>
          {posts.map((post, index) => (
            <BlogPostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              tags={post.tags}
              displayIndex={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
