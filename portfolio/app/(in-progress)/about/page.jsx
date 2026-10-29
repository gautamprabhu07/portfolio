// app/(in-progress)/about/page.jsx
import { Contact, Navbar, Transition } from '@/layout';

import {
  AboutApproach,
  AboutBuilds,
  AboutHero,
  AboutJourney,
  AboutMotion,
  AboutPersonal,
} from './_components';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    'Software developer across full-stack, backend and systems, with a growing focus on cloud, AI agents and containers. Turning ideas into reliable systems.',
};

export default function About() {
  return (
    <Transition stickySafe>
      <AboutMotion>
        <Navbar />
        <AboutHero />
        <main>
          <AboutPersonal />
          <AboutBuilds />
          <AboutJourney />
          <AboutApproach />
        </main>
        <Contact />
      </AboutMotion>
    </Transition>
  );
}
