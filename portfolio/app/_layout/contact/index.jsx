'use client';
// app/_layout/contact/index.jsx

import { useRef } from 'react';

import { useContactSlider } from '@/hooks';

import { RippleField, SocialInfo, UserDetails } from './components';

/**
 * Closing section: a dark surface that ripples under the cursor, with the
 * contact call to action, links and credits resting on top of it.
 */
export function Contact() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const { transformX } = useContactSlider(containerRef);

  return (
    <footer
      ref={containerRef}
      className='relative isolate overflow-hidden bg-foreground text-background'
    >
      <RippleField />

      <div className='container relative z-10'>
        <div
          style={{
            paddingBlock: 'clamp(4em, 11vh, 8em) clamp(1.5em, 4vh, 2.5em)',
            paddingInline: 'clamp(2.5em, 4vw, 8em)',
          }}
        >
          <UserDetails transformX={transformX} />
          <SocialInfo />
        </div>
      </div>
    </footer>
  );
}
