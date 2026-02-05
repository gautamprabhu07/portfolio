'use client';
// app/(in-progress)/contact/_components/resume/resume.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const ResumeWrapper = styled.div`
  padding-block: clamp(6em, 12vh, 10em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
  background: hsl(0 0% 100%);
`;

export const SectionTitle = styled.h4`
  font-size: clamp(1.5em, 2.2vw, 3em);
  font-weight: 700;
  line-height: 1.45;
  color: hsl(225 7% 12%);
  font-family: var(--font-neue-montreal), 'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

export const ResumeLabel = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: hsl(240 3.8% 46.1%);
  margin-bottom: 1.5rem;
  font-family: var(--font-neue-montreal), 'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

export const ResumeText = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: hsl(225 7% 12%);
  margin-bottom: 3rem;
  max-width: 700px;
  font-family: var(--font-neue-montreal), 'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

export const ResumeActions = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const ResumeButton = styled(motion.a)`
  padding: 1.25rem 2.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.33, 1, 0.68, 1);
  font-family: var(--font-neue-montreal), 'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  background: ${props => props.$secondary ? 'transparent' : 'hsl(232 79% 59%)'};
  color: ${props => props.$secondary ? 'hsl(225 7% 12%)' : 'hsl(0 0% 100%)'};
  border: ${props => props.$secondary ? '1px solid hsl(192 3% 90%)' : 'none'};

  &:hover {
    background: ${props => props.$secondary ? 'hsl(225 7% 12%)' : 'hsl(231 65% 51%)'};
    color: hsl(0 0% 100%);
    border-color: ${props => props.$secondary ? 'hsl(225 7% 12%)' : 'transparent'};
    box-shadow: 0 10px 40px ${props => props.$secondary ? 'hsl(225 7% 12% / 0.2)' : 'hsl(232 79% 59% / 0.3)'};
  }
`;