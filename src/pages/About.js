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
  S
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
          <Col xs md={8} lg={8}>
            <CardStyled>
              <CardStyled.Body className="p-4">
                <P big>
                  Do you have any <S>suggestions</S>? Any topic you need help
                  with, or code you'd like to see together. 🙌
                </P>
                <P big>Contact me, I will try to answer as soon as possible.</P>
              </CardStyled.Body>
            </CardStyled>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs md={8} lg={8}>
            <CardStyled>
              <CardStyled.Body className="p-4">
                <FormStyled>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="name" placeholder="" required />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" placeholder="" required />
                  </Form.Group>
                  <Form.Group controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" required />
                  </Form.Group>
                  <div className="text-center mt-3">
                    <ButtonStyled
                      background="primary2"
                      color="onPrimary2"
                      type="submit"
                    >
                      Send 📮
                    </ButtonStyled>
                  </div>
                </FormStyled>
              </CardStyled.Body>
            </CardStyled>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
