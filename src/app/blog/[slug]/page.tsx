import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import React from 'react';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import {
  BLOG_CONTENT_DIRECTORY,
  formatPostDate,
  listPostFilenames,
  readPostBySlug,
  slugFromFilename,
} from '@/app/blog/posts';
import SectionRow from '@/app/components/SectionRow';
import { mdxComponents } from '@/app/mdx-components';

export function generateStaticParams(): { slug: string }[] {
  const filenames = listPostFilenames();
  if (filenames.length === 0) {
    // output: 'export' rejects a route whose generateStaticParams is empty,
    // with an error that names neither this route nor the cause.
    throw new Error(
      `No .mdx posts in ${BLOG_CONTENT_DIRECTORY}; static export needs at least one.`
    );
  }
  return filenames.map((filename) => ({ slug: slugFromFilename(filename) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = readPostBySlug(slug);
  if (!post) return {};

  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactElement> {
  const { slug } = await params;
  const post = readPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <div className='blueprint-grid border-b border-rule bg-surface'>
        <div className='mx-auto w-full max-w-shell px-5 pb-[46px] pt-[56px] compact:px-7'>
          <SectionRow label='post'>
            <div className='flex flex-col gap-3.5'>
              <div className='flex flex-wrap gap-x-4 font-mono text-[11.5px]'>
                <time dateTime={post.date} className='text-meta'>
                  {formatPostDate(post.date)}
                </time>
                {post.tags.length > 0 && (
                  <span className='text-teal'>{post.tags.join(' · ')}</span>
                )}
              </div>
              <h1
                className={[
                  'text-[40px] font-bold leading-[1.08]',
                  'tracking-[-0.035em] text-balance',
                ].join(' ')}
              >
                {post.title}
              </h1>
              {post.excerpt && (
                <p
                  className={[
                    'max-w-[58ch] text-[16.5px] leading-[1.7]',
                    'text-copy text-pretty',
                  ].join(' ')}
                >
                  {post.excerpt}
                </p>
              )}
            </div>
          </SectionRow>
        </div>
      </div>

      <div className='mx-auto w-full max-w-shell px-5 pb-[90px] pt-[60px] compact:px-7'>
        <SectionRow label='contents'>
          <article className='prose max-w-[72ch]'>
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: { rehypePlugins: [rehypeHighlight, rehypeSlug] },
              }}
            />
          </article>
          <Link
            href='/blog'
            className={[
              'mt-14 inline-block border border-rule-heavy bg-surface',
              'px-[18px] py-[11px] font-mono text-xs transition-colors',
              'duration-200 hover:border-accent hover:text-teal',
            ].join(' ')}
          >
            &larr; all notes
          </Link>
        </SectionRow>
      </div>
    </>
  );
}
