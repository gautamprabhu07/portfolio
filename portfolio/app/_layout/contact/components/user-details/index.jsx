'use client';

import { motion } from 'framer-motion';
import { ArrowDownLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { MagneticButton } from '@/components';

import { Container, ImageWrapper, MainTitle, Row } from './index.styled';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  return (
    <Container>
      <Row>
        <div className='flex items-center gap-8'>
          <ImageWrapper>
            <Image
              src='/images/contact-profile.png'
              className='rounded-full object-cover'
              fill={true}
              alt='Gautam Prabhu Profile Picture'
            />
          </ImageWrapper>
          <MainTitle>Let's connect</MainTitle>
        </div>
      </Row>

      <Row>
        <div className='relative w-full'>
          <div className='h-[1px] bg-muted-foreground' />
          <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
            <motion.div style={{ x: transformX }}>
              <Link href='/contact' passHref>
                <MagneticButton variant='primary' size='lg'>
                  Get in touch
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </Row>

      <Row>
        <div className='flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:gap-16'>
          <div className='relative'>
            <a href='mailto:gautamprabhumit@gmail.com'>
              <MagneticButton
                variant='outline'
                size='md'
                className='border-muted-foreground whitespace-nowrap w-full lg:w-[20pc] flex items-center justify-center'
              >
                gautamprabhumit@gmail.com
              </MagneticButton>
            </a>
          </div>
          <div className='relative'>
            <a href='tel:+918073870925'>
              <MagneticButton
                variant='outline'
                size='md'
                className='border-muted-foreground px-6 flex items-center justify-center'
              >
                +91 80738 70925
              </MagneticButton>
            </a>
          </div>
        </div>
      </Row>
    </Container>
  );
}
