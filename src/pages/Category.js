import React from "react";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";

import { ArticleSnippetWithImage } from "../components/ArticleSnippet";
import Sidebar from "../layouts/Sidebar";
import { HeroSectionSimple } from "../components/HeroSection";

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

function Category() {
  return (
    <>
      <HeroSectionSimple title="Posts about React" />
      <Container className="py-4">
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
