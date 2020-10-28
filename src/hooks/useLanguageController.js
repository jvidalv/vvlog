import { useGlobals } from '../contexts/Global'
import { useHistory } from 'react-router-dom'
import React from 'react'

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
  const languageIsSet = () => {
    const strLang = history.location.pathname.substr(0, 3)
    return strLang.includes('ca') || strLang.includes('es') || strLang.includes('en')
  }

  /**
   * Checks if the current language in url is the same that is set in the session
   * @returns {boolean}
   */
  const currentUrlLanguageIsSet = () => {
    const strLang = history.location.pathname.substr(0, 3)
    return strLang.includes(language)
  }

  const getLanguageSetInUrl = () => {
    return history.location.pathname.split('/')[1]
  }

  /**
   * @returns {string}
   */
  const getPathWithLanguageReplaced = () => {
    const pathArray = history.location.pathname.split('/')
    pathArray[1] = language
    return pathArray.join('/')
  }

  /**
   * If language is not set we force it to be
   */
  React.useEffect(() => {
    !languageIsSet() &&
      history.push({
        pathname: getPathWithLanguageReplaced(),
      })
  }, [history.location.pathname])

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
  }, [history.location.pathname])
}

export default useLanguageController
