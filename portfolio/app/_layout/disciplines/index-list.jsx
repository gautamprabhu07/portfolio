'use client';
// app/_layout/disciplines/index-list.jsx

import { useId, useState } from 'react';

import { Plus } from 'lucide-react';

import { disciplines } from '@/data';
import { cn } from '@/utils';

/**
 * Phone version of the disciplines: an index you read down the page. Each
 * area is one full-width row (a big, easy tap target); opening a row slides its
 * evidence out beneath the title, and the other rows stay put, so the whole
 * list is always visible. One row is open at a time, the first by default so
 * the interaction explains itself.
 */
export function DisciplineIndex() {
  const [openId, setOpenId] = useState(disciplines[0].id);
  const baseId = useId();

  return (
    <div>
      <p className='mb-4 flex items-baseline justify-between text-xs uppercase tracking-wider text-muted-foreground'>
        <span>Where I work</span>
        <span>Tap to open</span>
      </p>

      <ul className='border-t border-border'>
        {disciplines.map((item, index) => {
          const open = openId === item.id;
          const panelId = `${baseId}-${item.id}`;
          return (
            <li key={item.id} className='border-b border-border'>
              <h3>
                <button
                  type='button'
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenId(open ? null : item.id)}
                  className='relative flex w-full items-center gap-4 py-4 pe-1 text-start outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                >
                  <span
                    aria-hidden='true'
                    className={cn(
                      'absolute inset-y-3 -left-4 w-1 rounded-full bg-primary transition-opacity duration-300',
                      open ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  <span
                    className={cn(
                      'w-6 shrink-0 text-xs tabular-nums transition-colors duration-300',
                      open ? 'text-primary' : 'text-muted-foreground',
                    )}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={cn(
                      'flex-1 text-[1.9rem] font-normal leading-none tracking-tight transition-colors duration-300',
                      open ? 'text-foreground' : 'text-foreground/45',
                    )}
                  >
                    {item.label}
                  </span>
                  <span
                    aria-hidden='true'
                    className={cn(
                      'grid size-9 shrink-0 place-items-center rounded-full border transition-[transform,background-color,color,border-color] duration-300',
                      open
                        ? 'rotate-45 border-primary bg-primary text-background'
                        : 'border-border text-foreground',
                    )}
                  >
                    <Plus className='size-4' strokeWidth={1.5} />
                  </span>
                </button>
              </h3>

              <div
                id={panelId}
                role='region'
                aria-label={item.label}
                className={cn(
                  'grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:transition-none',
                  open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                )}
              >
                <div className='overflow-hidden'>
                  <p
                    className={cn(
                      'ms-10 pb-5 pe-2 text-[0.95rem] leading-relaxed text-muted-foreground transition-[opacity,transform] duration-500 motion-reduce:transition-none',
                      open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0',
                    )}
                  >
                    {item.proof}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
