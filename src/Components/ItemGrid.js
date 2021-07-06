import React from 'react';
import Item from './Item';
import Data from '../itemsList.json';

export default function ItemGrid({displayItems, cartArray, priceTotal}) {

    let category;
    switch(displayItems) {
        default:
            break;
        case "Laptops":
            category = Data[0].laptop.map(item => <Item 
            key = {item.name}
            name = {item.name}
            image = {item.image}
            price = {item.price}
            desc = {item.description} 
            cartArray = {cartArray}
            priceTotal = {priceTotal}
            />
            );
            break;
        case "Mobile":
            category = Data[0].mobile.map(item => <Item 
            key = {item.name}
            name = {item.name}
            image = {item.image}
            price = {item.price}
            desc = {item.description} 
            cartArray = {cartArray}
            priceTotal = {priceTotal}
            />
            );
            break;
        case "Gaming":
            category = Data[0].gaming.map(item => <Item 
            key = {item.name}
            name = {item.name}
            image = {item.image}
            price = {item.price}
            desc = {item.description} 
            cartArray = {cartArray}
            priceTotal = {priceTotal}
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
