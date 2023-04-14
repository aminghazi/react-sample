import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import data from './Data'

export default function Item() {

    let params = useParams()
    
    const [items, setItems] = useState(data)

    return (
        <div>
            {items.find(i => i.id === params.id)}
        </div>
    )
}
