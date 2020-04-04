import {keyframes} from "styled-components";

export const pulse = keyframes`
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 ${({theme}) => theme.secondary};
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
        background-position: 0 2%;
    }
    50% {
        background-position: 4% 2%;
    }
    100% {
        background-position: 0 2%;
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

export const arrowsLeft = keyframes`
    0% {
        content : ''
    }
     17% {
        content : '<'
    }
     35% {
        content : '<<'
    }
    50% {
        content : '<<<'
    }
    67% {
      content : '<<'
    }
    85% {
      content : '<'
    }
    100% {
      content : ''
    }
`;

export const gradientToRight = keyframes`
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

export const hueRotate = keyframes`
    0% {
        filter: hue-rotate(0deg);
    }
    50% {
        filter: hue-rotate(360deg);
    }
`;
export const handWave = keyframes`
    0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    }

    50% {
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
    }
    
    100% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    }
`;


export const dissapearToRight = keyframes`
    from {
        transform: translateX(0px);
    }
    to {
       transform: translateX(500px);
       opacity: 0;
    }
`;

export const growBig = keyframes`
    0% {
        
    }
    70% {
       transform: scale(2);
       opacity: 1;
    }
    100% {
       transform: scale(1.7);
       opacity: 1;
    }
`;