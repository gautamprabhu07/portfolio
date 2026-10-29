'use client';
// app/(in-progress)/contact/_components/channels/index.jsx

import { useRef, useState } from 'react';

import { Check, Copy, MoveUpRight } from 'lucide-react';

import { navItems } from '@/data';

const EMAIL = 'gautamprabhumit@gmail.com';

const resumeHref = navItems.find(({ title }) => title === 'resume')?.href;

/** Every channel here already exists in the project or profile-info.md. */
const channels = [
  {
    name: 'Email',
    handle: EMAIL,
    hint: 'Preferred for opportunities',
    href: `mailto:${EMAIL}`,
    label: 'Open email',
    copy: true,
  },
  {
    name: 'LinkedIn',
    handle: 'gautamphere',
    hint: 'Professional conversations',
    href: 'https://www.linkedin.com/in/gautamphere',
    label: 'Open LinkedIn',
    external: true,
  },
  {
    name: 'GitHub',
    handle: 'gautamprabhu07',
    hint: 'Projects & source code',
    href: 'https://github.com/gautamprabhu07',
    label: 'Open GitHub',
    external: true,
  },
  {
    name: 'Resume',
    handle: 'Experience, projects and skills',
    hint: 'Opens in Google Drive',
    href: resumeHref,
    label: 'Open resume',
    external: true,
  },
];

/** Copy `text` to the clipboard; resolves to whether it worked. */
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function ContactChannels() {
  const [status, setStatus] = useState('idle'); // idle | copied | failed
  const timer = useRef(0);

  const handleCopy = async () => {
    const ok = await copyText(EMAIL);
    setStatus(ok ? 'copied' : 'failed');
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus('idle'), 2400);
  };

  return (
    <section aria-label='Ways to reach me'>
      <p className='mb-6 text-xs uppercase tracking-wider text-background/60'>
        Channels
      </p>

      <ul>
        {channels.map((channel, index) => (
          <li
            key={channel.name}
            className='group relative border-t border-background/20 last:border-b'
          >
            <a
              href={channel.href}
              data-cursor
              data-cursor-label={channel.label}
              {...(channel.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className='flex items-center justify-between gap-6 py-6 outline-none transition-colors duration-500 focus-visible:bg-background/10 lg:py-8'
            >
              <span className='flex items-baseline gap-4 lg:gap-8'>
                <span className='hidden w-8 shrink-0 text-xs tabular-nums text-background/50 sm:block'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className='min-w-0 [overflow-wrap:anywhere]'>
                  <span className='block text-[clamp(2.25rem,5vw,5.25rem)] font-normal leading-[1.05] tracking-tight transition-[transform,color] duration-500 ease-out group-focus-within:translate-x-3 group-hover:translate-x-3 group-hover:text-primary'>
                    {channel.name}
                  </span>
                  <span className='mt-2 block text-base text-background/70'>
                    {channel.handle}
                    <span className='text-background/40'>
                      {' '}
                      · {channel.hint}
                    </span>
                  </span>
                  {channel.external && (
                    <span className='sr-only'> (opens in a new tab)</span>
                  )}
                </span>
              </span>

              <span
                aria-hidden='true'
                className='grid size-11 shrink-0 place-items-center rounded-full border border-background/30 transition-colors duration-300 group-hover:border-primary group-hover:bg-primary lg:size-14'
              >
                <MoveUpRight className='size-5' strokeWidth={1.5} />
              </span>
            </a>

            {channel.copy && (
              <button
                type='button'
                onClick={handleCopy}
                data-cursor
                data-cursor-label='Copy address'
                className='absolute right-[3.75rem] top-5 inline-flex items-center gap-2 rounded-full border border-background/30 px-4 py-2.5 text-sm outline-none transition-colors duration-300 hover:border-primary hover:bg-primary focus-visible:border-primary focus-visible:bg-primary max-sm:py-3 lg:right-24 lg:top-1/2 lg:-translate-y-1/2'
              >
                {status === 'copied' ? (
                  <Check className='size-4' aria-hidden='true' />
                ) : (
                  <Copy className='size-4' aria-hidden='true' />
                )}
                {status === 'copied' ? 'Copied' : 'Copy'}
              </button>
            )}
          </li>
        ))}
      </ul>

      <p
        role='status'
        aria-live='polite'
        className='mt-4 min-h-6 text-sm text-background/70'
      >
        {status === 'copied' && `${EMAIL} copied to your clipboard.`}
        {status === 'failed' &&
          `Could not copy automatically. The address is ${EMAIL}.`}
      </p>
    </section>
  );
}
