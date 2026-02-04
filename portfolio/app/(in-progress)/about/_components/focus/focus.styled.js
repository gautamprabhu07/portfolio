'use client';
// app/(in-progress)/about/_components/focus/focus.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const FocusWrapper = styled.div`
  padding-block: clamp(8em, 16vh, 20em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(88, 86, 214, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(230, 250, 247, 0.05) 0%, transparent 60%);
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
  color: white;
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
  color: #7877C6;
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
  border: 2px solid ${props => props.$color === '#E6FAF7' ? 'rgba(230, 250, 247, 0.3)' : 'rgba(120, 119, 198, 0.3)'};
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.03) 100%
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
      ${props => props.$color || '#7877C6'},
      ${props => props.$color ? `${props.$color}60` : 'rgba(120, 119, 198, 0.6)'},
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
      ${props => props.$color ? `${props.$color}20` : 'rgba(120, 119, 198, 0.2)'} 0%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  &:hover {
    border-color: ${props => props.$color || '#7877C6'};
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0.06) 100%
    );
    box-shadow: 
      0 20px 60px ${props => props.$color ? `${props.$color}40` : 'rgba(120, 119, 198, 0.4)'},
      0 10px 30px rgba(0, 0, 0, 0.3);

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
  background: ${props => props.$color ? `${props.$color}20` : 'rgba(120, 119, 198, 0.2)'};
  border: 2px solid ${props => props.$color ? `${props.$color}40` : 'rgba(120, 119, 198, 0.4)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.$color || '#7877C6'};
  margin-bottom: 1.5rem;
  transition: all 0.4s ease;

  ${FocusCard}:hover & {
    background: ${props => props.$color || '#7877C6'};
    border-color: ${props => props.$color || '#7877C6'};
    color: white;
    transform: translateZ(20px) scale(1.1);
    box-shadow: 0 10px 30px ${props => props.$color ? `${props.$color}60` : 'rgba(120, 119, 198, 0.6)'};
  }
`;

export const CardTitle = styled.h3`
  font-size: clamp(1.35rem, 1.6vw, 1.7rem);
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: white;
  font-family: 'Cabinet Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  transition: transform 0.3s ease;

  ${FocusCard}:hover & {
    transform: translateZ(10px);
  }
`;

export const CardDescription = styled.p`
  font-size: clamp(1rem, 1.05vw, 1.1rem);
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.75);
  transition: all 0.3s ease;

  ${FocusCard}:hover & {
    color: rgba(255, 255, 255, 0.9);
    transform: translateZ(5px);
  }
`;