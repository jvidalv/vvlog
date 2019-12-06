import React from "react";
import {loadFromCache, reindexer} from "../helpers/Generics";
import {D_AARTICLE, D_ARTICLES, D_AUTHORS} from "../constants/Dummy";
import {_LANGUAGES} from "../constants/Dictionary";
import {_THEMES} from "../constants/Themes";

/**
 * Globals default state
 * @type {{mainLoading: boolean, aArticle: *, theme: (*|string), language: (*|string), categories: {}, articles: *, errors: boolean, authors: *, tags: []}}
 */
export const initialState = {
    mainLoading: true,
    theme: loadFromCache('theme', _THEMES[0]),
    language: loadFromCache('language', _LANGUAGES[0]),
    articles: D_ARTICLES,
    categories: {},
    authors : D_AUTHORS,
    tags : [],
    aArticle: D_AARTICLE,
    errors: false,
};

/**
 * Reducer of global parameters
 * @param {*} state
 * @param {*} action
 */
export const reducer = (state, action) => {
    switch (action.type) {
        case "changeMainLoading" :
            return {
                ...state,
                mainLoading: action.mainLoading
            };
        case "changeTheme":
            return {
                ...state,
                theme: checkValue(action.changeTheme, _THEMES)
                    ?  loadFromCache('theme', action.changeTheme, true)
                    : _THEMES[0]
            };
        case "changeLanguage":
            return {
                ...state,
                language: checkValue(action.changeLanguage, _LANGUAGES)
                    ? loadFromCache('language', action.changeLanguage, true)
                    : _LANGUAGES[0]
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
        case "setErrors":
            return {
                ...state,
                errors: action.setErrors
            };
        default:
            return state;
    }
};

/**
 * We check for the value te be really in the constants
 * @param {*} value
 * @param {*} values
 */
const checkValue = (value, values) => {
    return values.includes(value);
};
