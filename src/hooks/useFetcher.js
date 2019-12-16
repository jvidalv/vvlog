import React, {useEffect, useState} from 'react'
import {urlBuilder} from "../helpers/Generics";
import {useAppError} from "./useAppError";
import {useHistory} from "react-router";

/**
 * Main fetcher
 * @param url
 * @param params *expects an object
 * @returns {{data: *, loading: *, error: *}}
 */
export const useFetcher = (url, params) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [refetch, setRefetch] = useState(false);

    useEffect(() => {
        let apiUrl = urlBuilder(url, params);
        setLoading(true);
        setError(false);
        fetch(apiUrl)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw "Error fetching data"
            })
            .then(res => {
                if(res){
                    return setData(res)
                }
                throw "Error fetching data"
            })
            .then(() => {
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });

    }, [refetch]);

    return {data, loading, error, setRefetch}
};

