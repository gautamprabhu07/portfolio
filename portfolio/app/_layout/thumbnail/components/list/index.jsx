'use client';
// app/_layout/thumbnail/components/list/index.jsx

import Link from 'next/link';

import { thumbnailOptions } from '@/data';

/**
 * @param {Object} props
 * @param {(index: number) => void} props.handlePointerEnter
 * @param {(index: number) => void} props.handlePointerLeave
 * @param {(x: number, y: number) => void} props.moveItems
 */
export function ThumbnailList({
  handlePointerEnter,
  handlePointerLeave,
  moveItems,
}) {
  const items = thumbnailOptions.map(({ href, title, description }, index) => {
    const id = index;
    return (
      <li
        key={`thumbnail-list-${id}`}
        className='border-t border-solid border-border transition-all last-of-type:border-b hover:bg-muted/30'
        style={{
          paddingInline: 'calc(clamp(1em,3vw,4em) * 2)',
          paddingBlock: 'clamp(1em,3vw,4em)',
        }}
        onPointerEnter={({ clientX, clientY }) => {
          handlePointerEnter(id);
          moveItems(clientX, clientY);
        }}
        onPointerLeave={({ clientX, clientY }) => {
          handlePointerLeave(id);
          moveItems(clientX, clientY);
        }}
      >
        <Link
          href={href}
          className='flex items-center justify-between max-lg:flex-wrap max-lg:gap-2'
          target='_blank'
          rel='noopener noreferrer'
          passHref
        >
          <h4
            className='font-normal tracking-tight text-foreground transition-colors hover:text-primary'
            style={{
              fontSize: 'calc(clamp(3.25em, 7vw, 8em) * 0.75)',
            }}
          >
            {title}
          </h4>
          <p className='text-base font-medium text-muted-foreground lg:text-lg'>
            {description}
          </p>
        </Link>
      </li>
    );
  });

  return <ul>{items}</ul>;
}