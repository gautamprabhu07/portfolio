'use client';
// app/(in-progress)/about/_components/personal/personal.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const PersonalWrapper = styled.div`
  padding-block: clamp(8em, 15vh, 18em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  position: relative;
  background: linear-gradient(180deg, #F5F2E9 0%, #EAF2FF 100%);
  overflow: hidden;
`;

export const FloatingShape = styled(motion.div)`
  position: absolute;
  top: ${props => props.$top || '50%'};
  left: ${props => props.$left || 'auto'};
  right: ${props => props.$right || 'auto'};
  width: 80px;
  height: 80px;
  background: rgba(230, 250, 247, 0.5);
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
  color: #5856D6;
  margin-bottom: 2rem;
  padding: 0.5rem 1.25rem;
  background: rgba(88, 86, 214, 0.1);
  border-radius: 50px;
  border: 2px solid rgba(88, 86, 214, 0.2);
`;

export const ImageFrame = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 
    0 25px 70px rgba(120, 119, 198, 0.25),
    0 15px 40px rgba(88, 86, 214, 0.2);
  border: 4px solid rgba(255, 255, 255, 0.9);

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 30px;
    padding: 2px;
    background: linear-gradient(
      135deg,
      rgba(120, 119, 198, 0.4),
      rgba(88, 86, 214, 0.4),
      rgba(230, 250, 247, 0.4)
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

export const BodyText = styled.p`
  font-size: clamp(1.05rem, 1.25vw, 1.35rem);
  line-height: 1.8;
  color: rgba(26, 26, 46, 0.85);
`;

export const HighlightText = styled.span`
  font-weight: 700;
  color: #5856D6;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(
      90deg,
      rgba(120, 119, 198, 0.5),
      rgba(88, 86, 214, 0.5)
    );
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
  background: rgba(255, 255, 255, 0.6);
  border: 2px solid rgba(120, 119, 198, 0.2);
  text-align: center;
  backdrop-filter: blur(10px);
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
    border-color: rgba(88, 86, 214, 0.4);
    box-shadow: 0 10px 30px rgba(120, 119, 198, 0.2);
  }
`;