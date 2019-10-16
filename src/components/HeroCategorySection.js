import React from "react";
import { HeroH1 } from "./HeroCategorySectionStyle";
import { Container, Row, Col } from "react-bootstrap";

function HeroCategorySection() {
  return (
    <>
      <Container className="pt-4 text-center">
        <Row>
          <Col>
            <HeroH1 className="my-3 px-2">Posts about React</HeroH1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HeroCategorySection;
