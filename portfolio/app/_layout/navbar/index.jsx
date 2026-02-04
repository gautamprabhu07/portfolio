'use client';
// app/_layout/navbar/index.jsx

import { usePathname } from 'next/navigation';

import { NavbarBrand } from './brand';
import { NavbarList } from './list';

export function Navbar() {
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';

  return (
    <nav className='absolute inset-x-0 top-0 z-10'>
      <div
        className={`flex items-center px-8 py-4 text-background ${
          isAboutPage ? 'justify-end' : 'justify-between'
        }`}
      >
        {!isAboutPage && <NavbarBrand />}
        <NavbarList />
      </div>
    </nav>
  );
}
