import React from "react";
import { Container, Row, Col, Jumbotron, Button, Form } from "react-bootstrap";

import { HeroSectionSimple } from "../components/HeroSection";
import { ArticleSnippet } from "../components/ArticleSnippet";
import { useLocation } from "react-router-dom";
import {
  ButtonStyled,
  InputStyled,
  CardStyled,
  P,
  FormStyled,
  S,
  H2
} from "../styles/GenericStyles";

function About(props) {
  return (
    <>
      <HeroSectionSimple
        title="About"
        subtitle="An introduction to me and vblogv's philosophy ⚖"
      />
      <Container className="my-5">
        <Row className="justify-content-md-center">
          <Col xs md={10} lg={8}>
            <P big borderLeft="primary">
              vblogv is born out of the passion for the creation of things from
              the absolute void. What greater art is there than the appearance
              of things where there was nothing before?
            </P>
            <P big borderLeft="secondary">
              And in the meantime, I will try to explain them as best I can, so
              that I can learn from them. And someone who reads me, too. ♥
            </P>
            <P big color="primary">
              I really hope you like it.
            </P>
          </Col>
        </Row>
      </Container>
      <Container className="pt-3">
        <Row className="justify-content-md-center">
          <Col xs md={10} lg={8}>
            <H2>Josep Vidal Vidal</H2>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
