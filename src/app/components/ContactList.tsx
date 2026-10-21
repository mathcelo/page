import React from 'react';
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from '@/content/resume';

const LINK_STYLE = 'text-teal underline underline-offset-4 hover:text-rust';

/** Contact channels as a key/value listing, email first. */
const ContactList = (): React.ReactElement => (
  <dl className={[
    'grid grid-cols-[9ch_minmax(0,1fr)] gap-x-3 gap-y-2 text-sm',
    'compact:gap-x-4 compact:text-[0.9375rem]',
  ].join(' ')}>
    <dt className='text-meta'>email</dt>
    <dd className='min-w-0 break-words'>
      <a href={`mailto:${CONTACT_EMAIL}`} className={LINK_STYLE}>{CONTACT_EMAIL}</a>
    </dd>
    <dt className='text-meta'>linkedin</dt>
    <dd>
      <a href={LINKEDIN_URL} target='_blank' rel='noopener noreferrer' className={LINK_STYLE}>
        linkedin.com/in/mathcelo
      </a>
    </dd>
    <dt className='text-meta'>github</dt>
    <dd>
      <a href={GITHUB_URL} target='_blank' rel='noopener noreferrer' className={LINK_STYLE}>
        github.com/mathcelo
      </a>
    </dd>
  </dl>
);

export default ContactList;
