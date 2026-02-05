'use client';
// app/(in-progress)/contact/_components/resume/index.jsx
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';


import {
  IconBadge,
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
          <FileText size={24} strokeWidth={2.5} />
        </IconBadge>

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
            <FileText size={20} />
            View Online
          </ResumeButton>
        </ResumeActions>
      </motion.div>
    </ResumeWrapper>
  );
}