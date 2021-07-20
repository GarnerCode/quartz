import React from 'react'

export default function CartItem({id, name, image, price, cartState, setCartState, priceTotal, setPriceTotal, notifyRemove}) {

    const deleteItemHandler = () => {
        setCartState(cartState.filter((el) => el.id !== id));
        console.log(id);
        setPriceTotal(priceTotal - price);
        notifyRemove(name);
    }

    return (
        <div className = "cartItem">
        <hr />
            <img src={`./media/${image}`} alt="" />
            <p>{name}</p>
            <p>{price}</p>
            <button className="btn-x" onClick={() => deleteItemHandler()}><i className="fas fa-times"></i></button>
        </div>
    )
}
