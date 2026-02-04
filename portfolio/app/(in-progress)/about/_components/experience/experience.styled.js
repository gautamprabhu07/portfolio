'use client';

import { styled } from 'styled-components';

export const ExperienceWrapper = styled.div`
  padding-block: clamp(5em, 12vh, 16em);
  padding-inline: clamp(2.5em, 4vw, 8em);
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 3vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const SectionSubtitle = styled.p`
  font-size: clamp(0.95rem, 1vw, 1.05rem);
  color: ${({ theme }) => theme?.colors?.muted?.foreground || 'hsl(var(--muted-foreground))'};
  margin-bottom: 4rem;

  @media screen and (min-width: ${({ theme }) => theme?.breakpoints?.lg}) {
    margin-bottom: 5rem;
  }
`;

export const ExperienceGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: ${({ theme }) => theme?.breakpoints?.md}) {
    gap: 2.5rem;
  }
`;

export const ExperienceCard = styled.div`
  padding: 2rem;
  border-radius: 8px;
  border-left: 3px solid ${({ theme }) => theme?.colors?.foreground || 'hsl(var(--foreground))'};
  background-color: ${({ theme }) => theme?.colors?.muted?.DEFAULT || 'hsl(var(--muted))'};
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  @media screen and (min-width: ${({ theme }) => theme?.breakpoints?.lg}) {
    padding: 2.5rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  @media screen and (min-width: ${({ theme }) => theme?.breakpoints?.md}) {
    flex-wrap: nowrap;
  }
`;

export const CompanyName = styled.h3`
  font-size: clamp(1.25rem, 1.5vw, 1.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme?.colors?.foreground || 'hsl(var(--foreground))'};
  margin-bottom: 0.25rem;
`;

export const RoleTitle = styled.div`
  font-size: clamp(0.95rem, 1vw, 1.05rem);
  color: ${({ theme }) => theme?.colors?.muted?.foreground || 'hsl(var(--muted-foreground))'};
  font-weight: 500;
`;

export const DateRange = styled.div`
  font-size: clamp(0.85rem, 0.95vw, 0.95rem);
  color: ${({ theme }) => theme?.colors?.muted?.foreground || 'hsl(var(--muted-foreground))'};
  white-space: nowrap;
  font-weight: 500;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const BulletItem = styled.li`
  font-size: clamp(0.95rem, 1vw, 1.05rem);
  line-height: 1.6;
  color: ${({ theme }) => theme?.colors?.foreground || 'hsl(var(--foreground))'};
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme?.colors?.foreground || 'hsl(var(--foreground))'};
    font-weight: 700;
  }
`;
