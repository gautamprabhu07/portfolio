'use client';
// app/(in-progress)/about/_components/experience/index.jsx

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Balancer from 'react-wrap-balancer';

import {
  BulletItem,
  BulletList,
  CardBody,
  CardGlow,
  CardHeader,
  CompanyName,
  DateRange,
  ExperienceCard,
  ExperienceGrid,
  ExperienceWrapper,
  RoleTitle,
  SectionSubtitle,
  SectionTitle,
} from './experience.styled';

const cardVariants = {
  initial: { opacity: 0, y: 60, rotateX: -15 },
  open: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      delay: 0.2 * i,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const experiences = [
  {
    company: 'GoPerch',
    role: 'Full-Stack Intern',
    dates: 'Jan 2026 – Ongoing',
    bullets: [
      'Developed a full-stack ERP platform with FastAPI backend, Next.js (TypeScript) frontend, and PostgreSQL for inventory, orders, and multi-entity management',
      'Designed REST APIs with JWT-based authentication and role-based access control for admin and employee workflows',
      'Implemented order lifecycle tracking, barcode-based operations, and status-driven business logic to streamline internal processes',
    ],
  },
  {
    company: 'Manipal Institute of Technology',
    role: 'Full-Stack Developer',
    dates: 'Dec 2025 – Ongoing',
    details: 'Letter of Recommendation System',
    bullets: [
      'Designed and implemented a full-stack Letter of Recommendation system with role-based access for alumni, faculty, and administrators',
      'Built secure backend APIs with JWT authentication, RBAC enforcement, and automated email notification workflows',
      'Deployed and tested the system on university servers under production-like constraints and tight academic deadlines',
    ],
  },
];

export function AboutExperience() {
  return (
    <section className='bg-background text-foreground'>
      <ExperienceWrapper className='container'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className='flex items-center gap-3 mb-3'>
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                y: [0, -5, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            >
              <Briefcase size={36} strokeWidth={2.5} className='text-muted-foreground' />
            </motion.div>
            <SectionTitle>Experience</SectionTitle>
          </div>
          <SectionSubtitle>
            Real-world systems built under practical constraints
          </SectionSubtitle>
        </motion.div>

        <ExperienceGrid>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.role}
              custom={index}
              variants={cardVariants}
              initial='initial'
              whileInView='open'
              viewport={{ once: true }}
              style={{ perspective: '1000px' }}
            >
              <ExperienceCard
                whileHover={{ 
                  y: -10,
                  rotateY: 3,
                  scale: 1.02,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <CardGlow />
                
                <CardHeader>
                  <div>
                    <CompanyName>{exp.company}</CompanyName>
                    {exp.details && (
                      <div style={{ 
                        fontSize: '0.95rem', 
                        color: 'hsl(240 3.8% 46.1%)', 
                        marginTop: '0.5rem',
                        fontWeight: 500,
                      }}>
                        {exp.details}
                      </div>
                    )}
                    <RoleTitle>{exp.role}</RoleTitle>
                  </div>
                  <DateRange>{exp.dates}</DateRange>
                </CardHeader>
                
                <CardBody>
                  <BulletList>
                    {exp.bullets.map((bullet, i) => (
                      <BulletItem key={i}>
                        <Balancer>{bullet}</Balancer>
                      </BulletItem>
                    ))}
                  </BulletList>
                </CardBody>
              </ExperienceCard>
            </motion.div>
          ))}
        </ExperienceGrid>
      </ExperienceWrapper>
    </section>
  );
}