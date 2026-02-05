'use client';
// app/(in-progress)/about/_components/hero/index.jsx

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { MagneticButton } from '@/components';

import { 
  BackgroundPattern,
  CTAWrapper,
  FloatingOrb,
  HeroDescription,
  HeroGrid,
  HeroSubtitle,
  HeroTitle,
  HeroWrapper,
  ImageColumn,
  ImageOverlay,
  ImageWrapper,
  TextColumn,
} from './hero.styled';

export function AboutHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section 
      ref={containerRef}
      className='bg-background text-foreground'
      style={{ opacity }}
    >
      <HeroWrapper className='container'>
        <BackgroundPattern />
        <FloatingOrb 
          $top="20%" 
          $left="10%"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <FloatingOrb 
          $top="60%" 
          $right="15%"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        <HeroGrid>
          <TextColumn>
            <motion.div
              style={{ y: textY }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className='flex items-center gap-2 mb-4'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  <Sparkles size={24} className='text-muted-foreground' />
                </motion.div>
                <HeroSubtitle>Software Developer</HeroSubtitle>
              </motion.div>

              <HeroTitle>
                Engineering software that is{' '}
                <motion.span 
                  className='italic'
                  style={{
                    color: 'hsl(232 79% 59%)',
                  }}
                >
                  practical
                </motion.span>
                , maintainable, and production-ready
              </HeroTitle>

              <HeroDescription>
                I build end-to-end systems with a strong backend and systems mindset.
                From REST APIs to responsive frontends, I focus on clean architecture,
                security, and scalability.
              </HeroDescription>

              <CTAWrapper>
                <Link href='/contact' passHref>
                  <MagneticButton variant='primary' size='lg'>
                    <span className='flex items-center gap-2'>
                      Get in touch
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      >
                        <ArrowRight size={20} />
                      </motion.div>
                    </span>
                  </MagneticButton>
                </Link>
              </CTAWrapper>
            </motion.div>
          </TextColumn>

          <ImageColumn>
            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <ImageWrapper
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src='/images/about-1.png'
                  alt='Gautam Prabhu'
                  fill
                  className='object-cover'
                  priority
                />
                <ImageOverlay>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className='text-white text-center'
                  >
                    <p className='text-lg font-semibold mb-1'>Gautam Prabhu</p>
                    <p className='text-sm opacity-90'>Full-Stack Developer</p>
                  </motion.div>
                </ImageOverlay>
              </ImageWrapper>
            </motion.div>
          </ImageColumn>
        </HeroGrid>
      </HeroWrapper>
    </motion.section>
  );
}