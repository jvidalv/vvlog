import styled, {keyframes} from "styled-components";
import {THEMES} from "../../constants/Themes";

/**
 * ----- Animations -----
 */
const showFromTop = keyframes`
   0% {
        opacity: 0;
        transform: translate(0, -40px);
   }
   70% {
        opacity: 1; 
        transform: translate(0, 10px);
   }
   100% {
        opacity: 1; 
        transform: translate(0, 0);
   }
`;

const shakeToBottom = keyframes`
     0% {
        transform: translate(0, 0);
     }
     50% {
        transform: translate(0, 20px);
     }
      100% {
        transform: translate(0, 0);
    }
`;

const grow = keyframes`
    0% {
        transform: scale(0.9);
    }
    70% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1.0);
    }
`;

export const LogoSvg = styled.svg`
    transform: scale(0.9);
    animation: ${grow} 2s forwards;
    animation-delay: 0.7s;
    border-radius:50%;
    transition: 0.25s;
    &:hover #big-v{
      fill:  ${props => THEMES[props.theme.style].secondary} !important;
      transition: 0.25s;
    }
    & #big-v{
      transition: 0.5s;
      transform-origin: center center;
      fill:white !important;
      animation: ${shakeToBottom} 1s ease-in-out forwards;
      animation-delay: 0.7s;
    }
    & #small-v{
      opacity: 0;
      transform-origin: center center;
      fill:white !important;
      animation: ${showFromTop} 0.5s ease-in forwards;
      animation-delay: 0.3s;
    }
`;

