import React from 'react'
import './index.css'

export default function Cart (props) {

    const clickHandler = (id) => {
        props.onRemoveProduct(id)
    }

    let { id, title, price, image } = props;

    return (
        <div className="Cart-item">
            <img src={image} alt={title} width="70px" />
            <b>{title}</b>
            <small>{price}</small>
            <button onClick={() => clickHandler(id)}>
                remove
            </button>
        </div>
    )
}
