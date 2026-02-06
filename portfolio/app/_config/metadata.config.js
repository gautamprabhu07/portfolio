/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://gautam-prabhu-portfolio.vercel.app/'),
  title: {
    template: '%s | Gautam Prabhu',
    default: 'Gautam Prabhu • Software Developer',
  },
  description:
    'Aspiring Software Developer specializing in Web Full-Stack, Backend & Systems development with Cloud fundamentals. Based in Manipal, India. Turning ideas into reliable systems.',
  generator: 'Gautam Prabhu',
  applicationName: 'Gautam Prabhu Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Software Development', 'Full-Stack', 'Backend', 'Systems', 'Cloud', 'React', 'Node.js', 'Python'],
  authors: [
    { name: 'Gautam Prabhu', url: 'https://github.com/gautamprabhu07' },
  ],
  creator: 'Gautam Prabhu',
  publisher: 'Gautam Prabhu',
  icons: {
    icon: '/images/contact-profile.png',
    shortcut: '/images/contact-profile.png',
    apple: '/images/contact-profile.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gautam Prabhu',
    description:
      'Aspiring Software Developer specializing in Web Full-Stack, Backend & Systems development with Cloud fundamentals. Based in Manipal, India.',
    siteId: '',
    creator: '@gautamprabhu',
    creatorId: '',
    images: {
      url: 'https://gautam-prabhu-portfolio.vercel.app/screenshot.png',
      alt: 'Gautam Prabhu Portfolio',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
