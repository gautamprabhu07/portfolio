'use client';
// app/(in-progress)/contact/_components/context/context.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const ContextWrapper = styled.div`
  padding-block: clamp(5em, 10vh, 8em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  max-width: 850px;
  margin: 0 auto;
  text-align: center;
  background: hsl(0 0% 100%);
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

export const ContextLabel = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: hsl(240 3.8% 46.1%);
  margin-bottom: 1.5rem;
`;

export const ContextText = styled.p`
  font-size: clamp(1.15rem, 2.2vw, 1.4rem);
  line-height: 1.75;
  color: hsl(225 7% 12%);
  font-weight: 500;
`;