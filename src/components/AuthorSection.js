import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import author from "../assets/images/me-roman.png";
import { P } from "../styles/GenericStyles";
import { AuthorPhoto } from "./AuthorSectionStyle";

export function AuthorWithImage(props) {
  const {} = props;

  return (
    <>
      <AuthorPhoto src={author} width="75" height="75" />
      <div className="ml-3">
        <P className="mb-0" big>
          Josep Vidal ❤
        </P>
        <P className="mt-0" color="secondary2" muted>
          Aug 1, 2019 · 11 min read
        </P>
      </div>
    </>
  );
}
