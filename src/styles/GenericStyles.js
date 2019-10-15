import React from "react";
import styled from "styled-components";
import { THEMES } from "../constants/Colors";

/**
 * Overrides defaults
 */
export const H1 = styled.h1`
  color: ${props => THEMES[props.theme.style].primary};
`;
export const H2 = styled.h2`
  color: ${props => THEMES[props.theme.style].primary};
`;
export const H3 = styled.h3`
  color: ${props => THEMES[props.theme.style].primary};
`;
export const H4 = styled.h4`
  color: ${props => THEMES[props.theme.style].primary};
`;
export const H5 = styled.h5`
  color: ${props => THEMES[props.theme.style].secondary};
`;
export const P = styled.p`
  color: ${props => THEMES[props.theme.style].onSurface};
`;
