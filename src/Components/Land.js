import React from 'react'

export default function Land({displayItems, setDisplayItems}) {

    const handleButton = (e) => {
        if (e.target.id === "laptop") {
            setDisplayItems = "Laptops";
        } else if (e.target.id === "mobile") {
            setDisplayItems = "Mobile";
        } else if (e.target.id === "game") {
            setDisplayItems = "Gaming"
        }
    }
    return (

        <div className="Land">
            <h1>QUARTZ</h1>
            <h2>DEVICES & TECHNOLOGY</h2>
            <button id="laptop"><i className="fas fa-laptop"></i></button>
            <button id="mobile"><i className="fas fa-mobile-alt"></i></button>
            <button id="game"><i className="fas fa-gamepad"></i></button>
        </div>
    )
}
