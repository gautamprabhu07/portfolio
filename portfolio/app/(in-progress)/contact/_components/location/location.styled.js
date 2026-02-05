'use client';
// app/(in-progress)/contact/_components/location/location.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const LocationWrapper = styled.div`
  padding-block: clamp(5em, 10vh, 8em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  text-align: center;
  background: hsl(0 0% 100%);
`;

export const LocationIcon = styled(motion.div)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: hsl(232 79% 59% / 0.1);
  border: 3px solid hsl(232 79% 59% / 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(232 79% 59%);
  margin: 0 auto 2rem;
  box-shadow: 0 8px 24px hsl(232 79% 59% / 0.12);
`;

export const LocationTitle = styled.h3`
  font-size: clamp(1.75rem, 3.5vw, 2.25rem);
  font-weight: 700;
  color: hsl(225 7% 12%);
  margin-bottom: 1rem;
  font-family: 'Cabinet Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

export const LocationSubtext = styled.p`
  font-size: 1.15rem;
  color: hsl(240 3.8% 46.1%);
  margin-bottom: 3rem;
  line-height: 1.7;
`;

export const LocationInfo = styled.p`
  font-size: 1rem;
  color: hsl(232 79% 59%);
  font-weight: 600;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const InfoCard = styled.div`
  padding: 1.75rem 1.5rem;
  border-radius: 12px;
  background: hsl(210 5% 95.9%);
  border: 2px solid hsl(192 3% 90%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: hsl(232 79% 59% / 0.3);
    box-shadow: 0 8px 20px hsl(225 7% 12% / 0.08);
    transform: translateY(-4px);
  }
`;

export const InfoLabel = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: hsl(240 3.8% 46.1%);
`;

export const InfoValue = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  color: hsl(225 7% 12%);
`;