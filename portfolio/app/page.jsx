// app/page.jsx
import {
  AboutInvite,
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Showcase,
  Transition,
} from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home',
  description:
    'Software Developer | Full-Stack, Backend & Systems | Cloud, AI Agents & Containers. Turning ideas into reliable systems.',
};

export default function Home() {
  return (
    <Transition stickySafe>
      <Navbar />
      <Header />
      <main>
        <Description />
        <Showcase />
        <AboutInvite />
        <Project />
      </main>
      <Contact />
    </Transition>
  );
}
