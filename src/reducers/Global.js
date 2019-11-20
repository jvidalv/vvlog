import React from "react";

const _THEMES = ["dark", "light"];
const _LANGUAGES = ["ca", "es", "en"];

export const initialState = {
    mainLoading: true,
    theme: "dark",
    language: "ca",
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
                mainLoading : action.mainLoading
            };
        case "changeTheme":
            return {
                ...state,
                theme: checkValue(action.changeTheme, _THEMES)
                    ? action.changeTheme
                    : _THEMES[0]
            };
        case "changeLanguage":
            return {
                ...state,
                language: checkValue(action.changeLanguage, _LANGUAGES)
                    ? action.changeLanguage
                    : _LANGUAGES[0]
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
