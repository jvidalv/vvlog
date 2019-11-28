/**
 * Builds an url consumable by a fetch promise
 * @param url
 * @param params
 * @returns {*}
 */
export function urlBuilder(url, params) {
    return url + (params ? "?" + JSON.stringify(params) : '');
}

/**
 * Limits the number of items in a certain array, so we can operate the data in less lines of code in the components
 * You can also skips certain number of values
 * @param array
 * @param limit
 * @param numToSkip
 * @returns {*}
 */
export function limiter(array, limit, numToSkip) {
    let bs = 0;

    if (numToSkip) array = skipper(array, numToSkip);

    return array.filter(() => {
        bs++;
        return bs <= limit;
    })
}

/**
 * Removes x elements from the array starting from the beggining
 * @param array
 * @param steps
 * @returns {any[]}
 */
export function skipper(array, steps) {
    return array.splice(0, steps);
}

/**
 * Converts an array to an indexed object by the property specified
 * @param array
 * @param index
 */
export function reindexer(array, index) {
    let newArr = {};
    for (let data of array) {
        newArr[data[index]] = data;
    }
    return newArr;
}

/**
 * Recursive dynamic function that checks for setted properties in objects o arrays
 * You must give and object or array, and all the properties in nested level you wanna check
 * Fallback that will be returned in case the prop is not setted
 * So example, we wanna print the description of an item that is inside categories.react.ca.name
 *  => checker(categories, ['react', 'ca', 'name], 'name_in_case_is_not_found')
 *
 * @param array
 * @param properties
 * @param fallback
 * @returns {*}
 */
export function checker(array, properties, fallback) {

        if (!array[properties[0]]) return fallback;
        else if (properties.length > 1) {
            let n = array[properties[0]];
            properties.splice(0, 1);
            return checker(n, properties, fallback)
        }

        return array[properties[0]];
}

