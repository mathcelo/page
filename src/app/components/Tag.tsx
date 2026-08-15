import React from 'react';

interface TagProps {
  children: React.ReactNode;
  /** Highlighted tags use the rust accent to mark standout items. */
  highlighted?: boolean;
  /** When set, the tag renders as a link to this address. */
  href?: string;
}

const Tag = ({
  children,
  highlighted = false,
  href,
}: TagProps): React.ReactElement => {
  const style = [
    'border border-rule bg-surface px-3 py-[7px]',
    'font-mono text-xs',
    highlighted ? 'text-rust' : 'text-ink-muted',
  ].join(' ');

  if (!href) return <span className={style}>{children}</span>;

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`${style} transition-colors duration-200 hover:border-accent`}
    >
      {children}
    </a>
  );
};

export default Tag;
