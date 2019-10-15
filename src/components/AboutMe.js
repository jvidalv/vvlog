import React from "react";
import { Card } from "react-bootstrap";
import { CardStyled, ImageSnippet } from "./ArticleSnippetStyle";

import squarePlaceholder from "../assets/images/square-placeholder.png";
import { P, H3, H5 } from "../styles/GenericStyles";

function AboutMe(props) {
  return (
    <CardStyled>
      <div className="p-4">
        <P className="mb-0">Holaaa</P>
      </div>
    </CardStyled>
  );
}

export default AboutMe;
