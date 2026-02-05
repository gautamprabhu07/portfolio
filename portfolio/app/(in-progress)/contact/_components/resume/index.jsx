'use client';
// app/(in-progress)/contact/_components/resume/index.jsx
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';


import {
  ResumeActions,
  ResumeButton,
  ResumeLabel,
  ResumeText,
  ResumeWrapper,
  SectionTitle,
} from './resume.styled';

const reveal = {
  initial: { y: '100%' },
  open: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export function ContactResume() {
  return (
    <ResumeWrapper>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      >
        <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
          <motion.div variants={reveal} initial='initial' whileInView='open' viewport={{ once: true }}>
            <SectionTitle>Resume</SectionTitle>
          </motion.div>
        </div>

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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText size={20} />
            View Online
          </ResumeButton>
        </ResumeActions>
      </motion.div>
    </ResumeWrapper>
  );
}