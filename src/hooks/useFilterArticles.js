import {useGlobals} from "../contexts/Global";
import {useEffect, useState} from "react";
import {multiFilter} from "../helpers/Generics";

/**
 * Filters articles by properties and filter (q), you can reach language deep levels with nested property
 * @param properties
 * @param q
 * @param nested
 * @returns {[]}
 */
export const useFilterArticles = (properties, q, nested) => {

    const [{articles}] = useGlobals();
    const [fArticles, setFArticles] = useState(articles);

    useEffect(() => {
        setFArticles(q && articles && !articles[0].fake ? multiFilter(articles, properties, q, nested) : articles);
    }, [articles, q]);

    return [fArticles, setFArticles];
};

/**
 * Filters articles but returns only one
 * @param properties
 * @param q
 * @returns {[]}
 */
export const useFindArticleInArticles = (properties, q) => {

    const [{articles, language}] = useGlobals();
    const [fArticle, setFArticle] = useState(articles[0]);
    useEffect(() => {
        let filtArticle = articles[0];

        if(q && articles && !fArticle.fake) {
            let filt = multiFilter(articles, properties, q, language);
            console.log(filt)
            if(!filt){
                console.log(language)
            } else {
                filtArticle =  filt[0]
            }
        }

        setFArticle(filtArticle);

    }, [articles, q]);

    return [fArticle, setFArticle];
};
