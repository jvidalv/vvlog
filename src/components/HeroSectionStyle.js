import styled from 'styled-components'
import { arrowsLeft } from '../styles/AnimationsStyles'

export const HeroSectionStyled = styled.div`
  text-align: center;
  padding-top: 2em;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.header.left},
    ${({ theme }) => theme.header.right}
  );
  margin-bottom: 1em;
  padding-bottom: 6.5em;
  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
  clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
  @media (max-width: 600px) {
    padding-bottom: 9.5em;
  }
`

export const HeroH1 = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-family: Recursive, 'Segoe UI', 'Helvetica Neue', Helvetica, Roboto, 'Open Sans', FreeSans,
    sans-serif;
  font-weight: 300;
  font-size: 3em;
  &.extra {
    color: #fff;
    text-shadow: 0 0 14px rgba(0, 0, 0, 0.28);
    @media (max-width: 650px) {
      font-size: 3em !important;
    }
  }
  @media (max-width: 650px) {
    font-size: 1.8rem;
  }
`

export const HeroH4 = styled.h4`
  color: ${({ theme }) => theme.onBackground};
  font-weight: 300;
  & > a {
    color: ${({ theme }) => theme.secondary};
    position: relative;
    transition: all 2s ease-in-out;
  }
  & > a:hover::before {
    animation: ${arrowsLeft} 2s infinite;
    content: '<<<';
    position: absolute;
    left: -55px;
  }
`

export const HeroP = styled.p`
  color: #fff;
  font-size: 1.2em;
  font-weight: 300;

  @media (max-width: 600px) {
    font-size: 1em;
  }
`
