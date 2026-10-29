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
    transition: { duration: 0.4, delay: 0.03 * i, ease: easing },
  }),
};

function countOf(group) {
  if (group.certifications) return group.certifications.length;
  return group.sections.reduce((total, { items }) => total + items.length, 0);
}

function ItemList({ items, offset = 0 }) {
  return (
    <ul className='flex flex-wrap gap-x-[0.5em] gap-y-2 text-[clamp(1.05rem,1.4vw,1.5rem)] leading-snug'>
      {items.map((name, index) => (
        <motion.li
          key={name}
          custom={offset + index}
          variants={item}
          initial='initial'
          animate='open'
          className='after:content-[","] last:after:hidden'
        >
          {name}
        </motion.li>
      ))}
    </ul>
  );
}

function CertificationList({ certifications }) {
  return (
    <ul>
      {certifications.map(({ name, issuer, date, href }, index) => (
        <motion.li
          key={name}
          custom={index}
          variants={item}
          initial='initial'
          animate='open'
          className='border-t border-border py-4 last:border-b'
        >
          {href ? (
            <a
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-[clamp(1.1rem,1.5vw,1.6rem)] leading-snug transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none'
            >
              {name}
              <span className='sr-only'> (opens in a new tab)</span>
              <span aria-hidden='true' className='ms-2 text-muted-foreground'>
                ↗
              </span>
            </a>
          ) : (
            <p className='text-[clamp(1.1rem,1.5vw,1.6rem)] leading-snug'>
              {name}
            </p>
          )}
          <p className='mt-1 text-sm text-muted-foreground'>
            {issuer}
            {date ? ` · ${date}` : ''}
          </p>
        </motion.li>
      ))}
    </ul>
  );
}

/** The description + items for one layer. */
function PanelBody({ group }) {
  const multiple = group.sections && group.sections.length > 1;
  let runningOffset = 0;

  return (
    <>
      {group.description && (
        <Balancer
          as='p'
          className='mb-8 text-[clamp(1.3rem,1.9vw,2.1rem)] leading-snug tracking-tight'
        >
          {group.description}
        </Balancer>
      )}

      <p className='mb-5 border-t border-border pt-4 text-xs uppercase tracking-wider text-muted-foreground'>
        {countOf(group)} in this layer
      </p>

      {group.certifications ? (
        <CertificationList certifications={group.certifications} />
      ) : (
        <div className='grid gap-6'>
          {group.sections.map(({ label, items }) => {
            const offset = runningOffset;
            runningOffset += items.length;
            return (
              <div key={label ?? 'all'}>
                {multiple && label && (
                  <p className='mb-2 text-xs uppercase tracking-wider text-muted-foreground'>
                    {label}
                  </p>
                )}
                <ItemList items={items} offset={offset} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export function AboutApproach() {
  const [selected, setSelected] = useState(0);
  const group = groups[selected];

  return (
    <Section>
      <SectionLabel className='mb-10 lg:mb-16'>
        How I work · Pick a layer
      </SectionLabel>

      <div className='grid gap-12 lg:grid-cols-12 lg:gap-16'>
        <ul
          className='lg:col-span-7 lg:pb-[35vh]'
          role='tablist'
          aria-label='Areas of focus'
        >
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
                  className='group flex w-full items-baseline gap-4 py-4 text-start outline-none focus-visible:bg-muted/50 lg:gap-6 lg:py-5'
                >
                  <span className='w-8 shrink-0 text-xs tabular-nums text-muted-foreground'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={cn(
                      'text-[clamp(1.9rem,4vw,4.5rem)] font-normal leading-[1.1] tracking-tight transition-[color,transform] duration-500 ease-out',
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

                {/* Small screens: show the layer right under the one tapped,
                    so it is never stranded below the whole list. */}
                {isActive && (
                  <motion.div
                    key={id}
                    variants={panel}
                    initial='initial'
                    animate='open'
                    className='pb-8 ps-12 lg:hidden'
                  >
                    <PanelBody group={group} />
                  </motion.div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Large screens: sticky, so the panel stays beside whichever layer
            is being hovered instead of sitting at the top of the column. */}
        <div
          id='approach-panel'
          role='tabpanel'
          aria-labelledby={`approach-tab-${group.id}`}
          className='hidden lg:sticky lg:top-24 lg:col-span-5 lg:block lg:max-h-[calc(100vh-7rem)] lg:min-h-[min(28rem,calc(100vh-7rem))] lg:self-start lg:overflow-y-auto'
        >
          <AnimatePresence mode='wait'>
            <motion.div
              key={group.id}
              variants={panel}
              initial='initial'
              animate='open'
              exit='closed'
            >
              <PanelBody group={group} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
