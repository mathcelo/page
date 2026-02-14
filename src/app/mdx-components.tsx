import type { MDXComponents } from 'mdx/types';
import Typewriter from './components/Typewriter';
import Publication from './components/Publication';
import Image from './components/Image';

export const mdxComponents: MDXComponents = {
  Typewriter,
  Publication,
  img: Image,
};
