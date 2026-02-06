import { Transition } from '@/layout';
import {
  ContactContext,
  ContactHero,
  ContactLocation,
  ContactMethods,
  ContactResume,
} from './_components';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Gautam Prabhu. Available for full-stack development internships and open-source collaborations. Based in Manipal, Karnataka, India.',
};

export default function Contact() {
  return (
    <Transition>
      <ContactHero />
      <ContactMethods />
      <ContactContext />
      <ContactResume />
      <ContactLocation />
    </Transition>
  );
}
