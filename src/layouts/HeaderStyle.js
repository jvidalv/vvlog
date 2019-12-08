import styled, {keyframes} from "styled-components";
import {NavLink} from "react-router-dom";
import {THEMES} from "../constants/Themes";
import {FormControl, Navbar, NavDropdown} from "react-bootstrap";

const rotateColors = keyframes`
    0% {
        filter: hue-rotate(0deg);
    }
    50% {
        filter: hue-rotate(360deg);
    }
`;

export const Logo = styled.img`
  animation: ${rotateColors} 15s linear infinite;
  position: absolute;
  max-height: 100%;
  left: 25px;
  transition: transform 0.1s cubic-bezier(0, 1.8, 1, 1.8);
  transform: translateY(-1em);

  &:hover {
    transform: translateY(-0.5em) rotate(-2deg) scale(1.25);
  }
  @media (max-width: 700px) {
    left: 10px;
  }
`;

export const LinkStyled = styled(NavLink)`
  color: white !important;
  transition: 0.25s;
  opacity: 0.7;
  &:hover {
      opacity: 1;

  }
  &::before {
    content: "${props => ("icon" in props ? props.icon + " " : "")}";
  }
`;

export const NavStyled = styled(Navbar)`
  font-weight: 300 !important;
  ${props =>
    props.className.shadow ? "box-shadow: 0 2px 20px 0 #0000005c" : ""};
  background: linear-gradient(
    to right,
    ${props => THEMES[props.theme.style].header["1"]},
    ${props => THEMES[props.theme.style].header["2"]}
  );
`;

export const NavbarToggleStyled = styled(Navbar.Toggle)`
  color: white !important;
  border-color: rgba(255, 255, 255, 0.5);
  background-color: ${props => THEMES[props.theme.style].primary};
  &:focus {
    outline: none !important;
  }
`;

export const NavbarCollapseStyled = styled(Navbar.Collapse)`
  & a {
    @media (max-width: 992px) {
      font-size: 1.4rem;
      margin-bottom: 10px;
    }
  }
`;

export const FormControlStyled = styled(FormControl)`
  height: 30px;
  width: 90px !important;
  -webkit-appearance: none;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => THEMES[props.theme.style].surface.level2};
  display: block;
  padding: 0.5rem;
  width: 100%;
  transition: 0.25s ease-in-out;
  background: ${props => THEMES[props.theme.style].surface.level1};
  color: ${props => THEMES[props.theme.style].onSurface};
  &:focus {
    width: 150px !important;
    color: ${props => THEMES[props.theme.style].onSurface};
    background: ${props => THEMES[props.theme.style].surface.level1};
    box-shadow: none;
    border-color: ${props => THEMES[props.theme.style].primary2};
    @media (max-width: 700px) {
      width: 100px !important;
    }
  }
`;

export const NavDropdownStyled = styled(NavDropdown)`
  & a {
    color: white !important;
  }
  & .dropdown-menu a {
    color: ${props => THEMES[props.theme.style].onSurface} !important;
  }
  & .dropdown-menu {
    border: none;
    background: ${props => THEMES[props.theme.style].surface.level2};
    box-shadow: 1px 1px 15px rgba(67, 38, 100, 0.15);
  }
  & .dropdown-menu a:hover {
    background: ${props => THEMES[props.theme.style].surface.level3};
  }
  & .dropdown-menu a.active {
    background: ${props => THEMES[props.theme.style].primary2};

    color: white !important;
  }
  & .dropdown-menu a.active::after {
    content: "✔";
    float: right;
  }
`;
