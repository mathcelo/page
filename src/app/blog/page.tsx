import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Metadata } from 'next';
import React from 'react';
import { BLOG_CONTENT_DIRECTORY } from '@/app/blog/config';
import BlogPostCard from '@/app/components/BlogPostCard';
import SectionRow from '@/app/components/SectionRow';

const BLOG_INTRO =
  'Occasional notes on things I build, and what I learn making them.';

export const metadata: Metadata = {
  title: 'Notes',
  description: BLOG_INTRO,
};

interface PostSummary {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

const readPostSummaries = (): PostSummary[] => {
  if (!fs.existsSync(BLOG_CONTENT_DIRECTORY)) return [];

  return fs
    .readdirSync(BLOG_CONTENT_DIRECTORY)
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(BLOG_CONTENT_DIRECTORY, filename);
      const { data } = matter(fs.readFileSync(filePath, 'utf8'));

      return {
        slug: filename.replace(/\.mdx$/, ''),
        title: String(data.title ?? ''),
        date: new Date(data.date).toISOString(),
        excerpt: String(data.excerpt ?? data.description ?? ''),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      };
    })
    .sort((left, right) => right.date.localeCompare(left.date));
};

const BlogIndexPage = (): React.ReactElement => {
  const posts = readPostSummaries();

  return (
    <>
      <div className='blueprint-grid border-b border-rule bg-surface'>
        <div
          className={[
            'mx-auto w-full max-w-shell px-5 pb-[46px] pt-[56px] compact:px-7',
          ].join(' ')}
        >
          <SectionRow label='blog'>
            <div className='flex flex-col gap-3.5'>
              <h1 className='text-[40px] font-bold leading-[1.08] tracking-[-0.035em]'>
                Notes
              </h1>
              <p
                className={[
                  'max-w-[58ch] text-[16.5px] leading-[1.7]',
                  'text-copy text-pretty',
                ].join(' ')}
              >
                {BLOG_INTRO}
              </p>
            </div>
          </SectionRow>
        </div>
      </div>

      <div
        className={[
          'mx-auto w-full max-w-shell px-5 pb-[90px] pt-[60px] compact:px-7',
        ].join(' ')}
      >
        <SectionRow label='posts'>
          {posts.length > 0 ? (
            <div className='flex flex-col border-b border-rule'>
              {posts.map((post) => (
                <BlogPostCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  date={post.date}
                  excerpt={post.excerpt}
                  tags={post.tags}
                />
              ))}
            </div>
          ) : (
            <p className='border-y border-rule py-[26px] text-[15px] text-copy'>
              No posts yet — check back soon.
            </p>
          )}
        </SectionRow>
      </div>
    </>
  );
};

export default BlogIndexPage;
