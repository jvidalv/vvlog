import React from "react";
import styled from "styled-components";
import { THEMES } from "../constants/Themes";

export const IconA = styled.a`
  color: ${props => THEMES[props.theme.style].primary};
  font-size: 2rem;
  padding: 0px 20px;
  transition: all 0.15s ease;
  opacity: 0.8;
  & > * {
    transition: all 0.15s ease;
  }
  &:hover > * {
    transform: scale(1.2);
    opacity: 1;
  }
  &:hover {
    color: ${props => THEMES[props.theme.style].secondary};
  }
`;
