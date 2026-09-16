import React from 'react';
import { formatPostDate } from '@/app/blog/posts';
import WritingCard from '@/app/components/WritingCard';

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
  <WritingCard
    href={`/blog/${slug}`}
    title={title || slug}
    date={date}
    dateLabel={formatPostDate(date)}
    tags={tags}
    detail={excerpt}
  />
);

export default BlogPostCard;
