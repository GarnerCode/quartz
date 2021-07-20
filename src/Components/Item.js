import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function Item({name, image, price, desc, handleAddToCart}) {

    const itemName = name;
    const itemId = uuidv4();
    const itemPrice = price;
    const itemImage = image;
    
    return (
        <div className="Item">
            <h3>{name}</h3>
            <img src={`./media/${image}`} alt="" />
            <p className="price">${price}</p>
            <p className="desc">{desc}</p>
            <button onClick={() => handleAddToCart(itemName, itemId, itemPrice, itemImage)}>ADD TO CART</button>
        </div>
    )
}
