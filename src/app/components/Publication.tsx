'use client';

import React from 'react';

interface PublicationProps {
  title: string;
  authors: string[];
  booktitle: string;
  year: number;
  address: string;
  url?: string;
  publisher?: string;
  pages?: string;
  highlightName?: string; // Name to be highlighted
}

const Publication: React.FC<PublicationProps> = ({
  title,
  authors,
  booktitle,
  year,
  address,
  url,
  highlightName = 'Marcelo Morales',
}) => {
  const formattedAuthors = authors.map((author, index) => (
    <span
      key={index}
      className={author === highlightName ? 'font-bold text-neutral-8' : ''}
    >
      {author}
      {index < authors.length - 1 ? ', ' : ''}
    </span>
  ));

  return (
    <div className='mb-6'>
      <h3 className='text-lg font-semibold text-neutral-8'>
        {url ? (
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary-1 transition duration-300'
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <p className='text-md text-neutral-6'>{formattedAuthors}</p>
      <p className='text-sm italic text-neutral-5'>
        {booktitle}, {year}, {address}
      </p>
    </div>
  );
};

export default Publication;
