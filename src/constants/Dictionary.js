/**
 * Accepted languages
 * @type {Array}
 */
export const _LANGUAGES = ["en", "ca", "es"];

/**
 * Translations by language
 * @private
 */
const DICTIONARY = {
    ca: {
        explore: 'Explora',
        contact: 'Contactar',
        about: 'Que és vvlog',
        lang: '{param} Lleng.',
        catalan: 'Catalá',
        spanish: 'Espanyol',
        english: 'Anglés',
        but_dont_get_lost: '...Però no et perdis {param}',
        write_the_query: 'escriu la consulta',
        written_by: 'Escrit per',
        min_read: '{param} min. llegir',
        more_of_vvlog : 'Més de vvlog {param}',
        seems_like_this_is_empty : 'Sembla que això esta buit',
        maybe_try_another_words : 'Potser amb unes altres paraules {param}'
    },
    es: {
        explore: 'Explora',
        contact: 'Contactar',
        about: 'Sobre vvlog',
        lang: '{param} Leng.',
        catalan: 'Catalán',
        spanish: 'Español',
        english: 'Inglés',
        but_dont_get_lost: '...Intenta no perderte {param}',
        write_the_query: 'escribe tu consulta',
        written_by: 'Escrito por',
        min_read: '{param} min. leer',
        more_of_vvlog: 'Mas de vvlog {param}',
        seems_like_this_is_empty : 'Parece que esto esta vacio',
        maybe_try_another_words : 'A lo mejor con otras palabras {param}'
    },
    en: {
        explore: 'Explore',
        contact: 'Contact',
        about: 'About',
        lang: '{param} Lang.',
        catalan: 'Catalan',
        spanish: 'Spanish',
        english: 'English',
        but_dont_get_lost: '...But don\'t get lost {param}',
        write_the_query: 'write the query',
        written_by: 'Written by',
        min_read: '{param} min read',
        more_of_vvlog:'More of vvlog {param}',
        seems_like_this_is_empty : 'Seems like this is empty',
        maybe_try_another_words : 'Maybe with other words {param}'
    }
};

export default DICTIONARY;