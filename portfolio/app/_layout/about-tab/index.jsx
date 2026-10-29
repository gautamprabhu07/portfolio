'use client';
// app/_layout/about-tab/index.jsx

import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';

/**
 * The Home page's pointer to /about: a slim vertical tab fixed to the hero's
 * right edge, resting just above the scrolling name. It is always visible (no hover needed), moves nowhere on its
 * own, and is a plain link, so it works the same with mouse, keyboard and
 * touch. Hover or focus only warms its colour and nudges the arrow.
 */
export function AboutTab() {
  return (
    <Link
      href='/about'
      aria-label='About me: the story so far'
      className='group absolute bottom-[calc(max(9em,15vw)*1.5+1.25rem)] right-0 z-20 flex flex-col items-center gap-4 rounded-l-xl bg-background px-3 py-5 text-foreground shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] outline-none transition-colors duration-500 hover:bg-primary hover:text-background focus-visible:bg-primary focus-visible:text-background focus-visible:ring-2 focus-visible:ring-background max-md:bottom-auto max-md:top-24 lg:px-4 lg:py-7'
    >
      <MoveUpRight
        aria-hidden='true'
        className='size-5 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5'
        strokeWidth={1.5}
      />
      <span
        className='text-sm font-medium tracking-wide lg:text-base'
        style={{ writingMode: 'vertical-rl' }}
      >
        About me
        <span aria-hidden='true' className='opacity-50 max-md:hidden'>
          {' '}
          — the story so far
        </span>
      </span>
    </Link>
  );
}
