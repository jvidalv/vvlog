import React, { useState } from "react";
import { useGlobals } from "../contexts/Global";
import { ThemeProvider } from "styled-components";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Main } from "../styles/GenericStyles";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Home from "../pages/Home";
import Category from "../pages/Category";

function Index() {
  const [{ theme }, dispatch] = useGlobals();

  return (
    <ThemeProvider theme={{ style: theme }}>
      <Main onScroll={e => console.log(e)}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/react" component={Category} />
          </Switch>
          <Footer />
        </Router>
      </Main>
    </ThemeProvider>
  );
}

export default Index;
