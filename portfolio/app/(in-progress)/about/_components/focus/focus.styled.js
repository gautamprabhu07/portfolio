'use client';
// app/(in-progress)/about/_components/focus/focus.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const FocusWrapper = styled.div`
  padding-block: clamp(8em, 16vh, 20em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  position: relative;
  overflow: hidden;
  background: hsl(225 7% 12%);
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
    50% { opacity: 0.8; }
  }
`;

export const FocusHeading = styled.h2`
  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 800;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: hsl(0 0% 100%);
  font-family: 'Cabinet Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  position: relative;
  z-index: 1;

  @media screen and (min-width: 1024px) {
    margin-bottom: 7rem;
  }
`;

export const AnimatedDots = styled.span`
  display: inline-flex;
  margin-left: 0.25rem;
  color: hsl(232 79% 59%);
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  position: relative;
  z-index: 1;

  @media screen and (min-width: 768px) {
    gap: 3rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3.5rem;
  }
`;

export const FocusCard = styled(motion.div)`
  padding: 3rem 2.5rem;
  border-radius: 24px;
  border: 2px solid hsl(0 0% 100% / 0.1);
  background: linear-gradient(
    135deg,
    hsl(0 0% 100% / 0.05) 0%,
    hsl(0 0% 100% / 0.02) 100%
  );
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transform-style: preserve-3d;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(
      135deg,
      hsl(232 79% 59% / 0.3),
      hsl(232 79% 59% / 0.1),
      transparent
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      hsl(232 79% 59% / 0.1) 0%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  &:hover {
    border-color: hsl(232 79% 59% / 0.3);
    background: linear-gradient(
      135deg,
      hsl(0 0% 100% / 0.08) 0%,
      hsl(0 0% 100% / 0.04) 100%
    );
    box-shadow: 
      0 20px 60px hsl(232 79% 59% / 0.2),
      0 10px 30px hsl(0 0% 0% / 0.3);

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 3.5rem 3rem;
  }
`;

export const CardIcon = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 18px;
  background: hsl(232 79% 59% / 0.1);
  border: 2px solid hsl(232 79% 59% / 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(232 79% 59%);
  margin-bottom: 1.5rem;
  transition: all 0.4s ease;

  ${FocusCard}:hover & {
    background: hsl(232 79% 59%);
    border-color: hsl(232 79% 59%);
    color: hsl(0 0% 100%);
    transform: translateZ(20px) scale(1.1);
    box-shadow: 0 10px 30px hsl(232 79% 59% / 0.4);
  }
`;

export const CardTitle = styled.h3`
  font-size: clamp(1.35rem, 1.6vw, 1.7rem);
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: hsl(0 0% 100%);
  font-family: 'Cabinet Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  transition: transform 0.3s ease;

  ${FocusCard}:hover & {
    transform: translateZ(10px);
  }
`;

export const CardDescription = styled.p`
  font-size: clamp(1rem, 1.05vw, 1.1rem);
  line-height: 1.75;
  color: hsl(0 0% 100% / 0.7);
  transition: all 0.3s ease;

  ${FocusCard}:hover & {
    color: hsl(0 0% 100% / 0.9);
    transform: translateZ(5px);
  }
`;