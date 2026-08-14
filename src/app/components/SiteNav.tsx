'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NAV_LINKS = [
  { href: '/', label: '[home]' },
  { href: '/about', label: '[about]' },
  { href: '/blog', label: '[blog]' },
] as const;

const isActive = (pathname: string, href: string): boolean =>
  href === '/' ? pathname === '/' : pathname.startsWith(href);

const SiteNav = (): React.ReactElement => {
  const pathname = usePathname();

  return (
    <div className='sticky top-0 z-20 border-b border-rule bg-surface'>
      <nav
        className={[
          'mx-auto flex w-full max-w-shell items-center justify-between gap-5',
          'px-5 py-3 compact:h-[62px] compact:flex-nowrap compact:px-7',
          'compact:py-0 flex-wrap gap-y-2',
        ].join(' ')}
      >
        <Link href='/' className='flex items-center gap-2.5 text-ink'>
          <span className='h-[11px] w-[11px] bg-accent' aria-hidden='true' />
          <span className='text-[15px] font-bold tracking-[-0.01em]'>
            mathcelo
          </span>
        </Link>

        <div className='flex gap-1 font-mono text-xs'>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(pathname, link.href) ? 'page' : undefined}
              className={[
                'px-[9px] py-[7px] transition-colors duration-200',
                isActive(pathname, link.href)
                  ? 'text-teal'
                  : 'text-meta hover:text-ink',
              ].join(' ')}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default SiteNav;
