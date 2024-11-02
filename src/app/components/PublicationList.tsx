"use client";

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
    const [publications, setPublications] = useState<PublicationData[]>([]);

    useEffect(() => {
        fetch('/publications.json')
            .then((response) => response.json())
            .then((data) => setPublications(data))
            .catch((error) => console.error("Error loading publications data:", error));
    }, []);

    return (
        <div className="px-4 pb-4">
            {publications.map((pub, index) => (
                <Publication
                    key={index}
                    title={pub.title}
                    authors={pub.author}
                    booktitle={pub.booktitle}
                    year={pub.year}
                    address={pub.address}
                    url={pub.url}
                    publisher={pub.publisher}
                    pages={pub.pages}
                />
            ))}
        </div>
    );
};

export default PublicationList;