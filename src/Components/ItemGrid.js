import React from 'react';
import Item from './Item';
import Data from '../itemsList.json';

export default function ItemGrid() {

    console.log(Data[0].laptop[0].price);

    return (
        <div className="ItemGrid">
            {Data[0].mobile.map(item => <Item 
                key = {item.name}
                name = {item.name}
                image = {item.image}
                price = {item.price}
                desc = {item.description}
            />)}
        </div>
    )
}
