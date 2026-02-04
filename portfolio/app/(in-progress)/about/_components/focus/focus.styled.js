'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const FocusWrapper = styled.div`
  padding-block: clamp(6em, 14vh, 18em) clamp(8em, 16vh, 20em);
  padding-inline: clamp(2.5em, 4vw, 8em);
`;

export const FocusHeading = styled.h2`
  font-size: clamp(2rem, 3vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  @media screen and (min-width: ${({ theme }) => theme?.breakpoints?.lg}) {
    margin-bottom: 6rem;
  }
`;

export const AnimatedDots = styled.span`
  display: inline-flex;
  margin-left: 0.25rem;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media screen and (min-width: ${({ theme }) => theme?.breakpoints?.md}) {
    gap: 2.5rem;
  }

  @media screen and (min-width: ${({ theme }) => theme?.breakpoints?.lg}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;

export const FocusCard = styled(motion.div)`
  padding: 2.5rem 2rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.05);
  }

  @media screen and (min-width: ${({ theme }) => theme?.breakpoints?.lg}) {
    padding: 3rem 2.5rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: clamp(1.25rem, 1.5vw, 1.5rem);
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme?.colors?.background || 'hsl(var(--background))'};
`;

export const CardDescription = styled.p`
  font-size: clamp(0.95rem, 1vw, 1.05rem);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
`;
