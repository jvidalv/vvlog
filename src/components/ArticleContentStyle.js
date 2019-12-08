import styled from "styled-components";
import {THEMES} from "../constants/Themes";

export const Content = styled.div`
  & p,
  span {
    color: ${props => THEMES[props.theme.style].onBackground};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, serif !important;
    font-size: 20px !important;
    font-weight: 300 !important;
    @media only screen and (max-width: 40em) {
      font-size: 1.25em !important;
    }
  }
  & a,
  a > span,
  strong {
    color: ${props => THEMES[props.theme.style].error};
  }
  & a {
    text-decoration: underline;
  }
  & h2,
  h2 > span,
  h2 > a {
    color: ${props => THEMES[props.theme.style].primary};
    font-size: 2.25rem !important;
  }
  & h3,
  h3 > span,
  h3 > a {
    color: ${props => THEMES[props.theme.style].secondary};
    font-size: 1.7rem !important;
  }
  & h3,
  h2 {
    font-weight: 300;
    display: flex;
    margin: 30px 0;
    @media only screen and (max-width: 40em) {
      font-size: 1.5em !important;
      display: block;
    }
  }
  & blockquote {
    margin: 30px 0;
  }
  & blockquote > p {
    text-align: center;
    border-left: 4px solid ${props => THEMES.default.primary};
    background: ${props => THEMES[props.theme.style].infoBox};
    font-size: 1.2rem !important;
    position: relative;
    clear: both;
    padding: 0.8em 1em;
  }
  & img {
      background: ${props => THEMES[props.theme.style].infoBox};
     
  }
  & pre {
    background: #181C22 !important;
  }
  & > p:first-child {
    border-left: 4px solid ${props => THEMES[props.theme.style].primary};
    padding-left: 0.8em;
  }
  & h2::after,
  h3::after {
    content: " ";
    background: linear-gradient(
      to right,
      ${props => THEMES[props.theme.style].primary},
      ${props => THEMES[props.theme.style].secondary + "2e"}
    );
    height: 3px;
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: auto;
    margin: 0.75em 2px 0 3px;
    flex-grow: 1;
    border-radius: 2px;
  }
  & h3::after {
    background: linear-gradient(
      to right,
      ${props => THEMES[props.theme.style].secondary},
      ${props => THEMES[props.theme.style].primary + "2e"}
    );
  }
`;

export const TagContainer = styled.div`
  > a {
    padding: 5px 10px;
    border-radius: 3px;
    background: ${props => THEMES[props.theme.style].infoBox};
    margin-right: 5px;
    color: ${props => THEMES[props.theme.style].onSurface};
  }
`;

export const ReadingBarStyled = styled.div`
  top: 0;
  position: fixed;
  width: 100%;
  height: 4px;
  z-index: 10000;
  transition: 0.25s;
  background: linear-gradient(
    to right,
    ${props => THEMES[props.theme.style].primary + "50"}
      ${props => props.scroll + "%"},
    transparent 0
  );
`;
