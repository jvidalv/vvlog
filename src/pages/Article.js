import React from "react";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Breadcrumb
} from "react-bootstrap";

import { HeroSimple } from "../components/HeroSection";
import { Sharer } from "../components/MyContents";
import { P, CardStyled, SidebarElement } from "../styles/GenericStyles";
import { AuthorWithImage } from "../components/AuthorSection";
import {
  ArticleContent,
  ReadingTopBar,
  Tags
} from "../components/ArticleContents";
import Sidebar from "../layouts/Sidebar";

function Article(props) {
  const { title, resume, category, content } = article;
  return (
    <article>
      <Container className="pt-5 text-center">
        <Row>
          <Col>
            <HeroSimple
              title={title}
              overtitle={category}
              urlOvertitle={"/" + category.toLocaleLowerCase()}
            />
          </Col>
        </Row>
      </Container>
      <Container className="py-3">
        <Row noGutters className="justify-content-center align-items-center">
          <Col
            className="d-flex align-items-center justify-content-center"
            xs
            md={10}
            lg={8}
          >
            <AuthorWithImage />
          </Col>
        </Row>
      </Container>
      <Container className="py-4">
        <Row>
          <Col xs={12} md={12} lg={9}>
            <ArticleContent />
            <Tags />
            <Sharer />
          </Col>
          <Col>
            <Sidebar />
          </Col>
        </Row>
      </Container>
      <ReadingTopBar />
    </article>
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
