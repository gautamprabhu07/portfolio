'use client';
// app/_layout/transition/index.jsx

import { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { useLenis, useTimeOut } from '@/hooks';

import { Preloader } from './preloader';

/**
 * @param {import('react').PropsWithChildren<{ stickySafe?: boolean }>} props
 * `stickySafe` clips overflow instead of hiding it, so `position: sticky`
 * keeps working inside the page (overflow: hidden makes a scroll container).
 */
export function Transition({ children, stickySafe = false }) {
  const [isLoading, setLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsFirstLoad(false);
    } else {
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  useLenis();
  useTimeOut({
    callback: () => {
      setLoading(false);
      window.scrollTo(0, 0);
    },
    duration: 2000,
    deps: [],
  });

  const getPageName = () => {
    if (pathname === '/') return 'HOME';
    if (pathname === '/about') return 'ABOUT';
    if (pathname === '/contact') return 'CONTACT';
    if (pathname === '/work') return 'WORK';
    return 'PAGE';
  };

  return (
    <div
      key={pathname}
      className={stickySafe ? 'overflow-clip' : 'overflow-hidden'}
    >
      <AnimatePresence mode='wait'>
        {isLoading ? <Preloader isFirstLoad={isFirstLoad} pageName={getPageName()} /> : null}
      </AnimatePresence>
      {children}
    </div>
  );
}
