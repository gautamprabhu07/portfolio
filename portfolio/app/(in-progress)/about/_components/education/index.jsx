'use client';
// app/(in-progress)/about/_components/education/index.jsx

import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';

import {
  BulletText,
  DateRange,
  DegreeTitle,
  EducationWrapper,
  InstitutionName,
  SectionTitle,
  TimelineConnector,
  TimelineContainer,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineLine,
} from './education.styled';

const education = [
  {
    institution: 'Manipal Institute of Technology',
    degree: 'Bachelor of Technology (B.Tech) - Computer Science',
    dates: 'July 2024 - May 2027',
    bullets: [
      'Focus on core computer science subjects, software engineering, and systems fundamentals.',
      'Building production-level projects and internships alongside coursework.',
    ],
  },
  {
    institution: 'Dr. T.M.A. Pai Polytechnic, Manipal',
    degree: 'Diploma - Computer Science',
    dates: '2022 - 2024',
    bullets: [
      'Built strong foundations in programming, data structures, databases, and computer networks.',
      'Completed multiple full-stack and systems-oriented academic projects.',
    ],
  },
  {
    institution: 'Vidyodaya Pre-University College, Udupi',
    degree: 'Pre-University (2nd PUC) - PCMB',
    dates: '2021 - 2023',
  },
  {
    institution: 'Silas International School',
    degree: 'ICSE',
  },
];

export function AboutEducation() {
  return (
    <section className='bg-background text-foreground'>
      <EducationWrapper className='container'>
        <SectionTitle>Education</SectionTitle>

        <TimelineContainer>
          <TimelineConnector
            aria-hidden='true'
            style={{ height: '100%' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          />

          {education.map((item, index) => (
            <TimelineItem key={`${item.institution}-${item.degree ?? index}`}>
              <TimelineLine>
                <TimelineDot />
              </TimelineLine>
              <TimelineContent
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                <InstitutionName>{item.institution}</InstitutionName>
                <DegreeTitle>{item.degree}</DegreeTitle>
                {item.dates && <DateRange>{item.dates}</DateRange>}
                {item.bullets?.map((bullet) => (
                  <BulletText key={bullet}>
                    <Balancer>{bullet}</Balancer>
                  </BulletText>
                ))}
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </EducationWrapper>
    </section>
  );
}