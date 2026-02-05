'use client';
// app/(in-progress)/contact/_components/methods/index.jsx

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

import {
  CopyButton,
  ExternalLinkIcon,
  MethodCard, 
  MethodIcon,
  MethodLabel,
  MethodsGrid as MethodsGridBase,
  MethodsWrapper,
  MethodTitle,
  MethodValue,
  Toast,
} from './methods.styled';

const MethodsGrid = MethodsGridBase ?? motion.div;

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
    label: 'Professional conversations',
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
  initial: { opacity: 0, y: 50 },
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
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  $copyable={method.copyable}
                >
                  <MethodIcon>
                    <IconComponent size={28} strokeWidth={2.5} />
                  </MethodIcon>

                  <MethodTitle>{method.title}</MethodTitle>
                  <MethodValue>{method.value}</MethodValue>
                  <MethodLabel>{method.label}</MethodLabel>

                  {method.copyable ? (
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
                          Copy email
                        </>
                      )}
                    </CopyButton>
                  ) : (
                    <ExternalLinkIcon>
                      <ExternalLink size={18} />
                    </ExternalLinkIcon>
                  )}
                </MethodCard>
              </motion.div>
            );
          })}
        </MethodsGrid>

        <AnimatePresence>
          {copied && (
            <Toast
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              Email copied to clipboard!
            </Toast>
          )}
        </AnimatePresence>
      </MethodsWrapper>
    </section>
  );
}
