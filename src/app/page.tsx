import Link from 'next/link';
import React from 'react';
import AuthorList from '@/app/components/AuthorList';
import CommandHeading from '@/app/components/CommandHeading';
import ContactList from '@/app/components/ContactList';
import InstitutionName from '@/app/components/InstitutionName';
import ListingEntry from '@/app/components/ListingEntry';
import ProfileFrame from '@/app/components/ProfileFrame';
import ShellPrompt from '@/app/components/ShellPrompt';
import { EXTERNAL_WRITING, PUBLICATIONS } from '@/content/resume';

const PROSE_LINK = 'whitespace-nowrap text-teal underline underline-offset-4 hover:text-rust';

const Introduction = (): React.ReactElement => (
  <p className='max-w-[64ch] font-sans text-[1.0625rem] leading-[1.75] text-copy text-pretty'>
    I work on security tooling and smart contract audits at{' '}
    <a href='https://trailofbits.com/' className={PROSE_LINK}>
      Trail of Bits
    </a>.
    My academic roots are at{' '}
    <InstitutionName text='The Ohio State University' />, where I
    researched blockchain security and malware detection in the W3CIL lab
    under{' '}
    <a
      href='https://carteryagemann.com/'
      target='_blank'
      rel='noopener noreferrer'
      className={PROSE_LINK}
    >
      Dr. Carter Yagemann
    </a>
    , and at Ohio University, where I studied under{' '}
    <a
      href='https://www.hchenji.com/'
      target='_blank'
      rel='noopener noreferrer'
      className={PROSE_LINK}
    >
      Dr. Harsha Chenji
    </a>
    .
  </p>
);

const Identity = (): React.ReactElement => (
  <div>
    <p className='text-[0.9375rem]'><ShellPrompt command='whoami' /></p>
    <h1 className={[
      'mt-5 text-[clamp(2.5rem,9vw,4.5rem)] font-medium leading-[1.02]',
      'tracking-[-0.06em]',
    ].join(' ')}>
      Marcelo Morales<span aria-hidden='true' className='text-accent'>.</span>
    </h1>
    <p className='mt-5 text-[0.9375rem] text-meta'>
      Security engineer <span aria-hidden='true'>@</span>{' '}
      <a href='https://trailofbits.com/' className={PROSE_LINK}>Trail of Bits</a>
    </p>
    <p className='mt-2 text-lg leading-snug text-teal compact:text-xl'>
      Blockchain security and smart contract analysis.
    </p>
  </div>
);

const SelectedWork = (): React.ReactElement => {
  const [paper] = PUBLICATIONS;
  return (
    <section aria-labelledby='selected-work'>
      <CommandHeading id='selected-work' command='ls work/selected/' label='selected work' />
      <ul className='mt-5 border-b border-rule'>
        <ListingEntry
          href={EXTERNAL_WRITING.url}
          title={EXTERNAL_WRITING.title}
          meta={<>{EXTERNAL_WRITING.source} blog<br />{EXTERNAL_WRITING.dateLabel}</>}
          detail={<AuthorList authors={EXTERNAL_WRITING.authors} />}
          headingLevel='h3'
          external
        />
        {paper && (
          <ListingEntry
            href={paper.url}
            title={paper.title}
            meta={<>paper<br />{paper.venue}</>}
            detail={<AuthorList authors={paper.authors} />}
            headingLevel='h3'
            external
          />
        )}
      </ul>
      <p className='mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm'>
        <Link href='/blog' className={PROSE_LINK}>all notes →</Link>
        <Link href='/about' className={PROSE_LINK}>
          experience, projects &amp; publications →
        </Link>
      </p>
    </section>
  );
};

const Contact = (): React.ReactElement => (
  <section aria-labelledby='contact'>
    <CommandHeading id='contact' command='cat contact' label='contact' />
    <div className='mt-5'>
      <ContactList />
    </div>
    <p aria-hidden='true' className='mt-10 text-[0.9375rem]'>
      <ShellPrompt command='' />
      <span className={[
        'ml-1 inline-block h-[1.1em] w-[0.6em] translate-y-[0.2em] bg-accent',
        'motion-safe:animate-blink',
      ].join(' ')} />
    </p>
  </section>
);

const Home = (): React.ReactElement => (
  <div className='flex flex-col gap-14 px-5 py-10 compact:px-10 compact:py-14'>
    <div className={[
      'grid grid-cols-1 gap-10 compact:grid-cols-[minmax(0,1fr)_220px]',
      'wide:grid-cols-[minmax(0,1fr)_280px] wide:gap-x-16 wide:gap-y-12',
    ].join(' ')}>
      <Identity />
      <div className={[
        'w-full max-w-[240px] compact:col-start-2 compact:row-span-2 compact:row-start-1',
        'compact:max-w-none compact:pt-2',
      ].join(' ')}>
        <ProfileFrame />
      </div>
      <section aria-labelledby='background'>
        <CommandHeading id='background' command='cat background.txt' label='background' />
        <div className='mt-4'>
          <Introduction />
        </div>
      </section>
    </div>
    <SelectedWork />
    <Contact />
  </div>
);

export default Home;
