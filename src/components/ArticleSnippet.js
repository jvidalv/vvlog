import React from "react";
import { Link } from "react-router-dom";
import { ImageSnippet } from "./ArticleSnippetStyle";

import squarePlaceholder from "../assets/images/square-placeholder.png";
import { P, H3, H5, CardStyled } from "../styles/GenericStyles";

/**
 * Returns the url ready to be consumed by react-router
 * @param {string} category
 * @param {string} slug
 */
const generateLink = (category, slug = "") => {
  return ("/" + category + "/" + slug).toLocaleLowerCase();
};

/**
 * Article snippet with a left image
 * Expects all the props spreaded below
 * @param {*} props
 */
export function ArticleSnippetWithImage(props) {
  const { id, title, subtitle, slug, category, date, resume } = props;
  return (
    <CardStyled className={props.className} icon={props.icon} key={id}>
      <CardStyled.Body className="p-0 text-left d-md-flex align-items-center">
        <ImageSnippet className="d-none d-lg-block" src={squarePlaceholder} />
        <div className="p-4">
          <Link to={generateLink(category)}>
            <H5>{category}</H5>
          </Link>
          <Link to={generateLink(category, slug)}>
            <H3>{title.substring(0, 80)}</H3>
            <P className="mb-0">{resume.substring(0, 200)}</P>
          </Link>
        </div>
      </CardStyled.Body>
    </CardStyled>
  );
}

/**
 * Article snippet without image and with content centered
 * Expects all the props spreaded below
 * @param {*} props
 */
export function ArticleSnippet(props) {
  const { id, title, subtitle, slug, category, date, resume } = props;
  return (
    <CardStyled className={props.className} icon={props.icon} key={id}>
      <CardStyled.Body className="p-4 text-center">
        <Link to={generateLink(category)}>
          <H5>{category}</H5>
        </Link>
        <Link to={generateLink(category, slug)}>
          <H3>{title}</H3>
        </Link>
      </CardStyled.Body>
    </CardStyled>
  );
}
