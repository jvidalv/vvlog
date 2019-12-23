import Helmet from "react-helmet/es/Helmet";
import {BrowserRouter as Router} from "react-router-dom";
import React from "react";
import useT from "../helpers/Translator";
import {areSet} from "../helpers/Generics";

export const HelmetIndex = (props) => (
    <Helmet>
        <meta charSet="utf-8" />
    </Helmet>
);

export const HelmetHome = (props) => (
    <Helmet>
        <meta charSet="utf-8" />
        <title>{useT('vvlog_homepage', ['🔥'])}</title>
        <link rel="canonical" href="https://vvlog.io/" />
        <meta name="description" content="vvlog homepage" />
    </Helmet>
);

export const HelmetExplore = (props) => (
    <Helmet>
        <title>{useT('vvlog_explore', ['🔎'])}</title>
        <meta name="description" content="vvlog page for finding and quering for articles" />
    </Helmet>
);

export const HelmetError= (props) => (
    <Helmet>
        <meta charSet="utf-8" />
        <title>{useT('vvlog_error', ['🤷‍♂'])}</title>
        <meta name="description" content="error page, something went very off" />
    </Helmet>
);

export const HelmetContact = (props) => (
    <Helmet>
        <title>{useT('vvlog_contact', ['🧾'])}</title>
        <meta name="description" content="contact with vvlog admin page" />
    </Helmet>
);

export const HelmetCategory = (props) => (
    <Helmet>
        <title>{props.params.category + ' ⚜ ' + useT('category')}</title>
        <meta name="description" content="category page" />
    </Helmet>
);

export const HelmetArticle = (props) => (
    <Helmet>
        <title>{areSet(props.aArticle, ['title'])}</title>
        <meta name="description" content="article page" />
    </Helmet>
);

export const HelmetAbout = () => (
    <Helmet>
        <title>{useT('vvlog_about', ['🤠'])}</title>
        <meta name="description" content="about me!" />
    </Helmet>
);