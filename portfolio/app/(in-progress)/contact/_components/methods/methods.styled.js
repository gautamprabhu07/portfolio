'use client';
// app/(in-progress)/contact/_components/methods/methods.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const MethodsWrapper = styled.div`
  padding-block: clamp(6em, 12vh, 10em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  position: relative;
  background: hsl(210 5% 95.9%);
`;

export const MethodsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
`;

export const MethodCard = styled(motion.div)`
  padding: 3rem 2.5rem;
  border-radius: 16px;
  background-color: hsl(0 0% 100%);
  border: 2px solid hsl(192 3% 90%);
  text-align: center;
  cursor: ${props => props.$copyable ? 'default' : 'pointer'};
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  text-decoration: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: hsl(232 79% 59%);
    border-radius: 16px 16px 0 0;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: hsl(232 79% 59% / 0.4);
    box-shadow: 0 12px 40px hsl(225 7% 12% / 0.1);

    &::before {
      transform: scaleX(1);
    }
  }
`;

export const MethodIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: hsl(210 5% 95.9%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(232 79% 59%);
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;

  ${MethodCard}:hover & {
    background: hsl(232 79% 59%);
    color: hsl(0 0% 100%);
    transform: scale(1.1);
  }
`;

export const MethodTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  color: hsl(225 7% 12%);
  margin-bottom: 0.25rem;
  font-family: 'Cabinet Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

export const MethodValue = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: hsl(240 3.8% 46.1%);
  word-break: break-word;
  margin-bottom: 0.25rem;
`;

export const MethodLabel = styled.p`
  font-size: 0.9rem;
  color: hsl(240 3.8% 46.1%);
  line-height: 1.5;
`;

export const CopyButton = styled(motion.button)`
  margin-top: 1rem;
  padding: 0.65rem 1.25rem;
  border-radius: 8px;
  background: hsl(210 5% 95.9%);
  border: 2px solid hsl(192 3% 90%);
  color: hsl(240 3.8% 46.1%);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background: hsl(232 79% 59%);
    color: hsl(0 0% 100%);
    border-color: hsl(232 79% 59%);
  }
`;

export const ExternalLinkIcon = styled.div`
  margin-top: 1rem;
  padding: 0.5rem;
  color: hsl(240 3.8% 46.1%);
  transition: all 0.2s ease;

  ${MethodCard}:hover & {
    color: hsl(232 79% 59%);
    transform: translateX(4px) translateY(-4px);
  }
`;

export const Toast = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 1.75rem;
  background: hsl(225 7% 12%);
  color: hsl(0 0% 100%);
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  box-shadow: 0 10px 40px hsl(225 7% 12% / 0.3);
  z-index: 100;
`;