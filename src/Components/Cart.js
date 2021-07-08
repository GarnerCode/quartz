import React from 'react'

export default function Cart({handleCartBtn, displayCart, cartState, priceTotal}) {
    if (displayCart) {
        return (
            <div className="Cart">
            <button><i className="fas fa-times"></i></button>
            <h1>Cart</h1>
            <hr />
            <p>Item Count: {cartState.length}</p>
            <p>Subtotal: ${priceTotal}</p>
        </div>
        )
    }
    return (
        <button className="btn-cart" onClick={() => handleCartBtn}><i className="fas fa-shopping-cart"></i> {cartState.length}</button>
    )
}
