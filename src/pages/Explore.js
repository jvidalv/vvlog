import React from "react";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";

import { HeroSectionSimple } from "../components/HeroSection";
import { ArticleSnippet } from "../components/ArticleSnippet";
import { Form } from "react-bootstrap";

import { InputStyled } from "../styles/GenericStyles";
import { useLocation } from "react-router";

function Explore(props) {
  let location = useLocation();
  const { state } = location;

  return (
    <>
      <HeroSectionSimple title="Explore" subtitle="...But don't get lost 😜" />
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
    id: 1,
    category: "React",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    slug: "lorem-ipsum-dolor-sir-amet",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    date: ""
  },
  {
    id: 2,

    category: "React",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    resume: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt",
    slug: "lorem-ipsum-dolor-sir-amet",
    date: ""
  },
  {
    id: 3,

    category: "React",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur. ",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "",
    slug: "lorem-ipsum-dolor-sir-amet"
  },
  {
    id: 4,
    category: "React",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    slug: "lorem-ipsum-dolor-sir-amet",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    date: ""
  },
  {
    id: 5,

    category: "React",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    resume: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt",
    slug: "lorem-ipsum-dolor-sir-amet",
    date: ""
  },
  {
    id: 11,

    category: "React",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    resume: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt",
    slug: "lorem-ipsum-dolor-sir-amet",
    date: ""
  },
  {
    id: 6,

    category: "React",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur. ",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "",
    slug: "lorem-ipsum-dolor-sir-amet"
  },
  {
    id: 7,
    category: "React",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    slug: "lorem-ipsum-dolor-sir-amet",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    date: ""
  },
  {
    id: 8,

    category: "React",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    resume: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt",
    slug: "lorem-ipsum-dolor-sir-amet",
    date: ""
  },
  {
    id: 9,

    category: "React",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur. ",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "",
    slug: "lorem-ipsum-dolor-sir-amet"
  },
  {
    id: 10,
    category: "React",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    slug: "lorem-ipsum-dolor-sir-amet",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    date: ""
  },

  {
    id: 12,

    category: "React",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur. ",
    resume:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "",
    slug: "lorem-ipsum-dolor-sir-amet"
  }
];
