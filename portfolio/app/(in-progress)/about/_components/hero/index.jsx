'use client';
// app/(in-progress)/about/_components/hero/index.jsx

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, MoveDownRight } from 'lucide-react';
import Image from 'next/image';

import { 
  BackgroundOverlay,
  HeroGrid,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  ImageColumn,
  ImageWrapper,
  ScrollIndicator,
  TextColumn,
} from './hero.styled';

export function AboutHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <HeroSection ref={containerRef}>
      <BackgroundOverlay />
      
      <div className='container' style={{ position: 'relative', zIndex: 1 }}>
        <HeroGrid>
          <TextColumn>
            <motion.div
              style={{ y: textY, opacity }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.33, 1, 0.68, 1],
                delay: 0.2 
              }}
            >
              <motion.div
                className='mb-6 flex items-center gap-3'
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <MoveDownRight size={24} strokeWidth={1.5} className='text-background' />
                <HeroSubtitle>Software Developer</HeroSubtitle>
              </motion.div>

              <HeroTitle>
                Engineering software that&apos;s{' '}
                <span className='italic' style={{ color: 'hsl(232 79% 59%)' }}>
                  practical
                </span>
                , maintainable, and production-ready
              </HeroTitle>
            </motion.div>
          </TextColumn>

          <ImageColumn>
            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1, 
                delay: 0.5, 
                ease: [0.33, 1, 0.68, 1] 
              }}
            >
              <ImageWrapper>
                <Image
                  src='/images/about-1.png'
                  alt='Gautam Prabhu'
                  fill
                  className='object-cover'
                  priority
                  sizes='(max-width: 1024px) 100vw, 50vw'
                />
              </ImageWrapper>
            </motion.div>
          </ImageColumn>
        </HeroGrid>
      </div>

      <ScrollIndicator
        style={{ opacity: scrollIndicatorOpacity }}
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        aria-label='Scroll down'
      >
        <ChevronDown size={28} strokeWidth={2} />
      </ScrollIndicator>
    </HeroSection>
  );
}