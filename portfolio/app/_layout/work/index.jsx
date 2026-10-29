'use client';
// app/_layout/work/index.jsx

import { useRef } from 'react';

import { motion } from 'framer-motion';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { MagneticButton } from '@/components';
import { projects } from '@/data';
import { useFollowPointer } from '@/hooks';
import { cn } from '@/utils';

import {
  ThumbnailCursorCircle,
  ThumbnailCursorLabel,
  ThumbnailLabel,
} from '../thumbnail/components';
import { scaleUp } from '../thumbnail/variants';

/** What the cursor-following preview shows for one project. */
function Preview({ project, index }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        width={320}
        height={320}
        alt={`${project.title} screenshot`}
        className='size-full object-cover object-top'
      />
    );
  }

  return (
    // Text sits at the top and bottom; the middle stays clear for the cursor disc.
    <div className='flex size-full flex-col justify-between bg-foreground p-5 text-background'>
      <div>
        <p className='mb-2 text-xs uppercase tracking-wider text-background/60'>
          {String(index + 1).padStart(2, '0')} · {project.role}
        </p>
        <p className='max-w-[17rem] text-lg leading-snug tracking-tight'>
          {project.metric}
        </p>
      </div>
      <p className='text-sm text-background/70'>{project.stack.join(' · ')}</p>
    </div>
  );
}

/** One row of the index; a link when the project has a public URL. */
function Row({ project, index, onEnter, onLeave, onMove }) {
  const Tag = project.href ? Link : 'div';
  const linkProps = project.href
    ? { href: project.href, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  const focusRow = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    onEnter(index);
    onMove(rect.left + rect.width * 0.6, rect.top + rect.height / 2);
  };

  return (
    <li
      className='group border-t border-border transition-colors last-of-type:border-b hover:bg-muted/30'
      onPointerEnter={({ clientX, clientY, pointerType }) => {
        if (pointerType !== 'mouse') return;
        onEnter(index);
        onMove(clientX, clientY);
      }}
      onPointerLeave={({ clientX, clientY, pointerType }) => {
        if (pointerType !== 'mouse') return;
        onLeave(index);
        onMove(clientX, clientY);
      }}
    >
      <Tag
        {...linkProps}
        onFocus={focusRow}
        onBlur={() => onLeave(index)}
        className='flex flex-wrap items-center justify-between gap-x-10 gap-y-3 outline-none focus-visible:bg-muted/50'
        style={{
          paddingInline: 'clamp(1em, 3vw, 4em)',
          paddingBlock: 'clamp(1.25em, 2.4vw, 2.5em)',
        }}
      >
        <div className='flex items-baseline gap-4 lg:gap-8'>
          <span className='w-8 shrink-0 text-xs tabular-nums text-muted-foreground'>
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <h4 className='text-[clamp(1.75rem,4.2vw,4.5rem)] font-normal leading-[1.1] tracking-tight text-foreground transition-colors duration-300 group-focus-within:text-primary group-hover:text-primary'>
              {project.title}
            </h4>
            <p className='mt-2 text-base text-muted-foreground'>
              {project.summary}
            </p>
          </div>
        </div>

        <div className='flex items-center gap-6 ps-12 lg:ps-0'>
          <div className='lg:text-end'>
            <p className='text-base font-medium text-foreground lg:text-lg'>
              {project.role}
            </p>
            <p className='mt-1 text-sm text-muted-foreground'>
              {project.metric}
            </p>
          </div>
          <span
            aria-hidden='true'
            className={cn(
              'hidden size-10 shrink-0 place-items-center rounded-full border border-border transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-background lg:grid',
              !project.href && 'opacity-30',
            )}
          >
            <MoveUpRight className='size-4' strokeWidth={1.5} />
          </span>
        </div>
        {project.href && (
          <span className='sr-only'>(opens in a new tab)</span>
        )}
      </Tag>
    </li>
  );
}

/**
 * The project index: every project is a row, and hovering or focusing one
 * pulls a preview to the cursor (a screenshot where there is one, otherwise a
 * card with its headline numbers). On touch, everything stays inline.
 */
export function Work() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const modal = useRef(null);
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const cursor = useRef(null);
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const label = useRef(null);

  const {
    item: { active, index },
    handlePointerEnter,
    handlePointerLeave,
    moveItems,
  } = useFollowPointer({ modal, cursor, label });

  return (
    <section
      className='container relative'
      aria-label='Selected work'
      onPointerMove={({ clientX, clientY, pointerType }) =>
        pointerType === 'mouse' && moveItems(clientX, clientY)
      }
    >
      <div className='my-8 flex flex-col gap-10'>
        <div className='flex flex-wrap items-end justify-between gap-4'>
          <ThumbnailLabel>Selected work · {projects.length}</ThumbnailLabel>
          <p className='text-base text-muted-foreground lg:text-lg'>
            Hover, or tab through, for a closer look
          </p>
        </div>

        <ul>
          {projects.map((project, position) => (
            <Row
              key={project.id}
              project={project}
              index={position}
              onEnter={handlePointerEnter}
              onLeave={handlePointerLeave}
              onMove={moveItems}
            />
          ))}
        </ul>

        {/* Cursor-following preview, one panel per project */}
        <motion.div
          ref={modal}
          aria-hidden='true'
          className='pointer-events-none fixed left-1/2 top-1/2 z-[1] hidden size-80 overflow-hidden rounded-lg border border-border bg-secondary-foreground shadow-2xl [@media(hover:hover)]:block'
          variants={scaleUp}
          initial='initial'
          animate={active ? 'enter' : 'closed'}
        >
          <div
            className='relative size-full'
            style={{
              top: `${index * -100}%`,
              transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
            }}
          >
            {projects.map((project, position) => (
              <div key={project.id} className='size-full'>
                <Preview project={project} index={position} />
              </div>
            ))}
          </div>
        </motion.div>
        <ThumbnailCursorCircle
          ref={cursor}
          variants={scaleUp}
          active={active}
          aria-hidden='true'
        />
        <ThumbnailCursorLabel
          ref={label}
          variants={scaleUp}
          active={active}
          aria-hidden='true'
        >
          {projects[index]?.href ? 'Open' : 'Details'}
        </ThumbnailCursorLabel>

        <div className='flex justify-center'>
          <Link
            href='https://github.com/gautamprabhu07'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MagneticButton
              variant='outline'
              className='px-10 py-8 text-base font-medium before:-top-1/2 hover:text-background'
            >
              All on GitHub
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
