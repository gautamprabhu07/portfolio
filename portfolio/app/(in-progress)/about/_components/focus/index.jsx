'use client';

import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';

import {
  FocusWrapper,
  FocusHeading,
  AnimatedDots,
  CardsGrid,
  FocusCard,
  CardTitle,
  CardDescription,
} from './focus.styled';

const cardVariants = {
  initial: { opacity: 0, y: 60 },
  open: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1 * i,
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        <CardsGrid>
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              custom={index}
              variants={cardVariants}
              initial='initial'
              whileInView='open'
              viewport={{ once: true }}
            >
              <FocusCard
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <CardTitle>{area.title}</CardTitle>
                <CardDescription>
                  <Balancer>{area.description}</Balancer>
                </CardDescription>
              </FocusCard>
            </motion.div>
          ))}
        </CardsGrid>
      </FocusWrapper>
    </section>
  );
}
