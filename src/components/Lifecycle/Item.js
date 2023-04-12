import React, { useEffect } from 'react'

export default function Item(props) {

    // Unmount
    useEffect(() => {
        console.log("Component Did Unmount")

        return () => {
            console.log("Component Will Unmount")
        }
    }, [])

    const clickHandler = (id) => {
        props.onRemove(id)
    }

    let { id, name } = props

    return (
        <li>{name} <button onClick={() => clickHandler(id)}>Remove</button></li>
    )
}
