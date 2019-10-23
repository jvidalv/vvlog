import React from "react";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";

import { ArticleSnippetWithImage } from "../components/ArticleSnippet";
import Sidebar from "../layouts/Sidebar";
import { HeroSectionSimple } from "../components/HeroSection";

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
  }
];

function Category(props) {
  return (
    <>
      <HeroSectionSimple
        title="Posts about React"
        subtitle="One Library to Rule Them All 👑"
      />
      <Container className="py-5">
        <Row>
          <Col sm={8}>
            {snipperts.map(snipet => (
              <ArticleSnippetWithImage {...snipet} className="move-up mb-2" />
            ))}
          </Col>
          <Col sm={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Category;
