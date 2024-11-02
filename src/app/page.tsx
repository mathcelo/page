import { useState } from 'react';
import Image from 'next/image';
import Typewriter from './components/Typewriter';
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon
// import { FaGithub } from 'react-icons/fa'; // Uncomment to add GitHub icon later

const Home = () => {
  const staticImage = '/me.jpg';
  const animatedImage = '/me_animated.png';
  const lightningGif = '/lightning.webp';
  const email = 'morales.374@osu.edu';

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 text-center gap-16 bg-gradient-to-b from-slate-900 to-slate-800'>
      {/* Profile Picture with Original Styling */}
      <div
        className='relative w-[180px] h-[180px] mb-4 group rounded-full'
        style={{
          background: 'linear-gradient(to right, #BCB384 50%, #d3ccad 50%)',
          cursor: 'url(/zenitsu_cur.png), auto', // Custom cursor when hovering
        }}
      >
        <Image
          src={staticImage}
          alt='Picture of Marcelo'
          layout='fill'
          objectFit='contain'
          objectPosition='center'
          className='rounded-full shadow-lg border-4 border-gray-300 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out'
        />
        <Image
          src={animatedImage}
          alt='Animated Picture of Marcelo'
          layout='fill'
          objectFit='cover'
          className='rounded-full shadow-lg border-4 border-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'
        />
        <div
          className='absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'
          style={{
            backgroundImage: `url(${lightningGif})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>

      {/* Main Content including Introduction and Contact Section */}
      <main className='max-w-md text-white/90 leading-relaxed tracking-wide animate-fadeIn delay-300'>
        <h1 className='text-3xl font-extrabold mb-6 text-gray-200'>Welcome!</h1>

        {/* Styled Paragraphs with more spacing and softer secondary text */}
        <p className='text-lg font-normal leading-8 text-gray-300 first-letter:text-2xl first-letter:font-semibold first-letter:text-gray-400 indent-6 mb-4'>
          I’m <span className='text-cyan-400 font-medium'>Marcelo</span>,
          currently in my third year as a PhD student at The Ohio State
          University.
          <br />
          <br />
          As part of the W3CIL lab, I focus on exploring innovative aspects of
          cybersecurity and blockchain under the mentorship of{' '}
          <a
            href='https://example.com/dr-carter-yagemann'
            className='text-cyan-400 font-medium hover:text-cyan-300 transition-all duration-300 ease-in-out'
            target='_blank'
            rel='noopener noreferrer'
          >
            Dr. Carter Yagemann
          </a>
          .
        </p>

        <p className='text-lg font-normal leading-8 text-gray-300 indent-6 mb-4'>
          In 2022, I earned my bachelor's degree at Ohio University, where I had
          the privilege of working under the guidance of{' '}
          <a
            href='https://example.com/dr-harsha-chenji'
            className='text-cyan-400 font-medium hover:text-cyan-300 transition-all duration-300 ease-in-out'
            target='_blank'
            rel='noopener noreferrer'
          >
            Dr. Harsha Chenji
          </a>
          .
        </p>

        <p className='text-lg font-normal leading-8 text-gray-300 indent-6 mb-4'>
          I’m excited to share my{' '}
          <a
            href='/about'
            className='text-gray-400 font-medium hover:text-gray-300 transition-all duration-300 ease-in-out'
          >
            background
          </a>{' '}
          and{' '}
          <a
            href='/research'
            className='text-gray-400 font-medium hover:text-gray-300 transition-all duration-300 ease-in-out'
          >
            research interests
          </a>{' '}
          with you as I continue on this journey.
        </p>

        {/* Divider Line */}
        <hr className='border-t border-gray-600 my-8' />

        {/* Contact Section with Typing Effect and LinkedIn Icon */}
        <div className='mt-8 text-lg font-normal leading-7 text-gray-300 tracking-wide bg-slate-800/70 p-4 rounded-lg border border-gray-700'>
          <p className='mb-2 text-gray-300'>
            Get in touch, send me an email at:
          </p>
          <div title='Click to copy email to clipboard'>
            <Typewriter text={email} delay={200} infinite={false} />
          </div>

          {/* Social Icons */}
          <div className='flex justify-center mt-4'>
            <a
              href='https://www.linkedin.com/in/marcelo-morales-547138190/' // Replace with your actual LinkedIn profile URL
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-gray-400 transition duration-300'
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
