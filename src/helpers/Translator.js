import {useGlobals} from "../contexts/Global";
import DICTIONARY from "../constants/Dictionary";

/**
 * Translation hook
 * @param translation
 * @param params
 * @returns {string|*}
 */
function useT(translation, params = []) {

    /**
     * Language from context
     */
    const [{language}] = useGlobals();

    /**
     * Properties
     */
    let fs = translation;

    try {

        if (!DICTIONARY[language]) {
            console.error(`🧨 Missing language -> ${language}`);
            return `@@ ${fs} @@`;
        }

        if (!DICTIONARY[language][translation]) {
            console.error(`🧨 Missing translation -> ${translation} <- for -> ${language}`);
            return `@@ ${fs} @@`;
        }

        fs = DICTIONARY[language][translation];

        if (fs.includes('{param}')) {
            fs = multiReplace(fs, params)
        }

    } catch (error) {
        return '@@ translation_error @@'
    }

    return fs
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

export default useT;