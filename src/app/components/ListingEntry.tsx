import Link from 'next/link';
import React from 'react';

interface ListingEntryProps {
  href: string;
  title: string;
  /** Short facts for the left column: date, venue, source, tags. */
  meta: React.ReactNode;
  detail?: React.ReactNode;
  external?: boolean;
  /** Heading level for the title, so the outline stays correct on each page. */
  headingLevel: 'h2' | 'h3';
}

const LINK_STYLE = [
  'text-ink underline decoration-rule-heavy decoration-1 underline-offset-[5px]',
  'transition-colors duration-150 hover:text-teal hover:decoration-teal',
].join(' ');

/** One row of an `ls -l` style listing: facts on the left, linked title and byline on the right. */
const ListingEntry = ({
  href,
  title,
  meta,
  detail,
  external = false,
  headingLevel: Heading,
}: ListingEntryProps): React.ReactElement => (
  <li className={[
    'grid gap-2 border-t border-rule py-5',
    'wide:grid-cols-[13rem_minmax(0,1fr)] wide:gap-8',
  ].join(' ')}>
    <div className='text-[0.8125rem] leading-6 text-meta'>{meta}</div>
    <div>
      <Heading className='text-lg font-medium leading-snug tracking-[-0.01em] compact:text-xl'>
        {external ? (
          <a href={href} target='_blank' rel='noopener noreferrer' className={LINK_STYLE}>
            {title}
            <span aria-hidden='true' className='text-teal'> ↗</span>
          </a>
        ) : (
          <Link href={href} className={LINK_STYLE}>{title}</Link>
        )}
      </Heading>
      {detail && <p className='mt-2 text-sm leading-6 text-copy'>{detail}</p>}
    </div>
  </li>
);

export default ListingEntry;
