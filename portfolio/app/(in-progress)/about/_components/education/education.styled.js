'use client';

import { styled } from 'styled-components';

export const EducationWrapper = styled.div`
  padding-block: clamp(5em, 12vh, 16em);
  padding-inline: clamp(2.5em, 4vw, 8em);
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 3vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 4rem;

  @media screen and (min-width: ${({ theme }) => theme?.breakpoints?.lg}) {
    margin-bottom: 5rem;
  }
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 3px 1fr;
  gap: 2rem;
  position: relative;
  padding-bottom: 3rem;

  @media screen and (min-width: ${({ theme }) => theme?.breakpoints?.md}) {
    gap: 3rem;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

export const TimelineLine = styled.div`
  width: 3px;
  background-color: ${({ theme }) => theme?.colors?.border || 'hsl(var(--border))'};
  position: relative;
  opacity: ${({ $isLast }) => ($isLast ? 0 : 1)};
`;

export const TimelineDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme?.colors?.foreground || 'hsl(var(--foreground))'};
  position: absolute;
  left: -4.5px;
  top: 6px;
  z-index: 1;
`;

export const TimelineContent = styled.div`
  padding: 1.5rem 2rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme?.colors?.background || 'hsl(var(--background))'};
  border: 1px solid ${({ theme }) => theme?.colors?.border || 'hsl(var(--border))'};

  @media screen and (min-width: ${({ theme }) => theme?.breakpoints?.lg}) {
    padding: 2rem 2.5rem;
  }
`;

export const InstitutionName = styled.h3`
  font-size: clamp(1.15rem, 1.35vw, 1.35rem);
  font-weight: 700;
  color: ${({ theme }) => theme?.colors?.foreground || 'hsl(var(--foreground))'};
  margin-bottom: 0.5rem;
`;

export const DegreeTitle = styled.div`
  font-size: clamp(0.95rem, 1vw, 1.05rem);
  color: ${({ theme }) => theme?.colors?.muted?.foreground || 'hsl(var(--muted-foreground))'};
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const DateRange = styled.div`
  font-size: clamp(0.85rem, 0.95vw, 0.95rem);
  color: ${({ theme }) => theme?.colors?.muted?.foreground || 'hsl(var(--muted-foreground))'};
  margin-bottom: 0.75rem;
`;

export const BulletText = styled.p`
  font-size: clamp(0.9rem, 0.95vw, 1rem);
  line-height: 1.6;
  color: ${({ theme }) => theme?.colors?.foreground || 'hsl(var(--foreground))'};
  opacity: 0.85;
  margin-top: 0.75rem;
`;
