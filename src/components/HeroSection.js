import React from "react";
import {
  HeroSectionStyled,
  HeroImage,
  HeroH1,
  HeroP,
  HeroCategoryH1
} from "./HeroSectionStyle";
import { Container, Row, Col } from "react-bootstrap";
import { H1, P } from "../styles/GenericStyles";
import initials from "../assets/images/logo-initials.png";

export function HeroSectionHome() {
  return (
    <HeroSectionStyled>
      <HeroImage src={initials} />
      <HeroH1 className="my-3 px-2">Fullstack development on point</HeroH1>
      <HeroP className="mb-3 px-2">
        React, JavaScript, PHP
        <br />
        Yii2, CSS and a glimpse into my life
      </HeroP>
    </HeroSectionStyled>
  );
}

export function HeroSectionSimple(props) {
  const { title } = props;
  return (
    <>
      <Container className="pt-4 text-center">
        <Row>
          <Col>
            <HeroCategoryH1 className="my-3 px-2">{title}</HeroCategoryH1>
          </Col>
        </Row>
      </Container>
    </>
  );
}
