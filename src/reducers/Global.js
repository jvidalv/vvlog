import React from "react";
import {checkValue, limiter, loadFromCache, reindexer} from "../helpers/Generics";
import {D_AARTICLE, D_ARTICLES, D_AUTHORS, D_CATEGORIES, D_ERROR, D_TOAST} from "../constants/Dummy";
import {_LANGUAGES} from "../constants/Dictionary";
import {_THEMES} from "../constants/Themes";
import {getNavigatorLanguage} from "../helpers/Translator";

/**
 * Globals default state
 * @type {{relatedArticles: *, aArticle: *, theme: *, language: *, categories: {}, error: *, articles: *, authors: *, tags: []}}
 */
export const initialState = {
    /**
     * Default theme that propitiate the entire CSS configuration
     */
    theme: loadFromCache('theme', _THEMES[0]),
    /**
     * Language
     */
    language: loadFromCache('language', getNavigatorLanguage()),
    /**
     * Notifications that pops in the top corner
     */
    toasts: [D_TOAST],
    /**
     * Error
     */
    error: D_ERROR,
    /**
     * List of articles, with all the languages
     */
    articles: D_ARTICLES,
    /**
     * Categories
     */
    categories: D_CATEGORIES,
    /**
     * All authors with articles
     */
    authors: D_AUTHORS,
    /**
     * Tags
     */
    tags: [],
    /**
     * Current active article
     */
    aArticle: D_AARTICLE,
    /**
     * Related articles of aArticle
     */
    relatedArticles: limiter(D_ARTICLES, 4),

};

/**
 * @param {*} state
 * @param {*} action
 */
export const reducer = (state, action) => {
    switch (action.type) {
        case "changeTheme":
            return {
                ...state,
                theme: checkValue(action.changeTheme, _THEMES)
                    ? loadFromCache('theme', action.changeTheme, true)
                    : _THEMES[0]
            };
        case "changeLanguage":
            return {
                ...state,
                language: checkValue(action.changeLanguage, _LANGUAGES)
                    ? loadFromCache('language', action.changeLanguage, true)
                    : _LANGUAGES[0]
            };
        case "addToast":
            return {
                ...state,
                toasts: action.addToast,
            };
        case "setError":
            return {
                ...state,
                error: action.setError,
            };
        case "setArticles":
            return {
                ...state,
                articles: action.setArticles
            };
        case "setCategories":
            return {
                ...state,
                categories: reindexer(action.setCategories, 'code')
            };
        case "setAuthors":
            return {
                ...state,
                authors: reindexer(action.setAuthors, 'id')
            };
        case "setTags":
            return {
                ...state,
                tags: action.setTags
            };
        case "setActiveArticle":
            let language = checkValue(action.setActiveArticle.language_id, _LANGUAGES) ? action.setActiveArticle.language_id : state.language;
            return {
                ...state,
                aArticle: action.setActiveArticle,
                language
            };
        case "setRelatedArticles":
            return {
                ...state,
                relatedArticles: action.setRelatedArticles,
            };
        default:
            return state;
    }
};
