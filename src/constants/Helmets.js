import Helmet from 'react-helmet/es/Helmet'
import React from 'react'
import useT from '../helpers/Translator'
import { areSet } from '../helpers/Generics'
import BASE_IMAGE from './Images'

/**
 * @returns {JSX.Element}
 * @constructor
 */
export const HelmetIndex = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta name="date" content={Date.now()} />
    <meta
      content="Programming blog made by Josep Vidal, focused mostly in Web Development"
      name="vvlog"
    />
    <meta name="robots" content="index,follow" />
    <meta name="organization" content="vvlog by Josep Vidal" />
    <meta name="twitter:site" content="@vvlog" />
    <meta name="twitter:creator" content="@vvlog" />
    <meta property="og:site_name" content="vvlog.dev" />
  </Helmet>
)

/**
 * @returns {JSX.Element}
 * @constructor
 */
export const HelmetHome = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{useT('vvlog_homepage')}</title>
    <meta
      name="description"
      content="VVLOG is a programming blog made by Josep Vidal, focused mostly in web dev, learn JavaScript, React, PHP, Yii2..."
    />
    <meta
      data-ue-u="twitter:title"
      name="twitter:title"
      content="VVLOG a programming blog made by Josep Vidal"
    />
    <meta
      data-ue-u="twitter:description"
      name="twitter:description"
      content="Programming blog made by Josep Vidal, focused mostly in Web Development, learn JavaScript, React, PHP, Yii2..."
    />
    <meta
      data-ue-u="description"
      name="description"
      content="Programming blog made by Josep Vidal, focused mostly in Web Development, learn JavaScript, React, PHP, Yii2..."
    />
    <meta
      data-ue-u="og:title"
      property="og:title"
      content="VVLOG a programming blog made by Josep Vidal"
    />
    <meta
      data-ue-u="og:description"
      property="og:description"
      content="Programming blog made by Josep Vidal, focused mostly in Web Development, learn JavaScript, React, PHP, Yii2..."
    />
    <meta property="og:type" content="blog" />
  </Helmet>
)

/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const HelmetExplore = () => (
  <Helmet>
    <title>{useT('vvlog_explore')}</title>
  </Helmet>
)

/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const HelmetError = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{useT('vvlog_error')}</title>
  </Helmet>
)

/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const HelmetContact = () => (
  <Helmet>
    <title>{useT('vvlog_contact')}</title>
  </Helmet>
)

/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const HelmetCategory = (props) => (
  <Helmet>
    <title>{props.params.category.toUpperCase()}</title>
  </Helmet>
)

/**
 * @returns {JSX.Element}
 * @constructor
 */
export const HelmetAbout = () => (
  <Helmet>
    <title>{useT('vvlog_about', ['🤠'])}</title>
  </Helmet>
)

/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const HelmetArticle = (props) => (
  <Helmet>
    <title>{areSet(props.aArticle, ['title'])}</title>
    <meta name="description" content={props.aArticle.resume} />
    <meta property="article:published_time" content={Date(Date.now()).toLocaleString()} />
    <meta property="article:modified_time" content={Date(Date.now()).toLocaleString()} />
    <meta property="article:category" content={props.aArticle.category_nice} />
    {props.aArticle && props.aArticle.tags
      ? props.aArticle.tags.map((tag, i) => (
          <meta key={i} property="article:tag" content={tag[props.language]} />
        ))
      : null}
    <meta data-ue-u="twitter:title" name="twitter:title" content={props.aArticle.title} />
    <meta
      data-ue-u="twitter:description"
      name="twitter:description"
      content={props.aArticle.resume}
    />
    <meta data-ue-u="description" name="description" content={props.aArticle.resume} />
    <meta data-ue-u="og:title" property="og:title" content={props.aArticle.title} />
    <meta data-ue-u="og:description" property="og:description" content={props.aArticle.resume} />
    <meta property="og:url" content={window.location.href} />
    <meta data-ue-u="og:image" property="og:image" content={BASE_IMAGE + props.aArticle.image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      data-ue-u="twitter:image"
      name="twitter:image"
      content={BASE_IMAGE + props.aArticle.image}
    />
    <meta property="og:type" content="article" />
  </Helmet>
)
