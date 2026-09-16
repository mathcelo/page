import React from 'react';

interface SectionRowProps {
  /** Section name rendered as a `// label` comment in the left gutter. */
  label: string;
  children: React.ReactNode;
  layout?: 'columns' | 'stacked';
}

/** Two-column section layout: a mono gutter label beside its content. */
const SectionRow = ({
  label,
  children,
  layout = 'columns',
}: SectionRowProps): React.ReactElement => (
  <section
    aria-label={label}
    className={[
      'motion-safe:animate-enter-page',
      layout === 'stacked'
        ? 'block'
        : 'grid grid-cols-1 gap-[18px] wide:grid-cols-[200px_minmax(0,1fr)] wide:gap-10',
    ].join(' ')}
  >
    <div aria-hidden='true' className={[
      'font-mono text-sm before:block before:h-0.5 before:bg-accent',
      layout === 'stacked'
        ? 'mb-8 flex items-center gap-3.5 text-teal before:w-8 after:h-px after:flex-1 after:bg-rule'
        : 'text-meta before:mb-3.5 before:w-7',
    ].join(' ')}>
      {`// ${label}`}
    </div>
    <div>{children}</div>
  </section>
);

export default SectionRow;
