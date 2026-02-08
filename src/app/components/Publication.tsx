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

const DEFAULT_HIGHLIGHT_NAME = 'Marcelo Morales';

const Publication: React.FC<PublicationProps> = (props) => {
  const highlightName = props.highlightName ?? DEFAULT_HIGHLIGHT_NAME;

  const formattedAuthors = props.authors.map((author, position) => (
    <span
      key={author}
      className={
        author === highlightName ? 'font-bold text-neutral-8' : ''
      }
    >
      {author}
      {position < props.authors.length - 1 ? ', ' : ''}
    </span>
  ));

  return (
    <div className='mb-6'>
      <h3 className='text-lg font-semibold text-neutral-8'>
        {props.url ? (
          <a
            href={props.url}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary-1 transition duration-300'
          >
            {props.title}
          </a>
        ) : (
          props.title
        )}
      </h3>
      <p className='text-md text-neutral-6'>{formattedAuthors}</p>
      <p className='text-sm italic text-neutral-5'>
        {props.booktitle}, {props.year}, {props.address}
      </p>
    </div>
  );
};

export default Publication;
