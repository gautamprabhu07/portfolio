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
  background: linear-gradient(135deg, #EDE9FF 0%, #EAF2FF 50%, #E6FAF7 100%);
`;

export const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.4;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(88, 86, 214, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(234, 242, 255, 0.2) 0%, transparent 40%);
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
  background: radial-gradient(circle, rgba(120, 119, 198, 0.2), rgba(88, 86, 214, 0.1));
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

  @media screen and (min-width: 1024px) {
    order: 0;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(0.9rem, 1vw, 1rem);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #5856D6;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #1a1a2e;
  font-family: 'Cabinet Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

export const HeroDescription = styled.p`
  font-size: clamp(1.05rem, 1.2vw, 1.25rem);
  line-height: 1.7;
  color: rgba(26, 26, 46, 0.75);
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
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 20px 60px rgba(120, 119, 198, 0.2),
    0 10px 30px rgba(88, 86, 214, 0.15);
  border: 3px solid rgba(255, 255, 255, 0.8);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(120, 119, 198, 0.15) 0%,
      transparent 50%,
      rgba(88, 86, 214, 0.1) 100%
    );
    z-index: 1;
    pointer-events: none;
  }
`;

export const ImageOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(120, 119, 198, 0.9) 0%,
    rgba(88, 86, 214, 0.7) 50%,
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