import React from "react";
import styled from "styled-components";
import { THEMES } from "../constants/Colors";
import { Card } from "react-bootstrap";

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
export const PoB = styled.p`
  color: ${props => THEMES[props.theme.style].onBackground};
`;

/**
 * Used on multiple components
 */
export const CardStyled = styled(Card)`
  background: ${props => THEMES[props.theme.style].surface.level1};
  box-shadow: 1px 1px 15px rgba(67, 38, 100, 0.15);
  cursor: pointer;
  border: none;
  &.move-up > a:hover {
    transform: translateY(-10px);
  }
  &:not(: first-child) {
    margin-top: 15px;
  }
  &.with-icon:before {
    content:'${props => (props.icon ? props.icon : "🔥")}';
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
    display: inline-flex;
    justify-content: center;
    position: absolute;
    right: -0.9rem;
    background: ${props => THEMES[props.theme.style].surface.level1};
    border-radius: 50%;
    align-items: center;
    top: -0.8rem;
      transition: 1s;

  }
`;
