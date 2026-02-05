'use client';
// app/(in-progress)/about/_components/personal/personal.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const PersonalWrapper = styled.div`
  padding-block: clamp(8em, 15vh, 18em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  position: relative;
  background: hsl(210 5% 95.9%);
  overflow: hidden;
`;

export const FloatingShape = styled(motion.div)`
  position: absolute;
  top: ${props => props.$top || '50%'};
  left: ${props => props.$left || 'auto'};
  right: ${props => props.$right || 'auto'};
  width: 80px;
  height: 80px;
  background: hsl(232 79% 59% / 0.05);
  border-radius: 20px;
  pointer-events: none;
  z-index: 0;
`;

export const PersonalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

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

export const SectionLabel = styled(motion.div)`
  display: inline-block;
  font-size: clamp(0.85rem, 0.95vw, 0.95rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: hsl(232 79% 59%);
  margin-bottom: 2rem;
  padding: 0.5rem 1.25rem;
  background: hsl(232 79% 59% / 0.08);
  border-radius: 50px;
  border: 2px solid hsl(192 3% 90%);
`;

export const ImageFrame = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 
    0 25px 70px hsl(225 7% 12% / 0.12),
    0 15px 40px hsl(232 79% 59% / 0.08);
  border: 4px solid hsl(0 0% 100%);
  background: hsl(210 5% 95.9%);

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 30px;
    padding: 2px;
    background: linear-gradient(
      135deg,
      hsl(232 79% 59% / 0.2),
      hsl(192 3% 90% / 0.3)
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const BodyText = styled.p`
  font-size: clamp(1.05rem, 1.25vw, 1.35rem);
  line-height: 1.8;
  color: hsl(240 3.8% 46.1%);
`;

export const HighlightText = styled.span`
  font-weight: 700;
  color: hsl(225 7% 12%);
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 3px;
    background: hsl(232 79% 59%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

export const StatCard = styled(motion.div)`
  padding: 1.5rem;
  border-radius: 16px;
  background: hsl(0 0% 100%);
  border: 2px solid hsl(192 3% 90%);
  text-align: center;
  cursor: pointer;

  &:hover {
    background: hsl(0 0% 100%);
    border-color: hsl(232 79% 59% / 0.3);
    box-shadow: 0 10px 30px hsl(232 79% 59% / 0.12);
  }
`;