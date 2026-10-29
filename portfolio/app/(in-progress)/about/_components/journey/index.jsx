'use client';
// app/(in-progress)/about/_components/journey/index.jsx

import { useEffect, useRef, useState } from 'react';

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';

import { MagneticButton } from '@/components';
import { cn } from '@/utils';

import { chapters } from './chapters';
import { useDesktopMotion } from '../shared/use-desktop-motion';

const easing = [0.33, 1, 0.68, 1];

function Panel({ chapter, index, pinned }) {
  const { mark, kind, title, subtitle, dates, notes } = chapter;
  const isNow = kind === 'Now';

  return (
    <motion.li
      className={cn(
        'group relative flex shrink-0 flex-col justify-center border-background/15',
        pinned
          ? 'h-full w-[min(78vw,1040px)] border-s px-[clamp(2rem,4vw,5rem)]'
          : 'border-t py-14',
      )}
      initial={pinned ? false : { opacity: 0, y: 30 }}
      whileInView={pinned ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, ease: easing }}
    >
      <p className='text-xs uppercase tracking-wider text-background/50'>
        Chapter {String(index + 1).padStart(2, '0')} · {kind}
        {dates ? ` · ${dates}` : ''}
      </p>

      <p
        aria-hidden='true'
        className='my-4 select-none text-[clamp(4.5rem,min(13vw,24vh),13rem)] font-normal leading-none tracking-tight text-transparent transition-[-webkit-text-stroke-color] duration-500 [-webkit-text-stroke:1px_hsl(var(--background)/0.35)] group-hover:[-webkit-text-stroke-color:hsl(var(--primary))]'
      >
        {mark}
      </p>

      <h3 className='max-w-[22ch] text-[clamp(1.75rem,3.1vw,3.5rem)] font-normal leading-[1.1] tracking-tight'>
        {title}
      </h3>
      {subtitle && (
        <p className='mt-3 text-base text-background/70 lg:text-lg'>
          {subtitle}
        </p>
      )}

      {notes && (
        <ul
          className={cn(
            'mt-8 grid gap-x-10 gap-y-4 text-base leading-relaxed text-background/65 lg:text-lg',
            notes.length > 2 && 'md:grid-cols-2',
          )}
        >
          {notes.map((note) => (
            <li
              key={note}
              className='relative ps-5 before:absolute before:start-0 before:top-[0.75em] before:h-px before:w-3 before:bg-background/60'
            >
              {note}
            </li>
          ))}
        </ul>
      )}

      {isNow && (
        <a
          href='mailto:gautamprabhumit@gmail.com'
          className='mt-10 inline-block self-start'
        >
          <MagneticButton variant='primary' size='lg'>
            Get in touch
          </MagneticButton>
        </a>
      )}
    </motion.li>
  );
}

export function AboutJourney() {
  const pinned = useDesktopMotion();
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    if (!pinned) return undefined;
    const measure = () => {
      const track = trackRef.current;
      if (track) setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(trackRef.current);
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [pinned]);

  const x = useTransform(scrollYProgress, (value) => -value * distance);
  const ghostX = useTransform(scrollYProgress, (value) => -value * distance * 0.4);

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    setActive(Math.min(chapters.length - 1, Math.round(value * (chapters.length - 1))));
  });

  return (
    <section
      ref={sectionRef}
      aria-label='Journey'
      className='relative bg-foreground text-background'
      style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div
        className={cn(
          'relative',
          pinned ? 'sticky top-0 h-screen overflow-hidden' : 'container',
        )}
      >
        {pinned && (
          <motion.p
            aria-hidden='true'
            style={{ x: ghostX }}
            className='pointer-events-none absolute bottom-[-0.18em] start-0 select-none whitespace-nowrap text-[32vw] font-normal leading-none tracking-tight text-background/[0.04]'
          >
            Journey — Journey — Journey
          </motion.p>
        )}

        <div
          className={cn(
            'absolute inset-x-0 top-0 z-10 flex items-center justify-between',
            !pinned && 'hidden',
          )}
          style={{ padding: 'clamp(5em, 11vh, 7em) clamp(2.5em, 4vw, 8em) 0' }}
        >
          <p className='text-xs uppercase tracking-wider text-background/50'>
            Journey
            <span className='ms-6 text-background/30'>Scroll to travel →</span>
          </p>
        </div>

        {!pinned && (
          <p
            className='text-xs uppercase tracking-wider text-background/50'
            style={{ paddingBlock: 'clamp(4em, 9vh, 7em) 1.5rem', paddingInline: 'clamp(2.5em, 4vw, 8em)' }}
          >
            Journey
          </p>
        )}

        <motion.ol
          ref={trackRef}
          style={pinned ? { x } : undefined}
          className={cn(
            'relative flex',
            pinned
              ? 'h-full w-max flex-row ps-[clamp(2.5em,4vw,8em)]'
              : 'flex-col',
          )}
        >
          {chapters.map((chapter, index) => (
            <Panel
              key={`${chapter.id}-${pinned}`}
              chapter={chapter}
              index={index}
              pinned={pinned}
            />
          ))}
        </motion.ol>

        {pinned && (
          <div
            className='absolute inset-x-0 bottom-0 z-10'
            style={{ padding: '0 clamp(2.5em, 4vw, 8em) clamp(2em, 5vh, 3.5em)' }}
          >
            <div className='relative h-px bg-background/20'>
              <motion.div
                className='absolute inset-y-0 start-0 h-px w-full origin-left bg-primary'
                style={{ scaleX: scrollYProgress }}
              />
              {chapters.map(({ id }, index) => (
                <span
                  key={id}
                  aria-hidden='true'
                  className={cn(
                    'absolute top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500',
                    index <= active
                      ? 'scale-125 bg-primary'
                      : 'scale-100 bg-foreground ring-1 ring-background/30',
                  )}
                  style={{ left: `${(index / (chapters.length - 1)) * 100}%` }}
                />
              ))}
            </div>
            <ol className='relative mt-4 h-4 text-xs uppercase tracking-wider'>
              {chapters.map(({ id, tick }, index) => {
                const fraction = index / (chapters.length - 1);
                return (
                  <li
                    key={id}
                    aria-current={index === active ? 'step' : undefined}
                    className={cn(
                      'absolute whitespace-nowrap transition-colors duration-500',
                      index === active ? 'text-background' : 'text-background/40',
                    )}
                    style={{
                      left: `${fraction * 100}%`,
                      transform: `translateX(-${fraction * 100}%)`,
                    }}
                  >
                    {tick}
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}
