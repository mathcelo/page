'use client';
import React from 'react';
import ResearchContent from './Research.mdx'; // This imports the MDX as a React component
import { mdxComponents } from '../mdx-components';

const Research: React.FC = () => {
  return (
    <article className='prose prose-invert mx-auto p-4'>
      <ResearchContent components={mdxComponents} />
    </article>
  );
};

export default Research;
