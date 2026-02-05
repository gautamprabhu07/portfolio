'use client';
// app/(in-progress)/contact/_components/context/context.styled.js

import { styled } from 'styled-components';

export const ContextWrapper = styled.div`
  padding-block: clamp(5em, 10vh, 8em);
  padding-inline: clamp(2.5em, 4vw, 8em);
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
  background: hsl(210 5% 95.9%);
`;

export const ContextLabel = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: hsl(240 3.8% 46.1%);
  margin-bottom: 2rem;
  font-family: var(--font-neue-montreal), 'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

export const ContextText = styled.p`
  font-size: clamp(1.5em, 2.2vw, 3em);
  line-height: 1.45;
  color: hsl(225 7% 12%);
  font-weight: normal;
  font-family: var(--font-neue-montreal), 'Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;