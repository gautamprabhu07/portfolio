'use client';
// app/(in-progress)/about/_components/focus/focus.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const FocusWrapper = styled.div`
  padding-block: clamp(6em, 13vh, 16em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  position: relative;
  overflow: hidden;
  background: hsl(var(--foreground));
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 30%, hsl(232 79% 59% / 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, hsl(232 79% 59% / 0.05) 0%, transparent 50%);
  pointer-events: none;
  animation: pulse 10s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 0.9; }
  }
`;

export const FocusHeading = styled.h2`
  font-size: clamp(2.5rem, 4.5vw, 4.5rem);
  font-weight: 400;
  margin-bottom: 4rem;
  color: hsl(var(--background));
  position: relative;
  z-index: 1;
  letter-spacing: -0.02em;

  @media screen and (min-width: 1024px) {
    margin-bottom: 6rem;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  position: relative;
  z-index: 1;

  @media screen and (min-width: 768px) {
    gap: 2.5rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;

export const FocusCard = styled(motion.div)`
  padding: 3rem 2.5rem;
  border-radius: 8px;
  border: 1px solid hsl(var(--background) / 0.1);
  background: linear-gradient(
    135deg,
    hsl(var(--background) / 0.03) 0%,
    hsl(var(--background) / 0.01) 100%
  );
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      hsl(232 79% 59% / 0.05) 0%,
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    border-color: hsl(232 79% 59% / 0.3);
    background: linear-gradient(
      135deg,
      hsl(var(--background) / 0.05) 0%,
      hsl(var(--background) / 0.02) 100%
    );
    box-shadow: 
      0 20px 60px hsl(0 0% 0% / 0.3),
      0 10px 30px hsl(232 79% 59% / 0.15);

    &::before {
      opacity: 1;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 3.5rem 3rem;
  }
`;

export const CardIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background: hsl(232 79% 59% / 0.1);
  border: 1px solid hsl(232 79% 59% / 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(232 79% 59%);
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  ${FocusCard}:hover & {
    background: hsl(232 79% 59%);
    border-color: hsl(232 79% 59%);
    color: hsl(var(--background));
    transform: scale(1.08);
  }
`;

export const CardTitle = styled.h3`
  font-size: clamp(1.35rem, 1.55vw, 1.65rem);
  font-weight: 600;
  margin-bottom: 1rem;
  color: hsl(var(--background));
  transition: transform 0.3s ease;

  ${FocusCard}:hover & {
    transform: translateX(5px);
  }
`;

export const CardDescription = styled.p`
  font-size: clamp(1rem, 1.05vw, 1.1rem);
  line-height: 1.7;
  color: hsl(var(--background) / 0.75);
  transition: all 0.3s ease;

  ${FocusCard}:hover & {
    color: hsl(var(--background) / 0.9);
  }
`;