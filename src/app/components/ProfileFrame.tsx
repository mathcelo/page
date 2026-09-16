'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { PORTRAIT_ASCII } from '@/content/portrait-ascii';

/** Portrait with the same ASCII view available to pointer, keyboard, and touch. */
const ProfileFrame = (): React.ReactElement => {
  const [showAscii, setShowAscii] = useState(false);

  return (
    <figure className='relative w-full'>
      <div className='mb-4 flex justify-between gap-2.5 tracking-[0.06em] font-mono text-xs text-meta' aria-hidden='true'>
        <span>01 / PORTRAIT</span><span>MM</span>
      </div>
      <div className={[
          'relative before:absolute before:inset-[12px_-12px_-12px_12px] before:border',
          'before:border-accent before:bg-accent-wash before:transition-transform',
          'before:duration-[350ms] hover:before:translate-x-1 hover:before:translate-y-1',
        ].join(' ')}>
        <button
          type='button'
          className={[
          'group relative block aspect-square w-full overflow-hidden bg-surface',
          '[container-type:inline-size] cursor-[url(/retro-cursor.png)_0_0,pointer]',
        ].join(' ')}
          aria-label='Show ASCII portrait'
          aria-pressed={showAscii}
          onClick={() => setShowAscii(!showAscii)}
        >
          <Image
            src='/portrait.webp'
            alt='Marcelo Morales'
            fill
            priority
            sizes='(max-width: 560px) 260px, 320px'
            className={[
          'transition-opacity duration-[450ms] group-aria-pressed:opacity-0',
          '[@media(hover:hover)]:group-hover:opacity-0 object-cover',
        ].join(' ')}
          />
          <pre aria-hidden='true' className={[
          'absolute inset-0 m-0 overflow-hidden text-left text-[2.777778cqw]',
          'leading-[2.777778cqw] opacity-0 transition-opacity duration-[450ms]',
          'group-aria-pressed:opacity-100 [@media(hover:hover)]:group-hover:opacity-100',
          'font-mono font-medium text-black',
        ].join(' ')}>
            {PORTRAIT_ASCII}
          </pre>
        </button>
      </div>
      <figcaption className='mt-7 flex justify-between gap-2.5 font-mono text-xs text-meta'>
        <span>img/mathcelo.png</span>
        <span className='text-teal'>photo ⇄ ascii</span>
      </figcaption>
    </figure>
  );
};

export default ProfileFrame;
