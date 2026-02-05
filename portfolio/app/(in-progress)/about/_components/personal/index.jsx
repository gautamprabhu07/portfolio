'use client';
// app/(in-progress)/about/_components/personal/index.jsx
import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

import {
  BodyText,
  FloatingShape,
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

export function AboutPersonal() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section className='bg-background text-foreground' ref={containerRef}>
      <PersonalWrapper className='container'>
        <FloatingShape 
          $top="10%" 
          $left="5%"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <PersonalGrid>
          <TextColumn>
            <motion.div
              style={{ y: textY }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionLabel
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                About Me
              </SectionLabel>

              <BodyText>
                <Balancer>
                  <HighlightText>I build end-to-end software systems</HighlightText> with a focus on{' '}
                  clean architecture, security, and scalability. Every line of code I write
                  is intentional, maintainable, and production-ready.
                </Balancer>
              </BodyText>

              <BodyText className='mt-6'>
                <Balancer>
                  I enjoy working close to the system—understanding requirements, designing APIs,
                  implementing authentication flows, and optimizing database queries.
                  I am a fast learner, curious by nature, and comfortable adapting to new
                  technologies and environments.
                </Balancer>
              </BodyText>

              <BodyText className='mt-6'>
                <Balancer>
                  Whether it is building an ERP platform, designing a recommendation system,
                  or deploying on university servers under tight deadlines, I take ownership
                  of the entire lifecycle.
                </Balancer>
              </BodyText>

              <StatsGrid>
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <StatCard
                      whileHover={{ y: -5, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className='text-3xl font-bold mb-1' style={{ color: 'hsl(232 79% 59%)' }}>
                        {stat.value}
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        {stat.label}
                      </div>
                    </StatCard>
                  </motion.div>
                ))}
              </StatsGrid>

              <BodyText className='mt-8 font-semibold text-muted-foreground'>
                Always learning. Always building.
              </BodyText>
            </motion.div>
          </TextColumn>

          <ImageColumn>
            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <ImageFrame
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
                  alt='Coding workspace'
                  fill
                  className='object-cover'
                />
                <motion.div 
                  className='absolute inset-0 bg-gradient-to-br'
                  style={{
                    backgroundImage: 'linear-gradient(135deg, hsl(232 79% 59% / 0.08) 0%, transparent 50%, hsl(192 3% 90% / 0.1) 100%)',
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </ImageFrame>
            </motion.div>
          </ImageColumn>
        </PersonalGrid>
      </PersonalWrapper>
    </section>
  );
}