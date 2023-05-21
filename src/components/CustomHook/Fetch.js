import React from 'react'
import useFetch from '../../hooks/useFetch'

export default function Fetch() {

    const [posts, isPending, error] = useFetch('https://jsonplaceholder.typicode.com/posts')

    return (
        <div>
            <h2>useFetch</h2>

            {error && <span>{error}</span>}

            {isPending && <span>loading...</span>}

            {posts && posts.map(p => (
                <div key={p.id}>
                    <h4>{p.title}</h4>
                </div>
            )).slice(0, 2)}
        </div>
    )
}

