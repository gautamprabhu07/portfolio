'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
import Image from 'next/image';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

export function Header() {
  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-secondary-foreground text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <Image
        src='/images/hero-profile.png'
        className='object-cover'
        fill={true}
        sizes='100vw'
        alt='Gautam Prabhu Personal Picture'
        priority
      />

      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className='text-[max(9em,15vw)]'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Gautam Prabhu
                <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:ml-10 md:mr-10 md:-translate-x-[340px]'>
            <div className='mb-4 md:mb-20 text-gray-900'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)] text-white font-semibold drop-shadow-[0_8px_24px_rgba(0,0,0,0.95)]'>
              <span className='block'>Aspiring Software Developer</span>
              <span className='block'>Full-Stack | Backend | Systems</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}