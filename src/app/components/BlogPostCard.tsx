import Link from 'next/link';
import React from 'react';
import { formatPostDate } from '@/app/blog/posts';
import MetaRow from '@/app/components/MetaRow';

interface BlogPostCardProps {
  slug: string;
  title: string;
  /** ISO 8601 timestamp; formatted in UTC so output is build-stable. */
  date: string;
  excerpt: string;
  tags: readonly string[];
}

const BlogPostCard = ({
  slug,
  title,
  date,
  excerpt,
  tags,
}: BlogPostCardProps): React.ReactElement => (
  <Link href={`/blog/${slug}`} className={[
          'transition-[background-color,padding] duration-[250ms] hover:bg-surface',
          'hover:px-5 group block',
        ].join(' ')}>
    <MetaRow
      className={[
        'py-9 compact:py-12 transition-colors duration-200',
        'group-hover:border-accent',
      ].join(' ')}
      gutter={
        <div className='flex flex-col gap-[5px]'>
          <time dateTime={date} className='font-mono text-[0.8125rem] text-meta'>
            {formatPostDate(date)}
          </time>
          {tags.length > 0 && (
            <div className='font-mono text-[0.8125rem] text-teal'>
              {tags.join(' · ')}
            </div>
          )}
        </div>
      }
    >
      <div className='flex flex-col gap-4'>
        <h2
          className={[
            'text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.02em]',
            'text-ink transition-colors duration-200 group-hover:text-teal',
          ].join(' ')}
        >
          {title || slug}
          <span aria-hidden='true' className={[
          'ml-3 inline-block text-teal transition-transform group-hover:translate-x-1',
          'group-hover:-translate-y-1',
        ].join(' ')}>↗</span>
        </h2>
        {excerpt && (
          <p className='text-lg leading-[1.7] text-copy text-pretty'>
            {excerpt}
          </p>
        )}
      </div>
    </MetaRow>
  </Link>
);

export default BlogPostCard;
