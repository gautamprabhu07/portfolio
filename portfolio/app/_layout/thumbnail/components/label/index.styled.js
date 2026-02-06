'use client';

import { styled } from 'styled-components';

export const Label = styled.h3`
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme?.colors?.muted?.foreground};
`;
