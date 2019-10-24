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
import { P, CardStyled, SidebarElement } from "../styles/GenericStyles";
import { AuthorWithImage } from "../components/AuthorSection";
import { ArticleContent } from "../components/ArticleContents";
import Sidebar from "../layouts/Sidebar";

function Article(props) {
  const { title, resume, category, content } = article;
  return (
    <>
      <HeroSectionSimple
        title={title}
        overtitle={category}
        urlOvertitle={"/" + category.toLocaleLowerCase()}
      />
      <AuthorWithImage />
      <Container className="py-4">
        <Row>
          <Col xs={12} md={12} lg={8}>
            <ArticleContent />
          </Col>
          <Col>
            <Sidebar />
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
