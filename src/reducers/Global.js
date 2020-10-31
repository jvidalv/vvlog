import { limiter, loadFromCache } from '../helpers/Generics'
import { D_AARTICLE, D_ARTICLES, D_ERROR, D_TOAST } from '../constants/Dummy'
import { _THEMES } from '../constants/Themes'
import { getNavigatorLanguage } from '../helpers/Translator'
import { articlesAll, authorsAll, categoriesAll, tagsAll } from '../helpers/data-transformations'

/**
 * Globals default state
 * @type {{relatedArticles: *, aArticle: *, theme: *, language: *, categories: {}, error: *, articles: *, authors: *, tags: []}}
 */
export const initialState = {
  /**
   * Default theme that propitiate the entire CSS configuration
   */
  theme: loadFromCache('theme', _THEMES[0]),
  /**
   * Language
   */
  language: loadFromCache('language', getNavigatorLanguage()),
  /**
   * Notifications that pops in the top corner
   */
  toasts: [D_TOAST],
  /**
   * Error
   */
  error: D_ERROR,
  /**
   * List of articles, with all the languages
   */
  articles: articlesAll(),
  /**
   * Categories
   */
  categories: categoriesAll(),
  /**
   * All authors with articles
   */
  authors: authorsAll(),
  /**
   * Tags
   */
  tags: tagsAll(),
  /**
   * Current active article
   */
  aArticle: D_AARTICLE,
  /**
   * Related articles of aArticle
   */
  relatedArticles: limiter(D_ARTICLES, 4),
}

/**
 * @param {*} state
 * @param {*} action
 */
export const reducer = (state, action) => {
  switch (action.type) {
    case 'changeTheme':
      return {
        ...state,
        theme: loadFromCache('theme', action.changeTheme, true),
      }
    case 'changeLanguage':
      return {
        ...state,
        language: loadFromCache('language', action.changeLanguage, true),
      }
    case 'addToast':
      return {
        ...state,
        toasts: action.addToast,
      }
    case 'setError':
      return {
        ...state,
        error: action.setError,
      }
    case 'setActiveArticle':
      let language = state.language
      if (
        action.setActiveArticle.language_id &&
        state.language !== action.setActiveArticle.language_id
      ) {
        language = action.setActiveArticle.language_id
      }
      return {
        ...state,
        aArticle: action.setActiveArticle,
        language: language,
      }
    case 'setRelatedArticles':
      return {
        ...state,
        relatedArticles: action.setRelatedArticles,
      }
    default:
      return state
  }
}
