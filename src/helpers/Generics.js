/**
 * Builds the request object depending on call and params specified
 * @param call
 * @param params
 */

export function buildRequest(call, params) {
  let url = urlBuilder(call.url, params);
  let request = {
    method: call.method,
  };

  switch (call.method) {
    case 'POST':
      request.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      request.body = JSON.stringify(params);
      break;
    default:
    case 'GET':
      url = urlBuilder(call.url, params);
      break;
  }

  return { url, request };
}

/**
 * Builds an url consumable by a fetch promise
 * @param url
 * @param params
 * @returns {*}
 */
export function urlBuilder(url, params) {
  const ourl = new URL(url);
  if (params) {
    Object.keys(params).forEach((key) =>
      ourl.searchParams.append(key, params[key])
    );
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
  });
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
    newArr[data[index].toString()] = data;
  }
  return newArr;
}

/**
 * Recursive dynamic function that checks for set properties in objects
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
  const prop = properties[0];
  if (!object.hasOwnProperty(prop)) return fallback;
  if (properties.length > 1) {
    let n = object[prop];
    properties.splice(0, 1);
    return areSet(n, properties, fallback);
  }

  return object[prop];
}

/**
 * Filters an array of objects
 * @param array of objects
 * @param properties that you want to filter e: ['name', 'description]
 * @param filter string
 * @param nest if the propertis are nested in a level below, you can set this property, exemple, obj.language.name, you would pass language
 * @returns {*}
 */
export function multiFilter(array, properties, filter = '', nest = false) {
  return array.filter((obj) => {
    let fobj = nest ? obj[nest] : obj;
    for (let prop of properties) {
      if (
        fobj[prop].toString().toLowerCase().search(filter.toLowerCase()) !== -1
      )
        return true;
    }

    return false;
  });
}

/**
 * Loads from cache the data by the key, and if it fails, it creates a new cache with the data in the fallback variable
 * @param key
 * @param fallback
 * @param override
 * @returns {string|*}
 */
export function loadFromCache(key, fallback, override = false) {
  const value = localStorage.getItem(key);
  if (value && !override) {
    return value;
  } else {
    localStorage.setItem(key, fallback);
    return fallback;
  }
}

/**
 * Is the value in the arrays of values?
 * @param {*} value
 * @param {*} values
 */
export function checkValue(value, values) {
  return values.includes(value);
}

/**
 * Makes the scroll to anchors or to top smooth instead of automatic
 * @param toTop boolean
 */
export function smoothMove(toTop = false) {
  document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth';
  if (toTop) {
    setTimeout(() => window.scrollTo(0, 0), 50);
  }
  setTimeout(
    () => document.getElementsByTagName('html')[0].removeAttribute('style'),
    150
  );
}

/**
 * Returns the url ready to be consumed by react-router
 * @param language
 * @param {string} category
 * @param {string} slug
 */
export function generateLink(language, category, slug = '') {
  return (
    '/' +
    language +
    '/' +
    category +
    (slug ? '/' + slug : '')
  ).toLocaleLowerCase();
}
