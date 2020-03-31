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
      color : ${({theme}) => theme.onSurface};
      background : ${({theme}) => theme.surface.level2};
      & .toast-header{
            background : ${({theme}) => theme.surface.level1};
            color : ${({theme}) => theme.onSurface};
      }
      & .close {
           color : ${({theme}) => theme.onSurface};
      }
    }
`;