import React from "react";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";

import { HeroSectionSimple } from "../components/HeroSection";
import { ArticleSnippet } from "../components/ArticleSnippet";
import { Form } from "react-bootstrap";

import { InputStyled } from "../styles/GenericStyles";

function Explore(props) {
  const { state } = props.history.location;
  return (
    <>
      <HeroSectionSimple title="Explore, but don't get lost 😜" />
      <Container className="my-5">
        <Row className="justify-content-md-center">
          <Col className="text-center" xs md={8} lg={6}>
            <Form className="my-4">
              <InputStyled
                className="text-center pulse"
                placeholder="write the query"
                value={state && state.q ? state.q : null}
                big
              />
            </Form>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="px-2">
          {snipperts.map(snipet => (
            <>
              <Col className="d-flex px-1" sm={6} md={4}>
                <ArticleSnippet
                  {...snipet}
                  className="justify-content-center move-up mb-2"
                />
              </Col>
              <Col className="d-flex px-1" sm={6} md={4}>
                <ArticleSnippet
                  {...snipet}
                  className="justify-content-center move-up mb-2"
                />
              </Col>
              <Col className="d-flex px-1" sm={6} md={4}>
                <ArticleSnippet
                  {...snipet}
                  className="justify-content-center move-up mb-2"
                />
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Explore;

const snipperts = [
  {
    category: "ReactJS",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    date: ""
  },
  {
    category: "ReactJS",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    date: ""
  },
  {
    category: "ReactJS",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    date: ""
  },
  {
    category: "ReactJS",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    date: ""
  },
  {
    category: "ReactJS",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    date: ""
  },
  {
    category: "ReactJS",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    date: ""
  }
];
