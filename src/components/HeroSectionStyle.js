import styled, {keyframes} from "styled-components";
import {THEMES} from "../constants/Themes";

export const HeroSectionStyled = styled.div`
  text-align: center;
  padding-top: 2em;
  background-color: #6bb756;
  background: linear-gradient(
    to right,
    ${props => THEMES[props.theme.style].header["1"]},
    ${props => THEMES[props.theme.style].header["2"]}
  );
  margin-bottom: 1em;
  padding-bottom: 6.5em;
  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);
  clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);
  @media (max-width: 600px) {
    padding-bottom: 9.5em;
  }
`;

const rotateColors = keyframes`
    0% {
        filter: hue-rotate(0deg);
    }
    50% {
        filter: hue-rotate(360deg);
    }
`;

export const HeroImage = styled.img`
  animation: ${rotateColors} 15s linear infinite;
  @media (max-width: 992px) {
    width: 150px;
  }
`;

export const HeroH1 = styled.h1`
  color: ${props => THEMES[props.theme.style].primary};
  font-family: "IBM Plex Mono";
  font-style: italic;
  font-weight: 300;

  &.extra {
    color: #fff;
    text-shadow: 0 0 14px rgba(0, 0, 0, 0.28);
    @media (max-width: 600px) {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 650px) {
    font-size: 1.8rem;
  }
`;

const backArrows = keyframes`
    0% {
        content : ''
    }
     17% {
        content : '<'
    }
     35% {
        content : '<<'
    }
    50% {
        content : '<<<'
    }
    67% {
      content : '<<'
    }
    85% {
      content : '<'
    }
    100% {
      content : ''
    }
`;

export const HeroH4 = styled.h4`
  color: ${props => THEMES[props.theme.style].onBackground};
  font-weight: 300;
  & > a {
    color: ${props => THEMES[props.theme.style].secondary};
    position: relative;
    transition: all 2s ease-in-out;
  }
  & > a:hover::before {
    animation: ${backArrows} 2s infinite;
    content: "<<<";
    position: absolute;
    left: -55px;
  }
`;

export const HeroP = styled.p`
  color: #fff;
  font-size: 1.2em;
  font-weight: 300;

  @media (max-width: 600px) {
    font-size: 1em;
  }
`;
