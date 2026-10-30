'use client';
// app/_layout/mobile-dock/index.jsx

import { FileText, Home, Mail, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navItems } from '@/data';
import { cn } from '@/utils';

const icons = { home: Home, about: User, contact: Mail, resume: FileText };
const order = ['home', 'about', 'contact', 'resume'];
const items = order.map((title) => navItems.find((item) => item.title === title));

/**
 * Phone navigation: a compact dock floating at the bottom edge, inside the
 * thumb's reach. Every destination is always on screen with its label, the
 * current page is the filled pill, and nothing depends on hover. Desktop keeps
 * the top links and the sidebar, so this is hidden from `md` up.
 */
export function MobileDock() {
  const pathname = usePathname();

  return (
    <nav
      aria-label='Primary'
      className='pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden'
    >
      <ul className='pointer-events-auto flex w-full max-w-[22rem] items-center gap-1 rounded-full bg-foreground p-1.5 text-background shadow-[0_14px_40px_-10px_rgba(0,0,0,0.7)] ring-1 ring-background/20'>
        {items.map((item) => {
          const Icon = icons[item.title];
          const current = !item.external && item.href === pathname;
          return (
            <li key={item.title} className='min-w-0 flex-1'>
              <Link
                href={item.href}
                {...(item.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                aria-current={current ? 'page' : undefined}
                className={cn(
                  'flex h-[3.25rem] flex-col items-center justify-center gap-0.5 rounded-full text-[0.68rem] font-medium capitalize leading-none tracking-wide outline-none transition-[background-color,color,transform] duration-300 active:scale-95 focus-visible:ring-2 focus-visible:ring-background',
                  current
                    ? 'bg-background text-foreground'
                    : 'text-background/70 active:bg-background/15',
                )}
              >
                <Icon aria-hidden='true' className='size-[1.15rem]' strokeWidth={1.6} />
                <span>{item.title}</span>
                {item.external && (
                  <span className='sr-only'> (opens in a new tab)</span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
