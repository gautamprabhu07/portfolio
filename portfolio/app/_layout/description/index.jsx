'use client';
// app/_layout/description/index.jsx

import Balancer from 'react-wrap-balancer';

import { ParallaxFade, ParallaxReveal } from '@/components';

import { DisciplineIndex, Disciplines } from '../disciplines';

const phrase =
  'I build and ship end to end: a workflow platform used by 500+ people, a containerized ERP backend on Kubernetes, microservices on Kafka, an LLM multi-agent system, an explainable credit-risk ML service, and a Linux container runtime written from scratch in C.';

export function Description() {
  return (
    <article className='container relative'>
      <div
        style={{
          paddingBlock: 'clamp(5em, 11vh, 11em) clamp(5em, 10vh, 9em)',
          paddingInline: 'clamp(2.5em, 4vw, 8em)',
        }}
      >
        <div className='flex flex-wrap items-start justify-between gap-10 lg:flex-nowrap'>
          <h4 className='basis-full text-[clamp(1.4em,2.1vw,2.8em)] font-normal leading-normal lg:basis-9/12'>
            <ParallaxReveal paragraph={phrase} />
          </h4>

          <div className='basis-full lg:basis-3/12'>
            <ParallaxFade>
              <Balancer
                as='p'
                className='mt-2 text-base leading-relaxed text-muted-foreground lg:text-lg'
              >
                Computer Science student at Manipal Institute of Technology,
                CGPA 8.58. Seeking an internship and open to hire.
              </Balancer>
            </ParallaxFade>
          </div>
        </div>

        {/* Phones: the disciplines as an openable index */}
        <div className='mt-14 md:hidden'>
          <DisciplineIndex />
        </div>

        {/* Tablets and up: the disciplines, inline below the hero */}
        <div className='mt-14 max-md:hidden'>
          <Disciplines variant='inline' />
        </div>
      </div>
    </article>
  );
}
