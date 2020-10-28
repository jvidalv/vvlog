/**
 * Light layer in top of localStorage to override and simplify some of the methods
 */
export class vStorage {
  /**
   * @param key
   * @returns {boolean}
   */
  static getItem(key) {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : false
  }

  /**
   * @param key
   * @param data
   */
  static setItem(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  /**
   * @param key
   */
  static removeItem(key) {
    localStorage.removeItem(key)
  }
}

export default vStorage
