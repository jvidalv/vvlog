import React from "react";
import { useGlobals } from "../contexts/Global";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Main } from "../styles/GenericStyles";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

import Home from "./Home";
import Category from "./Category";
import Explore from "./Explore";

function Index() {
  const [{ theme, query }] = useGlobals();

  return (
    <ThemeProvider theme={{ style: theme }}>
      <Main onScroll={e => console.log(e)}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/explore" component={Explore} />
            <Route path="/category" component={Category} />
          </Switch>
          <Footer />
        </Router>
      </Main>
    </ThemeProvider>
  );
}

export default Index;
