import React from 'react';

interface SectionRowProps {
  /** Section name rendered as a `// label` comment in the left gutter. */
  label: string;
  children: React.ReactNode;
}

/** Two-column section layout: a mono gutter label beside its content. */
const SectionRow = ({
  label,
  children,
}: SectionRowProps): React.ReactElement => (
  <section
    aria-label={label}
    className={[
      'grid grid-cols-1 gap-[18px]',
      'wide:grid-cols-[200px_minmax(0,1fr)] wide:gap-10',
    ].join(' ')}
  >
    <div aria-hidden='true' className='font-mono text-xs text-meta'>
      {`// ${label}`}
    </div>
    <div>{children}</div>
  </section>
);

export default SectionRow;
