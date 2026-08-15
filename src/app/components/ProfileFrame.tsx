import Image from 'next/image';
import React from 'react';
import { PORTRAIT_ASCII } from '@/content/portrait-ascii';

const PROFILE_IMAGE = '/portrait.webp';

/**
 * The art is a 60x36 character grid. JetBrains Mono advances 0.6em per
 * character, so a square block needs font-size and line-height both equal to
 * the container width over 36. The container is at most 260px, giving 260/36;
 * below a ~300px viewport it is narrower and the art is cropped by
 * overflow-hidden rather than rescaled.
 */
const ASCII_METRICS = 'text-[7.22px] leading-[7.22px]';

const FADE = 'transition-opacity duration-500 ease-in-out';

/** Square hero portrait that dissolves into an ASCII rendering on hover. */
const ProfileFrame = (): React.ReactElement => (
  <div className='flex flex-col gap-2'>
    <div
      className={[
        'group relative aspect-square overflow-hidden',
        'cursor-[url(/retro-cursor.png)_0_0,auto]',
      ].join(' ')}
    >
      <Image
        src={PROFILE_IMAGE}
        alt='Marcelo Morales'
        fill
        priority
        className={`object-cover ${FADE} group-hover:opacity-0`}
      />
      <pre
        aria-hidden='true'
        className={[
          // Pure black rather than `ink`: at 7px the blue-black reads grey.
          'absolute inset-0 m-0 overflow-hidden font-mono font-medium text-black',
          ASCII_METRICS,
          `opacity-0 ${FADE} group-hover:opacity-100`,
        ].join(' ')}
      >
        {PORTRAIT_ASCII}
      </pre>
    </div>
    <div className='text-center font-mono text-[10.5px] text-meta'>
      img/mathcelo.png
    </div>
  </div>
);

export default ProfileFrame;
