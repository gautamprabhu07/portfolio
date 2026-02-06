'use client';
// app/_layout/contact/components/social-info/index.jsx

import Link from 'next/link';

export function SocialInfo() {
  const socialLinks = [
    { href: 'https://www.instagram.com/', label: 'Instagram' },
    { href: 'https://github.com/gautamprabhu07', label: 'Github' },
    { href: 'https://www.linkedin.com/in/gautamphere', label: 'LinkedIn' },
    { href: 'mailto:gautamprabhumit@gmail.com', label: 'Mail' },
  ];

  return (
    <div className='flex justify-end px-12 pb-4 pt-10'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-sm uppercase tracking-wider text-muted-foreground'>Socials</h3>
        <div className='flex items-center gap-6'>
          {socialLinks.map(({ href, label }) => (
            <Link 
              key={label} 
              href={href} 
              target='_blank' 
              rel='noopener noreferrer'
              className='text-base transition-transform duration-200 ease-out hover:scale-110'
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
