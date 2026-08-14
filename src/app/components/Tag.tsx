import React from 'react';

interface TagProps {
  children: React.ReactNode;
  /** Highlighted tags use the rust accent to mark standout items. */
  highlighted?: boolean;
}

const Tag = ({ children, highlighted = false }: TagProps): React.ReactElement => (
  <span
    className={[
      'border border-rule bg-surface px-3 py-[7px]',
      'font-mono text-xs',
      highlighted ? 'text-rust' : 'text-ink-muted',
    ].join(' ')}
  >
    {children}
  </span>
);

export default Tag;
