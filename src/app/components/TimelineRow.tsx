import React from 'react';
import InstitutionName from '@/app/components/InstitutionName';
import type { TimelineEntry } from '@/content/resume';

interface TimelineRowProps {
  entry: TimelineEntry;
  current: boolean;
}

const CHIP_LINK = 'text-teal underline underline-offset-4 hover:text-rust';

/** Chips with a URL open it; the rest point at the matching project on this page. */
const Chip = ({ label, url }: { label: string; url?: string }): React.ReactElement => {
  if (url) {
    return (
      <a href={url} target='_blank' rel='noopener noreferrer' className={CHIP_LINK}>
        {label}
        <span aria-hidden='true'> ↗</span>
      </a>
    );
  }
  return <a href={`#project-${label.toLowerCase()}`} className={CHIP_LINK}>{label}</a>;
};

const Institution = ({ name }: { name: string }): React.ReactElement =>
  name === 'Trail of Bits' ? (
    <a href='https://trailofbits.com/' className={CHIP_LINK}>{name}</a>
  ) : (
    <InstitutionName text={name} />
  );

/** One career record laid out like a man-page option: period flush left, detail indented. */
const TimelineRow = ({ entry, current }: TimelineRowProps): React.ReactElement => {
  const separator = entry.role.indexOf(', ');
  const role = separator < 0 ? entry.role : entry.role.slice(0, separator);
  const institution = separator < 0 ? '' : entry.role.slice(separator + 2);

  return (
    <article className='grid grid-cols-1 gap-x-6 gap-y-1 compact:grid-cols-[10ch_minmax(0,1fr)]'>
      <div className='text-sm leading-7 text-meta'>
        {entry.period}
        {current && <span className='ml-2 text-teal compact:ml-0 compact:block'>[current]</span>}
      </div>
      <div>
        <h3 className='text-lg font-medium leading-7 tracking-[-0.01em]'>{role}</h3>
        <p className='text-[0.9375rem] text-teal'><Institution name={institution} /></p>
        <p className='mt-1 text-[0.8125rem] text-meta'>{entry.meta}</p>
        <p className='mt-3 max-w-[68ch] font-sans text-base leading-[1.7] text-copy text-pretty'>
          {entry.description}
        </p>
        {entry.chips.length > 0 && (
          <ul className='mt-3 flex flex-col gap-1 text-sm'>
            {entry.chips.map((chip) => (
              <li key={chip.label}>
                <span aria-hidden='true' className='text-meta'>see: </span>
                <Chip label={chip.label} url={chip.url} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

export default TimelineRow;
