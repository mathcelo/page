import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className='w-full bg-neutral-1 text-neutral-8 py-4 px-8 shadow-md'>
      <div className='max-w-4xl mx-auto flex items-center justify-between'>
        {/* Logo / Site Name */}
        <Link
          href='/'
          className='text-2xl font-semibold hover:text-primary-1 transition duration-300'
        >
          Marcelo Morales
        </Link>

        {/* Navigation Links */}
        <nav className='flex gap-6 text-sm'>
          <Link
            href='/about'
            className='hover:text-primary-1 transition duration-300'
          >
            About
          </Link>
          <Link
            href='/blog'
            className='hover:text-primary-1 transition duration-300'
          >
            Blog
          </Link>
          <Link
            href='/research'
            className='hover:text-primary-1 transition duration-300'
          >
            Research
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
