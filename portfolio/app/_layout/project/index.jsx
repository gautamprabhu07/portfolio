'use client';
// app/_layout/project/index.jsx

import { useRef } from 'react';

import { motion, useReducedMotion } from 'framer-motion';

import { projectScreens } from '@/data';
import { useProjectSlider } from '@/hooks';

import { ProjectSlider } from './slider';

// Row heights differ so the three rows do not read as one repeated strip.
const rowHeights = [
  'max(10.5rem, 20vw)',
  'max(9rem, 16.5vw)',
  'max(11.5rem, 22vw)',
];

export function Project() {
  const reduceMotion = useReducedMotion();
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const { transformX1, transformX2, transformY } =
    useProjectSlider(containerRef);
  // Neighbouring rows travel in opposite directions.
  const rowX = [transformX2, transformX1, transformX2];

  return (
    <section ref={containerRef} className='relative z-10 mt-14'>
      <div
        className='container mb-8 flex flex-wrap items-end justify-between gap-4'
        style={{ paddingInline: 'clamp(2.5em, 4vw, 8em)' }}
      >
        <p className='text-xs uppercase tracking-wider text-muted-foreground'>
          Screens from the projects
        </p>
        <p className='text-base text-muted-foreground lg:text-lg'>
          Scroll and the rows slide past
        </p>
      </div>
      <div className='grid items-center'>
        <div className='bg-background'>
          {projectScreens.map((row, index) => (
            <motion.div
              key={row[0].src}
              className='mb-10 flex w-max gap-6 md:gap-10'
              style={{
                '--row-h': rowHeights[index],
                x: reduceMotion ? 0 : rowX[index],
              }}
            >
              {row.map((screen) => (
                <ProjectSlider key={screen.src} {...screen} />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          className='w-screen bg-background'
          style={{
            height: transformY,
            borderRadius: '0 0 50% 50%',
          }}
        />
      </div>
    </section>
  );
}