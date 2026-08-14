import Link from 'next/link';
import React from 'react';
import ProfileFrame from '@/app/components/ProfileFrame';

const PRIMARY_BUTTON = [
  'bg-accent px-[18px] py-[11px] text-accent-ink',
  'transition-colors duration-200 hover:bg-accent-hover',
].join(' ');

const SECONDARY_BUTTON = [
  'border border-rule-heavy bg-surface px-[18px] py-[11px] text-ink',
  'transition-colors duration-200 hover:border-accent hover:text-teal',
].join(' ');

const Home = (): React.ReactElement => (
  <div
    className={[
      'blueprint-grid flex grow flex-col justify-center',
      'border-b border-rule bg-surface',
    ].join(' ')}
  >
    <div
      className={[
        'mx-auto grid w-full max-w-shell grid-cols-1 items-center gap-[18px]',
        'px-5 pb-[68px] pt-[76px] compact:px-7',
        'wide:grid-cols-[minmax(0,1fr)_260px] wide:gap-14',
      ].join(' ')}
    >
      <div
        className={[
          'flex flex-col items-center gap-[22px] text-center',
          'wide:items-start wide:text-left',
        ].join(' ')}
      >
        <div className='font-mono text-xs text-meta'>
          {'role → '}
          <span className='text-ink'>security engineer</span>
          {' · '}
          {'org → '}
          <span className='text-ink'>trail of bits</span>
        </div>

        <h1
          className={[
            'text-[38px] font-bold leading-[1.02] tracking-[-0.03em]',
            'text-balance wide:text-[60px] wide:tracking-[-0.04em]',
          ].join(' ')}
        >
          Marcelo Morales
        </h1>

        <p
          className={[
            'max-w-[22ch] text-[21px] font-medium leading-[1.4]',
            'tracking-[-0.015em] text-teal',
          ].join(' ')}
        >
          Blockchain security and smart contract analysis.
        </p>

        <p className='max-w-[56ch] text-base leading-[1.7] text-copy text-pretty'>
          I work on security tooling and smart contract audits at Trail of Bits.
          My academic roots are at{' '}
          <i className='italic'>The</i> Ohio State University, where I researched
          blockchain security and malware detection in the W3CIL lab under{' '}
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

        <div
          className={[
            'flex flex-wrap justify-center gap-2 pt-1.5 font-mono text-xs',
            'wide:justify-start',
          ].join(' ')}
        >
          <Link href='/about' className={PRIMARY_BUTTON}>
            about &rarr;
          </Link>
          <Link href='/blog' className={SECONDARY_BUTTON}>
            blog &rarr;
          </Link>
        </div>
      </div>

      <div
        className={[
          'order-first mx-auto w-full max-w-[260px]',
          'wide:order-none wide:mx-0 wide:max-w-none',
        ].join(' ')}
      >
        <ProfileFrame />
      </div>
    </div>
  </div>
);

export default Home;
