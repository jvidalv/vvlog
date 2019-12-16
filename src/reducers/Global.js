import React from "react";
import {checkValue, limiter, loadFromCache, reindexer} from "../helpers/Generics";
import {D_AARTICLE, D_ARTICLES, D_AUTHORS, D_ERROR} from "../constants/Dummy";
import {_LANGUAGES} from "../constants/Dictionary";
import {_THEMES} from "../constants/Themes";
import {getNavigatorLanguage} from "../helpers/Translator";

/**
 * Globals default state
 * @type {{mainLoading: boolean, aArticle: *, theme: (*|string), language: (*|string), categories: {}, articles: *, errors: boolean, authors: *, tags: []}}
 */
export const initialState = {
    theme: loadFromCache('theme', _THEMES[0]),
    language: loadFromCache('language', getNavigatorLanguage()),
    articles: D_ARTICLES,
    categories: {},
    authors: D_AUTHORS,
    tags: [],
    aArticle: D_AARTICLE,
    relatedArticles: limiter(D_ARTICLES, 4),
    error: D_ERROR,
};

/**
 * Reducer of global parameters
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
