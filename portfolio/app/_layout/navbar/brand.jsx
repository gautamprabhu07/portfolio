'use client';

import { Copyright } from 'lucide-react';

export function NavbarBrand() {
  return (
    <div className='group flex cursor-pointer pb-5'>
      <div className='transition-transform duration-500 ease-in-expo group-hover:rotate-[360deg]'>
        <Copyright />
      </div>

      <div
        className='relative ms-2 flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-expo group-hover:pe-8'
        style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)' }}
      >
        <h5 className='transition-transform duration-500 ease-in-expo group-hover:-translate-x-full'>
          Code by
        </h5>
        <h5 className='ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-14'>
          Gautam
        </h5>
        <h5 className='absolute left-28 ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-14'>
          Prabhu
        </h5>
      </div>
    </div>
  );
}
