'use client';
// app/_layout/header/index.jsx

import { useRef } from 'react';

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ChevronDown, MoveDownRight } from 'lucide-react';
import Image from 'next/image';
import { styled } from 'styled-components';

import { ParallaxSlider } from '@/components';

import { AboutTab } from '../about-tab';
import { Disciplines } from '../disciplines';
import { slideUp } from './variants';

const ScrollIndicator = styled(motion.button)`
  position: absolute;
  bottom: calc(2rem - 20px);
  left: 50%;
  transform: translateX(-50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid hsl(0 0% 100%);
  background: hsl(0 0% 100% / 0.05);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  animation: blink 2s ease-in-out infinite;
  margin-top: 2rem;

  svg {
    color: hsl(0 0% 100%);
    animation: bounce 2s ease-in-out infinite;
  }

  &:hover {
    border-color: hsl(0 0% 100%);
    background: hsl(0 0% 100% / 0.15);
    transform: translateX(-50%) scale(1.1);
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(6px); }
  }

  /* phones: the hero already fits one screen and the dock sits down here */
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const spring = { stiffness: 80, damping: 18, mass: 0.5 };

const ticker = ['Full-Stack', 'Backend', 'Systems', 'Cloud', 'AI Agents', 'Containers'];

/** One line of the stacked name, sliding in from the right behind a mask. */
function NameLine({ children, delay, reduceMotion }) {
  return (
    <span className='block overflow-hidden pb-[0.06em]'>
      <motion.span
        className='block'
        initial={reduceMotion ? { opacity: 0 } : { x: '105%' }}
        animate={reduceMotion ? { opacity: 1 } : { x: 0 }}
        transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function MobileIntro({ reduceMotion }) {
  const base = 2.6;
  const rise = (delay) => ({
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1], delay },
  });

  return (
    <>
      <motion.p
        {...rise(base)}
        className='mb-3 flex items-center gap-2 text-xs uppercase tracking-wider text-white/80'
      >
        <MoveDownRight size={16} strokeWidth={1.5} aria-hidden='true' />
        Software Developer
      </motion.p>

      <h1 className='select-none text-[clamp(3.75rem,22vw,7rem)] font-normal leading-[0.9] tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)]'>
        <span className='sr-only'>Gautam Prabhu</span>
        <span aria-hidden='true'>
          <NameLine delay={base + 0.05} reduceMotion={reduceMotion}>
            Gautam
          </NameLine>
          <NameLine delay={base + 0.2} reduceMotion={reduceMotion}>
            Prabhu
          </NameLine>
        </span>
      </h1>

      <motion.div
        {...rise(base + 0.55)}
        className='mt-6 text-[1.3rem] font-medium leading-snug text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]'
      >
        <p>Full-Stack | Backend | Systems</p>
        <p className='text-base font-normal opacity-90'>
          Cloud, AI Agents &amp; Containers
        </p>
      </motion.div>

      <motion.div
        aria-hidden='true'
        {...rise(base + 0.75)}
        className='mt-6 select-none border-y border-white/30 py-2 text-xs uppercase tracking-wider text-white/85'
      >
        <ParallaxSlider repeat={4} baseVelocity={1.5}>
          <span className='pe-4'>
            {ticker.map((word) => (
              <span key={word} className='pe-4'>
                {word}
                <span className='ps-4 text-white/40'>—</span>
              </span>
            ))}
          </span>
        </ParallaxSlider>
      </motion.div>
    </>
  );
}

export function Header() {
  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  // Pointer position over the hero, -0.5 … 0.5; drives the layered depth.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, spring);
  const smoothY = useSpring(pointerY, spring);
  const nameX = useTransform(smoothX, [-0.5, 0.5], [18, -18]);

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType !== 'mouse') return;
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - left) / width - 0.5);
    pointerY.set((event.clientY - top) / height - 0.5);
  };
  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <motion.header
      ref={containerRef}
      className='relative h-screen overflow-hidden bg-secondary-foreground text-background max-md:h-svh'
      variants={slideUp}
      initial='initial'
      animate='enter'
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Background image: slowly pushes in as the page scrolls */}
      <motion.div
        className='absolute inset-0'
        style={reduceMotion ? undefined : { scale: photoScale }}
      >
        <Image
          src='/images/hero-profile.png'
          className='object-cover max-md:object-[24%_center]'
          fill={true}
          sizes='100vw'
          alt='Gautam Prabhu Personal Picture'
          priority
        />
      </motion.div>

      {/* Subtle Dark Overlay for Better Contrast */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40' />

      {/* Phones: a heavier bottom shade so the name stays readable */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent md:hidden' />

      {/* Phone composition: the name stacks and slides in, a ticker carries the
          disciplines. Laptop/desktop keep the layout below untouched. */}
      <div className='relative flex h-full flex-col justify-end px-6 pb-[calc(6.5rem+env(safe-area-inset-bottom))] pt-24 md:hidden'>
        <MobileIntro reduceMotion={reduceMotion} />
      </div>

      <div className='relative flex h-full flex-col justify-end gap-2 max-md:hidden md:flex-col-reverse md:justify-normal'>
        {/* Animated Name */}
        <motion.div className='select-none' style={reduceMotion ? undefined : { x: nameX }}>
          <h1 className='text-[max(9em,15vw)] font-normal tracking-tight'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Gautam Prabhu
                <span className='spacer text-muted-foreground/60'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </motion.div>

        {/* Subtitle Section */}
        <div className='md:ml-auto'>
          <div className='mx-10 max-md:mb-28 max-md:mt-12 md:mx-10 md:translate-x-[-340px]'>
            <div className='mb-4 text-black md:mb-20'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)] font-medium leading-snug text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]'>
              <span className='block'>Software Developer</span>
              <span className='block opacity-95'>Full-Stack | Backend | Systems</span>
              <span className='block text-[0.6em] font-normal opacity-90'>
                Cloud, AI Agents &amp; Containers
              </span>
            </h4>
          </div>
        </div>
      </div>

      {/* Layer: floating disciplines (desktop). Small screens get the same
          content inline, in the intro section. */}
      <motion.div
        className='absolute right-[6vw] top-[12%] z-10 hidden w-[min(27vw,23rem)] lg:block lg:[@media(max-height:760px)]:hidden'
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.2, ease: [0.33, 1, 0.68, 1] }}
      >
        <Disciplines variant='floating' pointerX={smoothX} pointerY={smoothY} />
      </motion.div>

      {/* Layer: the way to /about, a tab on the right edge, always visible */}
      <AboutTab />

      <ScrollIndicator
        style={{ opacity: scrollIndicatorOpacity }}
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.8 }}
        aria-label='Scroll down'
      >
        <ChevronDown size={28} strokeWidth={2} />
      </ScrollIndicator>
    </motion.header>
  );
}
