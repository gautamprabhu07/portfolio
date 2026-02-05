'use client';
// app/(in-progress)/contact/_components/context/index.jsx

import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

import { ContextLabel, ContextText, ContextWrapper, IconBadge } from './context.styled';

export function ContactContext() {
  return (
    <ContextWrapper>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <IconBadge
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <MessageSquare size={24} strokeWidth={2.5} />
        </IconBadge>
        
        <ContextLabel>What I&apos;d love to discuss</ContextLabel>
        <ContextText>
          Full-stack development opportunities, open-source collaborations, or anything tech. I&apos;m
          actively seeking internship roles where I can contribute and grow.
        </ContextText>
      </motion.div>
    </ContextWrapper>
  );
}