'use client';
// app/(in-progress)/about/_components/personal/index.jsx
import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

import {
  BodyText,
  HighlightText,
  ImageColumn,
  ImageFrame,
  PersonalGrid,
  PersonalWrapper,
  SectionLabel,
  StatCard,
  StatsGrid,
  TextColumn,
} from './personal.styled';

const stats = [
  { label: 'Projects Built', value: '15+' },
  { label: 'Technologies', value: '20+' },
  { label: 'Coffee Consumed', value: '∞' },
];

const reveal = {
  initial: { opacity: 0, y: 40 },
  open: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.1 * i,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
};

export function AboutPersonal() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section className='bg-background text-foreground' ref={containerRef}>
      <PersonalWrapper className='container'>
        <PersonalGrid>
          <TextColumn>
            <motion.div
              style={{ y: textY }}
              initial='initial'
              whileInView='open'
              viewport={{ once: true }}
            >
              <motion.div custom={0} variants={reveal}>
                <SectionLabel>About Me</SectionLabel>
              </motion.div>

              <motion.div custom={1} variants={reveal}>
                <BodyText>
                  <Balancer>
                    <HighlightText>I build end-to-end software systems</HighlightText> with a focus on{' '}
                    clean architecture, security, and scalability. Every line of code I write
                    is intentional, maintainable, and production-ready.
                  </Balancer>
                </BodyText>
              </motion.div>

              <motion.div custom={2} variants={reveal}>
                <BodyText className='mt-6'>
                  <Balancer>
                    I enjoy working close to the system—understanding requirements, designing APIs,
                    implementing authentication flows, and optimizing database queries.
                    I am a fast learner, curious by nature, and comfortable adapting to new
                    technologies and environments.
                  </Balancer>
                </BodyText>
              </motion.div>

              <motion.div custom={3} variants={reveal}>
                <BodyText className='mt-6'>
                  <Balancer>
                    Whether it's building an ERP platform, designing a recommendation system,
                    or deploying on university servers under tight deadlines, I take ownership
                    of the entire lifecycle.
                  </Balancer>
                </BodyText>
              </motion.div>

              <motion.div custom={4} variants={reveal}>
                <StatsGrid>
                  {stats.map((stat, index) => (
                    <StatCard
                      key={stat.label}
                      whileHover={{ y: -8, scale: 1.05 }}
                      transition={{ 
                        duration: 0.3, 
                        ease: [0.33, 1, 0.68, 1] 
                      }}
                    >
                      <div className='text-3xl font-bold mb-1' style={{ color: 'hsl(232 79% 59%)' }}>
                        {stat.value}
                      </div>
                      <div className='text-sm text-muted-foreground font-medium'>
                        {stat.label}
                      </div>
                    </StatCard>
                  ))}
                </StatsGrid>
              </motion.div>

              <motion.div custom={5} variants={reveal}>
                <BodyText className='mt-8 font-semibold text-muted-foreground italic'>
                  Always learning. Always building.
                </BodyText>
              </motion.div>
            </motion.div>
          </TextColumn>

          <ImageColumn>
            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1, 
                delay: 0.3, 
                ease: [0.33, 1, 0.68, 1] 
              }}
            >
              <ImageFrame
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.33, 1, 0.68, 1] 
                }}
              >
                <Image
                  src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
                  alt='Coding workspace'
                  fill
                  className='object-cover'
                  sizes='(max-width: 1024px) 100vw, 40vw'
                />
              </ImageFrame>
            </motion.div>
          </ImageColumn>
        </PersonalGrid>
      </PersonalWrapper>
    </section>
  );
}