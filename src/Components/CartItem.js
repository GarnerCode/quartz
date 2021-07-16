import React from 'react'

export default function CartItem({name, image, price, cartState, setCartState, priceTotal, setPriceTotal, notifyRemove}) {

    const deleteItemHandler = () => {
        const deletedItem = cartState.filter(item => item.name !== name);
        setCartState(deletedItem);
        setPriceTotal(priceTotal - price);
        notifyRemove(name);
    }

    return (
        <div className = "cartItem">
        <hr />
            <img src={`./media/${image}`} alt="" />
            <p>{name}</p>
            <p>{price}</p>
            <button className="btn-x" onClick={() => deleteItemHandler()}><i class="fas fa-times"></i></button>
        </div>
    )
}
