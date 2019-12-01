import styled from "styled-components";
import {THEMES} from "../constants/Themes";
import {backArrows, gradient} from "../styles/AnimationsStyles";

export const H5Category = styled.h5`
  color: ${props => THEMES[props.theme.style].secondary};
  font-weight: 300;
  & > a {
    color: ${props => THEMES[props.theme.style].secondary};
    position: relative;
    transition: all 2s ease-in-out;
  }
  & > a:hover::after {
    animation: ${backArrows} 2s infinite;
    content: ">>>";
    position: absolute;
    margin-left: 10px;
  }
`;

export const ImageSnippet = styled.div`
  min-width: 170px;
  max-width: 170px;
  height: auto;
  object-fit: cover;
  background: url(${props => props.url});
`;

export const SnippetContainer = styled.div`
  background: ${props => THEMES[props.theme.style].surface.level1};
  box-shadow: 1px 1px 15px rgba(67, 38, 100, 0.15);
  position: relative;
  transition: 0.25s ease-in;
  &.simple{
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
        flex-grow: 1;
  }
  &::before {
    content: '${props => (props.icon ? props.icon : null)}';
    width: ${props => (props.icon ? "45px" : null)};
    height: ${props => (props.icon ? "45px" : null)};
    font-size: 1.5rem;
    display: inline-flex;
    justify-content: center;
    position: absolute;
    right: -0.9rem;
    background: ${props => THEMES[props.theme.style].surface.level1};
    border-radius: 50%;
    align-items: center;
    top: -0.8rem;
    box-shadow: 0 0 10px rgba(67, 38, 100, 0.15);
  }
  
  & h3:hover {
    text-decoration:underline !important;
    opacity: 0.7;
  }
  &.empty {  
    min-height:180px;
    display: flex;
    flex-grow: 1;
    pointer-events: none;
    & h5, .image-snippet, h3, p {
        background: linear-gradient(90deg,  ${props => THEMES[props.theme.style].header[2]} , ${props => THEMES[props.theme.style].surface.level1}, ${props => THEMES[props.theme.style].surface.level2}, ${props => THEMES[props.theme.style].surface.level3}, ${props => THEMES[props.theme.style].header[2]});
        background-size: 300% 300%;
        animation: ${gradient} 5s ease-in-out infinite;
    }
    & h5{
        width: 100px;
        height:25px;
    }
    & h3 {
      width: 250px;
      height:40px;
    }
     & p {
      width: 350px;
      height:45px;
    }
    & .image-snippet{
       margin: 10px;
       height: 160px;
    }
    
  }
`;

export const HighlightSpan = styled.span`
    background: ${props => THEMES[props.theme.style].secondary}
`;
