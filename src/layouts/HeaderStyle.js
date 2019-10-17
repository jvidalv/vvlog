import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { keyframes } from "styled-components";
import { THEMES } from "../constants/Colors";
import { Nav, Navbar } from "react-bootstrap";

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
  width: 75%;
`;

export const LinkStyled = styled(Link)`
  color: white !important;
  &:hover {
    color: gray !important;
  }
`;

export const NavStyled = styled(Navbar)`
  box-shadow: 0 2px 20px 0 #0000001a;
  background: linear-gradient(
    to right,
    ${props => THEMES[props.theme.style].header["1"]},
    ${props => THEMES[props.theme.style].header["2"]}
  );
`;
