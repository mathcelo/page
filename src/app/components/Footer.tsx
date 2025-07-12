import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className='w-full bg-neutral-1 text-neutral-5 py-3 text-sm flex justify-center items-center gap-2'>
      <p className='text-center'>
        © {new Date().getFullYear()} Marcelo Morales
      </p>
      {/* LinkedIn Icon */}
      <a
        href='https://www.linkedin.com/in/marcelo-morales-547138190/'
        target='_blank'
        rel='noopener noreferrer'
        className='text-neutral-5 hover:text-primary-1 transition duration-300'
        aria-label='LinkedIn Profile'
      >
        <FaLinkedin size={18} />
      </a>
    </footer>
  );
};

export default Footer;
