'use client';
// app/_layout/showcase/index.jsx

import { useEffect, useRef, useState } from 'react';

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { MoveLeft, MoveRight, MoveUpRight } from 'lucide-react';
import Image from 'next/image';

import { projects } from '@/data';
import { cn } from '@/utils';

import { Magnetic } from '../contact/components/magnetic';

const spring = { type: 'spring', stiffness: 240, damping: 26, mass: 0.9 };

// Where a card sits, by how many steps it is behind the front card.
const slots = [
  { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, z: 10 },
  { x: 34, y: -16, rotate: 2.4, scale: 0.96, opacity: 1, z: 9 },
  { x: 68, y: -30, rotate: 4.8, scale: 0.92, opacity: 1, z: 8 },
  { x: 96, y: -42, rotate: 7, scale: 0.88, opacity: 0.55, z: 7 },
];
const parked = { x: 120, y: -50, rotate: 9, scale: 0.84, opacity: 0, z: 0 };
// The outgoing card only drifts a little and fades fast, so it never reaches the title list.
const tossed = { x: -36, y: 12, rotate: -5, scale: 0.97, opacity: 0, z: 11 };

function slotFor(offset, total) {
  if (offset < slots.length) return slots[offset];
  return offset === total - 1 ? tossed : parked;
}

function linkLabel(href) {
  return href.includes('github.com') ? 'View on GitHub' : 'Open live demo';
}

/** The visual half of a card: a screenshot, or a typographic plate. */
function Plate({ project, index }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        fill
        sizes='(max-width: 1024px) 80vw, 34rem'
        className='object-cover object-top'
      />
    );
  }

  return (
    <div className='relative flex size-full flex-col justify-between overflow-hidden bg-muted p-5'>
      <p className='max-w-64 text-lg leading-snug tracking-tight'>
        {project.metric}
      </p>
      <span
        aria-hidden='true'
        className='absolute -bottom-6 right-3 select-none text-[9rem] font-normal leading-none text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground)/0.22)]'
      >
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  );
}

function Card({ project, index, offset, total, onSelect, tilt, swipe }) {
  const front = offset === 0;
  const slot = slotFor(offset, total);
  const interactive = offset > 0 && offset < slots.length;

  return (
    <motion.div
      className={cn(
        'absolute inset-0',
        !front && !interactive && 'pointer-events-none',
      )}
      initial={false}
      animate={{
        x: slot.x,
        y: slot.y,
        rotate: slot.rotate,
        scale: slot.scale,
        opacity: slot.opacity,
      }}
      transition={{ ...spring, opacity: { duration: 0.22 } }}
      style={{ zIndex: slot.z }}
      aria-hidden={!front}
      data-deck={front ? 'front' : interactive ? 'back' : undefined}
      onClick={interactive ? () => onSelect(index) : undefined}
    >
      {/* Layer 2: touch drag. Kept apart from the spring (outer) and the
          pointer tilt (inner) so no two animations share a transform. */}
      <motion.div
        className='size-full'
        drag={front && swipe.enabled ? 'x' : false}
        dragSnapToOrigin
        dragElastic={0.5}
        onDragEnd={(_, info) => {
          if (info.offset.x < -70) swipe.go(1);
          else if (info.offset.x > 70) swipe.go(-1);
        }}
        style={{ touchAction: 'pan-y' }}
      >
        <motion.article
          style={{ rotateX: tilt.x, rotateY: tilt.y, transformPerspective: 1200 }}
          className={cn(
            'flex size-full flex-col overflow-hidden rounded-lg border border-border bg-background text-foreground shadow-2xl',
            interactive && 'cursor-pointer',
          )}
        >
          <div className='relative h-[52%] shrink-0 bg-muted'>
            <Plate project={project} index={index} />
          </div>

          <div className='flex flex-1 flex-col justify-between p-5 lg:p-6'>
            <div>
              <p className='mb-2 text-xs uppercase tracking-wider text-muted-foreground'>
                {String(index + 1).padStart(2, '0')} · {project.role}
              </p>
              <h3 className='text-[clamp(1.4rem,2vw,1.9rem)] font-normal leading-tight tracking-tight'>
                {project.title}
              </h3>
              <p className='mt-2 text-sm leading-snug text-muted-foreground'>
                {project.summary}
              </p>
            </div>

            <div className='mt-4 flex flex-wrap items-center justify-between gap-3'>
              <p className='text-xs text-muted-foreground'>
                {project.stack.join(' · ')}
              </p>

              {project.href ? (
                <Magnetic strength={0.35} reach={36}>
                  <a
                    href={project.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    tabIndex={front ? 0 : -1}
                    className='inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm text-background outline-none transition-colors duration-300 hover:bg-primary focus-visible:bg-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                  >
                    {linkLabel(project.href)}
                    <span className='sr-only'> (opens in a new tab)</span>
                    <MoveUpRight
                      aria-hidden='true'
                      className='size-4'
                      strokeWidth={1.5}
                    />
                  </a>
                </Magnetic>
              ) : (
                <span className='text-xs text-muted-foreground'>
                  No public link yet
                </span>
              )}
            </div>
          </div>
        </motion.article>
      </motion.div>
    </motion.div>
  );
}

export function Showcase() {
  const reduceMotion = useReducedMotion();
  const total = projects.length;
  const [active, setActive] = useState(0);
  const [swipeEnabled, setSwipeEnabled] = useState(false);

  const sectionRef = useRef(null);
  const deckRef = useRef(null);
  const pillRef = useRef(null);

  // The stage grows into focus as it scrolls in (visual only; never gates content).
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start 0.25'],
  });
  const stageScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const stageRadius = useTransform(scrollYProgress, [0, 1], [56, 0]);

  // Pointer tilt for the deck, plus a floating label that follows the mouse.
  const rawTiltX = useMotionValue(0);
  const rawTiltY = useMotionValue(0);
  const tilt = {
    x: useSpring(rawTiltX, { stiffness: 120, damping: 18 }),
    y: useSpring(rawTiltY, { stiffness: 120, damping: 18 }),
  };
  const pillX = useSpring(useMotionValue(0), { stiffness: 380, damping: 30 });
  const pillY = useSpring(useMotionValue(0), { stiffness: 380, damping: 30 });

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)');
    const update = () => setSwipeEnabled(coarse.matches);
    update();
    coarse.addEventListener('change', update);
    return () => coarse.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const deck = deckRef.current;
    const pill = pillRef.current;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!deck || !pill || !fine.matches) return undefined;

    const onMove = (event) => {
      if (event.pointerType !== 'mouse') return;
      const rect = deck.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;

      if (!reduceMotion) {
        rawTiltY.set((px - 0.5) * 10);
        rawTiltX.set(-(py - 0.5) * 8);
      }

      const overBack = event.target.closest?.('[data-deck="back"]');
      pill.style.opacity = overBack ? '1' : '0';
      if (overBack) {
        pill.textContent = 'Bring forward';
        pillX.set(event.clientX - rect.left + 18);
        pillY.set(event.clientY - rect.top + 18);
      }
    };

    const onLeave = () => {
      rawTiltX.set(0);
      rawTiltY.set(0);
      pill.style.opacity = '0';
    };

    deck.addEventListener('pointermove', onMove, { passive: true });
    deck.addEventListener('pointerleave', onLeave);
    return () => {
      deck.removeEventListener('pointermove', onMove);
      deck.removeEventListener('pointerleave', onLeave);
    };
  }, [pillX, pillY, rawTiltX, rawTiltY, reduceMotion]);

  const go = (step) => setActive((current) => (current + step + total) % total);
  const current = projects[active];

  return (
    <motion.section
      ref={sectionRef}
      aria-label='Selected work'
      className='relative z-10 text-clip bg-foreground text-background'
      style={
        reduceMotion
          ? undefined
          : { scale: stageScale, borderRadius: stageRadius, transformOrigin: '50% 0%' }
      }
    >
      <div className='container'>
        <div
          style={{
            paddingBlock: 'clamp(5em, 12vh, 10em)',
            paddingInline: 'clamp(0.25em, 4vw, 8em)',
          }}
        >
          <div className='mb-12 flex flex-wrap items-end justify-between gap-4 lg:mb-16'>
            <p className='text-xs uppercase tracking-wider text-background/60'>
              Selected work · {total}
            </p>
            <p className='text-base text-background/60 lg:text-lg'>
              <span className='max-lg:hidden'>
                Hover a title, or click a card behind the stack
              </span>
              <span className='lg:hidden'>Swipe the card or use the arrows</span>
            </p>
          </div>

          {/* Both columns pin together (and the grid is a little taller than
              the list), so whichever title you are on, the deck stays beside it. */}
          <div className='grid gap-12 lg:grid-cols-12 lg:grid-rows-[minmax(calc(100vh+25vh),auto)] lg:gap-x-28 lg:gap-y-16'>
            {/* Titles (large screens) */}
            <ul className='max-lg:hidden lg:sticky lg:top-24 lg:col-span-5 lg:self-start'>
              {projects.map((project, index) => {
                const on = index === active;
                return (
                  <li
                    key={project.id}
                    className='relative border-t border-background/20 last:border-b'
                  >
                    <button
                      type='button'
                      aria-pressed={on}
                      onClick={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onPointerEnter={(event) =>
                        event.pointerType === 'mouse' && setActive(index)
                      }
                      className='group flex w-full items-baseline justify-between gap-6 py-3 text-start outline-none focus-visible:bg-background/10'
                    >
                      <span className='flex items-baseline gap-4'>
                        <span className='w-6 shrink-0 text-xs tabular-nums text-background/50'>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={cn(
                            'text-[clamp(1.35rem,2.2vw,2.4rem)] font-normal leading-[1.1] tracking-tight transition-[color,transform] duration-500 ease-out',
                            on
                              ? 'translate-x-2 text-background'
                              : 'text-background/35 group-hover:text-background/70',
                          )}
                        >
                          {project.title}
                        </span>
                      </span>
                      <span
                        className={cn(
                          'shrink-0 text-sm transition-colors duration-500',
                          on ? 'text-primary' : 'text-background/30',
                        )}
                      >
                        {project.role}
                      </span>
                    </button>
                    {on && (
                      <motion.span
                        layoutId='showcase-marker'
                        aria-hidden='true'
                        className='absolute -bottom-px left-0 h-px w-full bg-primary'
                        transition={spring}
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            {/* The deck */}
            <div className='lg:sticky lg:top-24 lg:col-span-7 lg:self-start'>
              <div
                ref={deckRef}
                className='relative mx-auto h-[max(24rem,min(34rem,120vw,calc(100vh-9rem)))] w-[min(100%,34rem)] pe-0 lg:me-0 lg:ms-auto [@media(min-width:640px)]:pe-24'
                style={{ perspective: 1400 }}
              >
                <div className='relative size-full'>
                  {projects.map((project, index) => (
                    <Card
                      key={project.id}
                      project={project}
                      index={index}
                      total={total}
                      offset={(index - active + total) % total}
                      onSelect={setActive}
                      tilt={tilt}
                      swipe={{ enabled: swipeEnabled, go }}
                    />
                  ))}
                </div>

                <motion.span
                  ref={pillRef}
                  aria-hidden='true'
                  className='pointer-events-none absolute left-0 top-0 z-20 whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-medium text-background opacity-0 transition-opacity duration-200'
                  style={{ x: pillX, y: pillY }}
                />
              </div>

              {/* Small screens: arrows + counter */}
              <div className='mt-10 flex items-center justify-between gap-4 lg:hidden'>
                <button
                  type='button'
                  onClick={() => go(-1)}
                  aria-label='Previous project'
                  className='grid size-12 place-items-center rounded-full border border-background/30 outline-none transition-colors hover:border-primary focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary'
                >
                  <MoveLeft className='size-5' strokeWidth={1.5} aria-hidden='true' />
                </button>
                <p
                  aria-live='polite'
                  className='text-center text-sm text-background/70'
                >
                  <span className='tabular-nums text-background'>
                    {String(active + 1).padStart(2, '0')} /{' '}
                    {String(total).padStart(2, '0')}
                  </span>
                  <span className='sr-only'>: {current.title}</span>
                </p>
                <button
                  type='button'
                  onClick={() => go(1)}
                  aria-label='Next project'
                  className='grid size-12 place-items-center rounded-full border border-background/30 outline-none transition-colors hover:border-primary focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary'
                >
                  <MoveRight className='size-5' strokeWidth={1.5} aria-hidden='true' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
