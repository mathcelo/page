import Link from 'next/link';
import React from 'react';
import InstitutionName from '@/app/components/InstitutionName';
import ProfileFrame from '@/app/components/ProfileFrame';

const HERO_BUTTON = [
  'inline-flex items-center justify-between gap-5 border border-transparent px-4 py-[13px]',
  'compact:gap-7 compact:px-5 compact:py-3.5 transition duration-200',
  'hover:-translate-y-[3px] hover:shadow-button [&>span]:transition-transform',
  '[&>span]:duration-200 hover:[&>span]:translate-x-0.5 hover:[&>span]:-translate-y-0.5',
].join(' ');

const Introduction = (): React.ReactElement => (
  <p className='max-w-[68ch] text-base leading-[1.7] text-copy text-pretty'>
    I work on security tooling and smart contract audits at{' '}
    <a href='https://trailofbits.com/' className='text-teal hover:text-rust'>
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
      className='text-teal transition-colors duration-200 hover:text-rust'
    >
      Dr. Carter Yagemann
    </a>
    , and at Ohio University, where I studied under{' '}
    <a
      href='https://www.hchenji.com/'
      target='_blank'
      rel='noopener noreferrer'
      className='text-teal transition-colors duration-200 hover:text-rust'
    >
      Dr. Harsha Chenji
    </a>
    .
  </p>
);

const Home = (): React.ReactElement => (
  <div className='blueprint-grid flex items-center grow border-b border-rule bg-surface'>
    <div className={[
          'grid grid-cols-1 gap-10 pt-9 pb-12 compact:grid-cols-[minmax(0,1fr)_260px]',
          'compact:gap-x-7 compact:pt-12 wide:grid-cols-[minmax(0,1fr)_340px]',
          'wide:gap-x-[60px] wide:gap-y-14 wide:pt-[68px] mx-auto w-full max-w-shell px-5',
          'compact:px-7',
        ].join(' ')}>
      <div className='motion-safe:animate-enter-hero'>
        <div className={[
          'mb-6 flex flex-wrap items-center gap-y-2 gap-x-4 text-[0.8125rem]',
          'compact:flex-col compact:items-start compact:gap-x-5 wide:flex-row',
          'wide:items-center wide:[&>*+*]:border-l wide:[&>*+*]:border-rule-heavy',
          'wide:[&>*+*]:pl-5 font-mono text-meta',
        ].join(' ')}>
          <span>Security engineer</span>
          <a href='https://trailofbits.com/' className='text-teal hover:text-rust'>Trail of Bits</a>
        </div>
        <h1 className={[
          'ml-[-0.05em] text-[clamp(3.5rem,15vw,5.25rem)] font-bold leading-[0.98]',
          'tracking-[-0.065em] compact:text-[clamp(3.5rem,8.5vw,5rem)]',
          'wide:text-[clamp(4rem,7.5vw,6.25rem)]',
        ].join(' ')}>Marcelo<br /><span>Morales</span><span
          className='text-accent' aria-hidden='true'
        >.</span></h1>
        <p className={[
          'mt-[26px] max-w-[26ch] text-[clamp(1.25rem,2.2vw,1.625rem)] leading-[1.45]',
          'tracking-[-0.025em] compact:max-w-none text-teal',
        ].join(' ')}>
          Blockchain security and<br className='hidden compact:block' /> smart contract analysis.
        </p>
        <div className='mt-[30px] flex flex-wrap gap-3 font-mono text-sm'>
          <Link href='/about' className={`${HERO_BUTTON} bg-accent text-accent-ink hover:bg-accent-hover`}>
            About me <span aria-hidden='true'>↗</span>
          </Link>
          <Link href='/blog' className={`${HERO_BUTTON} border-rule-heavy bg-surface hover:border-accent`}>
            Read my notes <span aria-hidden='true'>↗</span>
          </Link>
        </div>
      </div>
      <div className={[
          'w-full max-w-[280px] justify-self-center self-center px-2.5 compact:max-w-none',
          'motion-safe:animate-enter-portrait',
        ].join(' ')}>
        <ProfileFrame />
      </div>
      <div className={[
          'col-span-full grid grid-cols-1 gap-4 border-t border-rule-heavy pt-7',
          'wide:grid-cols-[200px_minmax(0,1fr)] wide:gap-10',
          'motion-safe:animate-enter-background',
        ].join(' ')}>
        <div className='font-mono text-sm text-meta'>{'// background'}</div>
        <Introduction />
      </div>
    </div>
  </div>
);

export default Home;
