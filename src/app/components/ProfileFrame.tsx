import Image from 'next/image';
import React from 'react';

const PROFILE_IMAGE = '/profile.png';
const PROFILE_ANIMATED_IMAGE = '/profile-animated.png';
const LIGHTNING_OVERLAY = '/lightning.webp';

const LAYER_STYLE = 'object-cover transition-opacity duration-500 ease-in-out';

/** Square hero portrait that swaps to its animated counterpart on hover. */
const ProfileFrame = (): React.ReactElement => (
  <div className='flex flex-col gap-2'>
    <div
      className='group relative aspect-square overflow-hidden border border-accent'
      style={{ cursor: 'url(/zenitsu-cursor.png), auto' }}
    >
      <Image
        src={PROFILE_IMAGE}
        alt='Marcelo Morales'
        fill
        sizes='260px'
        priority
        className={`${LAYER_STYLE} opacity-100 group-hover:opacity-0`}
      />
      <Image
        src={PROFILE_ANIMATED_IMAGE}
        alt=''
        aria-hidden='true'
        fill
        sizes='260px'
        className={`${LAYER_STYLE} opacity-0 group-hover:opacity-100`}
      />
      <div
        aria-hidden='true'
        className={[
          'absolute inset-0 bg-cover bg-center opacity-0',
          'transition-opacity duration-500 ease-in-out group-hover:opacity-100',
        ].join(' ')}
        style={{ backgroundImage: `url(${LIGHTNING_OVERLAY})` }}
      />
    </div>
    <div className='font-mono text-[10.5px] text-meta'>img/marcelo.png</div>
  </div>
);

export default ProfileFrame;
