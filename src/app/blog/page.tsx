import type { Metadata } from 'next';
import React from 'react';
import { listPostFilenames, readPost } from '@/app/blog/posts';
import BlogPostCard from '@/app/components/BlogPostCard';
import SectionRow from '@/app/components/SectionRow';

const BLOG_INTRO =
  'Occasional notes on things I build, and what I learn making them.';

export const metadata: Metadata = {
  title: 'Notes',
  description: BLOG_INTRO,
};

const BlogIndexPage = (): React.ReactElement => {
  const posts = listPostFilenames()
    .map((filename) => readPost(filename))
    .sort((left, right) => right.date.localeCompare(left.date));

  return (
    <>
      <div className='blueprint-grid border-b border-rule bg-surface'>
        <div
          className={[
            'mx-auto w-full max-w-shell px-5 pb-[46px] pt-[56px] compact:px-7',
          ].join(' ')}
        >
          <SectionRow layout='stacked' label='blog'>
            <div className='flex flex-col gap-5'>
              <h1 className='text-[clamp(3.5rem,9vw,6.5rem)] font-bold leading-[1.08] tracking-[-0.05em]'>
                Notes
              </h1>
              <p
                className={[
                  'max-w-[40ch] text-xl leading-[1.7]',
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
        <SectionRow layout='stacked' label='posts'>
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
        </SectionRow>
      </div>
    </>
  );
};

export default BlogIndexPage;
