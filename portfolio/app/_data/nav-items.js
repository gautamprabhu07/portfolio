/**
 * Site navigation. `blurb` and `image` feed the sidebar's expanded rows;
 * `external` links open in a new tab.
 */
export const navItems = [
  {
    href: '/',
    title: 'home',
    blurb: 'The introduction: what I work on, selected projects and where to start.',
    image: '/images/hero-profile.png',
  },
  {
    href: 'https://drive.google.com/file/d/1LQHzYLYMSXMReSFrV9pfVW8sJiNCQO0p/view',
    title: 'resume',
    blurb: 'My CV, kept on Google Drive.',
    external: true,
  },
  {
    href: '/about',
    title: 'about',
    blurb: 'The story so far: school to internships, my toolkit and the builds.',
    image: '/images/about-1.png',
  },
  {
    href: '/contact',
    title: 'contact',
    blurb: 'Email, LinkedIn, GitHub, or draft a message here.',
    image: '/images/contact-profile.png',
  },
];
