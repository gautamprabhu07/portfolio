'use client';
// app/_layout/disciplines/index.jsx

import { useState } from 'react';

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';

import { disciplines } from '@/data';
import { cn } from '@/utils';

const easing = [0.33, 1, 0.68, 1];

// Where each chip sits inside the floating cluster, and how strongly it
// reacts to the cursor (a larger depth means it travels further).
const layout = [
  { left: '0%', top: '0%', depth: 1.1 },
  { left: '52%', top: '8%', depth: 0.6 },
  { left: '10%', top: '34%', depth: 1.5 },
  { left: '56%', top: '44%', depth: 0.9 },
  { left: '0%', top: '70%', depth: 0.7 },
  { left: '48%', top: '82%', depth: 1.3 },
];

function Chip({ item, index, active, onSelect, variant, pointerX, pointerY }) {
  const { left, top, depth } = layout[index];
  const x = useTransform(pointerX, [-0.5, 0.5], [-14 * depth, 14 * depth]);
  const y = useTransform(pointerY, [-0.5, 0.5], [-10 * depth, 10 * depth]);
  const floating = variant === 'floating';

  return (
    <motion.li
      className={floating ? 'absolute' : undefined}
      style={floating ? { left, top, x, y } : undefined}
      // Weighted entrance: each chip settles on a spring, one after another.
      // (scale + opacity only; x/y belong to the pointer drift above)
      initial={floating ? { opacity: 0, scale: 0.6 } : false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 210,
        damping: 17,
        delay: floating ? 3.1 + index * 0.1 : 0,
      }}
    >
      <button
        type='button'
        aria-pressed={active}
        onClick={() => onSelect(active ? null : item.id)}
        onFocus={() => onSelect(item.id)}
        onPointerEnter={(event) =>
          event.pointerType === 'mouse' && onSelect(item.id)
        }
        className={cn(
          'whitespace-nowrap rounded-full border px-5 py-2 text-sm font-medium outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          floating
            ? 'focus-visible:ring-offset-black'
            : 'focus-visible:ring-offset-background',
          active
            ? 'border-primary bg-primary text-background'
            : floating
              ? 'border-background bg-background text-foreground hover:border-primary hover:bg-primary hover:text-background'
              : 'border-border text-foreground hover:border-primary hover:text-primary',
        )}
      >
        {item.label}
      </button>
    </motion.li>
  );
}

/**
 * Six areas of work from the hero one-liner. Selecting one (hover, focus or
 * tap) shows a verified fact about it.
 *
 * `floating` is laid over the hero photo and drifts with the cursor;
 * `inline` is the same content as a plain wrapping row for small screens.
 *
 * @param {{
 *   variant?: 'floating' | 'inline',
 *   pointerX?: import('framer-motion').MotionValue<number>,
 *   pointerY?: import('framer-motion').MotionValue<number>,
 * }} props
 */
export function Disciplines({ variant = 'floating', pointerX, pointerY }) {
  const [selected, setSelected] = useState(null);
  const idleX = useMotionValue(0);
  const idleY = useMotionValue(0);
  const current = disciplines.find(({ id }) => id === selected);
  const floating = variant === 'floating';

  return (
    <div className={floating ? 'w-full' : undefined}>
      <ul
        aria-label='Areas I work in'
        className={cn(
          floating
            ? 'relative h-[13rem] w-full'
            : 'flex flex-wrap gap-3',
        )}
      >
        {disciplines.map((item, index) => (
          <Chip
            key={item.id}
            item={item}
            index={index}
            active={selected === item.id}
            onSelect={setSelected}
            variant={variant}
            pointerX={pointerX ?? idleX}
            pointerY={pointerY ?? idleY}
          />
        ))}
      </ul>

      <div
        aria-live='polite'
        className={cn(
          'mt-5 min-h-[5.5rem] border-t pt-3 text-sm leading-relaxed',
          floating
            ? 'border-background/60 text-background drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]'
            : 'border-border text-muted-foreground',
        )}
      >
        <AnimatePresence mode='wait' initial={false}>
          <motion.p
            key={current?.id ?? 'idle'}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: easing } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            {current
              ? current.proof
              : 'Hover, focus or tap an area to see what is behind it.'}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
