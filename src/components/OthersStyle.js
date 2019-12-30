import styled, {keyframes} from "styled-components";
import {THEMES} from "../constants/Themes";
import {ContentDiv} from "../styles/GenericStyles";
import {gradient} from "../styles/AnimationsStyles";

export const showToTop = keyframes`
    from {
        opacity: 0;
        transform: translateY(10em);
    }
    to {
        opacity: 1;
        transform: translateY(1em);
    }
`;

export const CookiesDiv = styled.div`
  width: 500px;
  & > div {
    background: ${props => THEMES[props.theme.style].surface.level1};
    padding: 15px;
    animation: ${showToTop} 1s forwards;
    transform : translateX(-1em);
    opacity: 0.8;
    border-radius: 5px;
    box-shadow: 0 0 5px 5px #00000030;
  }
  & .btn {
    background : ${props => THEMES[props.theme.style].primary};
    border : unset;
    color: ${props => THEMES[props.theme.style].onSecondary};
  }
  & .btn:hover {
     background : ${props => THEMES[props.theme.style].secondary2};
     border : unset;
     color: ${props => THEMES[props.theme.style].onSecondary2};
  }
  &.hideToBottom {
        transition: 1s ease-in;
        transform: translateY(15em) translateX(-1em);
  }
  @media (max-width: 650px) {
      transform: unset;
      z-index: 9000;
      width: inherit;
  }
`;

export const CategoryCircle = styled(ContentDiv)`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.25);
  & a {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & label{
    opacity:0;
    height:0;
    margin:0;
    color: ${props => THEMES[props.theme.style].primary};
    font-size:1.3rem;
  }
  &.loading {
    background: linear-gradient(90deg,  ${props => THEMES[props.theme.style].header.right} , ${props => THEMES[props.theme.style].surface.level1}, ${props => THEMES[props.theme.style].surface.level2}, ${props => THEMES[props.theme.style].surface.level3}, ${props => THEMES[props.theme.style].header.right});
    background-size: 300% 300%;
    animation: ${gradient} 5s ease-in-out infinite;
  }
  & a:hover label { 
    opacity: 1;
    margin: 5px 0;
  }
`;