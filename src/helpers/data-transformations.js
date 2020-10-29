import ArticleHasTranslations from '../data/ArticleHasTranslations'
import Articles from '../data/Articles'
import Categories from '../data/Categories'
import ArticlesHasTags from '../data/ArticlesHasTags'
import ArticleHasAnchors from '../data/ArticleHasAnchors'
import ArticlesHasSources from '../data/ArticlesHasSources'
import Tags from '../data/Tags'

export const articlesAll = () => {
  const translations = ArticleHasTranslations
  return translations.map(
    ({ id, article_ca, article_es, article_en, category_id, date, featured }) => {
      const articles = Articles
      const category = Categories.find(({ id }) => id === category_id)
      return {
        id,
        featured,
        date,
        category: category?.code,
        ca: {
          ...articles.find(({ id, language_id }) => id === article_ca && language_id === 'ca'),
          category: category?.name_ca,
        },
        es: {
          ...articles.find(({ id, language_id }) => id === article_es && language_id === 'es'),
          category: category?.name_es,
        },
        en: {
          ...articles.find(({ id, language_id }) => id === article_en && language_id === 'en'),
          category: category?.name_en,
        },
      }
    },
  )
}

export const articlesOne = (slugOfArticle) => {
  const article = Articles.find(({ slug }) => slug === slugOfArticle)
  const translation = ArticleHasTranslations.find(
    (props) => props[`article_${article?.language_id}`] === article?.id,
  )
  const category = Categories.find(({ id }) => id === translation?.category_id)
  const tags = ArticlesHasTags.filter(({ article_id }) => article_id === article?.id)
  const anchors = ArticleHasAnchors.filter(({ article_id }) => article_id === article?.id)

  return {
    ...article,
    ...translation,
    state: 1,
    word_count: 1173,
    image: 'uploads/2020/01/article/200200article-23.jpg',
    category_nice: category?.[`name_${article.language_id}`],
    category_code: category?.code,
    claps: 8,
    tags,
    anchors,
    sources: {
      language: ArticlesHasSources.filter(
        ({ article_id, type }) => article_id === article?.id && type === 'language',
      ),
      so: ArticlesHasSources.filter(
        ({ article_id, type }) => article_id === article?.id && type === 'so',
      ),
      library: ArticlesHasSources.filter(
        ({ article_id, type }) => article_id === article?.id && type === 'library',
      ),
      framework: ArticlesHasSources.filter(
        ({ article_id, type }) => article_id === article?.id && type === 'framework',
      ),
      package: ArticlesHasSources.filter(
        ({ article_id, type }) => article_id === article?.id && type === 'package',
      ),
      source: ArticlesHasSources.filter(
        ({ article_id, type }) => article_id === article?.id && type === 'source',
      ),
      other: ArticlesHasSources.filter(
        ({ article_id, type }) => article_id === article?.id && type === 'other',
      ),
    },
    translations: {
      id: translation.id,
      ca: Articles.find(({ id }) => id === translation?.article_ca)?.slug,
      es: Articles.find(({ id }) => id === translation?.article_es)?.slug,
      en: Articles.find(({ id }) => id === translation?.article_en)?.slug,
    },
  }
}

export const articlesRelated = () => []

export const categoriesAll = () =>
  Categories.map(
    ({
      id,
      code,
      name_ca,
      name_es,
      name_en,
      description_ca,
      description_es,
      description_en,
      color_hex,
      image,
    }) => ({
      id,
      code,
      color_hex,
      ca: {
        name: name_ca,
        description: description_ca,
      },
      es: {
        name: name_es,
        description: description_es,
      },
      en: {
        name: name_en,
        description: description_en,
      },
      image,
    }),
  )

export const authorsAll = () => []

export const tagsAll = () => Tags
