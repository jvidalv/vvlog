import {useGlobals} from "../contexts/Global";
import DICTIONARY, {_LANGUAGES} from "../constants/Dictionary";
import {checkValue} from "./Generics";

/**
 * Translation hook
 * @param translation
 * @param params
 * @returns {string|*}
 */
function useT(translation, params = []) {
    const [{language}] = useGlobals();
    return translatorCore(translation, params, language)
}

/**
 * Non hook translation  for dynamic components
 * @param translation
 * @param params
 * @param language
 */
export function t(translation, params = [], language) {
    return translatorCore(translation, params, language)
}

/**
 * Core function that translates both hooks and non hooks call
 * @param translation
 * @param params
 * @param language
 * @returns {string|*}
 */
function translatorCore(translation, params = [], language) {
    let fs = translation;

    try {

        if (!DICTIONARY[language]) {
            console.error(`🧨 Missing language -> ${language}`);
            return `@@ ${fs} @@`;
        }

        if (!DICTIONARY[language][translation]) {
            console.error(`🧨 Missing translation -> ${translation} ${params} for -> ${language}`);
            return `@@ ${fs} @@`;
        }

        fs = DICTIONARY[language][translation];

        if (fs.includes('{param}')) {
            fs = multiReplace(fs, params)
        }

    } catch (error) {
        fs = '@@ translation_error @@'
    }

    return fs;
}

/**
 * Replaces {param} in string with the elements, it replaces by order of array
 * @param fs
 * @param arr
 * @returns {*}
 */
function multiReplace(fs, arr) {

    for (let element of arr) {
        fs = fs.replace('{param}', element)
    }

    return fs;
}

/**
 * Captures the language of the navigator, if does not match any of the acepted ones it returns english as default language
 * @returns {string|*}
 */
export function getNavigatorLanguage() {
    let flang = _LANGUAGES[0];
    const nlang = navigator.language.substr(0, 2).toLocaleLowerCase();

    if (!nlang || !checkValue(nlang, _LANGUAGES)) {
        return flang;
    }

    return nlang;
}

export default useT;