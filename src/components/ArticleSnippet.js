import React, {useEffect} from "react";
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
            className={"d-flex mb-3 " + props.className + (!id ? " empty" : '')}
            icon={props.icon}
            key={id}
        >
            <ImageSnippet className="d-none d-lg-block image-snippet" url={squarePlaceholder}/>
            <div className="content d-flex flex-column p-4">
                <H5Category>
                    <Link to={generateLink(categorySlug)}>{category}</Link>
                </H5Category>
                <Link to={generateLink(categorySlug, slug)}>
                    <H3>{title}</H3>
                    <P className="mb-0">{resume}</P>
                </Link>
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
    const {id, title, slug, category, categorySlug} = props;
    const myRef = React.createRef();

    useEffect(() => {
        /**
         * Highlights texts inside content of articles when you search for them
         */
        if (props.q && props.q.length > 1) {
            const element = myRef.current.getElementsByTagName("h3")[0];
            let content = element.textContent;
            let position = content.toLowerCase().search(props.q.toLowerCase());
            if (position !== -1) {
                element.innerHTML = [content.slice(0, position), `<span class="highlight">${content.slice(position, position + props.q.length)}</span>`, content.slice(position + props.q.length) ].join('');
            }
        }

    }, [id, props.q]);

    return (
        <SnippetContainer ref={myRef} className={props.className + (!id ? " empty" : "") + " simple text-center p-4"}
                          icon={props.icon} key={id}>
            <H5Category>
                <Link to={generateLink(categorySlug)}>{category}</Link>
            </H5Category>
            <Link to={generateLink(categorySlug, slug)}>
                <H3>{title}</H3>
            </Link>
        </SnippetContainer>
    );
}
