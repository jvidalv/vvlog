import React from "react";
import {withRouter} from "react-router-dom";
import {A, H4, Label, LoadingPlaceholder} from "../styles/GenericStyles";
import {useGlobals} from "../contexts/Global";
import {smoothMove} from "../helpers/Generics";
import {SidebarElement, SourceDiv} from "./SidebarStyle";
import useT, {t} from "../helpers/Translator";

/**
 * Sidebar container that contains all elements
 * @param props
 * @returns {*}
 * @constructor
 */
const Element = props => {
    const {icon} = props;
    return (
        <SidebarElement className="p-4 text-center with-icon" icon={icon}>
            {props.content}
        </SidebarElement>
    );
};

/**
 * @returns {*}
 * @constructor
 */
const AboutMe = () => {
    return (
        <>
            <A
                href="https://github.com/jvidalv/vvlog"
                italic
                fontPlex
                fontSize="1.6rem"
                target="_blank"
            >
                On Github
                <br/> @vvlog
            </A>
        </>
    );
};

/**
 * @param props
 * @returns {*}
 * @constructor
 */
function MoreOfMe(props) {
    const Project = props => {
        return (
            <A
                className="my-3"
                bottomBar
                fontSize="1.3rem"
                href={props.url}
                target="_blank"
            >
                {props.name}
            </A>
        );
    };

    return (
        <>
            <H4 fontRecursive fontSize="1.6rem">
                {useT('other_projects')}
            </H4>
            <Project name="Fem Poble" url="https://fempoble.app"/>
            <Project name="ReactNews" url="https://jvidalv.github.io/reactnews/"/>
            <Project name="ColorShop" url="https://jvidalv.github.io/colorshop/"/>
            <Project name="Emojindex" url="https://jvidalv.github.io/emojindex/"/>
        </>
    );
}


/**
 * Article sidebar
 * @returns {*}
 * @constructor
 */
export const ArticleSidebar = () => {
    const [{aArticle, language}] = useGlobals();
    const Anchors = () => {
        return <> {
            aArticle.anchors.map((an, i) => (
                <A
                    key={i}
                    className="my-3 text-left"
                    bottomBar
                    fontSize="1rem"
                    href={`#${an.anchor_id}`}
                    onClick={() => smoothMove()}
                >
                    {`${i + 1}. ${an.content}`}
                </A>
            ))} </>
    };
    const Sources = () => {
        return <> {
            Object.keys(aArticle.sources).map((source, i) => (
                aArticle.sources[source].length ? (
                    <SourceDiv key={i} className="text-left">
                        <Label themecolor="onSurface">{t(source, [], language)}</Label>
                        {
                            aArticle.sources[source].map((data, ic) => (
                                <A
                                    key={i + ic}
                                    className="d-block"
                                    fontSize="1rem"
                                    href={data.url ?? '#'}
                                    onClick={() => smoothMove()}
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <span>{data.name}</span>
                                    <span className="float-right">{data.version}</span>
                                </A>
                            ))
                        }
                    </SourceDiv>
                ) : null
            ))} </>
    };

    return (
        <>
            <aside className="is-sticky d-sm-none d-lg-block">
                {
                    aArticle && aArticle.hasOwnProperty('anchors') ?
                        aArticle.anchors.length ? <Element content={<Anchors/>} icon="💬"/> : null
                        :
                        <LoadingPlaceholder width="100%" height="250px"/>
                }
                {
                    aArticle && aArticle.hasOwnProperty('sources') ?
                        aArticle.sources ?
                            <Element content={<Sources/>} icon="⛲"/> : null
                        :
                        <LoadingPlaceholder width="100%" height="250px"/>
                }
            </aside>
        </>
    );
};

/**
 * @returns {*}
 * @constructor
 */
export const CategorySidebar = () => {
    return (
        <aside>
            <div className="mt-3 d-md-none"/>
            <Element content={<AboutMe/>} icon="🚀"/>
        </aside>
    );
};

/**
 *
 * @returns {*}
 * @constructor
 */
export const HomeSidebar = () => {
    return (
        <aside>
            <div className="mt-3 d-md-none"/>
            <Element content={<MoreOfMe/>} icon="📚"/>
            <Element content={<AboutMe/>} icon="🚀"/>
        </aside>
    );
};

/**
 * @param props
 * @returns {*}
 * @constructor
 */
function Sidebar(props) {
    const {params} = props.match;
    if(params.article) return <ArticleSidebar/>;
    if(params.category) return <CategorySidebar/>;
    return <HomeSidebar />
}

export default withRouter(Sidebar);
