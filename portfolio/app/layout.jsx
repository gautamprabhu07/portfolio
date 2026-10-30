import { rootMetadata } from '@/config';
import { neue_montreal } from '@/fonts';
import { MobileDock, Offcanvas } from '@/layout';
import { Providers } from '@/providers';
import './globals.css';

/** @type {import('next').Metadata} */
export const metadata = rootMetadata;

/** @type {import('next').Viewport} */
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

/** @param {import('react').PropsWithChildren<unknown>} */
export default function RootLayout({ children }) {
  return (
    <html lang='en' dir='ltr' className={neue_montreal.variable}>
      <body className={neue_montreal.className}>
        <Providers>
          <Offcanvas />
          {children}
          {/* room under the footer for the phone dock */}
          <div
            aria-hidden='true'
            className='h-[calc(5.25rem+env(safe-area-inset-bottom))] bg-foreground md:hidden'
          />
          <MobileDock />
        </Providers>
      </body>
    </html>
  );
}
