import React from 'react';
import Image from 'next/image';
import Typewriter from './components/Typewriter';

const PROFILE_IMAGE = '/profile.png';
const PROFILE_ANIMATED_IMAGE = '/profile-animated.png';
const LIGHTNING_OVERLAY = '/lightning.webp';
const CONTACT_EMAIL = 'morales.374@osu.edu';

const LINK_STYLE = [
  'text-neutral-5 font-medium',
  'hover:text-neutral-4',
  'transition-all duration-300 ease-in-out',
].join(' ');

const STATIC_IMAGE_STYLE = [
  'object-contain object-center rounded-full',
  'shadow-lg border-4 border-neutral-4',
  'opacity-100 group-hover:opacity-0',
  'transition-opacity duration-500 ease-in-out',
].join(' ');

const ANIMATED_IMAGE_STYLE = [
  'object-cover rounded-full',
  'shadow-lg border-4 border-neutral-4',
  'opacity-0 group-hover:opacity-100',
  'transition-opacity duration-500 ease-in-out',
].join(' ');

const Home = (): React.ReactElement => {
  return (
    <div
      className={[
        'min-h-screen flex flex-col items-center',
        'justify-center p-8 sm:p-20 text-center gap-16',
      ].join(' ')}
    >
      {/* Profile Picture with Image Swap and Lightning */}
      <div
        className={[
          'relative w-[180px] h-[180px] mb-4',
          'group rounded-full overflow-hidden',
          'bg-gradient-to-r from-profile-1 to-profile-2',
        ].join(' ')}
        style={{
          cursor: 'url(/zenitsu-cursor.png), auto',
        }}
      >
        <Image
          src={PROFILE_IMAGE}
          alt='Picture of Marcelo'
          fill
          className={STATIC_IMAGE_STYLE}
        />
        <Image
          src={PROFILE_ANIMATED_IMAGE}
          alt='Animated Picture of Marcelo'
          fill
          className={ANIMATED_IMAGE_STYLE}
        />
        <div
          className={[
            'absolute inset-0 rounded-full',
            'opacity-0 group-hover:opacity-100',
            'transition-opacity duration-500 ease-in-out',
          ].join(' ')}
          style={{
            backgroundImage: `url(${LIGHTNING_OVERLAY})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>

      {/* Main Content */}
      <main
        className={[
          'max-w-md text-neutral-7 leading-relaxed',
          'tracking-wide animate-fadeIn delay-300',
        ].join(' ')}
      >
        <h1 className='text-3xl font-extrabold mb-6 text-neutral-8'>
          Hello there!
        </h1>

        <p
          className={[
            'text-lg leading-8 indent-6 mb-4 text-neutral-6',
            'first-letter:text-2xl',
            'first-letter:font-semibold',
            'first-letter:text-neutral-5',
          ].join(' ')}
        >
          I am{' '}
          <span className='text-primary-1 font-medium'>
            Marcelo
          </span>
          . I will be a fourth-year PhD student at The Ohio
          State University.
          <br />
          <br />
          As part of the W3CIL lab, I focus on exploring
          innovative aspects of cybersecurity and blockchain
          under the mentorship of{' '}
          <a
            href='https://carteryagemann.com/'
            className={LINK_STYLE}
            target='_blank'
            rel='noopener noreferrer'
          >
            Dr. Carter Yagemann
          </a>
          .
        </p>

        <p className='text-lg leading-8 indent-6 mb-4 text-neutral-6'>
          In 2022, I earned my bachelor&apos;s degree at Ohio
          University, where I had the privilege of working
          under the guidance of{' '}
          <a
            href='https://www.hchenji.com/'
            className={LINK_STYLE}
            target='_blank'
            rel='noopener noreferrer'
          >
            Dr. Harsha Chenji
          </a>
          .
        </p>

        <p className='text-lg leading-8 indent-6 mb-4 text-neutral-6'>
          You can learn more about my{' '}
          <a href='/about' className={LINK_STYLE}>
            academic and professional journey
          </a>{' '}
          or explore my{' '}
          <a href='/research' className={LINK_STYLE}>
            research and publications
          </a>
          . I&#39;m also working on launching a blog to share
          ideas and reflections along the way.
        </p>

        <hr className='border-t border-neutral-4 my-8' />

        {/* Contact Block */}
        <div
          className={[
            'mt-8 text-lg leading-7 tracking-wide',
            'bg-neutral-2/70 p-4 rounded-lg',
            'border border-neutral-4 text-neutral-6',
          ].join(' ')}
        >
          <p className='mb-2'>
            Get in touch, send me an email at:
          </p>
          <div title='Click to copy email to clipboard'>
            <Typewriter
              text={CONTACT_EMAIL}
              delayMilliseconds={200}
              infinite
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
