'use client';
// app/(in-progress)/contact/_components/stage/index.jsx

import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';

import { reveal } from '@/app/_components/parallax/reveal/variants';

import { ContactChannels } from '../channels';
import { ContactComposer } from '../composer';
import { TargetField } from '../target';

const headline = ['Let’s', 'talk.'];

// All of this already existed on the old Contact page or in profile-info.md.
const facts = [
  { label: 'Based in', value: 'Manipal, Karnataka, India' },
  { label: 'Looking for', value: 'Internship · Open to hire' },
  { label: 'Work mode', value: 'Remote / Hybrid / On-site' },
  { label: 'Start', value: 'Available immediately' },
];

export function ContactStage() {
  return (
    <main className='relative isolate min-h-screen overflow-hidden bg-foreground text-background'>
      <TargetField />

      <div className='container'>
        <div
          style={{
            paddingBlock: 'clamp(7em, 16vh, 11em) clamp(3em, 8vh, 6em)',
            paddingInline: 'clamp(0.25em, 4vw, 8em)',
          }}
        >
          <header className='mb-16 lg:mb-24'>
            <p className='mb-8 flex items-center gap-3 text-xs uppercase tracking-wider text-background/60'>
              <span
                aria-hidden='true'
                className='size-2 rounded-full bg-primary'
              />
              Contact · Seeking internship, open to hire
            </p>

            <div className='flex flex-wrap items-end justify-between gap-x-12 gap-y-8'>
              <h1 className='text-[clamp(3.75rem,12vw,13rem)] font-normal leading-[1.02] tracking-tight'>
                {headline.map((word, index) => (
                  <span
                    key={word}
                    className='me-[0.22em] inline-flex overflow-hidden pb-[0.1em]'
                  >
                    <motion.span
                      custom={index * 4}
                      variants={reveal}
                      initial='initial'
                      animate='open'
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <Balancer
                as='p'
                className='max-w-sm pb-3 text-base leading-relaxed text-background/70 lg:text-lg'
              >
                Full-stack development opportunities, open-source
                collaborations, or anything tech. I&apos;m actively seeking
                internship roles where I can contribute and grow.
              </Balancer>
            </div>
          </header>

          <div className='grid gap-16 lg:grid-cols-12 lg:gap-14'>
            <div className='lg:col-span-7'>
              <ContactChannels />
            </div>
            <div className='lg:col-span-5'>
              <ContactComposer />
            </div>
          </div>

          <dl className='mt-20 grid gap-8 border-t border-background/20 pt-8 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4'>
            {facts.map(({ label, value }) => (
              <div key={label}>
                <dt className='text-xs uppercase tracking-wider text-background/50'>
                  {label}
                </dt>
                <dd className='mt-2 text-base lg:text-lg'>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
