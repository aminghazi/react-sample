import React from 'react'
import useConter from '../../hooks/useConter'

export default function Counter() {

    const [count, addCount, minusCount] = useConter(0)

    return (
        <div>
            <h2>useConter</h2>
            <button onClick={addCount}>Add</button>
            <span>{count}</span>
            <button onClick={minusCount}>Minus</button>
        </div>
    )
}

