'use client';
// app/_layout/header/index.jsx

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, MoveDownRight } from 'lucide-react';
import Image from 'next/image';
import { styled } from 'styled-components';

import { ParallaxSlider } from '@/components';

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

  @media screen and (max-width: 768px) {
    bottom: 2rem;
    width: 48px;
    height: 48px;
  }
`;

export function Header() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <motion.header
      ref={containerRef}
      className='relative h-screen overflow-hidden bg-secondary-foreground text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      {/* Background Image */}
      <Image
        src='/images/hero-profile.png'
        className='object-cover'
        fill={true}
        sizes='100vw'
        alt='Gautam Prabhu Personal Picture'
        priority
      />

      {/* Subtle Dark Overlay for Better Contrast */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40' />

      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        {/* Animated Name */}
        <div className='select-none'>
          <h1 className='text-[max(9em,15vw)] font-normal tracking-tight'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Gautam Prabhu
                <span className='spacer text-muted-foreground/60'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        {/* Subtitle Section */}
        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-10 md:translate-x-[-340px]'>
            <div className='mb-4 text-black md:mb-20'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)] font-medium leading-snug text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]'>
              <span className='block'>Aspiring Software Developer</span>
              <span className='block opacity-95'>Full-Stack | Backend | Systems</span>
            </h4>
          </div>
        </div>
      </div>

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