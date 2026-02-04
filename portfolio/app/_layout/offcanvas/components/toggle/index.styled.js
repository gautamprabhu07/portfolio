import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 1.5rem;
  z-index: 40;
`;

export const Burger = styled.span`
  display: inherit;
  width: 2rem;
  height: 1rem;
  position: relative;
  z-index: 2;

  &::after,
  &::before {
    width: 100%;
    height: 2px;
    content: '';
    position: absolute;
    display: block;
    background-color: currentColor;
    z-index: 2;
    transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &::before {
    top: 0;
    transform-origin: left center;
  }

  &::after {
    bottom: 0;
    transform-origin: left center;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
    &::before {
      transform: rotate(45deg) translateY(-2px);
    }

    &::after {
      transform: rotate(-45deg) translateY(2px);
    }
  `}
`;
