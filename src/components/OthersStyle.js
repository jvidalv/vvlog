import styled, {keyframes} from "styled-components";
import {THEMES} from "../constants/Themes";

export const showToTop = keyframes`
    from {
        opacity: 0;
        transform: translateY(10em) translateX(-1em);;
    }

    to {
        opacity: 1;
        transform: translateY(1em) translateX(-1em);
    }
`;

export const CookiesDiv = styled.div`
  & .row > div {
    background: ${props => THEMES[props.theme.style].surface.level1};
    padding: 15px;
    animation: ${showToTop} 1s forwards;
    opacity: 0.8;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 ${props => THEMES[props.theme.style].secondary};
  }
  & .btn {
    background : ${props => THEMES[props.theme.style].secondary};
    border : unset;
    color: ${props => THEMES[props.theme.style].onSecondary};
  }
  & .btn:hover {
     background : ${props => THEMES[props.theme.style].secondary2};
     border : unset;
     color: ${props => THEMES[props.theme.style].onSecondary2};
  }
`;
