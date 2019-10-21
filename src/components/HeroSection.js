import React from "react";
import {
  HeroSectionStyled,
  HeroImage,
  HeroH1,
  HeroH4,
  HeroP
} from "./HeroSectionStyle";
import { Container, Row, Col } from "react-bootstrap";
import { H1, P } from "../styles/GenericStyles";
import initials from "../assets/images/logo-initials.png";

export function HeroSectionHome() {
  return (
    <HeroSectionStyled>
      <HeroImage src={initials} />
      <HeroH1 className="my-3 px-2 extra">
        Fullstack development on point
      </HeroH1>
      <HeroP className="mb-3 px-2">
        React, JavaScript, PHP
        <br />
        Yii2, CSS and a glimpse into my life
      </HeroP>
    </HeroSectionStyled>
  );
}

export function HeroSectionSimple(props) {
  const { title, subtitle } = props;
  return (
    <>
      <Container className="pt-5 text-center">
        <Row>
          <Col>
            <HeroH1 className="my-3 px-2">{title}</HeroH1>
            <HeroH4 className="my-3 px-2">{subtitle}</HeroH4>
          </Col>
        </Row>
      </Container>
    </>
  );
}
