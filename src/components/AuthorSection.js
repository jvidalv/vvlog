import React from "react";
import author from "../assets/images/me-roman.png";
import { P } from "../styles/GenericStyles";
import { AuthorPhoto } from "./AuthorSectionStyle";

export function AuthorWithImage(props) {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <AuthorPhoto src={author} width="75" height="75" />
      <div className="ml-3">
        <P className="mb-0" big>
          Josep Vidal ❤
        </P>
        <P className="mt-0" color="secondary2" muted>
          Aug 1, 2019 · 11 min read
        </P>
      </div>
    </div>
  );
}

export function AuthorWithImageExtended(props) {
  return (
    <div className="d-flex my-5">
      <AuthorPhoto
        className="align-self-baseline"
        src={author}
        width="95"
        height="95"
      />
      <div className="ml-3">
        <P className="my-0 text-uppercase" color="onBackground" muted>
          Written by
        </P>
        <P className="mb-0" big>
          Josep Vidal Vidal
        </P>
        <P className="mb-0 mt-2" color="onBackground" muted>
          Fullstack developer at Factor Energía by day — React developer by
          night
        </P>
      </div>
    </div>
  );
}
