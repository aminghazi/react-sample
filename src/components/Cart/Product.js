import React, { Component } from 'react'
import './index.css'

export default class Product extends Component {

    clickHandler(id) {
        this.props.onAddProduct(id)
    }

    render() {
        let { id, title, price, image } = this.props;

        return (
            <div className="Products-item">
                <img src={image} alt={title} />
                <b>{title}</b>
                <small>{price}</small>
                <button onClick={this.clickHandler.bind(this, id)}>
                    add to cart
                </button>
            </div>
        )
    }
}
