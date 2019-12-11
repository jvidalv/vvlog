import styled, {keyframes} from "styled-components";
import {THEMES} from "../constants/Themes";

export const fade = keyframes`
   0% {
        height: 100%;
        opacity: 1;
   }
   100% {
        height: 0;
        display: none; 
        z-index:-1;
   }
`;

export const MainLoaderDiv = styled.div`
  padding-top:56px;
  position:absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    ${props => THEMES[props.theme.style].header["1"]},
    ${props => THEMES[props.theme.style].header["2"]}
  );
  z-index: 1400;
  animation: ${fade} 2s ease-in-out forwards;
 `;

