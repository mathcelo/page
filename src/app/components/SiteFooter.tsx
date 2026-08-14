import React from 'react';
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
} from '@/content/resume';

const LINK_STYLE = 'text-teal transition-colors duration-200 hover:text-rust';

const SiteFooter = (): React.ReactElement => (
  <footer className='border-t border-rule bg-surface'>
    <div
      className={[
        'mx-auto flex w-full max-w-shell flex-wrap items-center justify-between',
        'gap-5 px-5 py-[34px] font-mono text-xs text-meta compact:px-7',
      ].join(' ')}
    >
      <div className='flex items-center gap-2.5'>
        <span className='h-[9px] w-[9px] bg-accent' aria-hidden='true' />
        <span>© {new Date().getFullYear()} Marcelo Morales</span>
      </div>

      <div className='flex flex-wrap gap-x-[22px] gap-y-2'>
        <a href={`mailto:${CONTACT_EMAIL}`} className={LINK_STYLE}>
          {CONTACT_EMAIL}
        </a>
        <a
          href={LINKEDIN_URL}
          target='_blank'
          rel='noopener noreferrer'
          className={LINK_STYLE}
        >
          linkedin
        </a>
        <a
          href={GITHUB_URL}
          target='_blank'
          rel='noopener noreferrer'
          className={LINK_STYLE}
        >
          github
        </a>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
