/**
 * Check for enviorment to pick a base
 * @type {string}
 */
const BASE_PATH = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api/' : 'https://vvlog.io/admin/api/';

/**
 * Array with all the calls to the api
 * @type {{categories: {all: string}, articles: {all: string, one: string}, authors: {all: string}, tags: {all: string}}}
 */
const api_calls = {
    articles : {
        all: `${BASE_PATH}article/all`,
        one: `${BASE_PATH}article/one`,
    },
    categories : {
        all: `${BASE_PATH}category/all`,
    },
    authors : {
        all : `${BASE_PATH}user/all`,
    },
    tags : {
        all : `${BASE_PATH}tag/all`,
    }
};

export default api_calls;