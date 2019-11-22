/**
 * Check for enviorment to pick a base
 * @type {string}
 */
const BASE_PATH = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api/' : 'https://vblogv.io/admin/api/';

/**
 * Array with all the calls to the api
 * @type {{all: string}}
 */
const api_calls = {
    articles : {
        all: `${BASE_PATH}article/all`,
    }
};

export default api_calls;