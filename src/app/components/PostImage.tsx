import React from 'react';

interface PostImageProps {
  src?: string;
  alt?: string;
}

/**
 * Renders markdown images inside blog posts. Uses span wrappers rather than
 * `figure` because MDX nests images within paragraphs, where block elements
 * are invalid HTML.
 */
const PostImage = ({ src, alt = '' }: PostImageProps): React.ReactElement | null => {
  if (!src) return null;

  return (
    <span className='my-6 block'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className='block h-auto w-full border border-rule' />
      {alt && (
        <span className='mt-2 block font-mono text-[10.5px] text-meta'>{alt}</span>
      )}
    </span>
  );
};

export default PostImage;
