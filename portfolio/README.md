<div id='top' align="center">

An Portfolio site template, implemented with [Next.js](https://nextjs.org/) and [Framer Motion](https://www.framer.com/motion/). Styled with [Tailwind CSS](https://tailwindcss.com/). This is one of my portfolios, but I would be pleased if these codes helped others, so I published it as an open-source project. feel free to explore it, and if you need help, ask me. I would respond as soon as possible.

<p>
  To support me, please create
  <strong>Pull request</strong>
  and give <strong>star⭐</strong>
  to this repository.
  <br/>
  I appreciate your support in advance. ❤
</p>

<p>

![GitHub top language](https://img.shields.io/github/languages/top/AliBagheri2079/dennis-snellenberg-portfolio)&nbsp;
![GitHub last commit](https://img.shields.io/github/last-commit/AliBagheri2079/dennis-snellenberg-portfolio)&nbsp;
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/AliBagheri2079/dennis-snellenberg-portfolio)&nbsp;
![GitHub release (latest by date)](https://img.shields.io/github/v/release/AliBagheri2079/dennis-snellenberg-portfolio?display_name=tag)&nbsp;
![GitHub Repo stars](https://img.shields.io/github/stars/AliBagheri2079/dennis-snellenberg-portfolio?color=yellow)&nbsp;
![GitHub forks](https://img.shields.io/github/forks/AliBagheri2079/dennis-snellenberg-portfolio)

</p>

<p>

[Technologies](#-technologies) •
[Demo](#-demo) •
[Features](#-features) •
[Pages](#-pages) •
[Contributing](#-contributing) •
[Links](#-links)

</p>

<img
  src="./public/screen-record.gif"
  loading="lazy"
  alt="home page screenshot"
/>

</div>

## 🔧 Technologies

![Next.js](https://img.shields.io/badge/-Next.js-05122A?style=for-the-badge&logo=next.js)&nbsp;
![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=for-the-badge&logo=javascript)&nbsp;
![Framer Motion](https://img.shields.io/badge/-FramerMotion-05122A?style=for-the-badge&logo=framer)&nbsp;
![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-05122A?style=for-the-badge&logo=tailwindCSS&logoColor=06B6D4)

## ✨ Demo

You can visit and explore portfolio in the [Dennis Snellenberg Portfolio](https://dennis-snellenberg-portfolio.vercel.app/) template.

## 🔥 Features

- Using Next.js Cloudinary
- Using Framer Motion
- Using Gsap with Lenis
- Using React Wrap Balancer
- Using Styled Component
- Using Tailwindcss with Custom Plugin
- Using Postcss with Plugins
- Using Clsx with twMerge
- Fully responsive
- Page Transition with Smooth Scrolling
- Linting with Eslint and Stylelint
- Format with Prettier
- Husky and Lint-staged for Pre-committing
- Pnpm Package Manager

## 📃 Pages

- Main (index)
- About
- Contact
- Work
- Custom Not Found Page

<p align="right">(<a href="#top">BACK TO TOP 🔝</a>)</p>

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🔗 Links

<p>
  <a href="https://github.com/AliBagheri2079">
    <img src="https://img.shields.io/badge/Github-000?style=flat&logo=github&logoColor=white"/>
  </a>
  <a href="https://www.linkedin.com/in/alibagheri2079">
    <img src="https://img.shields.io/badge/linkedin-0A66C2?style=flat&logo=linkedin&logoColor=white"/>
  </a>
  <a href="https://twitter.com/AliBagheri2079">
    <img src="https://img.shields.io/badge/twitter-1DA1F2?style=flat&logo=twitter&logoColor=white"/>
  </a>
</p>

<p align="right">(<a href="#top">BACK TO TOP🔝</a>)</p>

//calude

Similarly provide modified code for my contact page files, improving on the design keeping it professional and minimal:

```javascript
// app/(in-progress)/contact/_components/index.js
export { ContactHero } from './hero';
export { ContactMethods } from './methods';
export { ContactContext } from './context';
export { ContactResume } from './resume';
export { ContactLocation } from './location';
```

```javascriptreact
'use client';
// app/(in-progress)/contact/_components/hero/index.jsx

import { motion } from 'framer-motion';

import { HeroWrapper, HeroTitle, HeroSubtext } from './hero.styled';

export function ContactHero() {
  return (
    <section className='bg-background text-foreground'>
      <HeroWrapper className='container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroTitle>Let's connect</HeroTitle>
          <HeroSubtext>
            I'm open to internships, software roles, and meaningful project discussions.
          </HeroSubtext>
        </motion.div>
      </HeroWrapper>
    </section>
  );
}

```

```javascript
'use client';
// app/(in-progress)/contact/_components/hero/hero.styled.js

import { styled } from 'styled-components';

export const HeroWrapper = styled.div`
  padding-block: clamp(6em, 12vh, 10em) clamp(3em, 6vh, 5em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: hsl(225 7% 12%);
`;

export const HeroSubtext = styled.p`
  font-size: clamp(1.1rem, 1.3vw, 1.35rem);
  line-height: 1.6;
  color: hsl(240 3.8% 46.1%);
  max-width: 700px;
  margin: 0 auto;
`;
```

```javascriptreact
'use client';
// app/(in-progress)/contact/_components/methods/index.jsx

import { useState } from 'react';

import { motion } from 'framer-motion';
import { Check, Copy, Github, Linkedin, Mail } from 'lucide-react';

import {
  MethodsWrapper,
  MethodsGrid,
  MethodCard,
  MethodIcon,
  MethodTitle,
  MethodValue,
  MethodLabel,
  CopyButton,
  Toast,
} from './methods.styled';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'gautamprabhumit@gmail.com',
    label: 'Preferred for opportunities',
    href: 'mailto:gautamprabhumit@gmail.com',
    copyable: true,
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'gautamphere',
    label: 'Best for professional conversations',
    href: 'https://www.linkedin.com/in/gautamphere',
    copyable: false,
  },
  {
    icon: Github,
    title: 'GitHub',
    value: 'gautamprabhu07',
    label: 'Projects & source code',
    href: 'https://github.com/gautamprabhu07',
    copyable: false,
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  open: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.15 * i,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export function ContactMethods() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className='bg-muted text-foreground'>
      <MethodsWrapper className='container'>
        <MethodsGrid>
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.div
                key={method.title}
                custom={index}
                variants={cardVariants}
                initial='initial'
                whileInView='open'
                viewport={{ once: true }}
              >
                <MethodCard
                  as={method.copyable ? 'div' : 'a'}
                  href={!method.copyable ? method.href : undefined}
                  target={!method.copyable ? '_blank' : undefined}
                  rel={!method.copyable ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <MethodIcon>
                    <IconComponent size={28} strokeWidth={2} />
                  </MethodIcon>

                  <MethodTitle>{method.title}</MethodTitle>
                  <MethodValue>{method.value}</MethodValue>
                  <MethodLabel>{method.label}</MethodLabel>

                  {method.copyable && (
                    <CopyButton
                      onClick={() => handleCopy(method.value)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {copied ? (
                        <>
                          <Check size={16} />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={16} />
                          Click to copy
                        </>
                      )}
                    </CopyButton>
                  )}
                </MethodCard>
              </motion.div>
            );
          })}
        </MethodsGrid>

        {copied && (
          <Toast
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            Email copied to clipboard!
          </Toast>
        )}
      </MethodsWrapper>
    </section>
  );
}

```

```javascript
'use client';
// app/(in-progress)/contact/_components/methods/methods.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const MethodsWrapper = styled.div`
  padding-block: clamp(5em, 10vh, 8em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  position: relative;
`;

export const MethodsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
`;

export const MethodCard = styled(motion.div)`
  padding: 2.5rem 2rem;
  border-radius: 12px;
  background-color: hsl(0 0% 100%);
  border: 1px solid hsl(192 3% 90%);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  position: relative;

  &:hover {
    border-color: hsl(232 79% 59%);
    box-shadow: 0 10px 40px hsl(225 7% 12% / 0.08);
  }
`;

export const MethodIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: hsl(210 5% 95.9%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(232 79% 59%);
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;

  ${MethodCard}:hover & {
    background: hsl(232 79% 59%);
    color: hsl(0 0% 100%);
    transform: scale(1.1);
  }
`;

export const MethodTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: hsl(225 7% 12%);
  margin-bottom: 0.25rem;
`;

export const MethodValue = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: hsl(232 79% 59%);
  word-break: break-word;
`;

export const MethodLabel = styled.p`
  font-size: 0.875rem;
  color: hsl(240 3.8% 46.1%);
  line-height: 1.5;
`;

export const CopyButton = styled(motion.button)`
  margin-top: 0.75rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: hsl(210 5% 95.9%);
  border: 1px solid hsl(192 3% 90%);
  color: hsl(240 3.8% 46.1%);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: hsl(232 79% 59%);
    color: hsl(0 0% 100%);
    border-color: hsl(232 79% 59%);
  }
`;

export const Toast = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 1.5rem;
  background: hsl(225 7% 12%);
  color: hsl(0 0% 100%);
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  box-shadow: 0 10px 40px hsl(225 7% 12% / 0.3);
  z-index: 100;
`;
```

```javascriptreact
'use client';
// app/(in-progress)/contact/_components/context/index.jsx

import { motion } from 'framer-motion';
import { ContextLabel, ContextText, ContextWrapper } from './context.styled';

export function ContactContext() {
  return (
    <ContextWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ContextLabel>What I'd love to discuss</ContextLabel>
        <ContextText>
          Full-stack development opportunities, open-source collaborations, or anything tech. I'm
          actively seeking internship roles where I can contribute and grow.
        </ContextText>
      </motion.div>
    </ContextWrapper>
  );
}

```

```javascript
'use client';
// app/(in-progress)/contact/_components/context/context.styled.js

import { styled } from 'styled-components';

export const ContextWrapper = styled.div`
  padding-block: clamp(3em, 6vh, 5em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const ContextLabel = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: hsl(240 3.8% 46.1%);
  margin-bottom: 1rem;
`;

export const ContextText = styled.p`
  font-size: clamp(1.125rem, 2vw, 1.35rem);
  line-height: 1.7;
  color: hsl(225 7% 12%);
  font-weight: 500;
`;
```

```javascript
'use client';
// app/(in-progress)/contact/_components/resume/resume.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const ResumeWrapper = styled.div`
  padding-block: clamp(4em, 8vh, 6em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const ResumeLabel = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: hsl(240 3.8% 46.1%);
  margin-bottom: 1rem;
`;

export const ResumeText = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: hsl(225 7% 12%);
  margin-bottom: 2rem;
`;

export const ResumeActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ResumeButton = styled(motion.a)`
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  background: ${props =>
    props.$secondary ? 'hsl(0 0% 100%)' : 'hsl(225 7% 12%)'};
  color: ${props => (props.$secondary ? 'hsl(225 7% 12%)' : 'hsl(0 0% 100%)')};
  border: ${props =>
    props.$secondary
      ? '2px solid hsl(225 7% 12%)'
      : '2px solid hsl(225 7% 12%)'};

  &:hover {
    background: ${props =>
      props.$secondary ? 'hsl(225 7% 12%)' : 'hsl(232 79% 59%)'};
    color: hsl(0 0% 100%);
    border-color: ${props =>
      props.$secondary ? 'hsl(225 7% 12%)' : 'hsl(232 79% 59%)'};
  }
`;
```

```javascriptreact
'use client';
// app/(in-progress)/contact/_components/resume/index.jsx

import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  ResumeActions,
  ResumeButton,
  ResumeLabel,
  ResumeText,
  ResumeWrapper,
} from './resume.styled';

export function ContactResume() {
  return (
    <ResumeWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ResumeLabel>Want the full picture?</ResumeLabel>
        <ResumeText>
          Download my resume for a detailed overview of my experience, projects, and technical
          skills.
        </ResumeText>

        <ResumeActions>
          <ResumeButton
            as="a"
            href="/resume.pdf"
            download="Gautam_Prabhu_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={20} />
            Download Resume
          </ResumeButton>
          <ResumeButton
            as="a"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            $secondary
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View Online
          </ResumeButton>
        </ResumeActions>
      </motion.div>
    </ResumeWrapper>
  );
}

```

```javascriptreact
'use client';
// app/(in-progress)/contact/_components/location/index.jsx

import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  LocationIcon,
  LocationInfo,
  LocationSubtext,
  LocationTitle,
  LocationWrapper,
} from './location.styled';

export function ContactLocation() {
  return (
    <LocationWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <LocationIcon>
          <MapPin size={32} />
        </LocationIcon>
        <LocationTitle>Based in Manipal, Karnataka, India</LocationTitle>
        <LocationSubtext>Open to remote, hybrid, and on-site opportunities</LocationSubtext>
        <LocationInfo>Available to start immediately</LocationInfo>
      </motion.div>
    </LocationWrapper>
  );
}

```

```javascript
'use client';
// app/(in-progress)/contact/_components/location/location.styled.js

import { styled } from 'styled-components';

export const LocationWrapper = styled.div`
  padding-block: clamp(4em, 8vh, 6em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  text-align: center;
  background: hsl(210 5% 95.9%);
`;

export const LocationIcon = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: hsl(0 0% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(232 79% 59%);
  margin: 0 auto 1.5rem;
  box-shadow: 0 4px 20px hsl(225 7% 12% / 0.08);
`;

export const LocationTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: hsl(225 7% 12%);
  margin-bottom: 0.75rem;
`;

export const LocationSubtext = styled.p`
  font-size: 1.125rem;
  color: hsl(240 3.8% 46.1%);
  margin-bottom: 0.5rem;
  line-height: 1.6;
`;

export const LocationInfo = styled.p`
  font-size: 1rem;
  color: hsl(232 79% 59%);
  font-weight: 600;
`;
```

```javascriptreact
'use client';
// app/_layout/contact/index.jsx

import { useRef } from 'react';

import { motion } from 'framer-motion';

import { useContactSlider } from '@/hooks';

import { SocialInfo, UserDetails } from './components';

export function Contact() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const { transformX, transformY } = useContactSlider(containerRef);

  return (
    <motion.footer
      ref={containerRef}
      className='relative max-h-screen bg-foreground text-background'
      style={{ y: transformY }}
    >
      <div style={{ paddingBlock: 'clamp(5em, 21vh, 12em)' }}>
        <UserDetails transformX={transformX} />
        <SocialInfo />
      </div>
    </motion.footer>
  );
}

```

```javascriptreact
'use client';
// app/_layout/contact/components/social-info/index.jsx

import Link from 'next/link';

export function SocialInfo() {
  const socialLinks = [
    { href: 'https://www.instagram.com/', label: 'Instagram' },
    { href: 'https://github.com/gautamprabhu07', label: 'Github' },
    { href: 'https://www.linkedin.com/in/gautamphere', label: 'LinkedIn' },
    { href: 'mailto:gautamprabhumit@gmail.com', label: 'Mail' },
  ];

  return (
    <div className='px-12 pb-4 pt-10 flex justify-end'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-sm uppercase tracking-wider text-muted-foreground'>Socials</h3>
        <div className='flex items-center gap-6'>
          {socialLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-base transition-transform duration-200 ease-out hover:scale-110'
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

```

```javascript
'use client';
// app/_layout/contact/components/social-info/index.styled.js

import { styled } from 'styled-components';

export const ListTitle = styled.h5`
  color: ${({ theme }) => theme?.colors?.muted?.foreground};
  font-size: 0.75rem;
  line-height: 1rem;
  text-transform: uppercase;
  margin-block-end: 1rem;
`;
```

```javascriptreact
'use client';
// app/_layout/contact/components/user-details/index.jsx

import { motion } from 'framer-motion';
import { ArrowDownLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { MagneticButton } from '@/components';

import { Container, ImageWrapper, MainTitle, Row } from './index.styled';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  return (
    <Container>
      <Row>
        <div className='flex items-center gap-8'>
          <ImageWrapper>
            <Image
              src='/images/contact-profile.png'
              className='rounded-full object-cover'
              fill={true}
              alt='Gautam Prabhu Profile Picture'
            />
          </ImageWrapper>
          <MainTitle>Let's connect</MainTitle>
        </div>
      </Row>

      <Row>
        <div className='relative w-full'>
          <div className='h-[1px] bg-muted-foreground' />
          <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
            <motion.div style={{ x: transformX }}>
              <Link href='/contact' passHref>
                <MagneticButton variant='primary' size='lg'>
                  Get in touch
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </Row>

      <Row>
        <div className='flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:gap-16'>
          <div className='relative'>
            <a href='mailto:gautamprabhumit@gmail.com'>
              <MagneticButton
                variant='outline'
                size='md'
                className='border-muted-foreground whitespace-nowrap w-full lg:w-[20pc] flex items-center justify-center'
              >
                gautamprabhumit@gmail.com
              </MagneticButton>
            </a>
          </div>
          <div className='relative'>
            <a href='tel:+918073870925'>
              <MagneticButton
                variant='outline'
                size='md'
                className='border-muted-foreground px-6 flex items-center justify-center'
              >
                +91 80738 70925
              </MagneticButton>
            </a>
          </div>
        </div>
      </Row>
    </Container>
  );
}

```

```javascript
'use client';
// app/_layout/contact/components/user-details/index.styled.js

import { styled } from 'styled-components';

const containerValue = ({ theme }) => theme?.breakpoints?.container;

export const Container = styled.div`
  padding-inline: calc(clamp(2.5em, 8vw, 8em) * 2);
  margin-inline: auto;

  @media screen and (min-width: ${containerValue}) {
    max-width: ${containerValue};
  }
`;

export const Row = styled.div`
  --default-padding: clamp(5em, 21vh, 12em);

  &:nth-child(1) {
    padding-block-end: calc(var(--default-padding) / 2);
  }

  &:nth-child(2) {
    padding-block-end: calc(var(--default-padding) * 0.5);
  }
`;

export const ImageWrapper = styled.div`
  --image-size: clamp(4.5em, 6.5vw, 8em);

  position: relative;
  width: var(--image-size);
  height: var(--image-size);
`;

export const MainTitle = styled.h2`
  font-size: calc(clamp(3.25em, 7vw, 8em) * 0.875);
  line-height: 1.1;
`;
```

```javascript
// app/_layout/contact/components/index.js

export * from './social-info';
export * from './user-details';
```
