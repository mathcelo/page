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
const PostImage = ({
  src,
  alt = '',
}: PostImageProps): React.ReactElement | null => {
  if (!src) return null;

  return (
    <span className='my-10 block'>
      {/*
        Justification: next/image buys nothing here. output: 'export' forces
        unoptimized, and markdown gives no intrinsic dimensions for width/height.
      */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className='block h-auto w-full border border-rule bg-canvas shadow-sm'
      />
      {alt && (
        // aria-hidden: the same text is already the image's accessible name,
        // so announcing it again would duplicate it.
        <span
          aria-hidden='true'
          className='mt-3 block text-center font-mono text-xs leading-relaxed text-meta'
        >
          {alt}
        </span>
      )}
    </span>
  );
};

export default PostImage;
