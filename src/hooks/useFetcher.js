import { useEffect, useState } from 'react'

// Note here the new parameter we pass into the hook called "search"
// this will be used to search the api for specific books
export const useFetcher = (url, params) => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)

        // Change the apiUrl according to the search string
        const apiUrl = search && search.length > 0 ?
            `https://library.com/api/books?search=${search}` :
            'https://library.com/api/books'

        fetch(apiUrl)
            .then(res => res.json())
            .then(json => {
                setLoading(false)
                if (json.books) {
                    setBooks(json.books)
                } else {
                    setBooks([])
                }
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })

        // This is important. We pass the new search parameter into
        // the empty array we had before. This means, the effect
        // will run again if this parameter changes
    }, [search])

    return { books, loading, error }
}