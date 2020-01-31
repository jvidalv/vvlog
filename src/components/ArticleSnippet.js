import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {H5Category, ImageSnippet, SnippetContainer} from "./ArticleSnippetStyle";
import {H3, P} from "../styles/GenericStyles";
import BASE_IMAGE, {images_url} from "../constants/Images";
import {generateLink} from "../helpers/Generics";
import {useGlobals} from "../contexts/Global";

/**
 * Article snippet with a left image
 * Expects all the props spreaded below
 * @param {*} props
 */
export function ArticleSnippetWithImage(props) {
    const [{language}] = useGlobals();
    const {id, fake, title, slug, category, resume, image, categorySlug} = props;
    return (
        <SnippetContainer
            className={"d-flex mb-3 " + props.className + (fake ? " empty" : '')}
            icon={props.icon}
            key={id}
        >
            <ImageSnippet className="d-none d-lg-block image-snippet"
                          url={image ? BASE_IMAGE + image : images_url(200, 200).article}/>
            <div className="content d-flex flex-column p-4">
                <H5Category>
                    {categorySlug ? <Link to={generateLink(language, categorySlug)}>{category}</Link> : null}
                </H5Category>
                <Link to={generateLink(language, categorySlug, slug)}>
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
    const [{language}] = useGlobals();
    const {id, fake, title, slug, category, categorySlug} = props;
    const snippetRef = React.createRef();
    /**
     * Highlights texts inside content of snippets when you search for them
     */
    useEffect(() => {
        const element = snippetRef.current.getElementsByTagName("h3")[0];
        let content = element.textContent;
        if (props.q && props.q.length > 1) {
            let position = content.toLowerCase().search(props.q.toLowerCase());
            if (position !== -1) {
                element.innerHTML = [content.slice(0, position), `<span class="highlight">${content.slice(position, position + props.q.length)}</span>`, content.slice(position + props.q.length)].join('');
            }
        } else {
            // Edge cases when user removes entire search, we backup to default
            element.innerHTML = content;
        }
    }, [id, props.q]);

    return (
        <SnippetContainer ref={snippetRef}
                          className={props.className + (fake ? " empty" : "") + " simple text-center p-4"}
                          icon={props.icon} key={id}>
            <H5Category>
                <Link to={generateLink(language, categorySlug)}>{category}</Link>
            </H5Category>
            <Link to={generateLink(language, categorySlug, slug)}>
                <H3>{title}</H3>
            </Link>
        </SnippetContainer>
    );
}
