// app/page.jsx
import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Transition,
  Work,
} from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home',
  description:
    'Software Developer | Full-Stack, Backend & Systems | Cloud, AI Agents & Containers. Turning ideas into reliable systems.',
};

export default function Home() {
  return (
    <Transition>
      <Navbar />
      <Header />
      <main>
        <Description />
        <Work />
        <Project />
      </main>
      <Contact />
    </Transition>
  );
}
