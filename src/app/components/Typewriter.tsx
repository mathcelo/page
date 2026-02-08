'use client';

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delayMilliseconds?: number;
  infinite?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delayMilliseconds = 100,
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
      }, delayMilliseconds);

      return () => clearTimeout(timeout);
    } else if (infinite) {
      const reset = setTimeout(() => {
        setDisplayText('');
        setIndex(0);
      }, 3000);
      return () => clearTimeout(reset);
    }
  }, [index, text, delayMilliseconds, infinite]);

  const handleCopy = (): void => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerStyle = [
    'bg-neutral-2 border border-neutral-4 rounded-lg',
    'p-4 shadow-lg mt-6 cursor-pointer',
    'select-none transition',
    copied ? 'animate-flash' : '',
  ].join(' ');

  const textStyle = [
    'font-mono text-sm text-neutral-6 leading-6',
    'first-line:font-medium first-line:text-neutral-8',
    'indent-4',
  ].join(' ');

  return (
    <div
      onClick={handleCopy}
      title='Click to copy'
      aria-live='polite'
      className={containerStyle}
    >
      <p className={textStyle}>
        {displayText}
        <span
          className={[
            'ml-1 inline-block w-[0.6ch]',
            'bg-neutral-6 animate-blink align-baseline',
          ].join(' ')}
        >
          &nbsp;
        </span>
      </p>
    </div>
  );
};

export default Typewriter;
