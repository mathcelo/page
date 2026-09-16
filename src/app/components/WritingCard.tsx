import Link from 'next/link';
import React from 'react';
import MetaRow from '@/app/components/MetaRow';

interface WritingCardProps {
  href: string;
  title: string;
  date: string;
  dateLabel: string;
  source?: string;
  tags?: readonly string[];
  detail?: React.ReactNode;
  external?: boolean;
}

const WritingCardContent = ({
  title,
  detail,
}: Pick<WritingCardProps, 'title' | 'detail'>): React.ReactElement => (
  <div className='flex flex-col gap-4'>
    <h2
      className={[
        'max-w-[34ch] text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.15]',
        'tracking-[-0.02em] text-ink transition-colors duration-200',
        'group-hover:text-teal',
      ].join(' ')}
    >
      {title}
      <span
        aria-hidden='true'
        className={[
          'ml-3 inline-block text-teal transition-transform duration-200',
          'group-hover:translate-x-1 group-hover:-translate-y-1',
        ].join(' ')}
      >
        ↗
      </span>
    </h2>
    {detail && <p className='text-lg leading-[1.7] text-copy'>{detail}</p>}
  </div>
);

/** A consistent editorial row for internal posts and externally published writing. */
const WritingCard = ({
  href,
  title,
  date,
  dateLabel,
  source,
  tags = [],
  detail,
  external = false,
}: WritingCardProps): React.ReactElement => {
  const content = (
    <MetaRow
      className={[
        'border-b border-rule-heavy py-9 transition-colors duration-200',
        'compact:py-12 group-hover:border-accent',
      ].join(' ')}
      gutter={
        <div className='flex flex-col gap-1.5 font-mono text-[0.8125rem]'>
          <time dateTime={date} className='text-meta'>
            {dateLabel}
          </time>
          {source && <span className='text-rust'>{source}</span>}
          {tags.length > 0 && <span className='text-teal'>{tags.join(' · ')}</span>}
        </div>
      }
    >
      <WritingCardContent title={title} detail={detail} />
    </MetaRow>
  );

  if (external) {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' className='group block'>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className='group block'>
      {content}
    </Link>
  );
};

export default WritingCard;
