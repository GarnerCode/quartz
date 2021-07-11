import React from 'react';
import CartItem from './CartItem';

export default function Cart({handleCartBtn, displayCart, cartState, cartImgState, priceTotal}) {

    const itemList = cartState.map(item => <CartItem 
        key = {item}
        name = {item}
        />
    );
    const imageList = cartImgState.map(item => <CartItem 
        key= {item}
        image ={item}
        />
    );

    /*Toggle Cart Window*/
    if (displayCart) {
        return (
            <div className="Cart">
            <button><i className="fas fa-times"></i></button>
            {imageList}
            {itemList}
            <hr />
            <p>Item Count: {cartState.length}</p>
            <p>Subtotal: ${priceTotal}</p>
        </div>
        )
    }
    return (
        <button className="btn-cart" onClick={handleCartBtn()}><i className="fas fa-shopping-cart"></i> {cartState.length}</button>
    )
}
