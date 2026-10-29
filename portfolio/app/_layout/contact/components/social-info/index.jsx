'use client';
// app/_layout/contact/components/social-info/index.jsx

import { useReducedMotion } from 'framer-motion';
import { MoveUp } from 'lucide-react';

import { Magnetic } from '../magnetic';

const socialLinks = [
  { href: 'https://github.com/gautamprabhu07', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/gautamphere', label: 'LinkedIn' },
];

export function SocialInfo() {
  const reduceMotion = useReducedMotion();

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });

  return (
    <div className='mt-14 lg:mt-16'>
      <div className='flex flex-wrap items-end justify-between gap-x-10 gap-y-8'>
        <div>
          <p className='mb-4 text-xs uppercase tracking-wider text-background/60'>
            Elsewhere
          </p>
          <ul className='flex items-center gap-8'>
            {socialLinks.map(({ href, label }) => (
              <li key={label}>
                <Magnetic strength={0.28} reach={36}>
                  <a
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group relative inline-block pb-1 text-lg tracking-tight outline-none lg:text-xl'
                  >
                    {label}
                    <span className='sr-only'> (opens in a new tab)</span>
                    <span
                      aria-hidden='true'
                      className='ms-1.5 inline-block text-background/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                    >
                      ↗
                    </span>
                    <span
                      aria-hidden='true'
                      className='absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100'
                    />
                  </a>
                </Magnetic>
              </li>
            ))}
          </ul>
        </div>

        <Magnetic strength={0.3} reach={48}>
          <button
            type='button'
            onClick={scrollToTop}
            className='group relative flex items-center gap-3 overflow-hidden rounded-full border border-background/30 px-6 py-3 text-base outline-none transition-colors duration-500 hover:border-primary focus-visible:border-primary'
          >
            <span
              aria-hidden='true'
              className='absolute inset-0 translate-y-full rounded-full bg-primary transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0'
            />
            <span className='relative'>Back to top</span>
            <MoveUp
              aria-hidden='true'
              className='relative size-4 transition-transform duration-500 group-hover:-translate-y-0.5'
              strokeWidth={1.5}
            />
          </button>
        </Magnetic>
      </div>

      <div className='mt-12 flex flex-wrap items-center justify-between gap-x-10 gap-y-3 border-t border-background/15 pt-6 text-sm text-background/60'>
        <p>
          © {new Date().getFullYear()} Gautam Prabhu · Manipal, Karnataka,
          India
        </p>
        <p>Built with Next.js, Framer Motion &amp; Tailwind CSS</p>
        <p className='hidden [@media(hover:hover)]:block'>
          Move across the surface
        </p>
      </div>
    </div>
  );
}
