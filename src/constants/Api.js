/**
 * Check for environment to pick a base
 * @type {string}
 */
const BASE_PATH = process.env.NODE_ENV !== 'development' ? 'http://localhost:8080/api/' : ''

const api_calls = {
  articles: {
    all: {
      url: `${BASE_PATH}article/all`,
      method: 'GET',
    },
    one: {
      url: `${BASE_PATH}article/one`,
      method: 'GET',
    },
    related: {
      url: `${BASE_PATH}article/related`,
      method: 'GET',
    },
    clap: {
      url: `${BASE_PATH}article/clap`,
      method: 'GET',
    },
  },
  categories: {
    all: {
      url: `${BASE_PATH}category/all`,
      method: 'GET',
    },
  },
  authors: {
    all: {
      url: `${BASE_PATH}user/all`,
      method: 'GET',
    },
  },
  tags: {
    all: {
      url: `${BASE_PATH}tag/all`,
      method: 'GET',
    },
  },
  data: {
    user_cookies: {
      url: `${BASE_PATH}data/user-cookies`,
      method: 'GET',
    },
    newsletter_subscriber: {
      url: `${BASE_PATH}data/newsletter-subscriber`,
      method: 'GET',
    },
    contact_form: {
      url: `${BASE_PATH}data/contact-form`,
      method: 'POST',
    },
  },
}

export default api_calls
