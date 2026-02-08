'use client';

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  infinite?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delay = 100,
  infinite = true,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((previous) => previous + text[index]);
        setIndex((previous) => previous + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (infinite) {
      const reset = setTimeout(() => {
        setDisplayText('');
        setIndex(0);
      }, 3000);
      return () => clearTimeout(reset);
    }
  }, [index, text, delay, infinite]);

  const handleCopy = (): void => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={handleCopy}
      title='Click to copy'
      aria-live='polite'
      className={`bg-neutral-2 border border-neutral-4 rounded-lg p-4 shadow-lg mt-6 cursor-pointer select-none transition ${
        copied ? 'animate-flash' : ''
      }`}
    >
      <p className='font-mono text-sm text-neutral-6 leading-6 first-line:font-medium first-line:text-neutral-8 indent-4'>
        {displayText}
        <span className='ml-1 inline-block w-[0.6ch] bg-neutral-6 animate-blink align-baseline'>
          &nbsp;
        </span>
      </p>
    </div>
  );
};

export default Typewriter;
