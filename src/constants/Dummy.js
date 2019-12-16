/**
 * DUMMY DATA USED WHILE REAL DATA LOADS
 */
import useT from "../helpers/Translator";

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

export const D_AARTICLE = {time_to_read: 'X', date_nice: 'Feb. 30 ' + new Date().getFullYear(), fake: true};

export const D_ERROR = {code : 200, message : 'nothing_is_wrong', description : 'why_would_you_come_here'};
