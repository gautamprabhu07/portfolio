'use client';
// app/(in-progress)/about/_components/approach/index.jsx

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import Balancer from 'react-wrap-balancer';

import { cn } from '@/utils';

import { Section, SectionLabel } from '../shared';
import { groups } from './groups';

const easing = [0.33, 1, 0.68, 1];

const panel = {
  initial: { opacity: 0, y: 24 },
  open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easing } },
  closed: { opacity: 0, y: -12, transition: { duration: 0.25 } },
};

const item = {
  initial: { opacity: 0, y: 12 },
  open: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.04 * i, ease: easing },
  }),
};

export function AboutApproach() {
  const [selected, setSelected] = useState(0);
  const group = groups[selected];

  return (
    <Section>
      <SectionLabel className='mb-10 lg:mb-16'>
        How I work · Pick a layer
      </SectionLabel>

      <div className='grid gap-12 lg:grid-cols-12 lg:gap-16'>
        <ul className='lg:col-span-7' role='tablist' aria-label='Areas of focus'>
          {groups.map(({ id, title }, index) => {
            const isActive = index === selected;
            return (
              <li key={id} className='border-t border-border last:border-b'>
                <button
                  type='button'
                  role='tab'
                  id={`approach-tab-${id}`}
                  aria-selected={isActive}
                  aria-controls='approach-panel'
                  onClick={() => setSelected(index)}
                  onFocus={() => setSelected(index)}
                  onPointerEnter={(event) =>
                    event.pointerType === 'mouse' && setSelected(index)
                  }
                  className='group flex w-full items-baseline gap-4 py-5 text-start outline-none focus-visible:bg-muted/50 lg:gap-6 lg:py-7'
                >
                  <span className='w-8 shrink-0 text-xs tabular-nums text-muted-foreground'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={cn(
                      'text-[clamp(2rem,4.3vw,5rem)] font-normal leading-[1.1] tracking-tight transition-[color,transform] duration-500 ease-out',
                      isActive
                        ? 'translate-x-3 text-foreground'
                        : 'text-foreground/25 group-hover:text-foreground/60',
                    )}
                  >
                    {title}
                  </span>
                  <MoveRight
                    aria-hidden='true'
                    className={cn(
                      'ms-auto size-6 shrink-0 self-center text-primary transition-all duration-500',
                      isActive
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-3 opacity-0',
                    )}
                    strokeWidth={1.25}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <div
          id='approach-panel'
          role='tabpanel'
          aria-labelledby={`approach-tab-${group.id}`}
          className='lg:col-span-5 lg:min-h-[26rem]'
        >
          <AnimatePresence mode='wait'>
            <motion.div
              key={group.id}
              variants={panel}
              initial='initial'
              animate='open'
              exit='closed'
            >
              {group.description && (
                <Balancer
                  as='p'
                  className='mb-10 text-[clamp(1.4rem,2vw,2.25rem)] leading-snug tracking-tight'
                >
                  {group.description}
                </Balancer>
              )}

              <p className='mb-4 border-t border-border pt-4 text-xs uppercase tracking-wider text-muted-foreground'>
                {group.items.length} in this layer
              </p>

              <ul className='flex flex-wrap gap-x-[0.5em] gap-y-2 text-[clamp(1.1rem,1.5vw,1.6rem)] leading-snug'>
                {group.items.map((name, index) => (
                  <motion.li
                    key={name}
                    custom={index}
                    variants={item}
                    initial='initial'
                    animate='open'
                    className='after:content-[","] last:after:hidden'
                  >
                    {name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
