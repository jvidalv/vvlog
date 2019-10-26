import React from "react";
import { Link } from "react-router-dom";
import {
  ImageSnippet,
  SnippetContainer,
  H5Category
} from "./ArticleSnippetStyle";

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
    <SnippetContainer
      className={"mb-3 " + props.className}
      icon={props.icon}
      key={id}
    >
      <div className="d-flex">
        <ImageSnippet className="d-none d-lg-block" url={squarePlaceholder} />
        <div className="p-4">
          <H5Category>
            <Link to={generateLink(category)}>{category}</Link>
          </H5Category>
          <Link to={generateLink(category, slug)}>
            <H3>{title.substring(0, 80)}</H3>
            <P className="mb-0">{resume.substring(0, 200)}</P>
          </Link>
        </div>
      </div>
    </SnippetContainer>
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
    <SnippetContainer className={props.className} icon={props.icon} key={id}>
      <div className="p-4 text-center">
        <H5Category>
          <Link to={generateLink(category)}>{category}</Link>
        </H5Category>
        <Link to={generateLink(category, slug)}>
          <H3>{title}</H3>
        </Link>
      </div>
    </SnippetContainer>
  );
}
