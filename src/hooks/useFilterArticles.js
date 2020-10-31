import { useGlobals } from '../contexts/Global'
import { multiFilter } from '../helpers/Generics'

/**
 * Filters articles by properties and filter (q), you can reach language deep levels with nested property
 * @param properties
 * @param q
 * @param nested
 * @returns {[]}
 */
export const useFilterArticles = (properties, q = false, nested = false) => {
  const [{ articles }] = useGlobals()
  return multiFilter(articles, properties, q, nested)
}
