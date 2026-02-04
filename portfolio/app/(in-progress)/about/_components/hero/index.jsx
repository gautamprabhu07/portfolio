'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Globe } from 'lucide-react';

import { ParallaxReveal, MagneticButton } from '@/components';

import { HeroWrapper, HeroTitle } from './hero.styled';

const phrase = 'Engineering software that\'s practical, maintainable, and production-ready.';
const subLine = 'Full-stack developer with a strong backend and systems mindset.';

export function AboutHero() {
  const { scrollYProgress } = useScroll({
    offset: ['start start', 'end end'],
  });

  const transformX = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section className='bg-background text-foreground'>
      <HeroWrapper className='container'>
        <div className='basis-full'>
          <HeroTitle>
            <ParallaxReveal paragraph={phrase} />
          </HeroTitle>
          <motion.p
            className='text-muted-foreground mt-6 max-w-2xl'
            style={{ fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.5 }}
          >
            {subLine}
          </motion.p>
        </div>

        <motion.div
          className='relative w-full mt-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.3 }}
        >
          <div className='relative w-full'>
            <div className='h-[1px] bg-muted-foreground' />
            <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
              <motion.div style={{ x: transformX }}>
                <Link href='/contact' passHref>
                  <MagneticButton variant='primary' size='lg' className='aspect-square !p-6'>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      <Globe size={50} strokeWidth={2} />
                    </motion.div>
                  </MagneticButton>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </HeroWrapper>
    </section>
  );
}
