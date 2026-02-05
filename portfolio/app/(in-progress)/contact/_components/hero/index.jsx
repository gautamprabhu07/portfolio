'use client';
// app/(in-progress)/contact/_components/hero/index.jsx

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import { DecorativeElement, HeroSubtext, HeroTitle,  HeroWrapper  } from './hero.styled';

export function ContactHero() {
  return (
    <section className='bg-background text-foreground'>
      <HeroWrapper className='container'>
        <DecorativeElement
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className='flex items-center justify-center gap-2 mb-4'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <Sparkles size={28} className='text-muted-foreground' />
            </motion.div>
          </motion.div>
          
          <HeroTitle>Let&apos;s connect</HeroTitle>
          <HeroSubtext>
            I&apos;m open to internships, software roles, and meaningful project discussions.
          </HeroSubtext>
        </motion.div>
      </HeroWrapper>
    </section>
  );
}