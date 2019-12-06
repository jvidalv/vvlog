
/**
 * Accepted languages
 * @type {Array}
 */
export const _LANGUAGES = ["en", "ca", "es"];

/**
 * All the translations by language
 * @private
 */
const DICTIONARY = {
    ca: {
        explore : 'Explora',
        contact : 'Contactar',
        about : 'Que és vvlog',
        lang : '{param} Lleng.',
        catalan : 'Catalá',
        spanish : 'Espanyol',
        english : 'Anglés',
        but_dont_get_lost : '...Però no et perdis {param}',
        write_the_query : 'escriu la consulta',
        written_by : 'Escrit per',
        min_read : '{param} min. llegir',
    },
    es : {
        explore : 'Explora',
        contact : 'Contactar',
        about : 'Sobre vvlog',
        lang : '{param} Leng.',
        catalan : 'Catalán',
        spanish : 'Español',
        english : 'Inglés',
        but_dont_get_lost : '...Intenta no perderte {param}',
        write_the_query : 'escribe tu consulta',
        written_by : 'Escrito por',
        min_read : '{param} min. leer',

    },
    en : {
        explore : 'Explore',
        contact : 'Contact',
        about : 'About',
        lang : '{param} Lang.',
        catalan : 'Catalan',
        spanish : 'Spanish',
        english : 'English',
        but_dont_get_lost : '...But don\'t get lost {param}',
        write_the_query : 'write the query',
        written_by : 'Written by',
        min_read : '{param} min read',
    }
};

export default DICTIONARY;