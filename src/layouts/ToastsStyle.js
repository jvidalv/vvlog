import styled from "styled-components";
import {THEMES} from "../constants/Themes";

export const ToastsContainer = styled.div`
    position: fixed;
    right: 31px;
    top: 67px;
    z-index: 1000;
    width: 300px;
    overflow: unset;
  
    & .toast {
      color : ${props => THEMES[props.theme.style].onSurface};
      background : ${props => THEMES[props.theme.style].surface.level2};
      & .toast-header{
            background : ${props => THEMES[props.theme.style].surface.level1};
            color : ${props => THEMES[props.theme.style].onSurface};
      }
      & .close {
           color : ${props => THEMES[props.theme.style].onSurface};
      }
    }
`;