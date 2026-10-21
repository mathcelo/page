import React from 'react';
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
} from '@/content/resume';

const LINK_STYLE = 'text-teal underline-offset-4 hover:text-rust hover:underline';

/** Status line along the bottom edge of the terminal window. */
const SiteFooter = (): React.ReactElement => (
  <footer className='border-t border-rule-heavy bg-canvas'>
    <div
      className={[
        'flex flex-wrap items-center justify-between gap-x-6 gap-y-3',
        'px-5 py-4 text-xs text-meta compact:px-10',
      ].join(' ')}
    >
      <span>© {new Date().getFullYear()} Marcelo Morales</span>
      <div className='flex flex-wrap gap-x-5 gap-y-2'>
        <a href={`mailto:${CONTACT_EMAIL}`} className={LINK_STYLE}>
          {CONTACT_EMAIL}
        </a>
        <a href={LINKEDIN_URL} target='_blank' rel='noopener noreferrer' className={LINK_STYLE}>
          linkedin
        </a>
        <a href={GITHUB_URL} target='_blank' rel='noopener noreferrer' className={LINK_STYLE}>
          github
        </a>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
