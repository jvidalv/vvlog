import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { THEMES } from "../constants/Colors";
import { Nav, Jumbotron } from "react-bootstrap";

export const HeroH1 = styled.h1`
  color: ${props => THEMES[props.theme.style].primary};
  font-family: "IBM Plex Mono";
  font-style: italic;
  text-shadow: 0 0 14px rgba(0, 0, 0, 0.28);
`;
