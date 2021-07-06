import React, {useState} from 'react';
import './App.css';

/*Import Components*/
import Land from './Components/Land';
import ItemGrid from './Components/ItemGrid';
import Cart from './Components/Cart';

function App() {

  const [displayItems, setDisplayItems] = useState("");
  const cartArray = [];
  var priceTotal = 0;

  return (
    <div className="App">
    <button className="btn-cart"><i className="fas fa-shopping-cart"></i></button>
    <Cart />
      <Land 
        displayItems = {displayItems}
        setDisplayItems = {setDisplayItems}
      />
      <h1>{displayItems}</h1>
      <ItemGrid 
        displayItems = {displayItems}
        cartArray = {cartArray}
        priceTotal = {priceTotal}
      />
      <footer>
        <h1>Check out my other projects at <a href="https://tyler-garner.com" target="_blank">www.tyler-garner.com</a></h1>
      </footer>
    </div>
  );
}

export default App;
