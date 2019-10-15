import React from "react";
import { Card } from "react-bootstrap";
import { CardStyled, ImageSnippet } from "./ArticleSnippetStyle";

import squarePlaceholder from "../assets/images/square-placeholder.png";
import { P, H3, H5 } from "../styles/GenericStyles";

function ArticleSnippet(props) {
  const { title, subtitle, category, date, resume } = props;
  return (
    <CardStyled>
      <Card.Body className="p-0 text-left d-md-flex">
        <ImageSnippet
          className="d-none d-lg-block"
          style={{ width: "25%" }}
          src={squarePlaceholder}
        />
        <div className="p-4">
          <H5>{category}</H5>
          <H3>{title}</H3>
          <P className="mb-0">{resume}</P>
        </div>
      </Card.Body>
    </CardStyled>
  );
}

export default ArticleSnippet;
