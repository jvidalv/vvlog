import React from "react";
import { useGlobals } from "../contexts/Globals";
import { ThemeProvider } from "styled-components";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Main from "../styles/MainStyle";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Home from "../pages/Home";

function Index() {
  const [{ theme }, dispatch] = useGlobals();

  return (
    <ThemeProvider theme={{ style: theme }}>
      <Main>
        <Router>
          <Header />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Main>
    </ThemeProvider>
  );
}

export default Index;
