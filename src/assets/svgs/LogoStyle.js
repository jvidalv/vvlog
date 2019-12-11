import styled, {keyframes} from "styled-components";
import {THEMES} from "../../constants/Themes";

/**
 * ----- Animations -----
 */
export const showFromTop = keyframes`
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

export const shakeToBottom = keyframes`
     0% {
        transform: translate(0, 0);
     }
     50% {
        transform: translate(0, 10px);
     }
      100% {
        transform: translate(0, 0);
        fill : ${props => THEMES[props.theme.style].secondary} ;
    }
`;

export const shakeToTop = keyframes`
     0% {
        transform: translate(-5px, 0px);
     }
     50% {
        transform: translate(-5px, -5px);
     }
      100% {
        transform: translate(-5px, 0);
    }
`;

export const LogoSvg = styled.svg`
  & #big-v{
    fill:white !important;
    animation: ${shakeToBottom} 1s ease-in-out forwards;
    animation-delay: 0.7s;
  }
  & #small-v{
    fill:white !important;
    animation: ${showFromTop} 0.5s ease-in forwards;
    animation-delay: 0.3s;
  }
  
  & #top-right, #top-left{
     fill:white !important;
     animation: ${shakeToTop} 0.5s ease-in forwards;
     animation-delay: 1.6s;
     transform: translate(-5px, 0px);
  }
 
`;

