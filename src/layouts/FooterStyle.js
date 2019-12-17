import styled from "styled-components";
import {THEMES} from "../constants/Themes";

export const FloatingButton = styled.div`
  color: ${props => THEMES[props.theme.style].secondary};
  border: 2px solid ${props => THEMES[props.theme.style].secondary};
  background: ${props => THEMES[props.theme.style].surface.level2};
  width: 50px;
  font-weight: 700;
  position: fixed;
  bottom: 4rem;
  right: 4rem;
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
  &:hover > span {
    transform: translateY(-0.5rem) ;
  }
  &.active {
    opacity: 0.6;
    transform: translateY(0);
  }
  @media (max-width: 700px) {
    bottom: 2.5rem;
    right: 2.5rem;
  }
`;
