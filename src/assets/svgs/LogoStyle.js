import styled, { keyframes } from 'styled-components';

/**
 * ----- Animations -----
 */

const toTop = keyframes`
   from {
       transform: translateY(0) ;
   }
   to {
       transform: translateY(-0.5em);
       fill: red !important;
   }
`;

const shrink = keyframes`
    from {
        transform: scale(1.5);
    }
    to {
        transform: scale(1.0);
    }
`;

export const LogoSvg = styled.svg`
  transform: scale(1.5);
  animation: ${shrink} 0.8s ease-in-out forwards;
  transition: 0.25s;
  & #big-v {
    transition: 0.5s;
    transform-origin: center center;
    fill: white !important;
  }
  & #small-v {
    transform-origin: center center;
    fill: white !important;
    animation: ${toTop} 0.5s forwards;
    animation-delay: 0.81s;
  }
  &:hover #big-v {
  }
  &:hover #small-v {
  }
`;

export const HeaderLogoSvg = styled.svg`
  background: ${({ theme }) => theme.header.right} !important;
  position: absolute;
  border-radius: 10px;
  box-shadow: 0 0 10px 3px #00000040;
  transition: 0.25s;
  left: 25px;
  margin-top: -10px;
  & > g {
    transform: scale(0.23);
  }
  & > * {
    fill: white !important;
  }
  &:hover {
    transform: translateY(-0.5em) rotate(-2deg) scale(1.15);
  }
  &:hover > * {
    //fill : ${({ theme }) => theme.secondary2} !important;
  }
  &:hover #small-v-header {
    transform: translateY(-1.5em);
  }
  @media (max-width: 700px) {
    left: 15px;
  }
`;
