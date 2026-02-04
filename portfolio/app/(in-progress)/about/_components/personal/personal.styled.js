'use client';

import { styled } from 'styled-components';

export const PersonalWrapper = styled.div`
  padding-block: clamp(5em, 12vh, 16em);
  padding-inline: clamp(2.5em, 4vw, 8em);
`;

export const PersonalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme?.breakpoints?.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageColumn = styled.div`
  width: 100%;
`;

export const ImageFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme?.colors?.border || 'hsl(var(--border))'};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
`;

export const BodyText = styled.p`
  font-size: clamp(1rem, 1.2vw, 1.125rem);
  line-height: 1.7;
  color: ${({ theme }) => theme?.colors?.foreground || 'hsl(var(--foreground))'};
`;

export const HighlightText = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme?.colors?.foreground || 'hsl(var(--foreground))'};
`;
