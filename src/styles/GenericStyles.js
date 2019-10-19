import React from "react";
import styled from "styled-components";
import { THEMES } from "../constants/Colors";
import { Card, Button, Form, Container } from "react-bootstrap";
import { fontsDefaults, afterBottomBar } from "./DefaultsStyles";

/**
 * ----- Overrides defaults
 */
export const H1 = styled.h1`
  color: ${props => THEMES[props.theme.style].primary};
  ${props => fontsDefaults(props)}
`;
export const H2 = styled.h2`
  color: ${props => THEMES[props.theme.style].primary};
  ${props => fontsDefaults(props)}
`;
export const H3 = styled.h3`
  color: ${props => THEMES[props.theme.style].primary};
  ${props => fontsDefaults(props)}
  &.limit-height {
    max-height: 92px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const H4 = styled.h4`
  color: ${props => THEMES[props.theme.style].primary};
  ${props => fontsDefaults(props)}
`;
export const H5 = styled.h5`
  color: ${props => THEMES[props.theme.style].secondary};
  ${props => fontsDefaults(props)}
`;
export const P = styled.p`
  color: ${props => THEMES[props.theme.style].onSurface};
  ${props => fontsDefaults(props)}
  &.on-background {
    color: ${props => THEMES[props.theme.style].onBackground};
  }
  &.limit-height {
    max-height: 72px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const A = styled.a`
  color: ${props => THEMES[props.theme.style].primary};
  ${props => fontsDefaults(props)}
  &:hover {
    color: ${props => THEMES[props.theme.style].secondary};
  }
  &::after {
    ${props => afterBottomBar(props)}
  }
`;

/**
 * ----- Used on multiple components
 */
export const CardStyled = styled(Card)`
  background: ${props => THEMES[props.theme.style].surface.level1};
  box-shadow: 1px 1px 15px rgba(67, 38, 100, 0.15);
  cursor: pointer;
  border: none;
  margin-bottom: 10px;
  &.move-up > a:hover {
    transform: translateY(-10px);
  }
  &.with-icon::before {
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
    box-shadow: 0px 0px 10px rgba(67, 38, 100, 0.15);
  }
`;

export const SidebarElement = styled(Card)`
  background: ${props => THEMES[props.theme.style].surface.level1};
  box-shadow: 1px 1px 15px rgba(67, 38, 100, 0.15);
  border: none;
  margin-bottom: 25px;
 
  &.with-icon::before {
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
    box-shadow: 0px 0px 10px rgba(67, 38, 100, 0.15);
  }
`;

/**
 * ----- Overrides defaults boostraps
 */

export const ButtonStyled = styled(Button)`
  transition: 0.5s;
  color: ${props => THEMES[props.theme.style].primary};
  background: ${props => THEMES[props.theme.style].surface.level1};
  letter-spacing: 1px;
  box-shadow: 1px 1px 15px rgba(67, 38, 100, 0.15) !important;
  border: none;
  font-size: 16px;
  padding: 10px 20px;
  &:hover {
    transform: translateY(-10px);
    background: ${props => THEMES[props.theme.style].surface.level3};
  }
  &:focus {
    background: ${props => THEMES[props.theme.style].surface.level3} !important;
    border-color: #ffffff00 !important;
  }
  &:active {
    border-color: #ffffff00 !important;
    background: ${props => THEMES[props.theme.style].surface.level3} !important;
  }
`;

export const InputStyled = styled(Form.Control)`
  transition: 0.5s;
  border: 2px solid ${props => THEMES[props.theme.style].secondary};
  background: ${props => THEMES[props.theme.style].surface.level1};
  color: ${props => THEMES[props.theme.style].onSurface};
  &:active,
  &:focus {
    color: ${props => THEMES[props.theme.style].onSurface};
    border-color: ${props => THEMES[props.theme.style].primary2};
    box-shadow: none;
    background: ${props => THEMES[props.theme.style].surface.level2};
  }
`;

export const DiagonalContainer = styled(Container)`
  padding-bottom: 50px;
  background: linear-gradient(
    to bottom,
    transparent,
    ${props => THEMES[props.theme.style].primary}
  );
  transform: skewY(6deg);
  & > * {
    transform: skewY(-6deg);
  }
`;

/**
 * ----- UNIQUES
 */

export const Main = styled.div`
  min-height: 100vh;
  background-color: ${props => THEMES[props.theme.style].background};
`;
