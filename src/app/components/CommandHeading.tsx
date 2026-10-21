import React from 'react';
import ShellPrompt from '@/app/components/ShellPrompt';

interface CommandHeadingProps {
  id: string;
  command: string;
  /** Plain-language section name; this is what screen readers announce. */
  label: string;
}

/** Section heading drawn as a shell command followed by a `# label` comment. */
const CommandHeading = ({ id, command, label }: CommandHeadingProps): React.ReactElement => (
  <h2 id={id} className='flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[0.9375rem]'>
    <ShellPrompt command={command} />
    <span className='font-medium text-teal'>
      <span aria-hidden='true'># </span>
      {label}
    </span>
  </h2>
);

export default CommandHeading;
