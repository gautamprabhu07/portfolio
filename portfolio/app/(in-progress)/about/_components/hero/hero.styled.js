'use client';
// app/(in-progress)/about/_components/hero/hero.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const HeroWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-block: clamp(4em, 8vh, 8em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  position: relative;
  overflow: hidden;
  background: hsl(0 0% 100%);
`;

export const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.3;
  background-image: 
    radial-gradient(circle at 20% 30%, hsl(232 79% 59% / 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, hsl(210 5% 95.9% / 0.8) 0%, transparent 50%);
  pointer-events: none;
`;

export const FloatingOrb = styled(motion.div)`
  position: absolute;
  top: ${props => props.$top || '50%'};
  left: ${props => props.$left || 'auto'};
  right: ${props => props.$right || 'auto'};
  width: clamp(100px, 15vw, 200px);
  height: clamp(100px, 15vw, 200px);
  border-radius: 50%;
  background: radial-gradient(circle, hsl(232 79% 59% / 0.08), hsl(210 5% 95.9% / 0.5));
  filter: blur(40px);
  pointer-events: none;
  z-index: 0;
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 6rem;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageColumn = styled.div`
  width: 100%;
  order: -1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    order: 0;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(0.9rem, 1vw, 1rem);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: hsl(192 3% 61%);
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: hsl(225 7% 12%);
  font-family: 'Cabinet Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

export const HeroDescription = styled.p`
  font-size: clamp(1.05rem, 1.2vw, 1.25rem);
  line-height: 1.7;
  color: hsl(240 3.8% 46.1%);
  max-width: 600px;
  margin-bottom: 2.5rem;
`;

export const CTAWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const ImageWrapper = styled(motion.div)`
  position: relative;
  width: clamp(280px, 40vw, 520px);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 
    0 20px 60px hsl(225 7% 12% / 0.1),
    0 10px 30px hsl(232 79% 59% / 0.08);
  border: 3px solid hsl(0 0% 100%);
  background: hsl(210 5% 95.9%);
  padding: 0;
  margin: 0 auto;
  
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      hsl(232 79% 59% / 0.08) 0%,
      transparent 50%,
      hsl(192 3% 90% / 0.1) 100%
    );
    z-index: 0;
    pointer-events: none;
  }

  &:hover {
    box-shadow: 
      0 25px 70px hsl(225 7% 12% / 0.12),
      0 15px 40px hsl(232 79% 59% / 0.1);
  }

  img {
    position: relative;
    z-index: 1;
  }
`;

export const ImageOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    hsl(225 7% 12% / 0.85) 0%,
    hsl(232 79% 59% / 0.6) 50%,
    transparent 100%
  );
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 2rem;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.4s ease;

  &:hover {
    opacity: 1;
  }
`;