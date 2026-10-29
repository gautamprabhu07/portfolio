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
  const { width, height } = useDimensions();

  useTimeOut({
    callback: () => {
      if (isFirstLoad) {
        setIndex(prevIndex => (prevIndex + 1) % preloaderWords.length);
      }
    },
    duration: index === 0 ? 500 : 250,
    deps: [index],
  });

  const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${
    height + 300
  } 0 ${height}  L0 0`;
  const targetPath = `M0 0 L${width} 0 L${width} ${height} Q${
    width / 2
  } ${height} 0 ${height}  L0 0`;

  /** @type {import('framer-motion').Variants} */
  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

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
          <motion.svg className='absolute top-0 -z-10 h-[calc(100%+300px)] w-full'>
            <motion.path
              fill={PANEL}
              variants={curve}
              initial='initial'
              exit='exit'
            />
          </motion.svg>
        </>
      ) : null}
    </MotionComponent>
  );
}
