import styled from "styled-components";
import { THEMES } from "../constants/Themes";
import { Card } from "react-bootstrap";

export const ImageSnippet = styled(Card.Img)`
  width: 200px;
  height: 200px;
  transform: rotate(${() => deg[Math.ceil(Math.random() * (5 - 0))]}deg);
  box-shadow: 0px 0px 10px ${props => THEMES[props.theme.style].surface.level3};
  margin: 10px;
`;

const deg = [-8, -6, -1, 1, 6, 8];
