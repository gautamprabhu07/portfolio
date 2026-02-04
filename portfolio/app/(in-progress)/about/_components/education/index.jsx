'use client';
// app/(in-progress)/about/_components/education/index.jsx
import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';


import {
  BulletText,
  DateRange,
  DegreeTitle,
  EducationWrapper,
  IconBadge,
  InstitutionName,
  SectionTitle,
  TimelineConnector,
  TimelineContainer,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineLine,
} from './education.styled';

const cardVariants = {
  initial: { opacity: 0, x: -60 },
  open: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 0.2 * i,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const lineVariants = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const education = [
  {
    institution: 'Manipal Institute of Technology',
    degree: 'Bachelor of Technology (B.Tech) — Computer Science',
    dates: 'July 2024 – May 2027',
    location: 'Manipal, Karnataka',
    bullet: 'Focus on core computer science subjects, software engineering, and systems fundamentals',
  },
  {
    institution: 'Dr. T.M.A. Pai Polytechnic, Manipal',
    degree: 'Diploma — Computer Science',
    dates: '2022 – 2024',
    location: 'Manipal, Karnataka',
    bullet: 'Built strong foundations in programming, data structures, databases, and computer networks',
  },
  {
    institution: 'Vidyodaya Pre-University College, Udupi',
    degree: 'Pre-University (2nd PUC) — PCMB',
    dates: '2021 – 2023',
    location: 'Udupi, Karnataka',
  },
];

export function AboutEducation() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

  return (
    <section className='bg-muted text-foreground' ref={containerRef}>
      <EducationWrapper className='container'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className='flex items-center gap-3 mb-4'>
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            >
              <IconBadge>
                <GraduationCap size={28} strokeWidth={2.5} />
              </IconBadge>
            </motion.div>
            <SectionTitle>Education</SectionTitle>
          </div>
        </motion.div>

        <TimelineContainer>
          <TimelineConnector style={{ height: lineHeight }} />
          
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
                <TimelineLine $isLast={index === education.length - 1}>
                  <TimelineDot
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.4
                    }}
                  />
                </TimelineLine>
                
                <TimelineContent
                  whileHover={{ 
                    x: 15,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <InstitutionName>{edu.institution}</InstitutionName>
                  <DegreeTitle>{edu.degree}</DegreeTitle>
                  
                  <div className='flex flex-wrap gap-3 mt-3'>
                    <DateRange>
                      <Calendar size={14} />
                      {edu.dates}
                    </DateRange>
                    {edu.location && (
                      <DateRange>
                        <MapPin size={14} />
                        {edu.location}
                      </DateRange>
                    )}
                  </div>
                  
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