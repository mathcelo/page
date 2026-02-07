import Image from 'next/image';
import Typewriter from './components/Typewriter';

const Home = () => {
  const staticImage = '/profile.png';
  const animatedImage = '/profile-animated.png';
  const lightningGif = '/lightning.webp';
  const email = 'morales.374@osu.edu';

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 text-center gap-16'>
      {/* Profile Picture with Image Swap and Lightning */}
      <div
        className='relative w-[180px] h-[180px] mb-4 group rounded-full overflow-hidden'
        style={{
          background: 'linear-gradient(to right, #BCB384 50%, #d3ccad 50%)',
          cursor: 'url(/zenitsu-cursor.png), auto',
        }}
      >
        {/* Static Image */}
        <Image
          src={staticImage}
          alt='Picture of Marcelo'
          fill
          className='object-contain object-center rounded-full shadow-lg border-4 border-neutral-4 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out'
        />
        {/* Animated Image */}
        <Image
          src={animatedImage}
          alt='Animated Picture of Marcelo'
          fill
          className='object-cover rounded-full shadow-lg border-4 border-neutral-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'
        />
        {/* Lightning Overlay */}
        <div
          className='absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'
          style={{
            backgroundImage: `url(${lightningGif})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>

      {/* Main Content */}
      <main className='max-w-md text-neutral-7 leading-relaxed tracking-wide animate-fadeIn delay-300'>
        <h1 className='text-3xl font-extrabold mb-6 text-neutral-8'>
          Hello there!
        </h1>

        <p className='text-lg leading-8 first-letter:text-2xl first-letter:font-semibold first-letter:text-neutral-5 indent-6 mb-4 text-neutral-6'>
          I am <span className='text-primary-1 font-medium'>Marcelo</span>. I
          will be a fourth-year PhD student at The Ohio State University.
          <br />
          <br />
          As part of the W3CIL lab, I focus on exploring innovative aspects of
          cybersecurity and blockchain under the mentorship of{' '}
          <a
            href='https://carteryagemann.com/'
            className='text-neutral-5 font-medium hover:text-neutral-4 transition-all duration-300 ease-in-out'
            target='_blank'
            rel='noopener noreferrer'
          >
            Dr. Carter Yagemann
          </a>
          .
        </p>

        <p className='text-lg leading-8 indent-6 mb-4 text-neutral-6'>
          In 2022, I earned my bachelor&apos;s degree at Ohio University, where
          I had the privilege of working under the guidance of{' '}
          <a
            href='https://www.hchenji.com/'
            className='text-neutral-5 font-medium hover:text-neutral-4 transition-all duration-300 ease-in-out'
            target='_blank'
            rel='noopener noreferrer'
          >
            Dr. Harsha Chenji
          </a>
          .
        </p>

        {/* ✅ Updated Wording Here */}
        <p className='text-lg leading-8 indent-6 mb-4 text-neutral-6'>
          You can learn more about my{' '}
          <a
            href='/about'
            className='text-neutral-5 font-medium hover:text-neutral-4 transition-all duration-300 ease-in-out'
          >
            academic and professional journey
          </a>{' '}
          or explore my{' '}
          <a
            href='/research'
            className='text-neutral-5 font-medium hover:text-neutral-4 transition-all duration-300 ease-in-out'
          >
            research and publications
          </a>
          . I’m also working on launching a blog to share ideas and reflections
          along the way.
        </p>

        <hr className='border-t border-neutral-4 my-8' />

        {/* Contact Block */}
        <div className='mt-8 text-lg leading-7 tracking-wide bg-neutral-2/70 p-4 rounded-lg border border-neutral-4 text-neutral-6'>
          <p className='mb-2'>Get in touch, send me an email at:</p>
          <div title='Click to copy email to clipboard'>
            <Typewriter text={email} delay={200} infinite />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
