import {keyframes} from "styled-components";
import {THEMES} from "../constants/Themes";

/**
 * ----- Animations -----
 */
export const pulse = keyframes`
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 ${props => THEMES[props.theme.style].secondary};
    }

    70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
`;

export const gradient = keyframes`
    0% {
        background-position: 0 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0 50%;
    }
`;

export const backArrows = keyframes`
    0% {
        content : ''
    }
     17% {
        content : '>'
    }
     35% {
        content : '>>'
    }
    50% {
        content : '>>>'
    }
    67% {
      content : '>>'
    }
    85% {
      content : '>'
    }
    100% {
      content : ''
    }
`;