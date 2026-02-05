'use client';
// app/(in-progress)/about/_components/experience/experience.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const ExperienceWrapper = styled.div`
  padding-block: clamp(6em, 13vh, 16em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  position: relative;
  background: hsl(var(--background));
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 4.5vw, 4.5rem);
  font-weight: 400;
  margin-bottom: 0.75rem;
  color: hsl(var(--foreground));
  letter-spacing: -0.02em;
`;

export const SectionSubtitle = styled.p`
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  color: hsl(var(--muted-foreground));
  margin-bottom: 3.5rem;
  max-width: 720px;
`;

export const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 3rem;
  }
`;

export const ExperienceCard = styled(motion.div)`
  padding: 2.5rem 2.25rem;
  border-radius: 10px;
  border: 1px solid hsl(var(--border));
  background: hsl(var(--background));
  box-shadow: 0 12px 40px hsl(225 7% 12% / 0.06);
  transition: all 0.3s cubic-bezier(0.33, 1, 0.68, 1);

  &:hover {
    border-color: hsl(var(--primary) / 0.35);
    box-shadow:
      0 20px 60px hsl(225 7% 12% / 0.1),
      0 10px 30px hsl(232 79% 59% / 0.12);
  }

  @media screen and (min-width: 1024px) {
    padding: 3rem 2.75rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const CompanyName = styled.h3`
  font-size: clamp(1.25rem, 1.5vw, 1.6rem);
  font-weight: 600;
  color: hsl(var(--foreground));
  margin-bottom: 0.35rem;
`;

export const RoleTitle = styled.p`
  font-size: clamp(1rem, 1.05vw, 1.15rem);
  color: hsl(var(--muted-foreground));
  font-weight: 500;
  margin-top: 0.35rem;
`;

export const DateRange = styled.div`
  font-size: clamp(0.85rem, 0.95vw, 0.95rem);
  color: hsl(var(--muted-foreground));
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.9rem;
  background: hsl(var(--muted));
  border-radius: 6px;
  border: 1px solid hsl(var(--border));
`;

export const CardBody = styled.div`
  margin-top: 1.75rem;
`;

export const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.85rem;
`;

export const BulletItem = styled.li`
  font-size: clamp(0.95rem, 1vw, 1.05rem);
  line-height: 1.7;
  color: hsl(var(--muted-foreground));
  position: relative;
  padding-left: 1.25rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.6rem;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: hsl(var(--primary));
  }
`;
