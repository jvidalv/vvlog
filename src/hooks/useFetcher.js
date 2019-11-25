import {useEffect, useState} from 'react'
import {urlBuilder} from "../helpers/Generics";

// Note here the new parameter we pass into the hook called "search"
// this will be used to search the api for specific books
export const useFetcher = (url, params) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let apiUrl = urlBuilder(url, params);

        fetch(apiUrl)
            .then(res => {
                if(res.ok){
                    return res.json();
                }
                throw "Error with the api"
            })
            .then(res => setArticles(res))
            .then(res => setLoading(false))
            .catch(err => {
                setError(err);
                setLoading(false);
            });

    }, []);

    return {articles, loading, error}
}