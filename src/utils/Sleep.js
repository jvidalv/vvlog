/**
 * To wait X seconds before continue, 2020 JS version
 * @param ms
 */
const Sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default Sleep
