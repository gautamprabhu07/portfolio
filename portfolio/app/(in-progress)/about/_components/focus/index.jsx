'use client';
// app/(in-progress)/about/_components/focus/index.jsx

import { motion } from 'framer-motion';
import { Code, Layers, Target, Zap } from 'lucide-react';
import Balancer from 'react-wrap-balancer';

import {
  AnimatedDots,
  BackgroundGradient,
  CardDescription,
  CardIcon,
  CardsGrid,
  CardTitle,
  FocusCard,
  FocusHeading,
  FocusWrapper,
} from './focus.styled';

const cardVariants = {
  initial: { opacity: 0, y: 80, rotateX: -20 },
  open: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: 0.15 * i,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const dotVariants = {
  initial: { opacity: 0.3 },
  animate: (i) => ({
    opacity: [0.3, 1, 0.3],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      delay: i * 0.2,
      ease: 'easeInOut',
    },
  }),
};

const iconMap = {
  0: Code,
  1: Layers,
  2: Zap,
};

const focusAreas = [
  {
    title: 'Backend & Systems',
    description:
      'I design and implement secure backend systems, REST APIs, authentication flows, and role-based access with a focus on correctness, scalability, and maintainability.',
  },
  {
    title: 'Full-Stack Applications',
    description:
      'I build full-stack applications using modern frameworks, handling everything from backend logic and databases to responsive frontend interfaces and deployments.',
  },
  {
    title: 'End-to-End Ownership',
    description:
      'From understanding requirements to deployment and iteration, I take ownership of systems and deliver complete, production-ready software solutions.',
  },
];

export function AboutFocus() {
  return (
    <section className='bg-foreground text-background'>
      <FocusWrapper className='container'>
        <BackgroundGradient />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className='flex items-center gap-3'>
            <motion.div
              animate={{ 
                scale: [1, 1.15, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <Target size={40} strokeWidth={2.5} style={{ color: 'hsl(232 79% 59%)' }} />
            </motion.div>
            <FocusHeading>
              What I Focus On
              <AnimatedDots>
                <motion.span
                  custom={0}
                  variants={dotVariants}
                  initial='initial'
                  animate='animate'
                >
                  .
                </motion.span>
                <motion.span
                  custom={1}
                  variants={dotVariants}
                  initial='initial'
                  animate='animate'
                >
                  .
                </motion.span>
                <motion.span
                  custom={2}
                  variants={dotVariants}
                  initial='initial'
                  animate='animate'
                >
                  .
                </motion.span>
              </AnimatedDots>
            </FocusHeading>
          </div>
        </motion.div>

        <CardsGrid>
          {focusAreas.map((area, index) => {
            const IconComponent = iconMap[index];
            return (
              <motion.div
                key={area.title}
                custom={index}
                variants={cardVariants}
                initial='initial'
                whileInView='open'
                viewport={{ once: true }}
                style={{ perspective: '1000px' }}
              >
                <FocusCard
                  whileHover={{ 
                    y: -15,
                    rotateX: 8,
                    rotateY: index === 1 ? 0 : index === 0 ? -5 : 5,
                    scale: 1.03
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <CardIcon>
                    <IconComponent size={28} strokeWidth={2.5} />
                  </CardIcon>
                  
                  <CardTitle>{area.title}</CardTitle>
                  <CardDescription>
                    <Balancer>{area.description}</Balancer>
                  </CardDescription>

                  <motion.div
                    className='absolute bottom-0 left-0 right-0 h-1 rounded-full'
                    style={{ 
                      background: 'hsl(232 79% 59%)',
                      transformOrigin: 'left',
                    }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </FocusCard>
              </motion.div>
            );
          })}
        </CardsGrid>
      </FocusWrapper>
    </section>
  );
}