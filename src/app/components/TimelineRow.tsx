import React from 'react';
import Tag from '@/app/components/Tag';
import type { TimelineEntry } from '@/content/resume';

interface TimelineRowProps {
  entry: TimelineEntry;
  /** The most recent entry gets a filled marker; the rest are hollow. */
  current: boolean;
  /** The final entry drops its connector line and trailing spacing. */
  last: boolean;
}

const TimelineRow = ({
  entry,
  current,
  last,
}: TimelineRowProps): React.ReactElement => (
  <div
    className={[
      'grid grid-cols-[76px_20px_minmax(0,1fr)]',
      'wide:grid-cols-[96px_24px_minmax(0,1fr)]',
    ].join(' ')}
  >
    <div
      className={[
        'pt-[3px] font-mono text-xs',
        current ? 'text-ink' : 'text-meta',
      ].join(' ')}
    >
      {entry.period}
    </div>

    <div className='flex flex-col items-center' aria-hidden='true'>
      <div
        className={[
          'mt-[5px] h-[11px] w-[11px]',
          current ? 'bg-accent' : 'border border-rule-marker bg-surface',
        ].join(' ')}
      />
      {!last && <div className='w-px flex-1 bg-rule' />}
    </div>

    <div
      className={[
        'flex flex-col gap-[7px] pl-[22px]',
        last ? 'pb-1' : 'pb-[34px]',
      ].join(' ')}
    >
      <h2 className='text-[19px] font-bold tracking-[-0.02em] text-ink'>
        {entry.role}
      </h2>
      <div className='font-mono text-[11.5px] text-meta'>{entry.meta}</div>
      <p className='max-w-[62ch] text-[15px] leading-[1.65] text-copy text-pretty'>
        {entry.description}
      </p>
      {entry.chips.length > 0 && (
        <div className='flex flex-wrap gap-[7px] pt-[5px]'>
          {entry.chips.map((chip) => (
            <Tag key={chip.label} highlighted={chip.highlighted}>
              {chip.label}
            </Tag>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default TimelineRow;
