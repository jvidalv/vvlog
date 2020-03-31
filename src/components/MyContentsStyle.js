import styled from "styled-components";
import {THEMES} from "../constants/Themes";
import {dissapearToRight, growBig} from "../styles/AnimationsStyles";

export const IconA = styled.a`
  color: ${({theme}) => theme.primary};
  font-size: 2rem;
  padding: 0 20px;
  transition: all 0.15s ease;
  opacity: 0.8;
  & > * {
    transition: all 0.15s ease;
  }
  &:hover > * {
    transform: scale(1.2);
    opacity: 1;
  }
  &:hover {
    color: ${({theme}) => theme.secondary};
  }
`;

export const SharerStyled = styled.div`
  &:hover .left-bar::before {
    content: " S H A R E ";
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    height: 28px;
    font-size: 20px;
    @media (max-width: 850px) {
      width: 25px;
    }
  }
`;

export const ShareA = styled.a`
  color: ${({theme}) => theme.secondary};
  font-size: 1.5rem;
  padding: 0 20px;
  transition: all 0.15s ease;
  opacity: 0.8;
  &.left-bar::before {
    transition: 0.25s ease;
    content: " ";
    width: 100px;
    height: 3px;
    display: inline-flex;
    margin-right: 20px;
    background: linear-gradient(
      to right,
      ${({theme}) => theme.primary},
      ${({theme}) => theme.secondary}
    );
    vertical-align: middle;
    @media (max-width: 850px) {
      width: 25px;
    }
  }

  &.right-bar::after {
    content: " ";
    width: 100px;
    height: 3px;
    display: inline-flex;
    margin-left: 20px;
    background: linear-gradient(
      to right,
      ${({theme}) => theme.secondary},
      ${({theme}) => theme.primary}
    );
    vertical-align: middle;
    @media (max-width: 850px) {
      width: 25px;
    }
  }
  & > * {
    transition: all 0.15s ease;
  }
  &:hover > * {
    transform: scale(1.2);
    opacity: 1;
  }
  @media (max-width: 650px) {
    padding: 0 8px;
  }
`;

export const SubscribeContainer = styled.div`
    &.disappearToRight > div:first-child{
      animation: ${dissapearToRight} 1s forwards;
    }
    & .growBig{
      animation-delay: 0.5s;
      opacity: 0;
      transform: scale(0.1);
      animation: ${growBig} 1s forwards;
    }
`;