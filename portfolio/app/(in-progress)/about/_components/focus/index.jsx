'use client';
// app/(in-progress)/about/_components/focus/index.jsx

import { motion } from 'framer-motion';
import { Cpu, Layers, Server } from 'lucide-react';

import {
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
  initial: { opacity: 0, y: 40 },
  open: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.12 * i,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
};

const focusAreas = [
  {
    icon: Server,
    title: 'Backend Systems',
    description:
      'Designing resilient APIs, authentication flows, and data models that scale with real-world constraints.',
  },
  {
    icon: Layers,
    title: 'Product Engineering',
    description:
      'Bridging UX and implementation details to ship interfaces that feel fast, clean, and reliable.',
  },
  {
    icon: Cpu,
    title: 'Cloud & DevOps',
    description:
      'Deploying and maintaining services with observability, CI/CD workflows, and production readiness in mind.',
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
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        >
          <FocusHeading>What I focus on</FocusHeading>
        </motion.div>

        <CardsGrid>
          {focusAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={area.title}
                custom={index}
                variants={cardVariants}
                initial='initial'
                whileInView='open'
                viewport={{ once: true }}
              >
                <FocusCard
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                >
                  <CardIcon>
                    <IconComponent size={28} strokeWidth={1.5} />
                  </CardIcon>
                  <CardTitle>{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </FocusCard>
              </motion.div>
            );
          })}
        </CardsGrid>
      </FocusWrapper>
    </section>
  );
}