'use client';
// app/(in-progress)/contact/_components/resume/resume.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const ResumeWrapper = styled.div`
  padding-block: clamp(5em, 10vh, 8em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  max-width: 850px;
  margin: 0 auto;
  text-align: center;
  background: hsl(210 5% 95.9%);
`;

export const IconBadge = styled(motion.div)`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: hsl(232 79% 59% / 0.1);
  border: 2px solid hsl(232 79% 59% / 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(232 79% 59%);
  margin: 0 auto 2rem;
`;

export const ResumeLabel = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: hsl(240 3.8% 46.1%);
  margin-bottom: 1.5rem;
`;

export const ResumeText = styled.p`
  font-size: 1.15rem;
  line-height: 1.75;
  color: hsl(225 7% 12%);
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const ResumeActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ResumeButton = styled(motion.a)`
  padding: 1rem 2rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: 'Cabinet Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  background: ${(props) => (props.$secondary ? 'hsl(0 0% 100%)' : 'hsl(225 7% 12%)')};
  color: ${(props) => (props.$secondary ? 'hsl(225 7% 12%)' : 'hsl(0 0% 100%)')};
  border: ${(props) => (props.$secondary ? '2px solid hsl(192 3% 90%)' : '2px solid hsl(225 7% 12%)')};

  &:hover {
    background: ${(props) => (props.$secondary ? 'hsl(225 7% 12%)' : 'hsl(232 79% 59%)')};
    color: hsl(0 0% 100%);
    border-color: ${(props) => (props.$secondary ? 'hsl(225 7% 12%)' : 'hsl(232 79% 59%)')};
    box-shadow: 0 8px 24px hsl(225 7% 12% / 0.15);
  }
`;