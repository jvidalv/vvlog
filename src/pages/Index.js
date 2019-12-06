import React, {useEffect} from "react";
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

/**
 * Retrieve articles and set them in global context
 * @returns {{loading: *, error: *, articles: *}}
 */
const useArticles = () => {
    const [{articles}, dispatch] = useGlobals();
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

    return {articles : data, loading, error}
};

/**
 * Retrieve categrories and set them in global context
 * @returns {{loading: *, error: *, articles: *}}
 */
const useCategories = () => {
    const [{categories}, dispatch] = useGlobals();
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

    return {categories : data, loading, error}
};

/**
 * Retrieve categrories and set them in global context
 * @returns {{loading: *, error: *, articles: *}}
 */
const useAuthors = () => {
    const [{authors}, dispatch] = useGlobals();
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
 * Retrieve categrories and set them in global context
 * @returns {{loading: *, error: *, articles: *}}
 */
const useTags = () => {
    const [{tags}, dispatch] = useGlobals();
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
}


/**
 * @returns {*}
 * @constructor
 */
function Index() {
    const [{theme, articles, categories}] = useGlobals();
    const {loading, error} = useArticles();
    const {} = useCategories();
    const {} = useAuthors();
    const {} = useTags();
    console.log(navigator.language, navigator.userLanguage)
    //console.log(articles, categories)
    //if (loading) return <div>loading</div>;
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
