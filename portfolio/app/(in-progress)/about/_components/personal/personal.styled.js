'use client';
// app/(in-progress)/about/_components/personal/personal.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const PersonalWrapper = styled.div`
  padding-block: clamp(6em, 13vh, 16em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  position: relative;
  background: hsl(var(--background));
`;

export const PersonalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1.2fr 0.8fr;
    gap: 6rem;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageColumn = styled.div`
  width: 100%;
`;

export const SectionLabel = styled.div`
  display: inline-block;
  font-size: clamp(0.8rem, 0.9vw, 0.9rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: hsl(var(--muted-foreground));
  margin-bottom: 2.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid hsl(var(--border));
`;

export const ImageFrame = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 
    0 20px 60px hsl(225 7% 12% / 0.1),
    0 10px 30px hsl(0 0% 0% / 0.05);
  border: 1px solid hsl(var(--border));
  background: hsl(var(--muted));

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      hsl(232 79% 59% / 0.05) 0%,
      transparent 50%,
      hsl(0 0% 0% / 0.03) 100%
    );
    z-index: 1;
    pointer-events: none;
  }
`;

export const BodyText = styled.p`
  font-size: clamp(1.05rem, 1.2vw, 1.3rem);
  line-height: 1.75;
  color: hsl(var(--muted-foreground));
`;

export const HighlightText = styled.span`
  font-weight: 600;
  color: hsl(var(--foreground));
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled(motion.div)`
  padding: 2rem 1.5rem;
  border-radius: 8px;
  background: hsl(var(--background));
  border: 1px solid hsl(var(--border));
  text-align: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.33, 1, 0.68, 1);

  &:hover {
    background: hsl(var(--background));
    border-color: hsl(var(--primary) / 0.3);
    box-shadow: 0 10px 40px hsl(232 79% 59% / 0.12);
  }
`;