import React from 'react'

export default function Land({setDisplayItems}) {

    const clickLaptop = () => {
        setDisplayItems("Laptop");
    }
    const clickMobile = () => {
        setDisplayItems("Mobile");
    }
    const clickGaming = () => {
        setDisplayItems("Gaming")
    }

    return (

        <div className="Land">
            <h1>QUARTZ</h1>
            <h2>DEVICES & TECHNOLOGY</h2>
            <a href="#ItemGrid"><button onClick={clickLaptop} id="laptop"><i className="fas fa-laptop"></i></button></a>
            <a href="#ItemGrid"><button onClick={clickMobile} id="mobile"><i className="fas fa-mobile-alt"></i></button></a>
            <a href="#ItemGrid"><button onClick={clickGaming} id="game"><i className="fas fa-gamepad"></i></button></a>
        </div>
    )
}
