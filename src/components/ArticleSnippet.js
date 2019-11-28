import React from "react";
import {Link} from "react-router-dom";
import {H5Category, ImageSnippet, SnippetContainer} from "./ArticleSnippetStyle";

import squarePlaceholder from "../assets/images/square-placeholder.png";
import {H3, P} from "../styles/GenericStyles";

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
    const {id, title, slug, category, resume, categorySlug} = props;
    return (
        <SnippetContainer
            className={"mb-3 " + props.className +  (!id ? " empty" : null)}
            icon={props.icon}
            key={id}
        >
            <div className="d-flex">
                <ImageSnippet className="d-none d-lg-block image-snippet" url={squarePlaceholder}/>
                <div className="p-4 snippet-content">
                    <H5Category>
                        <Link to={generateLink(categorySlug)}>{category}</Link>
                    </H5Category>
                    <Link to={generateLink(categorySlug, slug)}>
                        <H3>{title}</H3>
                        <P className="mb-0">{resume}</P>
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
    const {id, title, slug, category} = props;
    return (
        <SnippetContainer className={props.className  +  (!id ? " empty" : "")} icon={props.icon} key={id}>
            <div className="text-center p-4 snippet-content">
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
