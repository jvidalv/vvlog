import React, { useEffect } from 'react'
import { useGlobals } from '../contexts/Global'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Main } from '../styles/GenericStyles'
import { useScrollToTop } from '../hooks/useScrollToTop'

import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Home from './Home'
import Category from './Category'
import Explore from './Explore'
import Contact from './Contact'
import About from './About'
import Article from './Article'
import Error from './Error'

import { useFetcher } from '../hooks/useFetcher'
import api_calls from '../constants/Api'
import { MainLoader } from '../components/Loaders'
import { HelmetIndex } from '../constants/Helmets'
import useLanguageController from '../hooks/useLanguageController'
import { THEMES } from '../constants/Themes'

/**
 * @returns {*}
 * @constructor
 */
function Index() {
  const [{ theme }] = useGlobals()
  return (
    <ThemeProvider theme={THEMES[theme]}>
      <Main>
        <Router>
          <HelmetIndex theme={theme} />
          <Header />
          <Switch>
            <Route exact path="/:lang" component={Home} />
            <Route path="/:lang/explore" component={Explore} />
            <Route path="/:lang/contact" component={Contact} />
            <Route path="/:lang/about" component={About} />
            <Route path="/:lang/error" component={Error} />
            <Route path="/:lang/:category/:slug" component={Article} />
            <Route path="/:lang/:category" component={Category} />
          </Switch>
          <Footer />
          <MainLoader />
        </Router>
      </Main>
    </ThemeProvider>
  )
}

export default Index
