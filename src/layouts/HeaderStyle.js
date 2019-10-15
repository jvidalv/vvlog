import React from "react";
import styled from "styled-components";
import { THEMES } from "../constants/Colors";
import { Nav, Navbar } from "react-bootstrap";

export const Link = styled(Nav.Link)`
  color: white;
`;

export const NavStyled = styled(Navbar)`
  box-shadow: 0 2px 20px 0 #0000001a;
  background: linear-gradient(
    to right,
    ${props => THEMES[props.theme.style].header["1"]},
    ${props => THEMES[props.theme.style].header["2"]}
  );
`;
