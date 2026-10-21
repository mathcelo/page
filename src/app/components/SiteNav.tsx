'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NAV_LINKS = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/blog', label: 'blog' },
] as const;

const isActive = (pathname: string, href: string): boolean =>
  href === '/' ? pathname === '/' : pathname.startsWith(href);

const TAB_STYLE = [
  '-mb-px flex items-center border-x border-t-2 border-transparent px-2.5 compact:px-4',
  'transition-colors duration-150',
].join(' ');

/** Terminal tab bar: brand, one tab per section, and the current path. */
const SiteNav = (): React.ReactElement => {
  const pathname = usePathname();

  return (
    <header className={[
      'sticky top-0 z-20 flex items-stretch border-b border-rule-heavy bg-canvas text-sm',
    ].join(' ')}>
      <Link href='/' className='flex items-center gap-2 px-3 py-3 font-medium compact:px-5'>
        <span className='h-2.5 w-2.5 bg-accent' aria-hidden='true' />
        mathcelo
      </Link>
      <nav aria-label='Main navigation' className='flex'>
        {NAV_LINKS.map((link, index) => {
          const active = isActive(pathname, link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? 'page' : undefined}
              className={[
                TAB_STYLE,
                active
                  ? 'border-x-rule-heavy border-t-accent bg-surface text-ink'
                  : 'text-meta hover:text-teal',
              ].join(' ')}
            >
              <span aria-hidden='true' className='hidden text-meta compact:inline'>
                {index + 1}:
              </span>
              {link.label}
            </Link>
          );
        })}
      </nav>
      <span aria-hidden='true' className='ml-auto hidden items-center px-5 text-meta wide:flex'>
        ~{pathname.replace(/\/$/, '')}
      </span>
    </header>
  );
};

export default SiteNav;
