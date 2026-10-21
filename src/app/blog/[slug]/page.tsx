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
import type { Post } from '@/app/blog/posts';
import ShellPrompt from '@/app/components/ShellPrompt';
import { mdxComponents } from '@/app/mdx-components';

const BACK_LINK = 'text-sm text-teal underline underline-offset-4 hover:text-rust';

const ARTICLE_STYLE = [
  'prose mt-12 max-w-none font-sans text-base leading-[1.85] compact:text-lg',
  'prose-headings:scroll-mt-24 prose-headings:font-mono prose-headings:font-medium',
  'prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-[1.5rem] prose-h2:leading-[1.25]',
  'prose-h2:tracking-[-0.03em] prose-h3:mt-10 prose-p:my-6 prose-a:underline',
  'prose-a:decoration-accent prose-a:decoration-1 prose-a:underline-offset-4',
  'hover:prose-a:decoration-teal prose-li:my-2',
  'prose-blockquote:bg-canvas prose-blockquote:py-1 prose-blockquote:pr-6 prose-pre:my-8',
  'prose-pre:overflow-x-auto prose-pre:p-5 prose-pre:text-sm prose-pre:leading-7',
  'prose-img:my-0 [&>h2:first-child]:mt-0 [&_table]:block [&_table]:overflow-x-auto',
].join(' ');

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

const PostHeader = ({ post }: { post: Post }): React.ReactElement => (
  <header className='border-b border-rule pb-10'>
    <Link href='/blog' className={BACK_LINK}>&larr; all notes</Link>
    <p className='mt-8 text-[0.9375rem]'>
      <ShellPrompt command={`cat ${post.slug}.mdx`} path='~/notes' />
    </p>
    <div className='mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[0.8125rem]'>
      <time dateTime={post.date} className='text-meta'>{formatPostDate(post.date)}</time>
      {post.tags.length > 0 && <span className='text-teal'>{post.tags.join(' · ')}</span>}
    </div>
    <h1 className={[
      'mt-4 text-[clamp(2.25rem,6vw,3.75rem)] font-medium leading-[1.05]',
      'tracking-[-0.055em] text-balance',
    ].join(' ')}>
      {post.title}
    </h1>
    {post.excerpt && (
      <p className='mt-5 max-w-[48ch] font-sans text-xl leading-[1.6] text-copy text-pretty'>
        {post.excerpt}
      </p>
    )}
  </header>
);

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactElement> {
  const { slug } = await params;
  const post = readPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className='px-5 py-10 compact:px-10 compact:py-14'>
      <div className='mx-auto w-full max-w-[720px]'>
        <PostHeader post={post} />
        <article className={ARTICLE_STYLE}>
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: { rehypePlugins: [rehypeHighlight, rehypeSlug] },
            }}
          />
        </article>
        <Link href='/blog' className={`mt-14 inline-block ${BACK_LINK}`}>
          &larr; all notes
        </Link>
      </div>
    </div>
  );
}
