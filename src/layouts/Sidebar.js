import React from "react";
import {withRouter} from "react-router-dom";
import {A, H4, LoadingPlaceholder, SidebarElement} from "../styles/GenericStyles";
import {useGlobals} from "../contexts/Global";

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
                href="https://github.com/jvidalv"
                italic
                fontPlex
                fontSize="1.6rem"
                target="_blank"
            >
                On Github
                <br/> @jvidalv
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
            <H4 fontPlex fontSize="1.6rem">
                more of me
            </H4>
            <Project name="Fem Poble" url="https://fempoble.app"/>
            <Project name="ReactNews" url="https://jvidalv.github.io/reactnews/"/>
            <Project name="ColorShop" url="https://jvidalv.github.io/colorshop/"/>
            <Project name="Emojindex" url="https://jvidalv.github.io/emojindex/"/>
        </>
    );
}


/**
 *
 * @returns {*}
 * @constructor
 */
export const ArticleSidebar = () => {
    const [{aArticle}] = useGlobals();

    const Anchors = () => {
        return <> {aArticle.anchors.map((an, i) => (
            <A
                className="my-3 text-left"
                bottomBar
                fontSize="1rem"
                href={`#${an.anchor_id}`}
            >
                {`${i + 1}. ${an.content}`}
            </A>
        ))} </>
    };

    return (
        <>
            <aside>
                <Element content={<MoreOfMe/>} icon="📚"/>
                <Element content={<AboutMe/>} icon="🚀"/>
            </aside>
            <aside className="is-sticky d-sm-none d-lg-block">
                {
                    aArticle && aArticle.hasOwnProperty('anchors') ? <Element content={<Anchors/>} icon="💬"/> :
                        <LoadingPlaceholder width="100%" height="250px"/>
                }
            </aside>
        </>
    );
};

/**
 *
 * @returns {*}
 * @constructor
 */
export const CategorySidebar = () => {
    return (
        <aside>
            <div className="mt-3 d-md-none"/>
            <Element content={<MoreOfMe/>} icon="📚"/>
            <Element content={<MoreOfMe/>} icon="📚"/>
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
    const {pathname} = props.location;

    switch (pathname) {
        case "/":
            return <HomeSidebar/>;
        case "/category":
            return <CategorySidebar/>;
        default:
            return <HomeSidebar/>;
    }
}

export default withRouter(Sidebar);
