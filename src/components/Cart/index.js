import React, { Component } from 'react'
import './index.css'
import Product from './Product'
import CartSection from './CartSection'

export default class Cart extends Component {
    constructor() {
        super()

        this.state = {
            products: [
                {id: 1, title: "product 1", price: "1000000", image: "https://fastly.picsum.photos/id/98/200/200.jpg?hmac=QiHfqn1VEz1-KB7Wpb5iUbtrmTV8s2e3DJFb4HEp-y0"},
                {id: 2, title: "product 2", price: "1200000", image: "https://fastly.picsum.photos/id/223/200/200.jpg?hmac=CNNyWbBcEAJ7TPkTmEEwdGrLFEYkxpTeVwJ7U0LB30Y"},
                {id: 3, title: "product 3", price: "900000", image: "https://fastly.picsum.photos/id/343/200/200.jpg?hmac=51jfTxjhIC4eQHibl9fcu56Q5VlXZxJLdHsbgsGd_zE"},
                {id: 4, title: "product 4", price: "1950000", image: "https://fastly.picsum.photos/id/242/200/200.jpg?hmac=Z3aa8zbEQkEMFgnVh0Pn96vmCZHhJ17qzCrePYksrcY"}
            ],
            shoppingCart: [],
        }

        this.addToCart = this.addToCart.bind(this)
        this.removeToCart = this.removeToCart.bind(this)
        this.emptyShoppingCart = this.emptyShoppingCart.bind(this)
    }

    addToCart(id) {
        let addProduct = this.state.products.find(p => {
            return p.id === id
        })

        this.setState(prevState => { 
            return {
                shoppingCart: [...prevState.shoppingCart, addProduct]
            }
        })
    }

    removeToCart(id) {
        let removeProduct = this.state.shoppingCart.filter(p => {
            return p.id !== id
        })

        this.setState({
            shoppingCart: removeProduct
        })
    }

    emptyShoppingCart() {
        this.setState({
            shoppingCart: []
        })
    }

    render() {
        return (
            <div className="Cart-content">
                <h2>Products</h2>
                <div className="Products-list">
                    {this.state.products.map(p => (
                        <Product key={p.id} {...p} onAddProduct={this.addToCart} />
                    ))}
                </div>
                <h2>Cart</h2>
                <div className="Cart-list">
                    {this.state.shoppingCart.length ? (
                        this.state.shoppingCart.map(p => (<CartSection key={p.id} {...p} onRemoveProduct={this.removeToCart} />))
                        )
                        : "empty"}
                    
                    {this.state.shoppingCart.length &&
                        <button onClick={this.emptyShoppingCart}>Empty Cart</button>}
                </div>
            </div>
        )
    }
}
