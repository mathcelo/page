import Image from 'next/image';
import React from 'react';

const PROFILE_IMAGE = '/profile-animated.png';
const LIGHTNING_OVERLAY = '/lightning.webp';

/** Square hero portrait, with a lightning flourish on hover. */
const ProfileFrame = (): React.ReactElement => (
  <div className='flex flex-col gap-2'>
    <div
      className='group relative aspect-square overflow-hidden'
      style={{ cursor: 'url(/zenitsu-cursor.png), auto' }}
    >
      <Image
        src={PROFILE_IMAGE}
        alt='Marcelo Morales'
        fill
        sizes='260px'
        priority
        className='object-cover'
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
