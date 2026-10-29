'use client';
// app/_layout/description/index.jsx

import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { ParallaxFade, ParallaxReveal } from '@/components';
import { nowItems } from '@/data';

import { Disciplines } from '../disciplines';

const phrase =
  'I build and ship end to end: a workflow platform used by 500+ people, a containerized ERP backend on Kubernetes, microservices on Kafka, an LLM multi-agent system, an explainable credit-risk ML service, and a Linux container runtime written from scratch in C.';

export function Description() {
  return (
    <article className='container relative'>
      <div
        style={{
          paddingBlock: 'clamp(5em, 11vh, 11em) clamp(4em, 8vh, 8em)',
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

        {/* Small screens: the disciplines, inline */}
        <div className='mt-14 lg:hidden lg:[@media(max-height:760px)]:block'>
          <Disciplines variant='inline' />
        </div>

        {/* What is happening right now */}
        <ParallaxFade>
          <div className='mt-16 lg:mt-24'>
            <p className='mb-5 flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground'>
              <span
                aria-hidden='true'
                className='size-2 rounded-full bg-primary'
              />
              Right now
            </p>
            <ul>
              {nowItems.map(({ title, detail, meta, href }) => (
                <li
                  key={title}
                  className='flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-t border-border py-5 last:border-b'
                >
                  <div>
                    <h5 className='text-xl tracking-tight lg:text-2xl'>
                      {href ? (
                        <a
                          href={href}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none'
                        >
                          {title}
                          <span className='sr-only'> (opens in a new tab)</span>
                          <span aria-hidden='true' className='ms-2 text-muted-foreground'>
                            ↗
                          </span>
                        </a>
                      ) : (
                        title
                      )}
                    </h5>
                    <p className='mt-1 text-base text-muted-foreground'>
                      {detail}
                    </p>
                  </div>
                  <p className='text-sm text-muted-foreground'>{meta}</p>
                </li>
              ))}
            </ul>
          </div>
        </ParallaxFade>

        {/* Second, bigger route to /about */}
        <ParallaxFade>
          <div className='mt-16 lg:mt-24'>
            <Link
              href='/about'
              className='group relative flex flex-wrap items-center justify-between gap-x-10 gap-y-6 overflow-hidden border-y border-border py-8 outline-none transition-colors duration-500 focus-visible:bg-muted/60 lg:py-12'
            >
              <span
                aria-hidden='true'
                className='absolute inset-0 translate-y-full bg-foreground transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0'
              />
              <span className='relative'>
                <span className='mb-3 block text-xs uppercase tracking-wider text-muted-foreground transition-colors duration-500 group-hover:text-background/60'>
                  The next step
                </span>
                <span className='block text-[clamp(2.5rem,7vw,8rem)] font-normal leading-[1.05] tracking-tight transition-colors duration-500 group-hover:text-background'>
                  The story so far
                </span>
              </span>

              <span className='relative flex items-center gap-8 transition-colors duration-500 group-hover:text-background'>
                <Balancer
                  as='span'
                  className='block max-w-xs text-base leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-background/70 lg:text-lg'
                >
                  From school to three internships, travelled sideways, plus
                  the full toolkit and the builds behind it.
                </Balancer>
                <span className='grid size-16 shrink-0 place-items-center rounded-full bg-primary text-background transition-transform duration-500 ease-out group-hover:scale-110 lg:size-24'>
                  <MoveUpRight
                    aria-hidden='true'
                    className='size-7 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:size-9'
                    strokeWidth={1.25}
                  />
                </span>
              </span>
            </Link>

            <p className='mt-4 text-sm text-muted-foreground'>
              <Link
                href='/about#journey'
                className='border-b border-muted-foreground pb-0.5 transition-colors hover:border-primary hover:text-primary focus-visible:border-primary focus-visible:text-primary focus-visible:outline-none'
              >
                Or jump straight to the journey
              </Link>
            </p>
          </div>
        </ParallaxFade>
      </div>
    </article>
  );
}
