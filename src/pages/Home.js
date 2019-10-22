import React from "react";
import { Container, Row, Col, Jumbotron, Button, Form } from "react-bootstrap";

import {
  ArticleSnippetWithImage,
  ArticleSnippet
} from "../components/ArticleSnippet";

import Sidebar from "../layouts/Sidebar";
import { HeroSectionHome } from "../components/HeroSection";
import {
  H3,
  ButtonStyled,
  InputStyled,
  DiagonalContainer
} from "../styles/GenericStyles";

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
  }
];

const FeaturedSection = () => {
  return (
    <Row>
      <Col md={8}>
        {snipperts.map(snipet => (
          <ArticleSnippetWithImage {...snipet} className="move-up" />
        ))}
      </Col>
      <Col md={4}>
        <Sidebar />
      </Col>
    </Row>
  );
};

const SubscribeSection = () => {
  return (
    <Row className="mt-5 justify-content-md-center">
      <Col className="text-center" xs md={8} lg={6}>
        <H3>
          <span role="img" aria-label="train">
            🚇
          </span>{" "}
          Subscribe and stay in touch
        </H3>
        <Form className="my-4">
          <InputStyled className="text-center" placeholder="your email" />
        </Form>
        <ButtonStyled>Subscribe</ButtonStyled>
      </Col>
    </Row>
  );
};

const AllArticlesSection = () => {
  return (
    <>
      <H3 className="mb-5 text-center">
        <span role="img" aria-label="rocket">
          🚀
        </span>{" "}
        Check them all
      </H3>
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
    </>
  );
};

function Home() {
  return (
    <>
      <HeroSectionHome />
      <Container className="pt-4 pb-2">
        <FeaturedSection />
      </Container>
      <Container className="pt-2 pb-2">
        <SubscribeSection />
      </Container>
      <DiagonalContainer className=" my-5 pt-2 pb-4">
        <AllArticlesSection />
      </DiagonalContainer>
    </>
  );
}

export default Home;
