import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { THEMES } from "../constants/Colors";
import { Nav, Jumbotron } from "react-bootstrap";

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
  padding-bottom: 3.5em;
  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);
  clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);
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
  width: 25%;
  animation: ${rotateColors} 15s linear infinite;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-family: "IBM Plex Mono";
  font-style: italic;
  text-shadow: 0 0 14px rgba(0, 0, 0, 0.28);
`;

export const HeroP = styled.p`
  color: #fff;
  font-size: 1.2em;
`;
