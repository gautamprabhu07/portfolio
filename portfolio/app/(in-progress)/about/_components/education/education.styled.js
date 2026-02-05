'use client';
// app/(in-progress)/about/_components/education/education.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const EducationWrapper = styled.div`
  padding-block: clamp(6em, 13vh, 16em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  background: hsl(var(--muted));
  position: relative;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 4.5vw, 4.5rem);
  font-weight: 400;
  margin-bottom: 4rem;
  color: hsl(var(--foreground));
  letter-spacing: -0.02em;

  @media screen and (min-width: 1024px) {
    margin-bottom: 5rem;
  }
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 900px;
`;

export const TimelineConnector = styled(motion.div)`
  position: absolute;
  left: 8px;
  top: 0;
  width: 2px;
  background: hsl(var(--primary));
  transform-origin: top;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    left: 10px;
  }
`;

export const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  position: relative;
  padding-bottom: 3rem;

  @media screen and (min-width: 768px) {
    gap: 2.5rem;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

export const TimelineLine = styled.div`
  width: auto;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const TimelineDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: hsl(var(--primary));
  position: relative;
  z-index: 2;
  border: 2px solid hsl(var(--background));
  box-shadow: 0 0 0 4px hsl(var(--muted));

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
    border-width: 3px;
  }
`;

export const TimelineContent = styled(motion.div)`
  padding: 2rem 2.5rem;
  border-radius: 8px;
  background: hsl(var(--background));
  border: 1px solid hsl(var(--border));
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    border-color: hsl(var(--primary) / 0.3);
    box-shadow: 
      0 15px 40px hsl(225 7% 12% / 0.08),
      0 5px 20px hsl(232 79% 59% / 0.1);
  }

  @media screen and (min-width: 1024px) {
    padding: 2.5rem 3rem;
  }
`;

export const InstitutionName = styled.h3`
  font-size: clamp(1.25rem, 1.5vw, 1.6rem);
  font-weight: 600;
  color: hsl(var(--foreground));
  margin-bottom: 0.5rem;
`;

export const DegreeTitle = styled.div`
  font-size: clamp(1rem, 1.1vw, 1.15rem);
  color: hsl(var(--muted-foreground));
  font-weight: 500;
  margin-bottom: 0.75rem;
`;

export const DateRange = styled.div`
  font-size: clamp(0.85rem, 0.95vw, 0.95rem);
  color: hsl(var(--muted-foreground));
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: hsl(var(--muted));
  border-radius: 6px;
  border: 1px solid hsl(var(--border));
`;

export const BulletText = styled.p`
  font-size: clamp(0.95rem, 1vw, 1.05rem);
  line-height: 1.7;
  color: hsl(var(--muted-foreground));
  margin-top: 1rem;
`;