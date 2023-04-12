import React from 'react'
import './index.css'

export default function Product (props) {

    const clickHandler = (id) => {
        props.onAddProduct(id)
    }

    let { id, title, price, image } = props;

    return (
        <div className="Products-item">
            <img src={image} alt={title} />
            <b>{title}</b>
            <small>{price}</small>
            <button onClick={() => clickHandler(id)}>
                add to cart
            </button>
        </div>
    )
}
