'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='border border-neutral-4 rounded-md mb-4 shadow-lg overflow-hidden'>
      <div
        className='flex items-center justify-between px-4 py-3 cursor-pointer'
        onClick={toggleSection}
      >
        <h2 className='text-2xl font-bold text-neutral-8'>{title}</h2>
        <button
          className='text-neutral-6 hover:text-primary-1 transition duration-300'
          aria-label={`Toggle ${title} section`}
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
        style={{ overflow: 'hidden' }}
      >
        <div className='px-4 pb-4'>{children}</div>
      </div>
    </div>
  );
};

export default Section;
