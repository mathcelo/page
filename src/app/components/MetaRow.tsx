import React from 'react';

interface MetaRowProps {
  /** Left-hand gutter content: a date, venue, or other short label. */
  gutter: React.ReactNode;
  children: React.ReactNode;
  /** Padding and border tuning supplied by the call site. */
  className?: string;
}

/** A hairline-separated record row: short label in the gutter, detail beside it. */
const MetaRow = ({
  gutter,
  children,
  className = '',
}: MetaRowProps): React.ReactElement => (
  <div
    className={[
      'grid grid-cols-1 gap-[18px] border-t border-rule',
      'wide:grid-cols-[175px_minmax(0,1fr)] wide:gap-6',
      className,
    ].join(' ')}
  >
    <div>{gutter}</div>
    <div>{children}</div>
  </div>
);

export default MetaRow;
