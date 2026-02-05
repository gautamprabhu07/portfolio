'use client';
// app/(in-progress)/about/_components/hero/hero.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: clamp(4em, 8vh, 10em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  position: relative;
  overflow: hidden;
  background: hsl(var(--secondary-foreground));
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    hsl(225 7% 12%) 0%,
    hsl(225 7% 18%) 50%,
    hsl(225 7% 12%) 100%
  );
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 20% 30%, hsl(232 79% 59% / 0.12) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, hsl(232 79% 59% / 0.08) 0%, transparent 50%);
    animation: pulse 8s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 6rem;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

export const ImageColumn = styled.div`
  width: 100%;
  order: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media screen and (min-width: 1024px) {
    order: 0;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(0.85rem, 0.95vw, 1rem);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: hsl(var(--background));
  opacity: 0.8;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.75rem, 5.5vw, 5.5rem);
  font-weight: 400;
  line-height: 1.15;
  margin-bottom: 2rem;
  color: hsl(var(--background));
  letter-spacing: -0.02em;
`;

export const HeroDescription = styled.p`
  font-size: clamp(1.05rem, 1.25vw, 1.35rem);
  line-height: 1.7;
  color: hsl(var(--background));
  opacity: 0.85;
  max-width: 620px;
  margin-bottom: 2.5rem;
`;

export const CTAWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: clamp(260px, 40vw, 480px);
  height: clamp(260px, 40vw, 480px);
  flex-shrink: 0;
  max-width: 480px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 
    0 20px 60px hsl(0 0% 0% / 0.4),
    0 10px 30px hsl(232 79% 59% / 0.15);
  border: 3px solid hsl(var(--background) / 0.1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      hsl(232 79% 59% / 0.15) 0%,
      transparent 50%,
      hsl(0 0% 0% / 0.2) 100%
    );
    z-index: 1;
    pointer-events: none;
  }
`;

export const ScrollIndicator = styled(motion.button)`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid hsl(var(--background) / 0.3);
  background: hsl(var(--background) / 0.05);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  animation: blink 2s ease-in-out infinite;

  svg {
    color: hsl(var(--background));
    animation: bounce 2s ease-in-out infinite;
  }

  &:hover {
    border-color: hsl(var(--background) / 0.6);
    background: hsl(var(--background) / 0.1);
    transform: scale(1.1);
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(6px); }
  }

  @media screen and (max-width: 768px) {
    bottom: 2rem;
    right: 2rem;
    width: 48px;
    height: 48px;
  }
`;