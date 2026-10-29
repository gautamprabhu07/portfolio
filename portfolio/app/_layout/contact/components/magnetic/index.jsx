'use client';
// app/_layout/contact/components/magnetic/index.jsx

import { useEffect, useRef } from 'react';

import { motion, useMotionValue, useSpring } from 'framer-motion';

import { cn } from '@/utils';

const spring = { stiffness: 170, damping: 16, mass: 0.12 };

/**
 * Pulls its child gently toward the cursor.
 *
 * - Pointer tracking lives outside React (motion values), so moving the mouse
 *   never re-renders anything.
 * - The pull begins a little outside the element (`reach`) and grows with
 *   the cursor's offset from its centre, capped so click targets stay put.
 * - Always settles back on leave, blur, scroll-out and unmount.
 * - Off for touch input and `prefers-reduced-motion`.
 *
 * @param {import('react').PropsWithChildren<{
 *   className?: string,
 *   strength?: number,
 *   reach?: number,
 * }>} props
 */
export function Magnetic({ children, className, strength = 0.3, reach = 56 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const enabled = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
    );
    if (!enabled.matches) return undefined;

    let visible = false;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) settle();
    });
    observer.observe(element);

    function settle() {
      x.set(0);
      y.set(0);
    }

    const onMove = (event) => {
      if (!visible || event.pointerType !== 'mouse') return;

      const rect = element.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const halfW = rect.width / 2;
      const halfH = rect.height / 2;

      // Inside the element or within `reach` of its edge.
      const inside =
        Math.abs(dx) < halfW + reach && Math.abs(dy) < halfH + reach;
      if (!inside) {
        settle();
        return;
      }

      const limitX = Math.min(halfW * 0.5, 24);
      const limitY = Math.min(halfH * 0.5, 24);
      x.set(Math.max(-limitX, Math.min(limitX, dx * strength)));
      y.set(Math.max(-limitY, Math.min(limitY, dy * strength)));
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', settle);
    window.addEventListener('blur', settle);

    return () => {
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', settle);
      window.removeEventListener('blur', settle);
      observer.disconnect();
      settle();
    };
  }, [reach, strength, x, y]);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      className={cn('inline-block', className)}
    >
      {children}
    </motion.div>
  );
}
