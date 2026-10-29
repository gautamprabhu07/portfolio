'use client';
// app/(in-progress)/contact/_components/target/index.jsx

import { useEffect, useRef } from 'react';

import { motion, useMotionValue, useSpring } from 'framer-motion';

const SIZE = 30; // reticle size when roaming free
const PAD = 10; // breathing room when locked onto an element

const spring = { stiffness: 420, damping: 36, mass: 0.55 };

/**
 * "Target lock" pointer layer.
 *
 * A reticle (four corner brackets) follows the mouse. Over any element
 * marked `data-cursor` it springs open and locks around that element, with
 * its `data-cursor-label` as a small verb tag. The normal cursor is left
 * alone, the layer ignores pointer events, and nothing here re-renders React
 * while the mouse moves: positions live in motion values, the label is set
 * directly on the DOM node.
 *
 * It also lights a grid under the pointer through `--mx` / `--my` custom
 * properties on its parent. Off entirely for touch and reduced motion.
 */
export function TargetField() {
  const gridRef = useRef(null);
  const frameRef = useRef(null);
  const labelRef = useRef(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const w = useMotionValue(SIZE);
  const h = useMotionValue(SIZE);
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);
  const sw = useSpring(w, spring);
  const sh = useSpring(h, spring);

  useEffect(() => {
    const enabled = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
    );
    const grid = gridRef.current;
    const frame = frameRef.current;
    const label = labelRef.current;
    const host = grid?.parentElement;
    if (!enabled.matches || !grid || !frame || !label || !host) return undefined;

    grid.style.display = 'block';
    frame.style.display = 'block';

    let target = null;
    let raf = 0;

    const lock = (element) => {
      const rect = element.getBoundingClientRect();
      x.set(rect.left - PAD);
      y.set(rect.top - PAD);
      w.set(rect.width + PAD * 2);
      h.set(rect.height + PAD * 2);
    };

    const setTarget = (next) => {
      target = next;
      frame.dataset.locked = next ? 'true' : 'false';
      label.textContent = next?.dataset.cursorLabel ?? '';
    };

    const onMove = (event) => {
      if (event.pointerType !== 'mouse') return;

      const hostRect = host.getBoundingClientRect();
      host.style.setProperty('--mx', `${event.clientX - hostRect.left}px`);
      host.style.setProperty('--my', `${event.clientY - hostRect.top}px`);
      frame.style.opacity = '1';

      const next = event.target.closest?.('[data-cursor]') ?? null;
      if (next !== target) setTarget(next);

      if (next) {
        lock(next);
      } else {
        x.set(event.clientX - SIZE / 2);
        y.set(event.clientY - SIZE / 2);
        w.set(SIZE);
        h.set(SIZE);
      }
    };

    // The page can scroll under a still pointer; keep the lock on its element.
    const onScroll = () => {
      if (!target || raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (target?.isConnected) lock(target);
      });
    };

    const onLeave = () => {
      frame.style.opacity = '0';
      setTarget(null);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    window.addEventListener('blur', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('scroll', onScroll);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('blur', onLeave);
      cancelAnimationFrame(raf);
      grid.style.display = '';
      frame.style.display = '';
    };
  }, [h, w, x, y]);

  return (
    <>
      {/* Faint grid that brightens around the pointer */}
      <div
        ref={gridRef}
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 -z-10 hidden opacity-70'
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--background) / 0.07) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background) / 0.07) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          WebkitMaskImage:
            'radial-gradient(260px circle at var(--mx, -400px) var(--my, -400px), black, transparent)',
          maskImage:
            'radial-gradient(260px circle at var(--mx, -400px) var(--my, -400px), black, transparent)',
        }}
      />

      <motion.div
        ref={frameRef}
        aria-hidden='true'
        data-locked='false'
        className='group pointer-events-none fixed left-0 top-0 z-50 hidden opacity-0 transition-opacity duration-300'
        style={{ x: sx, y: sy, width: sw, height: sh }}
      >
        <span className='absolute left-0 top-0 size-3 border-l-2 border-t-2 border-background transition-colors duration-300 group-data-[locked=true]:border-primary' />
        <span className='absolute right-0 top-0 size-3 border-r-2 border-t-2 border-background transition-colors duration-300 group-data-[locked=true]:border-primary' />
        <span className='absolute bottom-0 left-0 size-3 border-b-2 border-l-2 border-background transition-colors duration-300 group-data-[locked=true]:border-primary' />
        <span className='absolute bottom-0 right-0 size-3 border-b-2 border-r-2 border-background transition-colors duration-300 group-data-[locked=true]:border-primary' />
        <span
          ref={labelRef}
          className='absolute -top-7 right-0 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-xs font-medium text-background opacity-0 transition-opacity duration-300 group-data-[locked=true]:opacity-100'
        />
      </motion.div>
    </>
  );
}
