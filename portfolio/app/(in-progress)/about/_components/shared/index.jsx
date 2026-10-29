'use client';
// app/(in-progress)/about/_components/shared/index.jsx

import { motion, MotionConfig } from 'framer-motion';

import { reveal } from '@/app/_components/parallax/reveal/variants';
import { cn } from '@/utils';

/**
 * Same horizontal rhythm as the home page's sections: a `container` with an
 * inner clamp()ed gutter and generous vertical padding.
 */
export function Section({ children, className, ...props }) {
  return (
    <section className='container' {...props}>
      <div
        className={className}
        style={{
          paddingBlock: 'clamp(5em, 12vh, 13em)',
          paddingInline: 'clamp(2.5em, 4vw, 8em)',
        }}
      >
        {children}
      </div>
    </section>
  );
}

/** Small uppercase caption, the same voice as "Recent projects" on home. */
export function SectionLabel({ children, className }) {
  return (
    <p
      className={cn(
        'text-xs uppercase tracking-wider text-muted-foreground',
        className,
      )}
    >
      {children}
    </p>
  );
}

/**
 * Same masked word reveal as home's ParallaxReveal (shared variants), but the
 * gap between words scales with the font size, which matters at display sizes.
 */
export function HeadlineReveal({ text }) {
  return text.split(' ').map((word, index) => (
    <span key={`${word}-${index}`} className='me-[0.22em] inline-flex overflow-hidden'>
      <motion.span
        custom={index}
        variants={reveal}
        initial='initial'
        whileInView='open'
      >
        {word}
      </motion.span>
    </span>
  ));
}

/** Honours prefers-reduced-motion for every animation on the about page. */
export function AboutMotion({ children }) {
  return <MotionConfig reducedMotion='user'>{children}</MotionConfig>;
}
