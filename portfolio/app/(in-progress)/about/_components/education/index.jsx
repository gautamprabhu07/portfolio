'use client';

import { motion } from 'framer-motion';

import {
  EducationWrapper,
  SectionTitle,
  TimelineContainer,
  TimelineItem,
  TimelineLine,
  TimelineDot,
  TimelineContent,
  InstitutionName,
  DegreeTitle,
  DateRange,
  BulletText,
} from './education.styled';

const cardVariants = {
  initial: { opacity: 0, x: -20 },
  open: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.15 * i,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const education = [
  {
    institution: 'Manipal Institute of Technology',
    degree: 'Bachelor of Technology (B.Tech) — Computer Science',
    dates: 'July 2024 – May 2027',
    bullet: 'Focus on core computer science subjects, software engineering, and systems fundamentals',
  },
  {
    institution: 'Dr. T.M.A. Pai Polytechnic, Manipal',
    degree: 'Diploma — Computer Science',
    dates: '2022 – 2024',
    bullet: 'Built strong foundations in programming, data structures, databases, and computer networks',
  },
  {
    institution: 'Vidyodaya Pre-University College, Udupi',
    degree: 'Pre-University (2nd PUC) — PCMB',
    dates: '2021 – 2023',
  },
];

export function AboutEducation() {
  return (
    <section className='bg-muted text-foreground'>
      <EducationWrapper className='container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Education</SectionTitle>
        </motion.div>

        <TimelineContainer>
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution + edu.degree}
              custom={index}
              variants={cardVariants}
              initial='initial'
              whileInView='open'
              viewport={{ once: true }}
            >
              <TimelineItem>
                <TimelineLine $isLast={index === education.length - 1} />
                <TimelineDot />
                <TimelineContent>
                  <InstitutionName>{edu.institution}</InstitutionName>
                  <DegreeTitle>{edu.degree}</DegreeTitle>
                  <DateRange>{edu.dates}</DateRange>
                  {edu.bullet && <BulletText>{edu.bullet}</BulletText>}
                </TimelineContent>
              </TimelineItem>
            </motion.div>
          ))}
        </TimelineContainer>
      </EducationWrapper>
    </section>
  );
}
