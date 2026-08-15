import React from 'react';

/** Matches the article in "The Ohio State University", which the school italicises. */
const STYLED_ARTICLE = /\bThe (?=Ohio State University\b)/;

/**
 * Renders an institution name, setting the article of "The Ohio State
 * University" in italics the way the university styles its own name.
 * Uses `i` rather than `em` because this is a typographic convention, not
 * emphasis.
 */
const InstitutionName = ({ text }: { text: string }): React.ReactElement => {
  const match = STYLED_ARTICLE.exec(text);
  if (!match) return <>{text}</>;

  return (
    <>
      {text.slice(0, match.index)}
      <i className='italic'>The</i> {text.slice(match.index + match[0].length)}
    </>
  );
};

export default InstitutionName;
