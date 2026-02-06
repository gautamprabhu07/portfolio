'use client';
// app/_layout/description/index.styled.js

import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  gap: 2.5rem;
  padding-block: clamp(6em, 13vh, 16em);
  padding-inline: clamp(2.5em, 4vw, 8em);

  @media screen and (min-width: ${({ theme }) => theme?.breakpoints?.lg}) {
    flex-wrap: revert;
  }
`;

export const Title = styled.h4`
  font-size: clamp(1.5em, 2.2vw, 3em);
  line-height: 1.5;
  font-weight: 400;
  color: hsl(var(--foreground));
`;