import type { Metadata } from 'next';
import React from 'react';
import { formatPostDate, listPostFilenames, readPost } from '@/app/blog/posts';
import AuthorList from '@/app/components/AuthorList';
import ListingEntry from '@/app/components/ListingEntry';
import ShellPrompt from '@/app/components/ShellPrompt';
import { EXTERNAL_WRITING } from '@/content/resume';

const BLOG_INTRO =
  'A running collection of work and ideas.';

export const metadata: Metadata = {
  title: 'Notes',
  description: BLOG_INTRO,
};

const EntryMeta = ({ date, dateLabel, source, tags }: {
  date: string;
  dateLabel: string;
  source?: string;
  tags: readonly string[];
}): React.ReactElement => (
  <>
    <time dateTime={date}>{dateLabel}</time>
    {source && <span className='block text-rust'>{source}</span>}
    {tags.length > 0 && <span className='block text-teal'>{tags.join(' · ')}</span>}
  </>
);

const BlogIndexPage = (): React.ReactElement => {
  const posts = listPostFilenames()
    .map((filename) => readPost(filename))
    .sort((left, right) => right.date.localeCompare(left.date));

  return (
    <div className='px-5 py-10 compact:px-10 compact:py-14'>
      <p className='text-[0.9375rem]'><ShellPrompt command='ls -t notes/' /></p>
      <h1 className={[
        'mt-5 text-[clamp(2.5rem,9vw,4.5rem)] font-medium leading-none',
        'tracking-[-0.06em]',
      ].join(' ')}>
        Notes
      </h1>
      <p className='mt-4 max-w-[48ch] font-sans text-lg leading-[1.7] text-copy'>
        {BLOG_INTRO}
      </p>
      <div
        aria-hidden='true'
        className={[
          'mt-12 hidden grid-cols-[13rem_minmax(0,1fr)] gap-8 pb-2 text-xs uppercase',
          'tracking-[0.08em] text-meta wide:grid',
        ].join(' ')}
      >
        <span>date / source</span>
        <span>title</span>
      </div>
      <ul className='mt-10 border-b border-rule wide:mt-0'>
        {EXTERNAL_WRITING.map((post) => (
          <ListingEntry
            key={post.url}
            href={post.url}
            title={post.title}
            meta={
              <EntryMeta
                date={post.date}
                dateLabel={post.dateLabel}
                source={post.source}
                tags={post.tags}
              />
            }
            detail={<AuthorList authors={post.authors} />}
            headingLevel='h2'
            external
          />
        ))}
        {posts.map((post) => (
          <ListingEntry
            key={post.slug}
            href={`/blog/${post.slug}`}
            title={post.title || post.slug}
            meta={
              <EntryMeta date={post.date} dateLabel={formatPostDate(post.date)} tags={post.tags} />
            }
            detail={post.excerpt}
            headingLevel='h2'
          />
        ))}
      </ul>
    </div>
  );
};

export default BlogIndexPage;
