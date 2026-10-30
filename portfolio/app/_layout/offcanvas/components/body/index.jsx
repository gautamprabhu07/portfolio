'use client';
// app/_layout/offcanvas/components/body/index.jsx

import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { FileText, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navItems, socialMedias } from '@/data';
import { cn } from '@/utils';

const EASE = [0.76, 0, 0.24, 1];

// Order in the panel (the shared data keeps the top bar's order).
const items = ['home', 'about', 'contact', 'resume'].map((title) =>
  navItems.find((item) => item.title === title),
);

/** The small picture shown when a row is open. */
function Plate({ item }) {
  if (item.title === 'resume') {
    return (
      <div className='grid size-full place-items-center bg-foreground text-background'>
        <FileText className='size-7' strokeWidth={1.25} aria-hidden='true' />
      </div>
    );
  }
  const round = item.title === 'about';
  return (
    <div className={cn('relative size-full', round && 'bg-foreground p-2')}>
      <Image
        src={item.image}
        alt=''
        fill
        sizes='96px'
        className={cn(
          round ? 'rounded-full object-cover' : 'object-cover object-top',
        )}
      />
    </div>
  );
}

function Row({ item, index, current, expanded, onActivate }) {
  const external = item.external;
  const delay = 0.3 + index * 0.07;

  return (
    <motion.li
      className='relative min-h-0 shrink basis-0 border-t border-border transition-[grow] duration-500 [contain:layout_paint] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]'
      style={{ flexGrow: expanded ? 3.2 : 1 }}
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      <Link
        href={item.href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        aria-current={current ? 'page' : undefined}
        onFocus={() => onActivate(index)}
        onPointerEnter={(event) =>
          event.pointerType === 'mouse' && onActivate(index)
        }
        className='group relative flex h-full flex-col justify-between overflow-hidden px-8 py-4 outline-none sm:px-10'
      >
        {/* surface: warms up when the row is open or keyboard-focused */}
        <span
          aria-hidden='true'
          className={cn(
            'absolute inset-0 bg-muted transition-opacity duration-500',
            expanded ? 'opacity-100' : 'opacity-0',
            'group-focus-visible:opacity-100',
          )}
        />
        {/* current page: a solid blue bar on the left edge */}
        {current && (
          <span
            aria-hidden='true'
            className='absolute inset-y-0 left-0 w-1.5 bg-primary'
          />
        )}

        <span className='relative flex items-center justify-between gap-4'>
          <span className='flex items-center gap-4 text-xs uppercase tracking-wider text-muted-foreground'>
            <span className='tabular-nums'>
              {String(index + 1).padStart(2, '0')}
            </span>
            {current && (
              <span className='inline-flex items-center gap-2 text-primary'>
                <span
                  aria-hidden='true'
                  className='size-2 rounded-full bg-primary'
                />
                You are here
              </span>
            )}
            {external && <span>Opens in a new tab</span>}
          </span>
          <MoveUpRight
            aria-hidden='true'
            strokeWidth={1.25}
            className={cn(
              'size-6 shrink-0 transition-[transform,opacity] duration-500 ease-out',
              expanded
                ? 'translate-x-0 opacity-100'
                : '-translate-x-2 translate-y-2 opacity-0',
            )}
          />
        </span>

        <span className='relative flex items-end justify-between gap-6'>
          <span className='min-w-0'>
            <span
              className={cn(
                'block text-[clamp(2.4rem,5.2vw,4.5rem)] font-normal capitalize leading-none tracking-tight transition-[color,transform] duration-500 ease-out',
                expanded
                  ? 'translate-x-2 text-foreground'
                  : 'text-foreground/45',
              )}
            >
              {item.title}
            </span>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.span
                  className='mt-3 block max-w-[17rem] text-base leading-snug text-muted-foreground'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, delay: 0.1, ease: EASE },
                  }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                >
                  {item.blurb}
                </motion.span>
              )}
            </AnimatePresence>
          </span>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.span
                aria-hidden='true'
                className='hidden size-24 shrink-0 overflow-hidden rounded-md border border-border sm:block'
                initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: { type: 'spring', stiffness: 200, damping: 20 },
                }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
              >
                <Plate item={item} />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </Link>
    </motion.li>
  );
}

/**
 * The navigation panel.
 *
 * Surface: a solid light panel (so it separates from light and dark pages
 * alike) with a blue edge that arrives just ahead of it, over a dark scrim.
 * Interaction: the four destinations share the panel's height as an
 * accordion. Hovering or focusing a row opens it (blurb + preview) while the
 * others compress; leaving returns to the page you are on. Touch has no hover,
 * so there the current page stays open and every row is a direct tap.
 *
 * @param {{ onClose: () => void }} props
 */
export function OffcanvasBody({ onClose }) {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(null);
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setFine(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const currentIndex = items.findIndex(
    (item) => !item.external && item.href === pathname,
  );
  const openIndex = fine && hovered !== null ? hovered : currentIndex;

  const onKeyDown = (event) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    const links = [...event.currentTarget.querySelectorAll('a')];
    const at = links.indexOf(document.activeElement);
    const next =
      event.key === 'ArrowDown'
        ? links[(at + 1) % links.length]
        : links[(at - 1 + links.length) % links.length];
    if (next) {
      event.preventDefault();
      next.focus();
    }
  };

  return (
    <>
      {/* Scrim: dims the page so the panel always stands apart from it */}
      <motion.div
        className='fixed inset-0 z-[70] bg-foreground/70 will-change-[opacity]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.1 } }}
        onClick={onClose}
        aria-hidden='true'
      />

      <aside
        id='site-navigation'
        role='dialog'
        aria-modal='true'
        aria-label='Site navigation'
        className='fixed inset-y-0 right-0 z-[75] w-[min(100vw,38rem)]'
      >
        {/* Blue edge: arrives first, stays visible as a thin strip */}
        <motion.div
          className='absolute inset-y-0 -left-2 right-0 bg-primary will-change-transform'
          initial={{ x: '102%' }}
          animate={{ x: 0, transition: { duration: 0.7, ease: EASE } }}
          exit={{ x: '102%', transition: { duration: 0.6, ease: EASE, delay: 0.08 } }}
        />

        <motion.div
          className='absolute inset-0 flex flex-col bg-background text-foreground will-change-transform'
          initial={{ x: '100%' }}
          animate={{ x: 0, transition: { duration: 0.7, ease: EASE, delay: 0.08 } }}
          exit={{ x: '100%', transition: { duration: 0.6, ease: EASE } }}
        >
          <p className='px-8 pb-5 pt-24 text-xs uppercase tracking-wider text-muted-foreground sm:px-10'>
            Navigation
          </p>

          <nav aria-label='Primary' className='min-h-0 flex-1'>
            <ul
              className='flex h-full flex-col border-b border-border'
              onPointerLeave={() => setHovered(null)}
              onKeyDown={onKeyDown}
            >
              {items.map((item, index) => (
                <Row
                  key={item.title}
                  item={item}
                  index={index}
                  current={index === currentIndex}
                  expanded={index === openIndex}
                  onActivate={setHovered}
                />
              ))}
            </ul>
          </nav>

          <div className='flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-8 py-5 text-sm sm:px-10'>
            <ul className='flex items-center gap-6'>
              {socialMedias.map(({ href, title }) => (
                <li key={title}>
                  <a
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='border-b border-foreground pb-0.5 outline-none transition-colors hover:border-primary hover:text-primary focus-visible:border-primary focus-visible:text-primary'
                  >
                    {title}
                    <span className='sr-only'> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className='text-muted-foreground'>
              Seeking internship · Open to hire
            </p>
          </div>
        </motion.div>
      </aside>
    </>
  );
}
