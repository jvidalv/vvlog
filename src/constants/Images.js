/**
 * Check for enviorment to pick a base
 * @type {string}
 */
const BASE_IMAGE = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/' : 'https://vvlog.io/';

export default BASE_IMAGE;