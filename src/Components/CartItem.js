import React from 'react'

export default function CartItem({name, image}) {
    return (
        <div>
            <img src={`./media/${image}`} alt="" />
            <p>{name}</p>
        </div>
    )
}
