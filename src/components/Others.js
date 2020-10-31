import React from 'react'
import { ButtonStyled, H3, H5, P } from '../styles/GenericStyles'
import useT from '../helpers/Translator'
import { CategoryCircle, CookiesDiv } from './OthersStyle'
import Col from 'react-bootstrap/Col'
import STORAGE_KEYS from '../constants/Storers'
import vStorage from '../helpers/VStorage'
import { useGlobals } from '../contexts/Global'
import { Link } from 'react-router-dom'
import { generateLink } from '../helpers/Generics'
import BASE_IMAGE from '../constants/Images'

/**
 * Component used on places where you can search for items
 * Used if no content is found
 * @param props
 * @returns {*}
 * @constructor
 */
export function EmptyList(props) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-height-250">
      <H3>{useT('seems_like_this_is_empty')}</H3>
      <P themecolor="onPrimary">{useT('maybe_try_another_words', ['🤔'])}</P>
    </div>
  )
}

/**
 * Cookie notification
 * @returns {*}
 * @constructor
 * @return {null}
 */
export function Cookies() {
  const [show, setShow] = React.useState(false)
  const cookiesRef = React.createRef()

  const accept = () => {
    cookiesRef.current.classList.add('hideToBottom')
    vStorage.setItem(STORAGE_KEYS.BASIC_COOKIES, '1')
    setTimeout(() => setShow(false), 1000)
  }

  React.useEffect(() => {
    setTimeout(() => setShow(!vStorage.getItem(STORAGE_KEYS.BASIC_COOKIES)), 5000)
  }, [])

  return (
    <CookiesDiv
      ref={cookiesRef}
      className={
        'position-fixed fixed-bottom flex-column align-items-center ' +
        (!show ? 'd-none' : 'd-flex')
      }>
      <div>
        <H5 className="text-center" fontRecursive>
          {useT('this_website_uses_cookies')}
        </H5>
        <P>
          {useT(
            'we_use_cookies_to_personalise_content_and_ads_to_provide_social_media_features_and_to_analyse_our_traffic',
          )}
          .
        </P>
        <ButtonStyled
          onClick={accept}
          themebackground="secondary"
          themecolor="onSecondary"
          className="w-100 mb-3">
          {useT('i_agree')}
        </ButtonStyled>
      </div>
    </CookiesDiv>
  )
}

/**
 * Categories row
 * @returns {*}
 * @constructor
 */
export function CategoriesCircle() {
  const [{ categories, language }] = useGlobals()
  return (
    <>
      {Object.keys(categories).map((category) => (
        <Col
          key={categories[category].id}
          className="d-flex justify-content-center align-items-center">
          <CategoryCircle
            className={
              'd-flex justify-content-center align-items-center ' +
              (categories[category].fake ? 'loading' : '')
            }>
            {!categories[category].fake ? (
              <Link to={generateLink(language, category)}>
                <img
                  alt={categories[category][language].name}
                  src={BASE_IMAGE + categories[category].image}
                />
                <label>{categories[category][language].name}</label>
              </Link>
            ) : null}
          </CategoryCircle>
        </Col>
      ))}
    </>
  )
}
