'use client';
// app/(in-progress)/contact/_components/hero/index.jsx

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Dot, MoveDownRight } from 'lucide-react';
import Link from 'next/link';

import { Center, MagneticButton } from '@/components';

import { BackgroundOverlay, HeroSection, HeroSubtext, HeroTitle, HeroWrapper, NavLinks, ScrollIndicator, SubtitleGroup } from './hero.styled';

const slideUp = {
  initial: { y: 300 },
  enter: {
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.2,
    },
  },
};

export function ContactHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const navOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 0.6,
      behavior: 'smooth',
    });
  };

  return (
    <HeroSection ref={containerRef} className='bg-secondary-foreground text-background'>
      <BackgroundOverlay />
      
      <NavLinks style={{ opacity: navOpacity }}>
        <li className='group'>
          <Link href='/' passHref>
            <MagneticButton>
              <span className='text-base capitalize font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'>home</span>
              <Center>
                <Dot className='scale-0 transition-transform duration-200 ease-in-expo group-hover:scale-100' />
              </Center>
            </MagneticButton>
          </Link>
        </li>
        <li className='group'>
          <Link href='/about' passHref>
            <MagneticButton>
              <span className='text-base capitalize font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'>about</span>
              <Center>
                <Dot className='scale-0 transition-transform duration-200 ease-in-expo group-hover:scale-100' />
              </Center>
            </MagneticButton>
          </Link>
        </li>
        <li className='group'>
          <Link href='https://drive.google.com/file/d/1nG8AQQzgXTBe1XXLicoPAjkyQkJe5ZH-/view?usp=drivesdk' target='_blank' rel='noopener noreferrer' passHref>
            <MagneticButton>
              <span className='text-base capitalize font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'>resume</span>
              <Center>
                <Dot className='scale-0 transition-transform duration-200 ease-in-expo group-hover:scale-100' />
              </Center>
            </MagneticButton>
          </Link>
        </li>
      </NavLinks>

      <HeroWrapper className='container'>
        <motion.div
          variants={slideUp}
          initial='initial'
          animate='enter'
        >
          <SubtitleGroup>
            <MoveDownRight size={28} strokeWidth={1.25} />
            <h4>
              <span>Get in Touch</span>
              <span>Let&apos;s Build Something Great</span>
            </h4>
          </SubtitleGroup>
          
          <HeroTitle>Let&apos;s connect</HeroTitle>
          
          <HeroSubtext>
            I&apos;m open to internships, software roles, and meaningful project discussions.
            Available to start immediately.
          </HeroSubtext>
        </motion.div>
      </HeroWrapper>

      <ScrollIndicator
        style={{ opacity: scrollIndicatorOpacity }}
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        aria-label='Scroll down'
      >
        <ChevronDown size={28} strokeWidth={2} />
      </ScrollIndicator>
    </HeroSection>
  );
}