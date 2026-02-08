'use client';

import React from 'react';

interface EntryProps {
  organization: string;
  title: string;
  location: string;
  date: string;
  descriptions?: string[];
}

const Entry: React.FC<EntryProps> = ({
  organization,
  title,
  location,
  date,
  descriptions,
}) => {
  return (
    <div className='mb-6'>
      <div className='flex justify-between items-start flex-wrap gap-2'>
        <div>
          <h3 className='text-lg font-semibold text-neutral-8'>
            {organization}
          </h3>
          <p className='text-md text-neutral-6'>{title}</p>
        </div>
        <div className='text-right min-w-[150px]'>
          <p className='text-sm italic text-neutral-5'>{location}</p>
          <p className='text-sm text-neutral-5'>{date}</p>
        </div>
      </div>
      {descriptions && (
        <ul className='mt-2 ml-4 list-disc list-outside text-sm text-neutral-6 space-y-1'>
          {descriptions.map((description) => (
            <li key={description}>{description}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Entry;
