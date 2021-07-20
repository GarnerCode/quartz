import React from 'react';
import CartItem from './CartItem';

export default function Cart({handleCartBtn, displayCart, cartState, setCartState, priceTotal, setPriceTotal, notifyRemove}) {

    let cartIsEmpty;
    if (cartState.length >= 1) {
        cartIsEmpty = false;
    } else {
        cartIsEmpty = true;
    }

    /*!!!Duplicate items in cart are all deleted if one is deleted from cart!!!*/
    const itemList = cartState.map(item => <CartItem 
        key = {item.id}
        id = {item.id}
        name = {item.name}
        image = {item.image}
        price = {item.price}
        cartState = {cartState}
        setCartState = {setCartState}
        priceTotal = {priceTotal}
        setPriceTotal = {setPriceTotal}
        notifyRemove = {notifyRemove}
        />
    );

    /*Toggle Cart Window*/
    if (displayCart) {
        return (
            <div className="Cart">
            <button className="btn-x" onClick={() => handleCartBtn()}><i className="fas fa-times"></i></button>
            <div className="cartItemsContainer">
                {cartIsEmpty ? 'Your cart is empty' : itemList}
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
