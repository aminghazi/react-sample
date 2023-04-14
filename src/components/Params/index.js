import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import data from './Data'

export default function Params() {

    const [items, setItems] = useState[data]
    console.log(items)
    return (
        <div>
            {/* {items.map(i => (
                <Link to={`/params/${i.id}`}>{i.name}</Link>
            ))} */}
        </div>
    )
}