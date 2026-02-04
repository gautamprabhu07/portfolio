import { Contact, Navbar, Transition } from '@/layout';

import {
  AboutHero,
  AboutPersonal,
  AboutExperience,
  AboutEducation,
  AboutFocus,
} from './_components';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About | Gautam Prabhu',
  description:
    'Full-stack developer with a strong backend and systems mindset. Engineering software that\'s practical, maintainable, and production-ready.',
};

export default function About() {
  return (
    <Transition>
      <Navbar />
      <main>
        <AboutHero />
        <AboutPersonal />
        <AboutExperience />
        <AboutEducation />
        <AboutFocus />
      </main>
      <Contact />
    </Transition>
  );
}
