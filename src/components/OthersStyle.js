import styled, {keyframes} from "styled-components";
import {THEMES} from "../constants/Themes";

export const showToTop = keyframes`
    from {
        opacity: 0;
        transform: translateY(10em);
    }
    to {
        opacity: 1;
        transform: translateY(1em);
    }
`;

export const CookiesDiv = styled.div`
  & .row > div {
    background: ${props => THEMES[props.theme.style].surface.level1};
    padding: 15px;
    animation: ${showToTop} 1s forwards;
    transform : translateX(-1em);
    opacity: 0.8;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 ${props => THEMES[props.theme.style].primary};
  }
  & .btn {
    background : ${props => THEMES[props.theme.style].primary};
    border : unset;
    color: ${props => THEMES[props.theme.style].onSecondary};
  }
  & .btn:hover {
     background : ${props => THEMES[props.theme.style].secondary2};
     border : unset;
     color: ${props => THEMES[props.theme.style].onSecondary2};
  }
  &.hideToBottom {
        transition: 1s ease-in;
        transform: translateY(15em) translateX(-1em);
  }
  @media (max-width: 650px) {
      transform: unset;
      z-index: 9000;
  }
`;
