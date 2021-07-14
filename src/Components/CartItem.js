import React from 'react'

export default function CartItem({name, image, price}) {
    return (
        <div className = "cartItem">
        <hr />
            <img src={`./media/${image}`} alt="" />
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}
