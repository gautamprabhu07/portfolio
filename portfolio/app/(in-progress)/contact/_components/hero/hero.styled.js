'use client';
// app/(in-progress)/contact/_components/hero/hero.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const HeroSection = styled.section`
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

export const HeroWrapper = styled.div`
  min-height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-block: clamp(6em, 12vh, 10em) clamp(3em, 6vh, 5em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  text-align: left;
  position: relative;
  z-index: 1;

  @media screen and (min-width: 768px) {
    text-align: left;
    flex-direction: column-reverse;
  }
`;

export const SubtitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  color: hsl(0 0% 100%);
  opacity: 0.9;

  svg {
    width: 28px;
    height: 28px;
    stroke-width: 1.25;
  }

  h4 {
    font-size: clamp(1.55em, 2.5vw, 2.75em);
    font-weight: normal;
    line-height: 1.3;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      display: block;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: max(8em, 12vw);
  font-weight: normal;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: hsl(0 0% 100%);
  text-transform: uppercase;
  letter-spacing: -0.02em;
  font-family: var(--font-neue-montreal), 'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  @media screen and (max-width: 768px) {
    font-size: clamp(3rem, 10vw, 6em);
  }
`;

export const HeroSubtext = styled.p`
  font-size: clamp(1.1rem, 1.3vw, 1.35rem);
  line-height: 1.7;
  color: hsl(0 0% 100% / 0.85);
  max-width: 700px;
  font-weight: normal;
`;

export const NavLinks = styled(motion.ul)`
  position: absolute;
  top: 1rem;
  right: 2rem;
  display: flex;
  align-items: center;
  gap: 0;
  z-index: 10;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 1rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ScrollIndicator = styled(motion.button)`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid hsl(0 0% 100% / 0.3);
  background: hsl(0 0% 100% / 0.05);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  animation: blink 2s ease-in-out infinite;

  svg {
    color: hsl(0 0% 100%);
    animation: bounce 2s ease-in-out infinite;
  }

  &:hover {
    border-color: hsl(0 0% 100% / 0.6);
    background: hsl(0 0% 100% / 0.1);
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