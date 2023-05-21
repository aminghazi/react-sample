import React, { useState, useEffect } from 'react'

export default function useFetch (url) {

    const [posts, setPosts] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => res.json())
                .then(alldata => {
                    setPosts(alldata)
                    setIsPending(false)
                    setError(null)
                })
        }, 1000);
    })
    
    return[posts, isPending, error]
}
