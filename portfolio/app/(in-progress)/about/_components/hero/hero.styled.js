'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: clamp(8em, 15vw, 7em);
  padding-inline: clamp(2.5em, 4vw, 8em);
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2em, 3.5vw, 4.5em);
  line-height: 1.3;
  font-weight: 400;
`;

export const DividerLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme?.colors?.muted?.foreground || 'hsl(var(--muted-foreground))'};
`;

export const GlobeButton = styled(motion.button)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme?.colors?.muted?.foreground || 'hsl(var(--muted-foreground))'};
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background-color: ${({ theme }) => theme?.colors?.foreground || 'hsl(var(--foreground))'};
    border-color: ${({ theme }) => theme?.colors?.foreground || 'hsl(var(--foreground))'};
    
    svg {
      color: ${({ theme }) => theme?.colors?.background || 'hsl(var(--background))'};
    }
  }
`;
