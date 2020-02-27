import React, {useEffect, useState} from "react";
import Prism from "prismjs";
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-php.min'
import 'prismjs/components/prism-jsx.min'
import 'prismjs/components/prism-sql.min'
import 'prismjs/components/prism-bash.min'
import 'prismjs/components/prism-markup-templating.min'

import {ClapSpan, Content, ReadingBarStyled, TagContainer} from "./ArticleContentStyle";
import {useScrollPosition} from "../hooks/useScrollPosition";
import {Link} from "react-router-dom";
import {LoadingPlaceholder, SPAN} from "../styles/GenericStyles";
import {useGlobals} from "../contexts/Global";
import useT, {t} from "../helpers/Translator";
import vfetch from "../helpers/Vfetch";
import api_calls from "../constants/Api";
import vStorage from "../helpers/VStorage";
import STORAGE_KEYS from "../constants/Storers";

/**
 * Its the translucent bar on top of articles that grows as you scroll down
 * @returns {*}
 * @constructor
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
        100
    );

    return <ReadingBarStyled scroll={scroll}/>;
}

/**
 * @returns {*}
 * @constructor
 */
export function Claps() {
    const [{language, aArticle}] = useGlobals();
    const clapRef = React.createRef();
    const didTheyAlreadyClap = vStorage.getItem(STORAGE_KEYS.ARTICLE_CLAPPED + aArticle.translations.id);
    const [didClap, setDidClap] = React.useState(didTheyAlreadyClap);

    const clapped = () => {
        const clapSpan = clapRef.current;
        const data = {
            slug: aArticle.slug,
        };
        vfetch(api_calls.articles.clap, {...data})
            .then(() => vStorage.setItem(STORAGE_KEYS.ARTICLE_CLAPPED + aArticle.translations.id, true));
        clapSpan.innerHTML = parseInt(clapSpan.innerHTML) + 1;

        setDidClap(true);
    };

    return (
        <div className="d-flex align-items-center justify-content-end">
            <SPAN fontSize="14px">{useT('claps')}
                <SPAN className="ml-1" ref={clapRef}>
                    {aArticle.claps}
                </SPAN>
                {didClap ? <SPAN className="d-block" themecolor="primary">{t('thanks', [], language)}!</SPAN> : null}
            </SPAN>
            <ClapSpan clapped={didClap} onClick={() => didClap ? null : clapped()}
                      alt={useT('hey_give_me_a_clap') + ' 😛'}>
                {didClap ? "😊" : "👏"}
            </ClapSpan>
        </div>
    )
}

/**
 * @returns {*}
 * @constructor
 */
export function Tags() {
    const [{tags, language, aArticle}] = useGlobals();
    return (
        <TagContainer className="d-flex align-items-center flex-wrap">
            {
                tags.length && aArticle.id ?
                    tags.filter(tag => aArticle.tags.map(ta => ta.tag_id).includes(tag.id)).map(tag => (
                            <Link
                                key={tag.id} to={{pathname: `/${language}/explore`, state: {q: tag[language]}}}
                                className="align-self-baseline mt-1 small">
                                {tag[language]}
                            </Link>
                        )
                    )
                    :
                    (
                        <>
                            <LoadingPlaceholder width="80px" height="30px"/>
                            <LoadingPlaceholder className="ml-1 mt-1" width="80px" height="30px"/>
                        </>
                    )
            }
        </TagContainer>
    );
}


/**
 * Article content
 * @param {*} props
 */
export function ArticleContent(props) {
    const {content, loading} = props;

    useEffect(() => {
        if (content) {
            setTimeout(function () {
                Prism.highlightAll()
            }, 150);
        }
    }, [content]);

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
