import React from 'react';
import Item from './Item';
import Data from '../itemsList.json';
import { v4 as uuidv4 } from 'uuid';

export default function ItemGrid({displayItems, cartState, setCartState, priceTotal, setPriceTotal, handleAddToCart}) {

    let category;
    switch(displayItems) {
        default:
            break;
        case "Laptops":
            category = Data[0].laptop.map(item => <Item 
            key = {uuidv4()}
            name = {item.name}
            image = {item.image}
            price = {item.price}
            desc = {item.description}
            cartState = {cartState}
            setCartState = {setCartState}
            priceTotal = {priceTotal}
            setPriceTotal = {setPriceTotal}
            handleAddToCart = {handleAddToCart}
            />
            );
            break;
        case "Mobile":
            category = Data[0].mobile.map(item => <Item 
            key = {uuidv4()}
            name = {item.name}
            image = {item.image}
            price = {item.price}
            desc = {item.description}
            cartState = {cartState} 
            setCartState = {setCartState}
            priceTotal = {priceTotal}
            setPriceTotal = {setPriceTotal}
            handleAddToCart = {handleAddToCart}
            />
            );
            break;
        case "Gaming":
            category = Data[0].gaming.map(item => <Item 
            key = {uuidv4()}
            name = {item.name}
            image = {item.image}
            price = {item.price}
            desc = {item.description}
            cartState = {cartState} 
            setCartState = {setCartState}
            priceTotal = {priceTotal}
            setPriceTotal = {setPriceTotal}
            handleAddToCart = {handleAddToCart}
            />
            );
            break;
    }
    
    return (
        <div id="ItemGrid" className="ItemGrid">
            {category}
        </div>
    )
}
