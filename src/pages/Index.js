import React, {useEffect} from "react";
import {useGlobals} from "../contexts/Global";
import {ThemeProvider} from "styled-components";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Main} from "../styles/GenericStyles";
import {useScrollToTop} from "../hooks/useScrollToTop";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Home from "./Home";
import Category from "./Category";
import Explore from "./Explore";
import Contact from "./Contact";
import About from "./About";
import Article from "./Article";
import Error from "./Error";

import {useFetcher} from "../hooks/useFetcher";
import api_calls from "../constants/Api";
import {MainLoader} from "../components/Loaders";
import {HelmetIndex} from "../constants/Helmets";
import useLanguageController from "../hooks/useLanguageController";
import useGA from "../hooks/useGA";

/**
 * Retrieve articles and sets them in global context
 * @returns {{loading: *, error: *, articles: *}}
 */
const useArticles = () => {
    const [{}, dispatch] = useGlobals();
    const {data, loading, error} = useFetcher(api_calls.articles.all);

    const setArticles = (articles) => {
        dispatch({
            type: "setArticles",
            setArticles: articles
        });
    };

    useEffect(() => {
        if (data.length) {
            setArticles(data)
        }
    }, [data]);

    return {articles: data, loading, error}
};

/**
 * Retrieve categories and set them in global context
 * @returns {{loading: *, error: *, articles: *}}
 */
const useCategories = () => {
    const [{}, dispatch] = useGlobals();
    const {data, loading, error} = useFetcher(api_calls.categories.all);

    const setCategories = (categories) => {
        dispatch({
            type: "setCategories",
            setCategories: categories
        });
    };

    useEffect(() => {
        if (data.length) {
            setCategories(data)
        }
    }, [data]);

    return {categories: data, loading, error}
};

/**
 * Retrieve authors and set them in global context
 * @returns {{loading: *, error: *, articles: *}}
 */
const useAuthors = () => {
    const [{}, dispatch] = useGlobals();
    const {data, loading, error} = useFetcher(api_calls.authors.all);

    const setAuthors = (authors) => {
        dispatch({
            type: "setAuthors",
            setAuthors: authors
        });
    };

    useEffect(() => {
        if (data.length) {
            setAuthors(data)
        }
    }, [data]);

    return {authors: data, loading, error}
};

/**
 * Retrieve tags and set them in global context
 * @returns {{loading: *, error: *, articles: *}}
 */
const useTags = () => {
    const [{}, dispatch] = useGlobals();
    const {data, loading, error} = useFetcher(api_calls.tags.all);

    const setTags = (tags) => {
        dispatch({
            type: "setTags",
            setTags: tags
        });
    };

    useEffect(() => {
        if (data.length) {
            setTags(data)
        }
    }, [data]);

    return {tags: data, loading, error}
};

/***
 * Call to all basic methods of blog
 * We need them to be inside Router to have access to history and location
 * @constructor
 */
const AppCore = () => {

    useArticles();
    useCategories();
    useAuthors();
    useTags();
    useScrollToTop();
    useLanguageController();
    useGA();

    return null;
};


/**
 * @returns {*}
 * @constructor
 */
function Index() {
    const [{theme}] = useGlobals();

    return (
        <ThemeProvider theme={{style: theme}}>
            <Main>
                <Router>
                    <AppCore />
                    <HelmetIndex theme={theme}/>
                    <Header/>
                    <Switch>
                        <Route exact path="/:lang" component={Home}/>
                        <Route path="/:lang/explore" component={Explore}/>
                        <Route path="/:lang/contact" component={Contact}/>
                        <Route path="/:lang/about" component={About}/>
                        <Route path="/:lang/error" component={Error}/>
                        <Route path="/:lang/:category/:slug" component={Article}/>
                        <Route path="/:lang/:category" component={Category}/>
                    </Switch>
                    <Footer/>
                    <MainLoader/>
                </Router>
            </Main>
        </ThemeProvider>
    );
}

export default Index;
