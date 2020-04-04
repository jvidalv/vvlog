import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Navbar, NavDropdown} from "react-bootstrap";

export const LinkStyled = styled(NavLink)`
  color: white !important;
  transition: 0.25s;
  opacity: 0.7;
  &:hover{
      opacity: 1;
  }
  &::before {
    content: "${props => ("icon" in props ? props.icon + " " : "")}";
  }
  &.category::before {
    content: "";
    height: 10px;
    width: 10px;
    display: inline-block;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: ${props => props.dotcolor ? props.dotcolor : 'white'};
    border-radius: 50%;
    margin-right: 7px;
  }
`;

export const NavStyled = styled(Navbar)`
  z-index: 1500;
  transition:0s;
  font-weight: 300 !important;
  ${props => props.className && props.className.shadow ? "box-shadow: 0 2px 20px 0 #0000005c" : ""};
  background: linear-gradient(
    to right,
    ${({theme}) => theme.header.left},
    ${({theme}) => theme.header.right}
  );
`;

export const NavbarToggleStyled = styled(Navbar.Toggle)`
  color: white !important;
  background-color: ${({theme}) => theme.primary} !important;
  &:focus {
    outline: none !important;
  }
`;

export const NavbarCollapseStyled = styled(Navbar.Collapse)`
  & a:hover{
    transform: scale(1.1);
  }
  & a {
    @media (max-width: 992px) {
      font-size: 1.4rem;
      margin-bottom: 10px;
    }
  }
`;

export const FormControlStyled = styled.input`
  height: 30px;
  width: 90px !important;
  -webkit-appearance: none;
  border-style: solid;
  border-width: 1px;
  border-color: ${({theme}) => theme.surface.level2};
  display: block;
  padding: 0.5rem;
  transition: 0.25s ease-in-out;
  background: ${({theme}) => theme.surface.level1};
  color: ${({theme}) => theme.onSurface};
  border-radius: 5px;
  &:focus {
    width: 150px !important;
    color: ${({theme}) => theme.onSurface};
    background: ${({theme}) => theme.surface.level1};
    box-shadow: none;
    border-color: ${({theme}) => theme.primary2};
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
    color: ${({theme}) => theme.onSurface} !important;
    opacity: 1 !important;
  }
  & .dropdown-menu {
    border: none;
    background: ${({theme}) => theme.surface.level2};
    box-shadow: 1px 1px 15px rgba(67, 38, 100, 0.15);
  }
  & .dropdown-menu a:hover {
    background: ${({theme}) => theme.surface.level3};
    transform: unset !important;
  }
  & .dropdown-menu a.active {
    background: ${({theme}) => theme.primary2};
    color: white !important;
  }
  & .dropdown-menu a.active::after {
    content: "✔";
    float: right;
  }
`;
