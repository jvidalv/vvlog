import React from "react";
import { Card } from "react-bootstrap";

import { P, H3, H5, CardStyled } from "../styles/GenericStyles";

function AboutMe(props) {
  return (
    <CardStyled className="with-icon" icon="❤">
      <div className="p-4">
        <P className="mb-0">Holaaa</P>
      </div>
    </CardStyled>
  );
}

export default AboutMe;
