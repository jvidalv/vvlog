import styled from "styled-components";
import {THEMES} from "../constants/Themes";

export const AuthorPhoto = styled.img`
  background : ${props => THEMES[props.theme.style].header.right};
  min-height: ${props => props.hasOwnProperty('height') ? props.height + 'px' : 'unset'};
  border-radius: 50%;
  transition: 0.25s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const AuthorWithImageExtendedDiv = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
