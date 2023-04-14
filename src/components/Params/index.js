import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import itemsData from './Data'

export default function Params() {

    const [items, setItems] = useState(itemsData)
    
    return (
        <div>
            {items.map(i => (
                <div key={i.id}><Link to={`/params/${i.id}`}>{i.name}</Link></div>
            ))}
        </div>
    )
}