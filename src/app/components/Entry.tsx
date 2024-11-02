"use client";

import React from 'react';

interface EntryProps {
    organization: string;
    title: string;
    location: string;
    date: string;
    descriptions?: string[];
}

const Entry: React.FC<EntryProps> = ({ organization, title, location, date, descriptions }) => {
    return (
        <div className="mb-6">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-semibold text-gray-200">{organization}</h3>
                    <p className="text-md text-gray-400">{title}</p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-gray-300 italic">{location}</p>
                    <p className="text-sm text-gray-300">{date}</p>
                </div>
            </div>
            {descriptions && (
                <ul className="mt-2 ml-4 list-disc list-outside text-sm text-gray-300">
                    {descriptions.map((description, index) => (
                        <li key={index}>{description}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Entry;