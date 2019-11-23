import React from "react";
import {useGlobals} from "../contexts/Global";
import {ThemeProvider} from "styled-components";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Main} from "../styles/GenericStyles";
import UseScrollToTop from "../hooks/useScrollToTop";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

import Home from "./Home";
import Category from "./Category";
import Explore from "./Explore";
import Contact from "./Contact";
import About from "./About";
import Article from "./Article";
import {useFetcher} from "../hooks/useFetcher";
import api_calls from "../constants/Api";

function Index() {
    const [{theme}] = useGlobals();
    console.log(process.env.NODE_ENV === 'development')
    const {articles, loading, error} = useFetcher(api_calls.articles.all);
    return (
        <ThemeProvider theme={{style: theme}}>
            <Main>
                <Router basename={process.env.PUBLIC_URL}>
                    <UseScrollToTop/>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/explore" component={Explore}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/about" component={About}/>
                        <Route path="/:category/:slug" component={Article}/>
                        <Route path="/:category" component={Category}/>
                    </Switch>
                    <Footer/>
                </Router>
            </Main>
        </ThemeProvider>
    );
}

export default Index;