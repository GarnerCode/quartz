import React from 'react'

export default function Item({name, image, price, desc}) {
    console.log(name);
    return (
        <div className="Item">
            <h3>{name}</h3>
            <img src={`./media/${image}`} alt="" />
            <p className="price">${price}</p>
            <p className="desc">{desc}</p>
            <button>ADD TO CART</button>
        </div>
    )
}
