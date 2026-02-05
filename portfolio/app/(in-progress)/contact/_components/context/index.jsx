'use client';
// app/(in-progress)/contact/_components/context/index.jsx

import { motion } from 'framer-motion';

import { ContextLabel, ContextText, ContextWrapper } from './context.styled';

const reveal = {
  initial: { y: '100%' },
  open: (i) => ({
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.03 * i,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
};

export function ContactContext() {
  const text = "Full-stack development opportunities, open-source collaborations, or anything tech. I'm actively seeking internship roles where I can contribute and grow.";
  const words = text.split(' ').map((word, index) => ({ id: index, word }));

  return (
    <ContextWrapper>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      >
        <ContextLabel>What I&apos;d love to discuss</ContextLabel>
        
        <ContextText>
          {words.map(({ id, word }) => (
            <span key={id} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.3em' }}>
              <motion.span
                custom={id}
                variants={reveal}
                initial='initial'
                whileInView='open'
                viewport={{ once: true }}
                style={{ display: 'inline-block' }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </ContextText>
      </motion.div>
    </ContextWrapper>
  );
}