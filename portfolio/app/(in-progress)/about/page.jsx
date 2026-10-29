// app/(in-progress)/about/page.jsx
import { Contact, Navbar, Transition } from '@/layout';

import {
  AboutApproach,
  AboutHero,
  AboutJourney,
  AboutMotion,
  AboutPersonal,
} from './_components';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    'Full-stack developer with a strong backend and systems mindset. Engineering software that\'s practical, maintainable, and production-ready.',
};

export default function About() {
  return (
    <Transition stickySafe>
      <AboutMotion>
        <Navbar />
        <AboutHero />
        <main>
          <AboutPersonal />
          <AboutJourney />
          <AboutApproach />
        </main>
        <Contact />
      </AboutMotion>
    </Transition>
  );
}
