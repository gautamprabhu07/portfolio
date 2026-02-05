'use client';
// app/(in-progress)/contact/_components/hero/hero.styled.js

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const HeroWrapper = styled.div`
  padding-block: clamp(8em, 15vh, 12em) clamp(4em, 8vh, 6em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  text-align: center;
  position: relative;
  overflow: hidden;
  background: hsl(0 0% 100%);
`;

export const DecorativeElement = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 15%;
  width: clamp(80px, 12vw, 150px);
  height: clamp(80px, 12vw, 150px);
  background: radial-gradient(circle, hsl(232 79% 59% / 0.05), transparent);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  filter: blur(30px);
  pointer-events: none;
  z-index: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: hsl(225 7% 12%);
  font-family: 'Cabinet Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  position: relative;
  z-index: 1;
`;

export const HeroSubtext = styled.p`
  font-size: clamp(1.1rem, 1.35vw, 1.4rem);
  line-height: 1.7;
  color: hsl(240 3.8% 46.1%);
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;