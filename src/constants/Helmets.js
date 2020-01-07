import Helmet from "react-helmet/es/Helmet";
import React from "react";
import useT from "../helpers/Translator";
import {areSet} from "../helpers/Generics";
import BASE_IMAGE from "./Images";

export const HelmetIndex = (props) => (
    <Helmet>
        <meta charSet="utf-8"/>
        <link href={"f" + props.theme + ".jpg"} rel="shortcut icon"/>
        <meta name="robots" content="index,follow"/>
        <meta name="organization" content="vvlog by Josep Vidal"/>
        <meta name="date" content={Date.now()}/>
        <meta name="twitter:site" content="@vvlog"/>
        <meta name="twitter:creator" content="@vvlog"/>
        <meta property="og:site_name" content="vvlog.dev"/>
    </Helmet>
);

export const HelmetHome = (props) => (
    <Helmet>
        <meta charSet="utf-8"/>
        <title>{useT('vvlog_homepage', ['🔥'])}</title>
        <link rel="canonical" href="https://vvlog.io/"/>
        <meta name="description" content="vvlog homepage"/>
    </Helmet>
);

export const HelmetExplore = (props) => (
    <Helmet>
        <title>{useT('vvlog_explore', ['🔎'])}</title>
        <meta name="description" content="vvlog page for finding and quering for articles"/>
    </Helmet>
);

export const HelmetError = (props) => (
    <Helmet>
        <meta charSet="utf-8"/>
        <title>{useT('vvlog_error', ['🤷‍♂'])}</title>
        <meta name="description" content="error page, something went very off"/>
    </Helmet>
);

export const HelmetContact = (props) => (
    <Helmet>
        <title>{useT('vvlog_contact', ['🧾'])}</title>
        <meta name="description" content="contact with vvlog admin page"/>
    </Helmet>
);

export const HelmetCategory = (props) => (
    <Helmet>
        <title>{props.params.category + ' ⚜ ' + useT('category')}</title>
        <meta name="description" content="category page"/>
    </Helmet>
);

export const HelmetAbout = () => (
    <Helmet>
        <title>{useT('vvlog_about', ['🤠'])}</title>
        <meta name="description" content="about me!"/>
    </Helmet>
);

export const HelmetArticle = (props) => (
    <Helmet>
        <title>{areSet(props.aArticle, ['title'])}</title>
        <meta name="description" content="article page"/>
        <meta property="article:published_time" content={Date(Date.now()).toLocaleString()}/>
        <meta property="article:modified_time" content={Date(Date.now()).toLocaleString()}/>
        <meta property="article:category" content={props.aArticle.category_nice}/>
        {props.tags ? props.map() : null}
        <meta data-ue-u="twitter:title" name="twitter:title" content={props.aArticle.title}/>
        <meta data-ue-u="twitter:description" name="twitter:description" content={props.aArticle.resume}/>
        <meta data-ue-u="description" name="description" content={props.aArticle.resume}/>
        <meta data-ue-u="og:title" property="og:title" content={props.aArticle.title}/>
        <meta data-ue-u="og:description" property="og:description" content={props.aArticle.resume}/>
        <meta property="og:url" content={window.location.href}/>
        <meta data-ue-u="og:image" property="og:image" content={BASE_IMAGE + props.aArticle.image}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta data-ue-u="twitter:image" name="twitter:image" content={BASE_IMAGE + props.aArticle.image}/>
        <meta property="og:type" content="article"/>
    </Helmet>
);