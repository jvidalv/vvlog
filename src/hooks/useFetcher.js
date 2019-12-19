import React, {useEffect, useState} from 'react'
import {buildRequest} from "../helpers/Generics";

/**
 * Main fetcher
 * @param call
 * @param params *expects an object
 * @returns {{data: *, loading: *, error: *}}
 */
export const useFetcher = (call, params) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [refetch, setRefetch] = useState(false);

    useEffect(() => {

        const request = buildRequest(call, params);
        setLoading(true);
        setError(false);

        fetch(request.url, request.request)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw "Error fetching data"
            })
            .then(res => {
                if (res) {
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

