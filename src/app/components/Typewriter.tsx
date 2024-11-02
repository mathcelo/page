"use client"
import React, { useState, useEffect } from 'react';

// Define the props interface
interface TypewriterProps {
    text: string;
    delay: number;
    infinite?: boolean;
}

// Use the interface as the component's prop type
const Typewriter: React.FC<TypewriterProps> = ({ text, delay, infinite = true }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (!isDeleting && currentIndex < text.length) {
            // Typing effect
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);
        } else if (isDeleting && currentIndex > 0) {
            // Deleting effect
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText.slice(0, -1));
                setCurrentIndex(prevIndex => prevIndex - 1);
            }, delay);
        } else if (currentIndex === text.length) {
            // Pause for 5 seconds before deleting
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 5000); // 5-second pause
        } else if (isDeleting && currentIndex === 0) {
            // Reset and start typing again
            setIsDeleting(false);
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, delay, isDeleting, text]);

    return (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-lg mt-6">
            <p className="font-mono text-sm text-gray-300 leading-6 first-line:font-medium first-line:text-gray-200 indent-4">
                {currentText}
                <span className="inline-block bg-gray-300 w-[1ch] animate-blink ml-1"></span>
            </p>
        </div>
    );
};

export default Typewriter;