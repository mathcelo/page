import React from 'react';
import Section from '../components/Section';
import PublicationList from '../components/PublicationList';

const Research: React.FC = () => {
  return (
    <div className='min-h-screen p-8 sm:p-20 text-neutral-7'>
      <h1 className='text-4xl font-bold mb-8 text-neutral-8'>Research</h1>

      {/* Research Interests Section */}
      <Section title='Research Interests'>
        <p className='text-md text-neutral-6 mb-6 leading-relaxed tracking-wide'>
          My research focuses on the intersection of cybersecurity and
          blockchain technology. I’m particularly interested in areas such as
          smart contract security, threat modeling, and machine learning
          applications for detecting cyber threats.
        </p>
      </Section>

      {/* Publications Section */}
      <Section title='Publications'>
        <PublicationList />
      </Section>
    </div>
  );
};

export default Research;
