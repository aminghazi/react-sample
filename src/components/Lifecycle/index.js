import React, { useState, useEffect } from 'react'
import Item from './Item'

export default function Lifecycle() {

    const [count, setCount] = useState(0)
    const [items, setItems] = useState([
        {id: 1, name: "A"},
        {id: 2, name: "B"},
        {id: 3, name: "C"},
        {id: 4, name: "D"}
    ])

    // mount and updating
    // useEffect(() => {
    //     console.log("component did mount and update")
    // })

    // mount
    useEffect(() => {
        console.log("component did mount")
    }, [])

    // update => count
    useEffect(() => {
        console.log("component did update")
    }, [count, items])

    const addCount = () => {
        setCount(prevState => prevState + 1)
    }
    const minusCount = () => {
        setCount(prevState => prevState - 1)
    }

    const removeHandler = (id) => {
        setItems(prevItems => {
            let newItems = prevItems.filter(i => i.id !== id)
            return newItems
        })
    }

    return (
        <>
            <div className='Lifecycle-content'>
                <button onClick={addCount}>Add</button>
                <small>{count}</small>
                <button onClick={minusCount}>Minus</button>
            </div>
            {items && <ul>
                {items.map(i => <Item {...i} onRemove={removeHandler} />)}
            </ul>
            }
        </>
    )
}
