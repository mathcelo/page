'use client';
import React from 'react';
import AboutContent from './about.mdx'; // This imports the MDX as a React component
import { mdxComponents } from '@/app/mdx-components';

const About: React.FC = () => {
  return (
    <article className='prose prose-invert mx-auto p-4'>
      <AboutContent components={mdxComponents} />
    </article>
  );
};

export default About;
