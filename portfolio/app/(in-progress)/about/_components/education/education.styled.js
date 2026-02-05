'use client';
// app/(in-progress)/about/_components/education/education.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const EducationWrapper = styled.div`
  padding-block: clamp(6em, 13vh, 16em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  background: hsl(210 5% 95.9%);
  position: relative;
`;

export const IconBadge = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, hsl(232 79% 59%), hsl(232 79% 52%));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 10px 30px hsl(232 79% 59% / 0.25);
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 800;
  margin-bottom: 4rem;
  color: hsl(225 7% 12%);
  font-family: 'Cabinet Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  @media screen and (min-width: 1024px) {
    margin-bottom: 6rem;
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
  left: 16px;
  top: 0;
  width: 3px;
  background: linear-gradient(
    180deg,
    hsl(232 79% 59%),
    hsl(232 79% 59% / 0.3)
  );
  transform-origin: top;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    left: 20px;
  }
`;

export const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  position: relative;
  padding-bottom: 4rem;

  @media screen and (min-width: 768px) {
    gap: 3rem;
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

export const TimelineDot = styled(motion.div)`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: hsl(232 79% 59%);
  position: relative;
  z-index: 2;
  border: 3px solid hsl(0 0% 100%);
  box-shadow: 0 4px 12px hsl(232 79% 59% / 0.4);

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    border-width: 4px;
  }
`;

export const TimelineContent = styled(motion.div)`
  padding: 2rem 2.5rem;
  border-radius: 20px;
  background: hsl(0 0% 100%);
  border: 2px solid hsl(192 3% 90%);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: hsl(232 79% 59% / 0.05);
    transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover {
    border-color: hsl(232 79% 59% / 0.3);
    box-shadow: 
      0 15px 40px hsl(225 7% 12% / 0.08),
      0 5px 20px hsl(232 79% 59% / 0.12);

    &::before {
      width: 100%;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 2.5rem 3rem;
  }
`;

export const InstitutionName = styled.h3`
  font-size: clamp(1.25rem, 1.5vw, 1.6rem);
  font-weight: 800;
  color: hsl(225 7% 12%);
  margin-bottom: 0.75rem;
  font-family: 'Cabinet Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  position: relative;
  z-index: 1;
`;

export const DegreeTitle = styled.div`
  font-size: clamp(1rem, 1.1vw, 1.15rem);
  color: hsl(240 3.8% 46.1%);
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
`;

export const DateRange = styled.div`
  font-size: clamp(0.85rem, 0.95vw, 0.95rem);
  color: hsl(240 3.8% 46.1%);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: hsl(210 5% 95.9%);
  border-radius: 50px;
  border: 1px solid hsl(192 3% 90%);
  position: relative;
  z-index: 1;
`;

export const BulletText = styled.p`
  font-size: clamp(0.95rem, 1vw, 1.05rem);
  line-height: 1.7;
  color: hsl(240 3.8% 46.1%);
  margin-top: 1.25rem;
  position: relative;
  z-index: 1;
`;