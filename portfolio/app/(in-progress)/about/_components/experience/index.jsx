'use client';

import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';

import {
  ExperienceWrapper,
  SectionTitle,
  SectionSubtitle,
  ExperienceGrid,
  ExperienceCard,
  CardHeader,
  CompanyName,
  RoleTitle,
  DateRange,
  CardBody,
  BulletList,
  BulletItem,
} from './experience.styled';

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>Experience</SectionTitle>
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
            >
              <ExperienceCard>
                <CardHeader>
                  <div>
                    <CompanyName>{exp.company}</CompanyName>
                    {exp.details && (
                      <div style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '0.25rem' }}>
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
