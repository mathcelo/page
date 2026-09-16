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
        <div className='mx-auto w-full max-w-[840px] px-5 pb-12 pt-10 compact:px-10 compact:pb-16'>
          <div className='motion-safe:animate-enter-page'>
            <Link href='/blog' className={[
          'mb-10 inline-flex font-mono text-sm text-teal underline-offset-4',
          'hover:underline',
        ].join(' ')}>
              &larr; all notes
            </Link>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.8125rem]'>
                <time dateTime={post.date} className='text-meta'>
                  {formatPostDate(post.date)}
                </time>
                {post.tags.length > 0 && (
                  <span className='text-teal'>{post.tags.join(' · ')}</span>
                )}
              </div>
              <h1
                className={[
                  'text-[clamp(2.75rem,6.5vw,4.5rem)] font-bold leading-[1.05]',
                  'tracking-[-0.045em] text-balance',
                ].join(' ')}
              >
                {post.title}
              </h1>
              {post.excerpt && (
                <p
                  className={[
                    'max-w-[48ch] text-xl leading-[1.65]',
                    'text-copy text-pretty',
                  ].join(' ')}
                >
                  {post.excerpt}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={[
          'mx-auto w-full max-w-[840px] bg-surface px-5 pb-20 pt-10 compact:px-10',
          'compact:pt-14',
        ].join(' ')}>
        <div>
          <article className={[
          'prose max-w-none text-base leading-[1.85] compact:text-lg',
          'prose-headings:scroll-mt-24 prose-h2:mt-16 prose-h2:mb-6',
          'prose-h2:text-[1.75rem] prose-h2:leading-[1.2] prose-h2:tracking-[-0.03em]',
          'prose-h2:first:mt-0 prose-h3:mt-10 prose-p:my-6 prose-a:underline',
          'prose-a:decoration-accent prose-a:decoration-1 prose-a:underline-offset-4',
          'hover:prose-a:decoration-teal prose-li:my-2 prose-blockquote:bg-canvas',
          'prose-blockquote:py-1 prose-blockquote:pr-6 prose-pre:my-8',
          'prose-pre:overflow-x-auto prose-pre:p-5 prose-pre:text-sm prose-pre:leading-7',
          'prose-img:my-0 [&>h2:first-child]:mt-0 [&_table]:block',
          '[&_table]:overflow-x-auto',
        ].join(' ')}>
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
        </div>
      </div>
    </>
  );
}
