import React from "react";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";

import { HeroSectionSimple } from "../components/HeroSection";

function Article(props) {
  return (
    <>
      <HeroSectionSimple
        title="Posts about React"
        subtitle="One Library to Rule Them All 👑"
      />
      <Container className="py-4">
        <Row></Row>
      </Container>
    </>
  );
}

export default Article;
