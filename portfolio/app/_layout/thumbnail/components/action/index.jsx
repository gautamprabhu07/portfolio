// app/_layout/thumbnail/components/action/index.jsx
import Link from 'next/link';

import { Center, MagneticButton } from '@/components';

/** @param {import('react').PropsWithChildren<unknown>} */
export function ThumbnailAction({ children }) {
  return (
    <Center>
      <Link 
        href='https://github.com/gautamprabhu07' 
        target='_blank' 
        rel='noopener noreferrer' 
        passHref
      >
        <MagneticButton
          variant='outline'
          className='px-10 py-8 text-base font-medium before:-top-1/2 hover:text-background'
        >
          {children}
        </MagneticButton>
      </Link>
    </Center>
  );
}