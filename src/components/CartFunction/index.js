import React, { useState } from 'react'
import './index.css'
import Product from './Product'
import CartSection from './CartSection'

export default function Cart () {

    const [products, setProducts] = useState([
        {id: 1, title: "product 1", price: "1000000", image: "https://placehold.co/200"},
        {id: 2, title: "product 2", price: "1200000", image: "https://placehold.co/200"},
        {id: 3, title: "product 3", price: "900000", image: "https://placehold.co/200"},
        {id: 4, title: "product 4", price: "1950000", image: "https://placehold.co/200"}
    ])

    const [shoppingCart, setShoppingCart] = useState([])

    const addToCart = (id) => {
        let addProduct = products.find(p => p.id === id)

        // let uniqueProduct = addProduct.filter(p => {
        //     return shoppingCart.indexOf(p.id) === p
        // })

        // console.log("uniqueProduct", uniqueProduct)

        setShoppingCart(prevState => {
            return [...prevState, addProduct]
        })
    }

    const removeToCart = (id) => {
        let removeProduct = shoppingCart.filter(p => {
            return p.id !== id
        })
        
        setShoppingCart(removeProduct)
    }

    const emptyShoppingCart = () => {
        setShoppingCart([])
    }

    return (
        <div className="Cart-content">
            <h2>Products</h2>
            <div className="Products-list">
                {products.map(p => (
                    <Product key={p.id} {...p} onAddProduct={addToCart} />
                ))}
            </div>
            <h2>Cart</h2>
            <div className="Cart-list">
                {shoppingCart.length ? (
                    shoppingCart.map(p => (<CartSection key={p.id} {...p} onRemoveProduct={removeToCart} />))
                    )
                    : "empty"}
                
                {shoppingCart.length &&
                    <button onClick={emptyShoppingCart}>Empty Cart</button>}
            </div>
        </div>
    )
}
