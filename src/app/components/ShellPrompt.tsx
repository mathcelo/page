import React from 'react';

interface ShellPromptProps {
  command: string;
  /** Working directory shown before the `$`. */
  path?: string;
}

/**
 * A `~ $ command` line. Hidden from assistive technology: it is set dressing,
 * and the heading or content next to it carries the meaning.
 */
const ShellPrompt = ({ command, path = '~' }: ShellPromptProps): React.ReactElement => (
  <span aria-hidden='true' className='text-meta'>
    <span className='text-teal'>{path}</span> $ <span className='text-ink'>{command}</span>
  </span>
);

export default ShellPrompt;
