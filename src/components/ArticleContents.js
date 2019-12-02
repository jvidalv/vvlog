import React, {useState} from "react";

import {Content, ReadingBarStyled, TagContainer} from "./ArticleContentStyle";
import {useScrollPosition} from "../hooks/useScrollPosition";
import {Link} from "react-router-dom";
import {LoadingPlaceholder} from "../styles/GenericStyles";

/**
 * Article content
 * @param {*} props
 */
export function ArticleContent(props) {
    const {content, loading} = props;
    return (
        loading || !content ?
            <>
                <LoadingPlaceholder className="mb-4" width="100%" height="200px"/>
                <LoadingPlaceholder className="mb-4" width="100%" height="75px"/>
                <LoadingPlaceholder className="mb-4" width="100%" height="350px"/>
                <LoadingPlaceholder className="mb-4" width="100%" height="55px"/>
                <LoadingPlaceholder className="mb-4" width="100%" height="200px"/>
                <LoadingPlaceholder className="mb-4" width="100%" height="75px"/>
                <LoadingPlaceholder className="mb-4" width="100%" height="350px"/>
            </>
            :
            <Content
                dangerouslySetInnerHTML={{
                    __html: content
                }}
            />
    );
}

const tags = ["React", "JavaScript", "Web app development"];

export function Tags() {
    return (
        <TagContainer className="d-flex">
            {tags.map(tag => (
                <Link className="align-self-baseline">{tag}</Link>
            ))}
        </TagContainer>
    );
}

/**
 * Fixed bar on top that grows as the user scroll
 */
export function ReadingTopBar() {
    const [scroll, setScroll] = useState(0);

    const calculateBarWidth = currPos => {
        let totalScrollable = document.body.scrollHeight - window.innerHeight;
        let scrollPerCent = ((100 * currPos.y) / totalScrollable) * -1;

        setScroll(scrollPerCent);
    };

    useScrollPosition(
        ({currPos}) => calculateBarWidth(currPos),
        [],
        null,
        false,
        0
    );

    return <ReadingBarStyled scroll={scroll}/>;
}
