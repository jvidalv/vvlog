import React from "react";
import { Container, Row, Col, Jumbotron, Button, Form } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { HeroSimple } from "../components/HeroSection";
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

function Contact(props) {
  return (
    <>
      <Container className="pt-5 text-center">
        <Row>
          <Col>
            <HeroSimple
              title="Contact"
              subtitle="If you are not a 🤖 i'll check you back ♥"
            />
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row className="justify-content-md-center">
          <Col xs md={10} lg={8}>
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
          <Col xs md={10} lg={8}>
            <CardStyled>
              <CardStyled.Body className="p-4">
                <FormStyled>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      autoComplete="off"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" placeholder="" required />
                  </Form.Group>
                  <Form.Group controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" required />
                  </Form.Group>
                  <ReCAPTCHA
                    sitekey="6Lci-L4UAAAAAP_EjffvxvugrVRgraSA_5LHBFXD"
                    size="invisible"
                    onChange={() => false}
                  />
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

export default Contact;
