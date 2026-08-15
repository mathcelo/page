import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import SectionRow from '@/app/components/SectionRow';

const DESTINATION = '/about/';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Research and publications now live on the about page.',
  robots: { index: false, follow: true },
};

/**
 * Kept so the old /research URL does not 404. Static export cannot issue a
 * real 301, so this meta-refreshes and offers a link for anyone it misses.
 */
const Research = (): React.ReactElement => (
  <>
    <meta httpEquiv='refresh' content={`0; url=${DESTINATION}`} />
    <div
      className={[
        'mx-auto w-full max-w-shell px-5 pb-[90px] pt-[60px] compact:px-7',
      ].join(' ')}
    >
      <SectionRow label='research'>
        <div className='flex flex-col items-start gap-5'>
          <h1 className='text-[26px] font-bold tracking-[-0.02em]'>
            This page moved
          </h1>
          <p className='max-w-[58ch] text-base leading-[1.7] text-copy'>
            Research and publications are now part of the about page.
          </p>
          <Link
            href='/about'
            className={[
              'border border-rule-heavy bg-surface px-[18px] py-[11px]',
              'font-mono text-xs transition-colors duration-200',
              'hover:border-accent hover:text-teal',
            ].join(' ')}
          >
            continue to about &rarr;
          </Link>
        </div>
      </SectionRow>
    </div>
  </>
);

export default Research;
