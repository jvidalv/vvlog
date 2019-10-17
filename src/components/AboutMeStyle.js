import React from "react";
import styled from "styled-components";
import { THEMES } from "../constants/Colors";

export const A = styled.a`
  color: ${props => THEMES[props.theme.style].primary};
  font-family: "IBM Plex Mono";
  font-style: italic;
  font-size: 1.6rem;
`;
