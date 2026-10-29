'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { OffcanvasBody, OffcanvasToggle } from './components';

const FOCUSABLE = 'a[href], button:not([disabled])';

export function Offcanvas() {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  // Close when the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Keyboard: Escape closes, Tab stays inside the panel (and its toggle),
  // and focus lands on the current page's link when it opens.
  useEffect(() => {
    if (!isOpen) return undefined;

    const toggle = document.getElementById('offcanvas-toggle');
    const panel = () => document.getElementById('site-navigation');

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle?.focus();
        return;
      }
      if (event.key !== 'Tab' || !panel()) return;

      const stops = [toggle, ...panel().querySelectorAll(FOCUSABLE)].filter(Boolean);
      const first = stops[0];
      const last = stops[stops.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const focusTimer = window.setTimeout(() => {
      const target =
        panel()?.querySelector('[aria-current="page"]') ??
        panel()?.querySelector('a[href]');
      target?.focus({ preventScroll: true });
    }, 450);

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen ? <OffcanvasBody onClose={() => setOpen(false)} /> : null}
      </AnimatePresence>
      <OffcanvasToggle isOpen={isOpen} handleOpen={setOpen} />
    </>
  );
}
