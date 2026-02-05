'use client';
// app/(in-progress)/contact/_components/location/location.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const LocationWrapper = styled.div`
  padding-block: clamp(6em, 12vh, 10em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  background: hsl(210 5% 95.9%);
`;

export const SectionTitle = styled.h4`
  font-size: clamp(1.5em, 2.2vw, 3em);
  font-weight: 700;
  line-height: 1.45;
  color: hsl(225 7% 12%);
  font-family: var(--font-neue-montreal), 'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

export const LocationTitle = styled.h3`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  color: hsl(225 7% 12%);
  margin-bottom: 0.75rem;
  line-height: 1.3;
  font-family: var(--font-neue-montreal), 'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

export const LocationSubtext = styled.p`
  font-size: 1.125rem;
  color: hsl(240 3.8% 46.1%);
  line-height: 1.6;
  font-family: var(--font-neue-montreal), 'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 800px;

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
`;

export const InfoCard = styled(motion.div)`
  padding: 2.5rem 2rem;
  border-radius: 6px;
  background: hsl(0 0% 100%);
  border: 1px solid hsl(192 3% 90%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  transition: all 0.3s cubic-bezier(0.33, 1, 0.68, 1);

  &:hover {
    border-color: hsl(232 79% 59%);
    box-shadow: 0 12px 40px hsl(225 7% 12% / 0.08);
  }
`;

export const InfoIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: hsl(210 5% 95.9%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(232 79% 59%);
  transition: all 0.3s ease;

  ${InfoCard}:hover & {
    background: hsl(232 79% 59%);
    color: hsl(0 0% 100%);
  }
`;

export const InfoLabel = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: hsl(240 3.8% 46.1%);
  font-family: var(--font-neue-montreal), 'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

export const InfoValue = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: hsl(225 7% 12%);
  line-height: 1.3;
  font-family: var(--font-neue-montreal), 'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;