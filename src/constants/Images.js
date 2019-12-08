/**
 * Check for enviorment to pick a base
 * @type {string}
 */
const BASE_IMAGE = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/' : 'https://vvlog.io/';

/**
 * Image placeholders
 * @param width
 * @param height
 * @returns {{user: string}}
 */
export const images_url = (width, height) => {
    return {
        'user': `${BASE_IMAGE}media/get-image?table=user&table_id=999999&size=%5B${width}%2C${height}%5D`
    }
};

export default BASE_IMAGE;