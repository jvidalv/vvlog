import React from "react";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Breadcrumb
} from "react-bootstrap";

import { HeroSectionSimple } from "../components/HeroSection";
import { Sharer } from "../components/MyContents";
import { P, CardStyled } from "../styles/GenericStyles";

function Article(props) {
  const { title, resume, category, content } = article;

  return (
    <>
      <HeroSectionSimple title={title} overtitle={category} />
      <Container className="py-4">
        <Row>
          <Col>
            <CardStyled className="p-3">
              <P>holaa</P>
            </CardStyled>
          </Col>
        </Row>
      </Container>
      <Sharer title={title} />
      <Container className="py-4">
        <Row>
          <Col xs={12} md={12} lg={8}>
            <P>holaaa</P>
          </Col>
          <Col xs={12} md={12} lg={4}>
            <P>holaaa</P>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Article;

const article = {
  id: 1,
  category: "React",
  title: "Lorem ipsum dolor sit amet, consectetur.",
  slug: "lorem-ipsum-dolor-sir-amet",
  resume:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  date: ""
};
