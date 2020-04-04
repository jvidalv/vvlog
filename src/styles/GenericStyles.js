import styled from "styled-components";
import {Container} from "react-bootstrap";
import {borderLeft, fontsDefaults} from "./DefaultsStyles";
import {gradient, hueRotate, pulse} from "./AnimationsStyles";

export const H1 = styled.h1`
  color: ${({theme}) => theme.primary};
  font-weight: 300;
  ${props => fontsDefaults(props)}
`;

export const H2 = styled.h2`
  color: ${({theme}) => theme.primary};
  font-weight: 300;
  ${props => fontsDefaults(props)}
  &.separator {
    display: flex;
  }
  &.separator::after {
    content: " ";
    background: linear-gradient(
      to right,
      ${({theme}) => theme.primary},
      ${({theme}) => theme.secondary}
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
  color: ${({theme}) => theme.primary};
  font-weight: 300;
  ${props => fontsDefaults(props)}
`;

export const H4 = styled.h4`
  color: ${({theme}) => theme.primary};
  font-weight: 300;
  ${props => fontsDefaults(props)}
`;

export const H5 = styled.h5`
  color: ${({theme}) => theme.secondary};
  font-weight: 300;
  ${props => fontsDefaults(props)}
`;

export const P = styled.p`
  color: ${({theme}) => theme.onSurface};
  font-weight: 300;
  ${props => fontsDefaults(props)}
  ${props => props.borderLeft ? borderLeft(props) : null}
  ${props => ("big" in props ? "font-size:1.3rem" : "")}
  &.on-background {
    color: ${({theme}) => theme.onBackground};
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
export const SPAN = styled.span`
  color: ${({theme}) => theme.onSurface};
  font-weight: 300;
  ${props => fontsDefaults(props)}
  ${props => props.borderLeft ? borderLeft(props) : null}
  ${props => ("big" in props ? "font-size:1.3rem" : "")}
  &.on-background {
    color: ${({theme}) => theme.onBackground};
  }
`;

export const Label = styled.label`
  font-weight: 300;
  ${props => fontsDefaults(props)}
`;

export const A = styled.a`
  color: ${({theme}) => theme.primary};
  font-weight: 300;
  ${props => fontsDefaults(props)}
  &:hover {
    color: ${props => props.hasOwnProperty('color') ? props.color : props.theme.secondary};
  }
  &::after {
    ${
    props =>
        props.bottomBar ?
            `
          width: 2.5rem;
          height: 2px;
          background: ${props.theme.secondary};
          content: '  ';
          display: block;
          margin: 0px auto;
          position: relative;
          top: 1rem;
          ` : ``
}
  }
`;

export const S = styled.strong`
  color: ${({theme}) => theme.onSurface};
  ${props => fontsDefaults(props)}
`;

export const HR = styled.hr`
    border-top: 10px dotted ${props => props.borderColor ?? props.theme.secondary};
    padding-top: 40px;
    transform: scaleX(1.2);
    @media (max-width: 700px) {
      transform: scaleX(1);
    }
`;
/**
 *  Overrides defaults boostraps
 */
export const ButtonStyled = styled.button`
  transition: 0.5s;
  color: ${props => props.themecolor ? props.theme[props.themecolor] : props.theme.primary};
  background: ${props => props.themebackground ? props.theme[props.themebackground] : props.theme.surface.level1};
  letter-spacing: 1px;
  box-shadow: 1px 1px 15px rgba(67, 38, 100, 0.15) !important;
  border: none;
  font-size: 16px;
  padding: 10px 20px;
  border-radius:5px;
  &:hover {
    transform: translateY(-5px);
    background: ${({theme}) => theme.secondary2};
    color : ${({theme}) => theme.onSecondary2};
  }
  &:focus {
    background: ${({theme}) => theme.surface.level3} !important;
    border-color: #ffffff00 !important;
  }
  &:active {
    border-color: #ffffff00 !important;
    background: ${({theme}) => theme.surface.level3} !important;
  }
`;

export const InputStyled = styled.input`
  border: 2px solid ${props => props.themeborder ? props.theme[props.themeborder] : props.theme.secondary};
  background: ${({theme}) => theme.surface.level1};
  color: ${({theme}) => theme.onSurface};
  font-size : ${props => props.big ? '1.6rem' : 'inherit'};
  width: ${props => props.width ? props.width : '100%'};
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-weight: 400;
  line-height: 1.5;
  transition: .25s;
  border-radius:5px;
  &.pulse {
    box-shadow: 0 0 0 0 ${({theme}) => theme.secondary};
    transform: scale(1);
    animation: ${pulse} 2s forwards;
  }
  &:disabled{
    background: ${({theme}) => theme.surface.level2};
  }
  &:active,
  &:focus {
    color: ${({theme}) => theme.onSurface};
    border-color: ${({theme}) => theme.primary2} !important;
    box-shadow: none;
    background: ${({theme}) => theme.surface.level2};
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const DiagonalContainer = styled(Container)`
  min-height: 250px;
  padding-bottom: 50px;
  background: linear-gradient(
    to bottom,
    transparent,
    ${({theme}) => theme.primary}
  );
  transform: skewY(6deg);
  & > * {
    transform: skewY(-6deg);
  }
  @media (max-width: 650px) {
      min-height: 250px;
  }
`;

export const TexturedContainer = styled(Container)`
  background: repeating-linear-gradient(45deg,  ${({theme}) => theme.primary + '3d'}, transparent 100px);
  border-radius: 5px;
  background-size: 500% 500%;
  background-position: 0 2% !important;
  &:hover{
      animation: ${hueRotate} 15s linear infinite;
  }
`;

export const FormStyled = styled.div`
  .form-label {
    color: ${({theme}) => theme.onSurface};
    font-weight: 300;
    font-size: 1.3rem;
  }
  input,
  textarea {
    transition: 0.5s;
    border: 2px solid ${({theme}) => theme.secondary};
    background: ${({theme}) => theme.surface.level1};
    color: ${({theme}) => theme.onSurface};
    &:active,
    &:focus {
      color: ${({theme}) => theme.onSurface};
      border-color: ${({theme}) => theme.primary2};
      box-shadow: none;
      background: ${({theme}) => theme.surface.level2};
    }
  }
`;

export const LoadingPlaceholder = styled.div`
   background: linear-gradient(90deg,  ${({theme}) => theme.header.right} , ${({theme}) => theme.surface.level1}, ${({theme}) => theme.surface.level2}, ${({theme}) => theme.surface.level3}, ${({theme}) => theme.header.right});
   background-size: 300% 300%;
   animation: ${gradient} 5s ease-in-out infinite;
   width: ${props => props.width ? props.width : '150px'};
   height: ${props => props.height ? props.height : '40px'};
   ${props => props.hasOwnProperty('rounded') ? `border-radius: 50%` : ``};
`;

export const ContentDiv = styled.div`
  background: ${({theme}) => theme.surface.level1};
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  border: none;
  margin-bottom: 10px;
  & a:hover {
    transform: translateY(-10px);
  }
  &.with-icon::before {
    content:'${props => (props.icon ?? "🔥")}';
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
    display: inline-flex;
    justify-content: center;
    position: absolute;
    right: -0.9rem;
    background: ${({theme}) => theme.surface.level1};
    border-radius: 50%;
    align-items: center;
    top: -0.8rem;
    box-shadow: 0 0 10px rgba(67, 38, 100, 0.15);
  }
`;

/**
 * ----- UNIQUES
 */

export const Main = styled.div`
  min-height: 100vh;
  background-color: ${({theme}) => theme.background};
`;

export const Me = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  position: relative;
  transition: 0.5s;
  & > img {
    transform: scale(1.1);
    box-shadow: 5px 5px 0 ${({theme}) => theme.secondary};
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
