'use client';

import { useEffect } from 'react';

import Lenis from '@studio-freight/lenis';

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis();
    let frame = 0;

    function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

    // Each page mounts its own scroller; stop it when the page goes away so
    // loops do not pile up across navigations.
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
}
