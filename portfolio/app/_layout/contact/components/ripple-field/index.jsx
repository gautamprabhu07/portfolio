'use client';
// app/_layout/contact/components/ripple-field/index.jsx

import { useEffect, useRef } from 'react';

import { RippleField as Engine } from './engine';

/** Read a `--token` ("h s% l%") from :root and return [r, g, b]. */
function readToken(name, fallback) {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  const match = raw.match(/^([\d.]+)\s+([\d.]+)%\s+([\d.]+)%$/);
  if (!match) return fallback;

  const h = Number(match[1]);
  const s = Number(match[2]) / 100;
  const l = Number(match[3]) / 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) =>
    Math.round(
      255 * (l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))),
    );
  return [f(0), f(8), f(4)];
}

/**
 * A pointer-reactive water surface that fills its (positioned) parent.
 * It listens on the parent, never captures events itself, and pauses when
 * the footer is off screen or the surface is still.
 */
export function RippleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) return undefined;

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');

    const field = new Engine(canvas, {
      cell: 6,
      light: readToken('--background', [255, 255, 255]),
      tint: readToken('--primary', [94, 106, 210]),
    });

    const measure = () => {
      const { width, height } = host.getBoundingClientRect();
      field.resize(width, height);
    };
    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(host);

    let visible = false;
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) field.release();
    });
    visibilityObserver.observe(host);

    const local = (event) => {
      const rect = host.getBoundingClientRect();
      return [event.clientX - rect.left, event.clientY - rect.top];
    };

    const onMove = (event) => {
      if (event.pointerType !== 'mouse') return;
      field.move(...local(event));
    };
    const onLeave = () => field.release();
    const onDown = (event) => {
      const [x, y] = local(event);
      field.disturb(x, y, event.pointerType === 'mouse' ? 10 : 14);
    };

    host.addEventListener('pointermove', onMove, { passive: true });
    host.addEventListener('pointerleave', onLeave);
    host.addEventListener('pointerdown', onDown, { passive: true });

    // A rare, gentle drop keeps the surface from feeling dead between visits.
    let timer = 0;
    const scheduleDrop = () => {
      timer = window.setTimeout(
        () => {
          if (visible && !document.hidden) {
            const rect = host.getBoundingClientRect();
            field.disturb(
              rect.width * (0.15 + Math.random() * 0.7),
              rect.height * (0.15 + Math.random() * 0.7),
              4,
            );
          }
          scheduleDrop();
        },
        4000 + Math.random() * 3000,
      );
    };
    if (canHover.matches) scheduleDrop();

    return () => {
      window.clearTimeout(timer);
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
      host.removeEventListener('pointerdown', onDown);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      field.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden='true'
      className='pointer-events-none absolute inset-0 z-0 size-full'
    />
  );
}
