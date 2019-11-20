import styled from "styled-components";
import {THEMES} from "../constants/Themes";

export const MainLoaderDiv = styled.div`
  position:absolute;
  top: 0;
  width: 100%;
  height: 100%;
 background: linear-gradient(
    to right,
    ${props => THEMES[props.theme.style].header["1"]},
    ${props => THEMES[props.theme.style].header["2"]}
  );
  z-index: 9999;
 `;
