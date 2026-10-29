'use client';
// app/(in-progress)/about/_components/shared/use-desktop-motion.js

import { useEffect, useState } from 'react';

const query = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)';

/**
 * True when the viewport is wide enough and the visitor has not asked for
 * reduced motion. Scroll-pinned compositions fall back to a plain vertical
 * layout when this is false (phones, tablets, reduced motion).
 */
export function useDesktopMotion() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return enabled;
}
