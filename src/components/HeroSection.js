import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import {
  HeroSectionStyled,
  HeroImage,
  HeroH1,
  HeroP
} from "./HeroSectionStyle";
import { H1, P } from "../styles/GenericStyles";
import logoBig from "../assets/images/logo-vblogv.png";

function HeroSection() {
  return (
    <HeroSectionStyled>
      <HeroImage src={logoBig} />
      <HeroH1 className="my-3 px-2">Fullstack development on point</HeroH1>
      <HeroP className="mb-3 px-2">
        React, Native, PHP
        <br></br>
        JavaScript, CSS and a slice to my life
      </HeroP>
    </HeroSectionStyled>
  );
}

export default HeroSection;
