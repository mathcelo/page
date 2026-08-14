import Link from 'next/link';
import React from 'react';
import MetaRow from '@/app/components/MetaRow';

interface BlogPostCardProps {
  slug: string;
  title: string;
  /** ISO 8601 timestamp; formatted in UTC so output is build-stable. */
  date: string;
  excerpt: string;
  tags: readonly string[];
}

export const formatPostDate = (date: string): string =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });

const BlogPostCard = ({
  slug,
  title,
  date,
  excerpt,
  tags,
}: BlogPostCardProps): React.ReactElement => (
  <Link
    href={`/blog/${slug}`}
    className='block transition-colors duration-200 hover:bg-surface'
  >
    <MetaRow
      className='py-[26px]'
      gutter={
        <div className='flex flex-col gap-[5px]'>
          <time dateTime={date} className='font-mono text-[11.5px] text-meta'>
            {formatPostDate(date)}
          </time>
          {tags.length > 0 && (
            <div className='font-mono text-[11.5px] text-teal'>
              {tags.join(' · ')}
            </div>
          )}
        </div>
      }
    >
      <div className='flex flex-col gap-2'>
        <h2
          className={[
            'text-[19px] font-medium leading-[1.35]',
            'tracking-[-0.02em] text-ink',
          ].join(' ')}
        >
          {title || slug}
        </h2>
        {excerpt && (
          <p className='text-[15px] leading-[1.65] text-copy text-pretty'>
            {excerpt}
          </p>
        )}
      </div>
    </MetaRow>
  </Link>
);

export default BlogPostCard;
