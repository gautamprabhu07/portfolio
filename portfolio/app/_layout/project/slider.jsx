'use client';
// app/_layout/project/slider.jsx

import Image from 'next/image';

/**
 * One screen in a row. Its height comes from the row (`--row-h`); its width
 * follows from `ratio`, so cards of different proportions line up on one
 * baseline without any script measuring them.
 *
 * @param {Object} props
 * @param {string} props.src
 * @param {string} props.alt
 * @param {number} props.ratio
 * @param {string} props.position
 */
export function ProjectSlider({ src, alt, ratio, position }) {
  return (
    <figure
      className='relative shrink-0 overflow-hidden rounded-lg border border-border bg-muted shadow-md transition-shadow hover:shadow-xl'
      style={{ height: 'var(--row-h)', aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes='(max-width: 768px) 80vw, 40vw'
        className='object-cover transition-transform duration-500 hover:scale-105'
        style={{ objectPosition: position }}
      />
    </figure>
  );
}
