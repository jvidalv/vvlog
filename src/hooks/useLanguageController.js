import React from 'react'
import { useGlobals } from '../contexts/Global'
import { useHistory } from 'react-router-dom'

/**
 * Takes care of all language related problems and to give the right path and params to both routing object and user
 */
export const useLanguageController = () => {
  const [{ language }, dispatch] = useGlobals()
  const history = useHistory()

  /**
   * Checks if url contains any of the blog languages
   * @returns {boolean}
   */
  const languageIsSet = React.useCallback(() => {
    const strLang = history.location.pathname.substr(0, 3)
    return strLang.includes('ca') || strLang.includes('es') || strLang.includes('en')
  }, [history.location.pathname])

  /**
   * Checks if the current language in url is the same that is set in the session
   * @returns {boolean}
   */
  const currentUrlLanguageIsSet = React.useCallback(() => {
    const strLang = history.location.pathname.substr(0, 3)
    return strLang.includes(language)
  }, [history.location.pathname, language])

  const getLanguageSetInUrl = React.useCallback(() => {
    return history.location.pathname.split('/')[1]
  }, [history.location.pathname])

  /**
   * @returns {string}
   */
  const getPathWithLanguageReplaced = React.useCallback(() => {
    const pathArray = history.location.pathname.split('/')
    pathArray[1] = language
    return pathArray.join('/')
  }, [history.location.pathname, language])

  /**
   * If language is not set we force it to be
   */
  React.useEffect(() => {
    !languageIsSet() &&
      history.push({
        pathname: getPathWithLanguageReplaced(),
      })
  }, [history.location.pathname, languageIsSet, getPathWithLanguageReplaced, history])

  /**
   * On language change we push to history
   */
  React.useEffect(() => {
    if (!currentUrlLanguageIsSet()) {
      dispatch({
        type: 'changeLanguage',
        changeLanguage: getLanguageSetInUrl(),
      })
    }
  }, [history.location.pathname, getLanguageSetInUrl, dispatch, currentUrlLanguageIsSet])
}

export default useLanguageController
