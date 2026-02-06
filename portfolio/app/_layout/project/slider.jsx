'use client';
// app/_layout/project/slider.jsx

import Image from 'next/image';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 */
export function ProjectSlider({ type, source }) {
  const image =
    type === 'image' ? (
      <Image
        src={source}
        className='object-cover transition-transform duration-500 hover:scale-105'
        fill={true}
        alt='project items'
        sizes='(max-width: 768px) 50vw, 25vw'
      />
    ) : null;
    
  const video =
    type === 'video' ? (
      <video
        src={source}
        loop
        muted
        autoPlay
        playsInline
        className='absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105'
      />
    ) : null;

  return (
    <Center
      className='relative w-1/4 overflow-hidden rounded-lg border border-border bg-muted shadow-md transition-shadow hover:shadow-xl'
      style={{
        minWidth: '150px',
        height: '20vw',
      }}
    >
      {image}
      {video}
      
      {/* Subtle overlay on hover */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100' />
    </Center>
  );
}