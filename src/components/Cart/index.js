import React, { Component } from 'react'
import './index.css'
import Product from './Product'
import CartSection from './CartSection'

export default class Cart extends Component {
    constructor() {
        super()

        this.state = {
            products: [
                {id: 1, title: "product 1", price: "1000000", image: "https://placehold.co/200"},
                {id: 2, title: "product 2", price: "1200000", image: "https://placehold.co/200"},
                {id: 3, title: "product 3", price: "900000", image: "https://placehold.co/200"},
                {id: 4, title: "product 4", price: "1950000", image: "https://placehold.co/200"}
            ],
            shoppingCart: [],
        }

        this.addToCart = this.addToCart.bind(this)
        this.removeToCart = this.removeToCart.bind(this)
        this.emptyShoppingCart = this.emptyShoppingCart.bind(this)
    }

    addToCart(id) {
        let addProduct = this.state.products.find(p => p.id === id)

        // let uniqueProduct = this.state.addProduct.filter(p => {
        //     return this.state.shoppingCart.indexOf(p.id) === p
        // })

        // console.log("uniqueProduct", uniqueProduct)

        this.setState(prevState => { 
            console.log("prevState", prevState.indexOf)
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
