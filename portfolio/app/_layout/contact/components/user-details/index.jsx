'use client';
// app/_layout/contact/components/user-details/index.jsx

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { reveal } from '@/app/_components/parallax/reveal/variants';

import { Magnetic } from '../magnetic';

const headline = ['Let’s', 'connect'];

const contacts = [
  {
    label: 'Email',
    text: 'gautamprabhumit@gmail.com',
    href: 'mailto:gautamprabhumit@gmail.com',
  },
  { label: 'Phone', text: '+91 80738 70925', href: 'tel:+918073870925' },
];

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  return (
    <div className='flex flex-col'>
      <p className='mb-10 flex items-center gap-3 text-xs uppercase tracking-wider text-background/60 lg:mb-10'>
        <span aria-hidden='true' className='size-2 rounded-full bg-primary' />
        Seeking internship · Open to hire
      </p>

      <h2 className='flex flex-wrap items-center gap-x-[0.25em] gap-y-4 text-[clamp(3.25rem,9.5vw,11rem)] font-normal leading-[1.05] tracking-tight'>
        <Image
          src='/images/contact-profile.png'
          alt='Gautam Prabhu'
          width={160}
          height={160}
          className='size-[0.7em] shrink-0 rounded-full object-cover'
        />
        {headline.map((word, index) => (
          <span key={word} className='inline-flex overflow-hidden pb-[0.08em]'>
            <motion.span
              custom={index * 4}
              variants={reveal}
              initial='initial'
              whileInView='open'
              viewport={{ once: true }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h2>

      {/* Hairline with the call to action riding on it */}
      <div className='relative mb-14 mt-12 w-full lg:my-16'>
        <div className='h-px bg-background/25' />
        <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
          <motion.div style={{ x: transformX }}>
            <Magnetic strength={0.4} reach={72}>
              <Link
                href='/contact'
                className='group relative flex size-[clamp(6.5rem,10vw,9.5rem)] items-center justify-center overflow-hidden rounded-full bg-primary text-base font-medium text-background outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground'
              >
                <span
                  aria-hidden='true'
                  className='absolute inset-0 translate-y-full rounded-full bg-primary-foreground transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0'
                />
                <span className='relative'>Get in touch</span>
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      <ul className='grid gap-10 lg:grid-cols-2 lg:gap-16'>
        {contacts.map(({ label, text, href }) => (
          <li key={label} className='border-t border-background/20 pt-5'>
            <p className='mb-4 text-xs uppercase tracking-wider text-background/60'>
              {label}
            </p>
            <Magnetic strength={0.22} reach={40}>
              <a
                href={href}
                className='group relative inline-block pb-1 text-[clamp(1.25rem,2.6vw,2.75rem)] leading-tight tracking-tight outline-none'
              >
                {text}
                <span
                  aria-hidden='true'
                  className='absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100'
                />
              </a>
            </Magnetic>
          </li>
        ))}
      </ul>
    </div>
  );
}
