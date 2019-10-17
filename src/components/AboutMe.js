import React from "react";
import { Card } from "react-bootstrap";

import { P, H3, H5, CardStyled } from "../styles/GenericStyles";
import { A } from "./AboutMeStyle";

function AboutMe(props) {
  return (
    <CardStyled className="p-4 text-center with-icon" icon="🔥">
      <A href="https://github.com/jvidalv" target="_blank">
        Follow me <br /> @jvidalv
      </A>
    </CardStyled>
  );
}

export default AboutMe;
