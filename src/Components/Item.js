import React from 'react'

export default function Item({name, image, price, desc, cartArray, priceTotal}) {
    
    const handleAddToCart = () => {
        cartArray.push(name)
        priceTotal += price;
        console.log(cartArray);
        console.log(priceTotal);
    }
    return (
        <div className="Item">
            <h3>{name}</h3>
            <img src={`./media/${image}`} alt="" />
            <p className="price">${price}</p>
            <p className="desc">{desc}</p>
            <button onClick={handleAddToCart}>ADD TO CART</button>
        </div>
    )
}
