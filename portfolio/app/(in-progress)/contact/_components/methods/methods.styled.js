'use client';
// app/(in-progress)/contact/_components/methods/methods.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const MethodsWrapper = styled.div`
  padding-block: clamp(6em, 14vh, 12em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  position: relative;
  background: hsl(0 0% 100%);
`;

export const SectionTitle = styled.h4`
  font-size: clamp(1.5em, 2.2vw, 3em);
  font-weight: 700;
  line-height: 1.45;
  color: hsl(225 7% 12%);
  font-family: var(--font-neue-montreal), 'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

export const MethodsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;

export const MethodCard = styled(motion.div)`
  padding: 3rem 2.5rem;
  border-radius: 6px;
  background-color: hsl(0 0% 100%);
  border: 1px solid hsl(192 3% 90%);
  text-align: center;
  cursor: ${props => props.$copyable ? 'default' : 'pointer'};
  transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  text-decoration: none;

  &:hover {
    border-color: hsl(232 79% 59%);
    box-shadow: 0 20px 60px hsl(225 7% 12% / 0.08);
  }
`;

export const MethodIcon = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: hsl(210 5% 95.9%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(232 79% 59%);
  margin-bottom: 0.5rem;
  transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);

  ${MethodCard}:hover & {
    background: hsl(232 79% 59%);
    color: hsl(0 0% 100%);
    transform: scale(1.1);
  }
`;

export const MethodTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: hsl(225 7% 12%);
  margin-bottom: 0.25rem;
  font-family: var(--font-neue-montreal), 'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

export const MethodValue = styled.p`
  font-size: 1.05rem;
  font-weight: 600;
  color: hsl(240 3.8% 46.1%);
  word-break: break-word;
`;

export const MethodLabel = styled.p`
  font-size: 0.95rem;
  color: hsl(240 3.8% 46.1%);
  line-height: 1.6;
  font-weight: normal;
`;

export const CopyButton = styled(motion.button)`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  background: hsl(232 79% 59%);
  border: none;
  color: hsl(0 0% 100%);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s cubic-bezier(0.33, 1, 0.68, 1);
  font-family: var(--font-neue-montreal), 'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  &:hover {
    background: hsl(231 65% 51%);
    box-shadow: 0 8px 24px hsl(232 79% 59% / 0.3);
  }
`;

export const ExternalLinkIcon = styled.div`
  margin-top: 1rem;
  padding: 0.5rem;
  color: hsl(240 3.8% 46.1%);
  transition: all 0.3s cubic-bezier(0.33, 1, 0.68, 1);

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
  padding: 1rem 2rem;
  background: hsl(225 7% 12%);
  color: hsl(0 0% 100%);
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 10px 40px hsl(225 7% 12% / 0.4);
  z-index: 100;
  font-family: var(--font-neue-montreal), 'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;