import React from "react";
import styled from "styled-components";
import { THEMES } from "../constants/Colors";
import { Card } from "react-bootstrap";

export const ImageSnippet = styled(Card.Img)`
  width: 25%;
  transform: rotate(${() => deg[Math.ceil(Math.random() * (5 - 0))]}deg);
  padding: 5px;
  box-shadow: 0px 0px 10px ${props => THEMES[props.theme.style].onSurface};
  margin: 10px;
`;

const deg = [-8, -6, -1, 1, 6, 8];
