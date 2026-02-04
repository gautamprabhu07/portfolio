'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

import { ParallaxFade } from '@/components';

import {
  PersonalWrapper,
  PersonalGrid,
  TextColumn,
  ImageColumn,
  ImageFrame,
  BodyText,
  HighlightText,
} from './personal.styled';

export function AboutPersonal() {
  return (
    <section className='bg-background text-foreground'>
      <PersonalWrapper className='container'>
        <PersonalGrid>
          <TextColumn>
            <ParallaxFade>
              <BodyText>
                <Balancer>
                  <HighlightText>I build end-to-end software systems</HighlightText> with a focus on{' '}
                  clean architecture, security, and scalability.
                </Balancer>
              </BodyText>
              <BodyText className='mt-6'>
                <Balancer>
                  I enjoy working close to the system—understanding requirements, designing APIs, and writing maintainable code.
                  I'm a fast learner, curious by nature, and comfortable adapting to new technologies and environments.
                </Balancer>
              </BodyText>
              <BodyText className='mt-8 font-medium'>
                Always learning. Always building.
              </BodyText>
            </ParallaxFade>
          </TextColumn>

          <ImageColumn>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <ImageFrame>
                  <Image
                    src='/images/about.png'
                    alt='About Gautam Prabhu'
                    fill
                    className='object-cover'
                    priority
                  />
                </ImageFrame>
              </motion.div>
            </motion.div>
          </ImageColumn>
        </PersonalGrid>
      </PersonalWrapper>
    </section>
  );
}
