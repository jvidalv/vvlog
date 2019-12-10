import styled, {keyframes} from "styled-components";
import {THEMES} from "../../constants/Themes";

/**
 * ----- Animations -----
 */
export const showAndColor = keyframes`
    from {
        opacity: 0;
        fill: ${props => THEMES[props.theme.style].secondary};
    }

    to {
        opacity: 1;
        fill: ${props => THEMES[props.theme.style].primary};
    }

   
`;

export const LogoSvg = styled.svg`
  & #big-v{
    fill: ${props => THEMES[props.theme.style].primary} !important
  }
  & #big-s-v{
    fill: ${props => THEMES[props.theme.style].secondary} !important
  }
  & #layer1 path {
   opacity: 0;
   animation: ${showAndColor} 3s ease-in forwards;
    &#poly-2 {
    animation-delay: 0.35s;
    }
    &#poly-3 {
    animation-delay: 0.5s;
    }
    &#poly-4 {
    animation-delay: 0.65s;
    }
    &#poly-5 {
    animation-delay: 1s;
    }
    &#poly-6 {
    animation-delay: 1.25s;
    }
     &#poly-7 {
    animation-delay: 1.5s;
    }
  }
`;

