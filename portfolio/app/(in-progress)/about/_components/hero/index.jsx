'use client';
// app/(in-progress)/about/_components/hero/index.jsx

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

import { ParallaxFade, ParallaxSlider } from '@/components';

import { HeadlineReveal } from '../shared';

const statement = 'Turning ideas into reliable systems.';

const facts = [
  { label: 'Based in', value: 'Manipal, Karnataka, India' },
  { label: 'Currently', value: 'Full-Stack Developer Intern at Eventory' },
  { label: 'Studying', value: 'B.Tech Computer Science, MIT Manipal · CGPA 8.58' },
  { label: 'Availability', value: 'Seeking internship · Open to hire' },
];

const spring = { stiffness: 90, damping: 18, mass: 0.4 };

export function AboutHero() {
  const reduceMotion = useReducedMotion();

  // Pointer position relative to the header, -0.5 … 0.5
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, spring);
  const smoothY = useSpring(pointerY, spring);

  const portraitX = useTransform(smoothX, [-0.5, 0.5], [-22, 22]);
  const portraitY = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);
  const portraitRotate = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const headlineX = useTransform(smoothX, [-0.5, 0.5], [10, -10]);
  const ringScale = useTransform(smoothX, [-0.5, 0.5], [1.08, 0.94]);

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType !== 'mouse') return;
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - left) / width - 0.5);
    pointerY.set((event.clientY - top) / height - 0.5);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <header
      className='overflow-hidden bg-foreground text-background'
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className='container max-md:!px-0'>
        <div
          className='flex min-h-[92vh] flex-col justify-end max-md:min-h-[calc(100svh-10.5rem)] max-md:!px-6 max-md:!pb-5 max-md:!pt-16'
          style={{
            paddingBlock: 'clamp(8em, 20vh, 14em) clamp(2.5em, 5vh, 4em)',
            paddingInline: 'clamp(2.5em, 4vw, 8em)',
          }}
        >
          <div className='mb-5 flex items-center gap-4 md:mb-8 md:block'>
            <Image
              src='/images/about-1.png'
              alt=''
              aria-hidden='true'
              width={96}
              height={96}
              priority
              className='size-12 rounded-full ring-1 ring-background/30 md:hidden'
            />
            <p className='text-xs uppercase tracking-wider text-background/50'>
              About
              <span className='md:hidden'> · Gautam Prabhu</span>
            </p>
          </div>

          <motion.h1
            style={reduceMotion ? undefined : { x: headlineX }}
            className='max-w-[15ch] text-[clamp(3rem,8.5vw,9.5rem)] font-normal leading-[1.1] tracking-tight max-md:max-w-none max-md:text-[clamp(2.3rem,11.5vw,3.4rem)] max-md:leading-[1.04]'
          >
            <HeadlineReveal text={statement} />
          </motion.h1>

          <div className='mt-16 grid items-end gap-10 max-md:mt-6 max-md:gap-0 lg:mt-20 lg:grid-cols-12'>
            <div className='relative size-[clamp(110px,10vw,150px)] max-md:hidden lg:col-span-6'>
              <motion.span
                aria-hidden='true'
                style={reduceMotion ? undefined : { scale: ringScale }}
                className='absolute -inset-3 rounded-full border border-background/25'
              />
              <motion.div
                style={
                  reduceMotion
                    ? undefined
                    : { x: portraitX, y: portraitY, rotate: portraitRotate }
                }
                className='size-full'
              >
                <Image
                  src='/images/about-1.png'
                  alt='Illustrated portrait of Gautam Prabhu'
                  width={220}
                  height={220}
                  priority
                  className='size-full rounded-full'
                />
              </motion.div>
            </div>

            <div className='lg:col-span-5'>
              <ParallaxFade>
                <Balancer
                  as='p'
                  className='max-w-md text-base leading-relaxed text-background/70 max-md:max-w-none max-md:text-[0.95rem] lg:text-lg'
                >
                  Software developer across full-stack, backend and systems,
                  with a growing focus on cloud, AI agents and containers.
                  Practical, maintainable, and production-ready.
                </Balancer>
              </ParallaxFade>
            </div>
          </div>

          <ParallaxFade>
            <dl className='mt-16 grid gap-8 border-t border-background/20 pt-8 max-md:mt-6 max-md:gap-0 max-md:pt-0 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4'>
              {facts.map(({ label, value }) => (
                <div
                  key={label}
                  className='max-md:flex max-md:items-baseline max-md:justify-between max-md:gap-6 max-md:border-b max-md:border-background/15 max-md:py-2.5'
                >
                  <dt className='shrink-0 text-xs uppercase tracking-wider text-background/50'>
                    {label}
                  </dt>
                  <dd className='mt-2 text-base max-md:mt-0 max-md:text-right max-md:text-[0.82rem] max-md:leading-snug lg:text-lg'>{value}</dd>
                </div>
              ))}
            </dl>
          </ParallaxFade>
        </div>
      </div>

      <div
        aria-hidden='true'
        className='select-none border-t border-background/15 py-6 text-[clamp(2.5rem,6vw,6rem)] font-normal tracking-tight text-transparent [-webkit-text-stroke:1px_hsl(var(--background)/0.4)]'
      >
        <ParallaxSlider repeat={4} baseVelocity={-1.5}>
          <span className='pe-10'>
            Full-Stack<span className='px-10'>—</span>Backend
            <span className='px-10'>—</span>Systems
            <span className='px-10'>—</span>Cloud
            <span className='px-10'>—</span>AI Agents
            <span className='px-10'>—</span>Containers
            <span className='px-10'>—</span>
          </span>
        </ParallaxSlider>
      </div>
    </header>
  );
}
