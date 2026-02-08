import React from 'react';
import Link from 'next/link';

interface BlogPostCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  slug,
  title,
  date,
  excerpt,
  tags,
}) => {
  return (
    <Link href={`/blog/${slug}`}>
      <article className='border border-neutral-3/60 rounded-lg p-5 transition-colors duration-200 hover:bg-neutral-2'>
        <div className='flex items-baseline justify-between gap-4 mb-1'>
          <h2 className='text-lg font-semibold text-neutral-8 hover:text-primary-1 transition-colors duration-200'>
            {title || slug}
          </h2>
          <time className='text-neutral-5 text-sm shrink-0'>
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
        </div>

        {excerpt && (
          <p className='text-neutral-6 text-sm mb-2 line-clamp-2'>{excerpt}</p>
        )}

        {tags.length > 0 && (
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag: string) => (
              <span
                key={tag}
                className='text-xs text-neutral-5 bg-neutral-3/40 px-2 py-0.5 rounded-full'
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
};

export default BlogPostCard;
