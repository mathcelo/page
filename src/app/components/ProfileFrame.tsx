'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { PORTRAIT_ASCII } from '@/content/portrait-ascii';

/** Portrait in a small window, its ASCII view available to pointer, keyboard, and touch. */
const ProfileFrame = (): React.ReactElement => {
  const [showAscii, setShowAscii] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <figure className='w-full'>
      <div className='border border-rule-heavy bg-surface'>
        <div
          aria-hidden='true'
          className={[
            'flex justify-between gap-2.5 border-b border-rule-heavy bg-canvas',
            'px-3 py-1.5 text-xs text-meta',
          ].join(' ')}
        >
          <span>{showAscii || hovered ? 'portrait.txt' : 'portrait.webp'}</span>
          <span>MM</span>
        </div>
        <button
          type='button'
          className={[
            'group relative block aspect-square w-full overflow-hidden bg-surface',
            '[container-type:inline-size] cursor-[url(/retro-cursor.png)_0_0,pointer]',
          ].join(' ')}
          aria-label='Show ASCII portrait'
          aria-pressed={showAscii}
          onClick={() => setShowAscii(!showAscii)}
          // Touch taps fire pointerenter too; only a real mouse hover previews the ASCII view.
          onPointerEnter={(event) => setHovered(event.pointerType === 'mouse')}
          onPointerLeave={() => setHovered(false)}
        >
          <Image
            src='/portrait.webp'
            alt='Marcelo Morales'
            fill
            priority
            sizes='(max-width: 560px) 240px, 300px'
            className={[
              'object-cover p-[6%] transition-opacity duration-300 group-aria-pressed:opacity-0',
              '[@media(hover:hover)]:group-hover:opacity-0',
            ].join(' ')}
          />
          <pre aria-hidden='true' className={[
            'absolute inset-[6%] m-0 overflow-hidden text-left text-[2.444444cqw]',
            'leading-[2.444444cqw] opacity-0 transition-opacity duration-300',
            'group-aria-pressed:opacity-100 [@media(hover:hover)]:group-hover:opacity-100',
            'font-mono font-medium text-black',
          ].join(' ')}>
            {PORTRAIT_ASCII}
          </pre>
        </button>
      </div>
      <figcaption className='mt-2.5 flex flex-wrap justify-between gap-x-3 text-xs text-meta'>
        <span>click or press enter</span>
        <span className='text-teal'>photo ⇄ ascii</span>
      </figcaption>
    </figure>
  );
};

export default ProfileFrame;
