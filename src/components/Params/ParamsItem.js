import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import itemsData from './Data'

export default function ParamsItem() {

    let params = useParams()
    const [items, setItems] = useState(itemsData)

    let hasItem = items.some(i => i.id == params.id)
    console.log(hasItem)
    
    return (
        <div>
            {hasItem ?
                <>{items.find(i => i.id == params.id).name}</>
                : <Navigate to="/" />}
        </div>
    )
}
