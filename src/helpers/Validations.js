/**
 * Is a valid email?
 * @param email
 * @returns {boolean}
 */
export function isEmail(email) {
  return /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email)
}
