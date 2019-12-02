/**
 * Builds an url consumable by a fetch promise
 * @param url
 * @param params
 * @returns {*}
 */
export function urlBuilder(url, params) {
    const ourl = new URL(url);
    if(params){
        Object.keys(params).forEach(key => ourl.searchParams.append(key, params[key]))
    }
    return ourl;
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
 * Recursive dynamic function that checks for setted properties in objects
 * You must pass and object and all the properties that you want to check IN ORDER 💡
 * ------- EXAMPLE ---------- |
 * We want to print the description of an item that is inside { Categories } => react.ca.name
 *  => areSet(categories, ['react', 'ca', 'name], <ReactComponent />)
 *  ------------------------ |
 * @param object
 * @param properties
 * @param fallback => It could be an string, a function or a React.Component
 * @returns {*}
 */
export function areSet(object, properties, fallback = null) {

        if (!object.hasOwnProperty(properties[0])) return fallback;
        else if (properties.length > 1) {
            let n = object[properties[0]];
            properties.splice(0, 1);
            return areSet(n, properties, fallback)
        }

        return object[properties[0]];
}

/**
 * Filters an array of objects
 * @param array of objects
 * @param properties that you want to filter e: ['name', 'description]
 * @param filter string
 * @param nest if the propertis are nested in a level below, you can set this property, exemple, obj.language.name, you would pass language
 * @returns {*}
 */
export function multiFilter(array, properties, filter = '', nest = false){

    return array.filter(obj => {

        let fobj = nest ? obj[nest] : obj;
        for(let prop of properties){
            if(fobj[prop].toLowerCase().search(filter.toLowerCase()) !== -1) return true
        }

        return false;
    })
}

