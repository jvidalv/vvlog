import styled, {keyframes} from "styled-components";
import {THEMES} from "../constants/Themes";
import {Button, Card, Container, Form} from "react-bootstrap";
import {afterBottomBar, borderLeft, fontsDefaults} from "./DefaultsStyles";
import {pulse} from "./AnimationsStyles";

/**
 * ----- Overrides defaults
 */
export const H1 = styled.h1`
  color: ${props => THEMES[props.theme.style].primary};
  font-weight: 300;
  ${props => fontsDefaults(props)}
`;

export const H2 = styled.h2`
  color: ${props => THEMES[props.theme.style].primary};
  font-weight: 300;

  ${props => fontsDefaults(props)}
  &.separator {
    display: flex;
  }
  &.separator::after {
    content: " ";
    background: linear-gradient(
      to right,
      ${props => THEMES[props.theme.style].primary},
      ${props => THEMES[props.theme.style].secondary}
    );
    height: 3px;
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: auto;
    margin: 0.75em 2px 0 3px;
    flex-grow: 1;
    border-radius: 2px;
  }
`;

export const H3 = styled.h3`
  color: ${props => THEMES[props.theme.style].primary};
  font-weight: 300;
  ${props => fontsDefaults(props)}
`;

export const H4 = styled.h4`
  color: ${props => THEMES[props.theme.style].primary};
  font-weight: 300;

  ${props => fontsDefaults(props)}
`;

export const H5 = styled.h5`
  color: ${props => THEMES[props.theme.style].secondary};
  font-weight: 300;

  ${props => fontsDefaults(props)}
`;

export const P = styled.p`
  color: ${props => THEMES[props.theme.style].onSurface};
  font-weight: 300;
  ${props => fontsDefaults(props)}
  ${props => borderLeft(props)}
  ${props => ("big" in props ? "font-size:1.3rem" : "")}
  &.on-background {
    color: ${props => THEMES[props.theme.style].onBackground};
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const A = styled.a`
  color: ${props => THEMES[props.theme.style].primary};
  font-weight: 300;
  ${props => fontsDefaults(props)}
  &:hover {
    color: ${props => THEMES[props.theme.style].secondary};
  }
  &::after {
    ${props => afterBottomBar(props)}
  }
`;

export const S = styled.strong`
  color: ${props => THEMES[props.theme.style].onSurface};
  ${props => fontsDefaults(props)}
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
  & a:hover {
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
  ${props =>
    "background" in props
        ? "background: " + THEMES[props.theme.style][props.background]
        : ""};
  ${props =>
    "color" in props ? "color: " + THEMES[props.theme.style][props.color] : ""};
`;

export const InputStyled = styled(Form.Control)`
  transition: 0.5s;
  border: 2px solid ${props => THEMES[props.theme.style].secondary};
  background: ${props => THEMES[props.theme.style].surface.level1};
  color: ${props => THEMES[props.theme.style].onSurface};
  &.pulse {
    box-shadow: 0 0 0 0 ${props => THEMES[props.theme.style].secondary};
    transform: scale(1);
    animation: ${pulse} 2s forwards;
  }
  &:active,
  &:focus {
    color: ${props => THEMES[props.theme.style].onSurface};
    border-color: ${props => THEMES[props.theme.style].primary2};
    box-shadow: none;
    background: ${props => THEMES[props.theme.style].surface.level2};
  }
  ${props => ("big" in props ? "font-size: 1.6rem" : "")};
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

export const FormStyled = styled(Form)`
  .form-label {
    color: ${props => THEMES[props.theme.style].onSurface};
    font-weight: 300;
    font-size: 1.3rem;
  }
  input,
  textarea {
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
  }
`;

/**
 * ----- UNIQUES
 */

export const Main = styled.div`
  min-height: 100vh;
  background-color: ${props => THEMES[props.theme.style].background};
`;

export const Me = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  position: relative;
  transition: 0.5s;
  & > img {
    transform: scale(1.1);
    box-shadow: 5px 5px 0px ${props => THEMES[props.theme.style].secondary};
    @media (max-width: 650px) {
      transform: scale(1);
    }
  }
  &:hover img {
    filter: none;
  }
  &:hover::before {
    opacity: 0;
  }
  ::before {
    content: "An instant of Rovaniemi, Finland ❄";
    z-index: 25;
    position: absolute;
    font-family: "Satisfy", cursive;
    font-size: 1.6rem;
    bottom: -15px;
    right: -15px;
    color: white;
    transition: 0.75s;
    @media (max-width: 650px) {
      font-size: 1.2rem;
      bottom: 5px;
      right: 10px;
    }
  }
`;
