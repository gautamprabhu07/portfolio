'use client';
// app/(in-progress)/about/_components/builds/index.jsx

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Balancer from 'react-wrap-balancer';

import { cn } from '@/utils';

import { Section, SectionLabel } from '../shared';
import { projects } from './projects';

const easing = [0.33, 1, 0.68, 1];

export function AboutBuilds() {
  const [open, setOpen] = useState(0);

  return (
    <Section className='!pt-0'>
      <div className='mb-10 flex flex-wrap items-end justify-between gap-4 lg:mb-16'>
        <SectionLabel>Selected builds · {projects.length}</SectionLabel>
        <p className='text-base text-muted-foreground lg:text-lg'>
          Open one to see what it does and how it holds up
        </p>
      </div>

      <ul>
        {projects.map((project, index) => {
          const isOpen = open === index;
          const panelId = `build-panel-${project.id}`;

          return (
            <li key={project.id} className='border-t border-border last:border-b'>
              <h3>
                <button
                  type='button'
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className='group flex w-full items-baseline gap-4 py-5 text-start outline-none focus-visible:bg-muted/50 lg:gap-8 lg:py-7'
                >
                  <span className='w-8 shrink-0 text-xs tabular-nums text-muted-foreground'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className='text-[clamp(1.6rem,3.3vw,3.75rem)] font-normal leading-[1.1] tracking-tight transition-colors duration-300 group-hover:text-primary group-focus-visible:text-primary'>
                    {project.title}
                  </span>
                  <span className='ms-auto hidden text-base text-muted-foreground md:block'>
                    {project.role}
                  </span>
                  <Plus
                    aria-hidden='true'
                    strokeWidth={1.25}
                    className={cn(
                      'size-6 shrink-0 self-center transition-transform duration-500 ease-out max-md:ms-auto',
                      isOpen && 'rotate-45 text-primary',
                    )}
                  />
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role='region'
                    aria-label={project.title}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: easing }}
                    className='overflow-hidden'
                  >
                    <div className='grid gap-8 pb-10 ps-0 lg:grid-cols-12 lg:gap-12 lg:pb-14 lg:ps-16'>
                      <div className='lg:col-span-6'>
                        <p className='mb-3 text-xs uppercase tracking-wider text-muted-foreground md:hidden'>
                          {project.role}
                        </p>
                        <Balancer
                          as='p'
                          className='text-[clamp(1.1rem,1.5vw,1.6rem)] leading-snug'
                        >
                          {project.summary}
                        </Balancer>
                      </div>

                      <div className='grid content-start gap-6 lg:col-span-6'>
                        <div>
                          <p className='mb-2 text-xs uppercase tracking-wider text-muted-foreground'>
                            Impact
                          </p>
                          <p className='text-base leading-relaxed text-muted-foreground lg:text-lg'>
                            {project.impact}
                          </p>
                        </div>

                        <div>
                          <p className='mb-2 text-xs uppercase tracking-wider text-muted-foreground'>
                            Built with
                          </p>
                          <ul className='flex flex-wrap gap-x-[0.5em] gap-y-1 text-base lg:text-lg'>
                            {project.stack.map((name) => (
                              <li
                                key={name}
                                className='after:content-[","] last:after:hidden'
                              >
                                {name}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {project.links.length > 0 && (
                          <ul className='flex flex-wrap gap-x-6 gap-y-2 text-base lg:text-lg'>
                            {project.links.map(({ label, href }) => (
                              <li key={label}>
                                <a
                                  href={href}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='border-b border-foreground pb-0.5 transition-colors hover:border-primary hover:text-primary focus-visible:border-primary focus-visible:text-primary focus-visible:outline-none'
                                >
                                  {label}
                                  <span className='sr-only'> (opens in a new tab)</span>
                                  <span aria-hidden='true'> ↗</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
