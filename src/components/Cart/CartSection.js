import React, { Component } from 'react'
import './index.css'

export default class Cart extends Component {

    clickHandler(id) {
        this.props.onRemoveProduct(id)
    }

    render() {
        let { id, title, price, image } = this.props;

        return (
            <div className="Cart-item">
                <img src={image} alt={title} width="70px" />
                <b>{title}</b>
                <small>{price}</small>
                <button onClick={this.clickHandler.bind(this, id)}>
                    remove
                </button>
            </div>
        )
    }
}
