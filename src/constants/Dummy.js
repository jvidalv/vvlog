/**
 * Dummy data that is used to start up fast the app while the real content loads
 * @type {*[]}
 */

export const D_ARTICLES =
    [{id: 1, featured: 1, fake: true}, {id: 2, featured: 1, fake: true}, {id: 3, featured: 1, fake: true}, {
        id: 4,
        featured: 0,
        fake: true
    }, {
        id: 5,
        featured: 0, fake: true
    }, {id: 6, featured: 0, fake: true}, {id: 7, featured: 0, fake: true}, {id: 8, featured: 0, fake: true}, {
        id: 9,
        featured: 0, fake: true
    }, {id: 10, featured: 0, fake: true}, {id: 11, featured: 0, fake: true}, {id: 12, featured: 0, fake: true}, {
        id: 13,
        featured: 0, fake: true
    }, {id: 14, featured: 0, fake: true}, {id: 15, featured: 0, fake: true}, {id: 16, featured: 0, fake: true}, {
        id: 17,
        featured: 0, fake: true
    }, {id: 18, featured: 0, fake: true}]
;

export const D_AUTHORS = [
    {id: false, fake: true}, {id: false, fake: true}, {id: false, fake: true}, {id: false, fake: true}, {
        id: false,
        fake: true
    }
];

export const D_CATEGORIES = {
    general: {id: 1, fake: true},
    react: {id: 2, fake: true},
    yii2: {id: 3, fake: true},
    php: {id: 4, fake: true},
    'react-native': {id: 5, fake: true},
    javascript: {id: 6, fake: true},
    css: {id: 7, fake: true},
};

export const D_AARTICLE = {time_to_read: 'X', date_nice: 'Feb. 30 ' + new Date().getFullYear(), fake: true};

export const D_ERROR = {code: 200, message: 'nothing_is_wrong', description: 'why_would_you_come_here'};

export const D_TOAST = {
    id: 0,
    fake: true,
    header: 'Language switch',
    content: 'You changed the language to Catalan',
    date: '11 min ago'
};
