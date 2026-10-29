'use client';
// app/_layout/about-invite/index.jsx

import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { ParallaxFade } from '@/components';

/**
 * The step after the work: a large, always-visible invitation to /about.
 * It sits after the project deck so the story follows the proof.
 */
export function AboutInvite() {
  return (
    <section className='container' aria-label='About me'>
      <div
        style={{
          paddingBlock: 'clamp(5em, 11vh, 10em) clamp(2em, 4vh, 4em)',
          paddingInline: 'clamp(0.25em, 4vw, 8em)',
        }}
      >
        <ParallaxFade>
          <Link
            href='/about'
            className='group relative flex flex-wrap items-center justify-between gap-x-10 gap-y-6 overflow-hidden border-y border-border py-8 outline-none transition-colors duration-500 focus-visible:bg-muted/60 lg:py-12'
          >
            <span
              aria-hidden='true'
              className='absolute inset-0 translate-y-full bg-foreground transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0'
            />
            <span className='relative'>
              <span className='mb-3 block text-xs uppercase tracking-wider text-muted-foreground transition-colors duration-500 group-hover:text-background/60'>
                The next step
              </span>
              <span className='block text-[clamp(2.5rem,7vw,8rem)] font-normal leading-[1.05] tracking-tight transition-colors duration-500 group-hover:text-background'>
                The story so far
              </span>
            </span>

            <span className='relative flex items-center gap-8 transition-colors duration-500 group-hover:text-background'>
              <Balancer
                as='span'
                className='block max-w-xs text-base leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-background/70 lg:text-lg'
              >
                From school to three internships, travelled sideways, plus the
                full toolkit and the builds behind it.
              </Balancer>
              <span className='grid size-16 shrink-0 place-items-center rounded-full bg-primary text-background transition-transform duration-500 ease-out group-hover:scale-110 lg:size-24'>
                <MoveUpRight
                  aria-hidden='true'
                  className='size-7 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:size-9'
                  strokeWidth={1.25}
                />
              </span>
            </span>
          </Link>

          <p className='mt-4 text-sm text-muted-foreground'>
            <Link
              href='/about#journey'
              className='border-b border-muted-foreground pb-0.5 transition-colors hover:border-primary hover:text-primary focus-visible:border-primary focus-visible:text-primary focus-visible:outline-none'
            >
              Or jump straight to the journey
            </Link>
          </p>
        </ParallaxFade>
      </div>
    </section>
  );
}
