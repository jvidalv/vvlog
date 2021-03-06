import React, { useState } from 'react'
import { useGlobals } from '../contexts/Global'
import { Form, Nav } from 'react-bootstrap'
import {
  FormControlStyled,
  LinkStyled,
  NavbarCollapseStyled,
  NavbarToggleStyled,
  NavDropdownStyled,
  NavStyled,
} from './HeaderStyle.js'
import { useHistory, withRouter } from 'react-router-dom'
import useT from '../helpers/Translator'
import { HeaderLogo } from '../assets/svgs/Logo'
import { useScrollToTop } from '../hooks/useScrollToTop'
import useLanguageController from '../hooks/useLanguageController'

/**
 * @param pathname
 * @returns {boolean}
 */
const isHome = (pathname) => {
  return pathname === '/es' || pathname === '/en' || pathname === '/ca'
}

/**
 * @param pathname
 * @returns {boolean}
 */
const isExplore = (pathname) => {
  return pathname === '/explore'
}

/**
 * @param category
 * @returns {string}
 */
const useGetDotColor = (category) => {
  const [{ categories }] = useGlobals()
  return categories?.find(({ code }) => code === category)?.color_hex ?? '#ffffff'
}

/**
 * Returns the input bar that queries de page for blog entries
 * @param {*} props
 */
const Searcher = ({ className, setExpanded }) => {
  const [{ language }] = useGlobals()

  const [q, setQ] = useState('')
  const history = useHistory()
  /**
   * Navigates to explore page with the string that is written in the input
   * @param e
   * @param q
   */
  const navigateToExplore = (e, q) => {
    e.preventDefault()
    if (q && q.length > 2) {
      setExpanded(false)
      history.push(`/${language}/explore`, { q })
      window.scrollTo(0, 0)
    }
  }

  return (
    <Form
      inline
      action={`/${language}/explore`}
      onSubmit={(e) => navigateToExplore(e, q)}
      className={className}>
      <FormControlStyled
        name="q"
        onBlur={(e) => navigateToExplore(e, q)}
        onChange={(t) => setQ(t.target.value)}
        value={q}
        type="text"
        placeholder="🔎"
        className="mr-sm-2"
        autoComplete="off"
      />
    </Form>
  )
}

/**
 * @param className
 * @param changeTheme
 * @param theme
 * @returns {*}
 * @constructor
 */
const ThemeSwitcher = ({ className, changeTheme, theme }) => (
  <Nav className={className}>
    <span className="cursor-pointer text-white px-2" onClick={changeTheme}>
      {theme === 'dark' ? '🌓' : '🌗'}
    </span>
  </Nav>
)

/**
 * @param className
 * @param changeLanguage
 * @param language
 * @param setExpanded
 * @returns {*}
 * @constructor
 */
const LanguageSwitcher = ({ className, changeLanguage, language, setExpanded }) => (
  <Nav className={className}>
    <NavDropdownStyled title={useT('lang', ['👅'])}>
      <LinkStyled
        onClick={() => changeLanguage('ca') && setExpanded(false)}
        className={language === 'ca' ? 'active dropdown-item' : 'dropdown-item'}
        to={`/ca`}>
        {useT('catalan')}
      </LinkStyled>
      <LinkStyled
        onClick={() => changeLanguage('es') && setExpanded(false)}
        className={language === 'es' ? 'active dropdown-item' : 'dropdown-item'}
        to={`/es`}>
        {useT('spanish')}
      </LinkStyled>
      <LinkStyled
        onClick={() => changeLanguage('en') && setExpanded(false)}
        className={language === 'en' ? 'active dropdown-item' : 'dropdown-item'}
        to={`/en`}>
        {useT('english')}
      </LinkStyled>
    </NavDropdownStyled>
  </Nav>
)

/**
 * @param location
 * @returns {*}
 * @constructor
 */
export function Header({ location }) {
  const { pathname } = location
  const [{ theme, language }, dispatch] = useGlobals()
  const [expanded, setExpanded] = useState(false)
  const activeStyle = { opacity: '1', transform: 'scale(1.1)' }
  useScrollToTop()
  useLanguageController()

  const changeTheme = () => {
    dispatch({
      type: 'changeTheme',
      changeTheme: theme === 'dark' ? 'light' : 'dark',
    })
  }

  const changeLanguage = () => true

  return (
    <NavStyled expand="lg" expanded={expanded} className={!isHome(pathname) ? 'shadow' : null}>
      <LinkStyled
        to={`/${language}`}
        onClick={() => setExpanded(false)}
        className={'logo ' + (isHome(pathname) ? 'd-none' : 'pr-3 mr-5')}
        style={{ opacity: 1 }}
        data-toggle="collapse"
        data-target="#navbarMobile">
        <HeaderLogo />
      </LinkStyled>
      <ThemeSwitcher
        changeTheme={changeTheme}
        theme={theme}
        className="ml-auto mr-3 d-flex d-lg-none"
      />
      <Searcher
        setExpanded={setExpanded}
        className={isExplore(pathname) ? 'd-none' : 'mr-3 d-flex d-lg-none'}
      />
      <NavbarToggleStyled
        aria-controls="responsive-navbar-nav"
        onClick={() => setExpanded(expanded ? false : 'expanded')}
      />
      <NavbarCollapseStyled id="responsive-navbar-nav">
        <Nav className="menu mr-auto text-center text-lg-left pt-5 pt-lg-0">
          <LinkStyled
            onClick={() => setExpanded(false)}
            activeStyle={activeStyle}
            className="my-2 my-lg-0 px-lg-4"
            to={`/${language}/explore`}
            icon="💡">
            {useT('explore')}
          </LinkStyled>
          <LinkStyled
            onClick={() => setExpanded(false)}
            activeStyle={activeStyle}
            className="category my-2 my-lg-0 px-lg-4"
            dotcolor={useGetDotColor('javascript')}
            to={`/${language}/javascript`}>
            JavaScript
          </LinkStyled>
          <LinkStyled
            onClick={() => setExpanded(false)}
            activeStyle={activeStyle}
            className="category my-2 my-lg-0 px-lg-4"
            dotcolor={useGetDotColor('react')}
            to={`/${language}/react`}>
            React
          </LinkStyled>
          <LinkStyled
            onClick={() => setExpanded(false)}
            activeStyle={activeStyle}
            className="category my-2 my-lg-0 px-lg-4"
            dotcolor={useGetDotColor('php')}
            to={`/${language}/php`}>
            PHP
          </LinkStyled>
          {/*<LinkStyled*/}
          {/*    onClick={() => setExpanded(false)}*/}
          {/*    activeStyle={activeStyle}*/}
          {/*    className="category my-2 my-lg-0 px-lg-4"*/}
          {/*    dotcolor={useGetDotColor('yii2')}*/}
          {/*    to="/yii2"*/}
          {/*>*/}
          {/*    Yii2*/}
          {/*</LinkStyled>*/}
          <LinkStyled
            onClick={() => setExpanded(false)}
            activeStyle={activeStyle}
            className="category my-2 my-lg-0 px-lg-4"
            dotcolor={useGetDotColor('css')}
            to={`/${language}/css`}>
            CSS
          </LinkStyled>
        </Nav>
        <LanguageSwitcher
          setExpanded={setExpanded}
          changeLanguage={changeLanguage}
          language={language}
          className="text-center"
        />
        <ThemeSwitcher changeTheme={changeTheme} theme={theme} className="mr-3 d-none d-lg-flex" />
        <Searcher
          setExpanded={setExpanded}
          className={isExplore(pathname) ? 'd-none' : 'mr-2 d-none d-lg-flex'}
        />
      </NavbarCollapseStyled>
    </NavStyled>
  )
}

export default withRouter(Header)
