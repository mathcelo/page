import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import ShellPrompt from '@/app/components/ShellPrompt';

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
    <div className='flex flex-col items-start gap-5 px-5 py-10 compact:px-10 compact:py-14'>
      <p className='text-[0.9375rem]'><ShellPrompt command='cd research/' /></p>
      <h1 className='text-[1.75rem] font-medium tracking-[-0.03em]'>This page moved</h1>
      <p className='max-w-[58ch] font-sans text-base leading-[1.7] text-copy'>
        Research and publications are now part of the about page.
      </p>
      <Link
        href='/about'
        className='text-sm text-teal underline underline-offset-4 hover:text-rust'
      >
        continue to about &rarr;
      </Link>
    </div>
  </>
);

export default Research;
