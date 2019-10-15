import React from "react";
import styled from "styled-components";
import { THEMES } from "../constants/Colors";
import { Card } from "react-bootstrap";

export const CardStyled = styled(Card)`
  background-color: ${props => THEMES[props.theme.style].surface.level1};
  box-shadow: 1px 1px 15px rgba(67, 38, 100, 0.15);
  cursor: pointer;
  border: none;
  &:hover {
    transform: translateY(-10px);
  }
  &:not(: first-child) {
    margin-top: 15px;
  }
`;

export const ImageSnippet = styled(Card.Img)`
         width: 25%;
         transform: rotate(${() => deg[Math.ceil(Math.random() * (5 - 0))]}deg);
         padding: 5px;
         box-shadow: 0px 0px 10px
           ${props => THEMES[props.theme.style].onSurface};
         margin: 10px;
       `;

const deg = [-8, -6, -1, 1, 6, 8];
