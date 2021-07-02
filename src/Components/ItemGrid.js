import React from 'react';
import Item from './Item';
import Data from '../itemsList.json';

export default function ItemGrid({displayItems}) {

    let category;
    switch(displayItems) {
        case "Laptop":
            category = Data[0].laptop.map(item => <Item 
            key = {item.name}
            name = {item.name}
            image = {item.image}
            price = {item.price}
            desc = {item.description} />
            );
            break;
        case "Mobile":
            category = Data[0].mobile.map(item => <Item 
            key = {item.name}
            name = {item.name}
            image = {item.image}
            price = {item.price}
            desc = {item.description} />
            );
            break;
        case "Gaming":
            category = Data[0].gaming.map(item => <Item 
            key = {item.name}
            name = {item.name}
            image = {item.image}
            price = {item.price}
            desc = {item.description} />
            );
            break;
    
    }

    
    return (
        <div className="ItemGrid">
            {category}
        </div>
    )
}
