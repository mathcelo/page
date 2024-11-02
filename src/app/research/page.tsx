import React from 'react';
import Section from '../components/Section';
import PublicationList from '../components/PublicationList';
import Entry from '../components/Entry';

const Research: React.FC = () => {
    return (
        <div className="min-h-screen p-8 sm:p-20 text-gray-200">
            <h1 className="text-4xl font-bold mb-8">Research</h1>

            {/* Research Interests Section */}
            <Section title="Research Interests">
                <p className="text-md text-gray-300 mb-6">
                    My research focuses on the intersection of cybersecurity and blockchain technology. I’m particularly interested in areas such as smart contract security, threat modeling, and machine learning applications for detecting cyber threats
                </p>

            </Section>

            {/* Publications Section */}
            <Section title="Publications">
                <PublicationList />
            </Section>

        </div>
    );
};

export default Research;