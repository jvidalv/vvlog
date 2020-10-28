// {
//     "id": 17,
//     "ca": {
//     "id": 18,
//         "title": "Fer la nostra aplicació multillenguatge utilitzant la potència dels hooks i React.createContext",
//         "resume": "Com fer, amb molt poques línies de codi, el nostre traductor per tenir l'aplicació disponible en més d'un idioma sense necessitat de paquets de tercers.",
//         "slug": "fer-la-nostra-aplicacio-multillenguatge-utilitzant-la-potencia-dels-hooks-i-reactcreatecontext",
//         "category": "React",
//         "date": "d'oct.28, 2020",
//         "image": "uploads/2020/01/article/200200article-23.jpg"
// },
//     "es": {
//     "id": 16,
//         "title": "Hacer nuestra aplicación multilenguaje utilizando la potencia de los hooks y React.createContext",
//         "resume": "Como hacer, con muy pocas líneas de código, nuestro propio traductor para tener nuestra aplicación disponible en más de un idioma sin necesidad de paquetes de terceros.",
//         "slug": "hacer-nuestra-aplicacion-multilenguaje-utilizando-la-potencia-de-los-hooks-y-reactcreatecontext",
//         "category": "React",
//         "date": "oct28, 2020",
//         "image": "uploads/2020/01/article/200200article-21.jpg"
// },
//     "en": {
//     "id": 17,
//         "title": "Make our application multilingual using the power of hooks and React.createContext",
//         "resume": "How to make, with very few lines of code, our own translator to have our application available in more than one language without the need for third party packages.",
//         "slug": "make-our-application-multilingual-using-the-power-of-hooks-and-reactcreatecontext",
//         "category": "React",
//         "date": "oct28, 2020",
//         "image": "uploads/2020/01/article/200200article-22.jpg"
// },
//     "featured": 1,
//     "date": "2020-01-16 19:30:00",
//     "category": "react"
// }
import ArticleHasTranslations from '../data/ArticleHasTranslations'
import Articles from '../data/Articles'
import Categories from '../data/Categories'

export const articlesAll = () => {
  const translations = ArticleHasTranslations
  return translations.map(
    ({ id, article_ca, article_es, article_en, category_id, date, featured }) => {
      const articles = Articles
      const categories = Categories
      return {
        id,
        featured,
        date,
        category: categories.find(({ id }) => id === category_id)?.code,
        ca: {
          ...articles.find(({ id, language_id }) => id === article_ca && language_id === 'ca'),
          category: categories.find(({ id }) => id === category_id)?.name_ca,
        },
        es: {
          ...articles.find(({ id, language_id }) => id === article_es && language_id === 'es'),
          category: categories.find(({ id }) => id === category_id)?.name_es,
        },
        en: {
          ...articles.find(({ id, language_id }) => id === article_en && language_id === 'en'),
          category: categories.find(({ id }) => id === category_id)?.name_en,
        },
      }
    },
  )
}

export const articlesOne = (slugOfArticle) => {
  const articles = Articles
  const categories = Categories
  return {
    ...articles.find(({ slug }) => slug === slugOfArticle),
    state: 1,
    word_count: 1173,
    image: 'uploads/2020/01/article/200200article-23.jpg',
    category_nice: 'React',
    category_code: 'react',
    time_to_read: 7,
    claps: 8,
    date_nice: 'de gen. 16, 2020',
    tags: [
      {
        id: 432,
        article_id: 18,
        tag_id: 12,
      },
      {
        id: 431,
        article_id: 18,
        tag_id: 3,
      },
      {
        id: 430,
        article_id: 18,
        tag_id: 2,
      },
      {
        id: 429,
        article_id: 18,
        tag_id: 1,
      },
    ],
    anchors: [
      {
        id: 296,
        article_id: 18,
        anchor_id: 'a0',
        content: 'El diccionari',
      },
      {
        id: 297,
        article_id: 18,
        anchor_id: 'a1',
        content: 'És un núvol? És un avió? No! És el context!',
      },
      {
        id: 298,
        article_id: 18,
        anchor_id: 'a2',
        content: "Modificar i accedir a l'idioma",
      },
      {
        id: 299,
        article_id: 18,
        anchor_id: 'a3',
        content: 'El divertit, el hook que tradueix',
      },
      {
        id: 300,
        article_id: 18,
        anchor_id: 'a4',
        content: 'Utilizar el hook useT() en els nostres components',
      },
    ],
    sources: {
      language: [],
      so: [],
      library: [
        {
          name: 'React',
          version: '16.12.0',
          url: 'https://es.reactjs.org/',
        },
      ],
      framework: [],
      package: [],
      source: [],
      other: [],
    },
    translations: {
      id: 5,
      ca:
        'fer-la-nostra-aplicacio-multillenguatge-utilitzant-la-potencia-dels-hooks-i-reactcreatecontext',
      es:
        'hacer-nuestra-aplicacion-multilenguaje-utilizando-la-potencia-de-los-hooks-y-reactcreatecontext',
      en: 'make-our-application-multilingual-using-the-power-of-hooks-and-reactcreatecontext',
    },
  }
}

const articlesRelated = () => []

const categoriesAll = () => []

const authorsAll = () => []

const tagsAll = () => []
