import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import itemsData from './Data'

export default function ParamsItem() {

    let params = useParams()
    const [items, setItems] = useState(itemsData)

    return (
        <div>
            {items.find(i => i.id == params.id).name}
        </div>
    )
}
