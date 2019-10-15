import React from "react";
import styled from "styled-components";
import { THEMES } from "../constants/Colors";

export const Main = styled.div`
  background-color: ${props => THEMES[props.theme.style].background};
`;

export default Main;
