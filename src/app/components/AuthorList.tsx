import React from 'react';
import { AUTHOR_NAME } from '@/content/resume';

/** A byline with the site owner's name emphasised among the co-authors. */
const AuthorList = ({ authors }: { authors: readonly string[] }): React.ReactElement => (
  <>
    {authors.map((author, position) => (
      <span key={author} className={author === AUTHOR_NAME ? 'font-medium text-ink' : ''}>
        {author}
        {position < authors.length - 1 ? ', ' : ''}
      </span>
    ))}
  </>
);

export default AuthorList;
