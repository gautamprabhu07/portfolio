'use client';
// app/(in-progress)/about/_components/experience/experience.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const ExperienceWrapper = styled.div`
  padding-block: clamp(6em, 13vh, 16em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  background: hsl(0 0% 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      hsl(192 3% 90%),
      transparent
    );
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: hsl(225 7% 12%);
  font-family: 'Cabinet Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

export const SectionSubtitle = styled.p`
  font-size: clamp(1rem, 1.15vw, 1.2rem);
  color: hsl(240 3.8% 46.1%);
  margin-bottom: 4rem;
  font-weight: 500;

  @media screen and (min-width: 1024px) {
    margin-bottom: 6rem;
  }
`;

export const ExperienceGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (min-width: 768px) {
    gap: 4rem;
  }
`;

export const ExperienceCard = styled(motion.div)`
  padding: 3rem;
  border-radius: 24px;
  background: hsl(0 0% 100%);
  border: 2px solid hsl(192 3% 90%);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transform-style: preserve-3d;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(
      180deg,
      hsl(232 79% 59%),
      hsl(232 79% 59% / 0.5)
    );
  }

  &:hover {
    border-color: hsl(232 79% 59% / 0.3);
    box-shadow: 
      0 20px 60px hsl(225 7% 12% / 0.08),
      0 10px 30px hsl(232 79% 59% / 0.12);
  }

  @media screen and (min-width: 1024px) {
    padding: 3.5rem;
  }
`;

export const CardGlow = styled.div`
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    hsl(232 79% 59% / 0.08) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;

  ${ExperienceCard}:hover & {
    opacity: 1;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: hsl(210 5% 95.9%);
  border: 2px solid hsl(192 3% 90%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(240 3.8% 46.1%);
  transition: all 0.3s ease;

  ${ExperienceCard}:hover & {
    transform: rotate(45deg) scale(1.1);
    background: hsl(232 79% 59%);
    border-color: hsl(232 79% 59%);
    color: white;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const CompanyName = styled.h3`
  font-size: clamp(1.5rem, 1.8vw, 1.8rem);
  font-weight: 800;
  color: hsl(225 7% 12%);
  margin-bottom: 0.5rem;
  font-family: 'Cabinet Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

export const RoleTitle = styled.div`
  font-size: clamp(1rem, 1.1vw, 1.15rem);
  color: hsl(240 3.8% 46.1%);
  font-weight: 600;
  margin-top: 0.5rem;
`;

export const DateRange = styled.div`
  font-size: clamp(0.9rem, 1vw, 1rem);
  color: hsl(240 3.8% 46.1%);
  white-space: nowrap;
  font-weight: 600;
  padding: 0.5rem 1rem;
  background: hsl(210 5% 95.9%);
  border-radius: 50px;
  border: 1px solid hsl(192 3% 90%);
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const BulletItem = styled.li`
  font-size: clamp(1rem, 1.05vw, 1.1rem);
  line-height: 1.7;
  color: hsl(240 3.8% 46.1%);
  padding-left: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.6em;
    width: 8px;
    height: 8px;
    background: hsl(232 79% 59%);
    border-radius: 50%;
    box-shadow: 0 0 0 4px hsl(232 79% 59% / 0.15);
  }
`;