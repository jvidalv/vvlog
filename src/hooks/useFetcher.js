import {useEffect, useState} from 'react'
import {urlBuilder} from "../helpers/Generics";

// Note here the new parameter we pass into the hook called "search"
// this will be used to search the api for specific books
export const useFetcher = (url, params) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        let apiUrl = urlBuilder(url, params);
        apiUrl = 'http://localhost:8080/api/article/all';
        fetch(apiUrl)
            .then(res =>  res.json())
            .then(res => console.log(res))
            .catch(err => {
                console.log(err);
                setError(err);
                setLoading(false);
            })

        // This is important. We pass the new search parameter into
        // the empty array we had before. This means, the effect
        // will run again if this parameter changes
    }, []);

    return {articles, loading, error}
}