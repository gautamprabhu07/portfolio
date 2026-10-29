'use client';

import { Dot } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Center, MagneticButton } from '@/components';
import { navItems } from '@/data';
import { randomId } from '@/utils';

export function NavbarList() {
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';
  const isContactPage = pathname === '/contact';
  
  const filteredItems = navItems.slice(1).filter(item => {
    // On about page, exclude 'about' link
    if (isAboutPage && item.title === 'about') {
      return false;
    }
    return true;
  });
  
  // On about page, add home link if not already present
  const withoutHome = filteredItems.filter(item => item.title !== 'home');
  // On the contact page, drop the contact link and end with home instead.
  const displayItems = isAboutPage
    ? [navItems[0], ...withoutHome]
    : isContactPage
      ? [...withoutHome.filter(item => item.title !== 'contact'), navItems[0]]
      : filteredItems;

  const items = displayItems.map(({ href, title }) => {
    const id = randomId();
    return (
      <li key={id} className='group p-4'>
        <Link href={href} passHref>
          <MagneticButton>
            <span className='text-base font-bold capitalize drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'>{title}</span>
            <Center>
              <Dot className='scale-0 transition-transform duration-200 ease-in-expo group-hover:scale-100' />
            </Center>
          </MagneticButton>
        </Link>
      </li>
    );
  });

  return <ul className='flex items-center max-lg:hidden'>{items}</ul>;
}
