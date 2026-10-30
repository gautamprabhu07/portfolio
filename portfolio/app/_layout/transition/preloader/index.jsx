'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';

import { Center } from '@/components';
import { preloaderWords } from '@/data';
import { useDimensions, useTimeOut } from '@/hooks';

import { fade, slideUp } from './variants';

const MotionComponent = motion(Center);

// The curtain is always the opposite of the page it reveals: white over the
// dark pages (About, Contact), the site's near-black over the white Home page.
const WHITE = '#dcdcd7';
const DARK = '#18181b';

/**
 * @param {Object} props
 * @param {boolean} props.isFirstLoad
 * @param {string} props.pageName
 * @param {boolean} [props.onLightPage] the page being revealed is light
 */
export function Preloader({ isFirstLoad, pageName, onLightPage = false }) {
  const PANEL = onLightPage ? DARK : WHITE;
  const LABEL = onLightPage ? WHITE : DARK;
  const [index, setIndex] = useState(0);
  const { width } = useDimensions();

  useTimeOut({
    callback: () => {
      if (isFirstLoad) {
        setIndex(prevIndex => (prevIndex + 1) % preloaderWords.length);
      }
    },
    duration: index === 0 ? 500 : 250,
    deps: [index],
  });

  const displayText = isFirstLoad ? preloaderWords[index] : pageName;

  return (
    <MotionComponent
      className='fixed z-50 h-screen w-screen cursor-wait'
      style={{ backgroundColor: PANEL }}
      variants={slideUp}
      initial='initial'
      exit='exit'
    >
      {width > 0 ? (
        <>
          <MotionComponent
            className='text-3xl md:text-4xl'
            style={{ color: LABEL }}
            variants={fade}
            initial='initial'
            animate='enter'
          >
            <Dot size={48} className='me-3' />
            <p>{displayText}</p>
          </MotionComponent>
          {/* Curved lower lip. A static shape that rides the panel's transform,
              so every page lifts with the same curve, even on a busy main thread. */}
          <span
            aria-hidden='true'
            className='absolute left-0 top-full block h-[clamp(5rem,16vh,10rem)] w-full'
            style={{
              backgroundColor: PANEL,
              borderBottomLeftRadius: '50% 100%',
              borderBottomRightRadius: '50% 100%',
            }}
          />
        </>
      ) : null}
    </MotionComponent>
  );
}
