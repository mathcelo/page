'use client';

import React, { useEffect, useState } from 'react';
import Publication from './Publication';

interface PublicationData {
  type: string;
  author: string[];
  title: string;
  booktitle: string;
  year: number;
  address: string;
  url?: string;
  publisher?: string;
  pages?: string;
}

const PublicationList: React.FC = () => {
  const [publications, setPublications] = useState<PublicationData[] | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/publications.json')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load publication data.');
        return response.json();
      })
      .then((data) => setPublications(data))
      .catch((fetchError) => {
        console.error('Error loading publications data:', fetchError);
        setError('Could not load publications.');
      });
  }, []);

  if (error) {
    return <p className='text-neutral-5 italic'>⚠️ {error}</p>;
  }

  if (publications === null) {
    return <p className='text-neutral-6 italic'>Loading publications...</p>;
  }

  if (publications.length === 0) {
    return <p className='text-neutral-6 italic'>No publications found.</p>;
  }

  return (
    <div className='px-4 pb-4'>
      {publications.map((publication) => (
        <Publication
          key={publication.title}
          title={publication.title}
          authors={publication.author}
          booktitle={publication.booktitle}
          year={publication.year}
          address={publication.address}
          url={publication.url}
          publisher={publication.publisher}
          pages={publication.pages}
        />
      ))}
    </div>
  );
};

export default PublicationList;
