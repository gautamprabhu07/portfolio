'use client';
// app/(in-progress)/about/_components/personal/index.jsx

import { useRef } from 'react';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import Balancer from 'react-wrap-balancer';

import { ParallaxFade } from '@/components';

import { Section, SectionLabel } from '../shared';

const lead =
  'I build end-to-end software systems with a focus on clean architecture, security, and scalability. Every line of code I write is intentional, maintainable, and production-ready.';

const words = lead.split(' ');

/** A word that darkens from muted to full colour as the paragraph is read. */
function FillWord({ word, progress, start, end, still }) {
  const opacity = useTransform(progress, [start, end], [0.16, 1]);
  return (
    <motion.span
      style={still ? undefined : { opacity }}
      className='me-[0.22em] inline-block'
    >
      {word}
    </motion.span>
  );
}

export function AboutPersonal() {
  const reduceMotion = useReducedMotion();
  const leadRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: leadRef,
    offset: ['start 0.85', 'end 0.45'],
  });

  return (
    <Section>
      <div className='grid gap-10 lg:grid-cols-12'>
        <SectionLabel className='lg:col-span-3'>Introduction</SectionLabel>

        <div className='lg:col-span-9'>
          <h2
            ref={leadRef}
            className='text-[clamp(1.6rem,3vw,3.5rem)] font-normal leading-[1.3] tracking-tight'
          >
            {words.map((word, index) => (
              <FillWord
                key={`${word}-${index}`}
                word={word}
                progress={scrollYProgress}
                start={index / words.length}
                end={Math.min(1, (index + 4) / words.length)}
                still={reduceMotion}
              />
            ))}
          </h2>

          <div className='mt-16 grid gap-8 text-base leading-relaxed text-muted-foreground md:grid-cols-2 md:gap-12 lg:text-lg'>
            <ParallaxFade>
              <Balancer as='p'>
                I enjoy working close to the system: understanding requirements,
                designing APIs, implementing authentication flows, and
                optimizing database queries. I am a fast learner, curious by
                nature, and comfortable adapting to new technologies and
                environments.
              </Balancer>
            </ParallaxFade>
            <ParallaxFade>
              <Balancer as='p'>
                Whether it&apos;s a workflow platform used by 500+ people, a
                containerized ERP backend on Kubernetes, microservices on
                Kafka, or a Linux container runtime written from scratch in C,
                I take ownership of the entire lifecycle.
              </Balancer>
            </ParallaxFade>
          </div>

          <ParallaxFade>
            <p className='mt-12 text-base text-foreground lg:text-lg'>
              Always learning. Always building.
            </p>
          </ParallaxFade>
        </div>
      </div>
    </Section>
  );
}
