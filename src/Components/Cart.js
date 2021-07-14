import React from 'react';
import CartItem from './CartItem';

export default function Cart({handleCartBtn, displayCart, cartState, priceTotal}) {

    const itemList = cartState.map(item => <CartItem 
        key = {item.name}
        name = {item.name}
        image = {item.image}
        price = {item.price}
        />
    );

    /*Toggle Cart Window*/
    if (displayCart) {
        return (
            <div className="Cart">
            <button onClick={() => handleCartBtn()}><i className="fas fa-times"></i></button>
            <div className="cartItemsContainer">
                {itemList}
            </div>
            <hr />
            <p>Item Count: {cartState.length}</p>
            <p>Subtotal: ${Math.round(priceTotal * 100) / 100}</p>
        </div>
        )
    }
    return (
        <button className="btn-cart" onClick={() => handleCartBtn()}><i className="fas fa-shopping-cart"></i> {cartState.length}</button>
    )
}
