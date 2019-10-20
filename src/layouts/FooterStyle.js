import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { THEMES } from "../constants/Themes";

export const FloatingButton = styled.div`
  right: 3.5rem;
  color: ${props => THEMES[props.theme.style].secondary};
  border: 2px solid ${props => THEMES[props.theme.style].secondary};
  width: 50px;
  font-weight: 700;
  position: fixed;
  bottom: 4.5rem;
  border-radius: 6px;
  padding: 0.3rem 0.75rem;
  font-size: 1.4rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  transform: translateY(10rem);
  &:hover {
    opacity: 1;
  }
  &.active {
    opacity: 0.6;
    transform: translateY(0);
  }
`;
