/**
 * Check for enviorment to pick a base
 * @type {string}
 */
const BASE_PATH = process.env.NODE_ENV === 'development' ? 'https://vvadmin.dev/api/' : 'https://vvadmin.dev/api/';

/**
 * @type {{categories: {all: {method: string, url: string}}, articles: {all: {method: string, url: string}, related: {method: string, url: string}, one: {method: string, url: string}}, authors: {all: {method: string, url: string}}, tags: {all: {method: string, url: string}}}}
 */
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
    }
};

export default api_calls;