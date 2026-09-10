import React from 'react';
import InstitutionName from '@/app/components/InstitutionName';
import Tag from '@/app/components/Tag';
import type { TimelineEntry } from '@/content/resume';

interface TimelineRowProps {
  entry: TimelineEntry;
  current: boolean;
  last: boolean;
}

/** Career record with a date rail and separate role and institution hierarchy. */
const TimelineRow = ({ entry, current, last }: TimelineRowProps): React.ReactElement => {
  const separator = entry.role.indexOf(', ');
  const role = separator < 0 ? entry.role : entry.role.slice(0, separator);
  const institution = separator < 0 ? '' : entry.role.slice(separator + 2);

  return (
    <article className={[
          'grid grid-cols-1 compact:grid-cols-[110px_minmax(0,1fr)]',
          'wide:grid-cols-[150px_minmax(0,1fr)]',
        ].join(' ')}>
      <div className={[
          'flex flex-row items-center gap-3 pt-6 pb-3.5 compact:flex-col',
          'compact:items-start compact:pt-[30px] compact:pb-0 font-mono text-sm text-meta',
        ].join(' ')}>
        <span>{entry.period}</span>
        {current && <span className='border border-rule-heavy bg-surface px-[9px] py-1 text-xs text-teal'>Current</span>}
      </div>
      <div className={[
        'relative px-5 pt-5 compact:pl-6 compact:pt-7 wide:px-8',
        'before:absolute before:top-7 before:h-[9px] before:w-[9px]',
        'before:border compact:before:top-9',
        current
          ? 'border-l-2 border-accent bg-surface before:left-[-6px] before:border-accent before:bg-accent'
          : 'border-l border-rule-heavy before:left-[-5px] before:border-rule-marker before:bg-canvas',
        last ? 'pb-0' : 'pb-7 compact:pb-[38px]',
      ].join(' ')}>
        <h2 className='text-[clamp(1.25rem,2.6vw,1.625rem)] font-bold leading-[1.3] tracking-[-0.03em]'>{role}</h2>
        <div className='mt-1.5 text-lg text-teal'>
          {institution === 'Trail of Bits' ? (
            <a href='https://trailofbits.com/' className='underline-offset-4 hover:underline'>{institution}</a>
          ) : <InstitutionName text={institution} />}
        </div>
        <div className='mt-3 mb-[18px] text-[0.8125rem] leading-[1.7] font-mono text-meta'>{entry.meta}</div>
        <p className='text-base leading-[1.75] text-copy text-pretty'>{entry.description}</p>
        {entry.chips.length > 0 && (
          <div className='flex flex-wrap gap-2 pt-4'>
            {entry.chips.map((chip) => (
              <Tag key={chip.label} highlighted={chip.highlighted} href={chip.url}>
                {chip.label}
              </Tag>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default TimelineRow;
