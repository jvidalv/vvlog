/**
 * @type {string}
 */
const BASE_IMAGE = process.env.NODE_ENV !== 'development' ? '' : ''

/**
 * Image placeholders
 * @param width
 * @param height
 * @returns {{user: string}}
 */
export const images_url = (width, height) => {
  return {
    user: `${BASE_IMAGE}media/get-image?table=user&table_id=999999&size=%5B${width}%2C${height}%5D`,
    article: `${BASE_IMAGE}media/get-image?table=article&table_id=999999&size=%5B${width}%2C${height}%5D`,
  }
}

export default BASE_IMAGE
