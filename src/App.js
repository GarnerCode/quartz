import React, {useState} from 'react';
import './App.css';

/*Import Components*/
import Land from './Components/Land';
import ItemGrid from './Components/ItemGrid';
import Cart from './Components/Cart';
import CartItem from './Components/CartItem';

function App() {

  /*State variables*/
  const [displayItems, setDisplayItems] = useState("");
  const [displayCart, setDisplayCart] = useState(false);
  const [cartState, setCartState] = useState([]);
  const [priceTotal, setPriceTotal] = useState(0);

  /*Toggle Cart Window*/
  const handleCartBtn = () => {
    setDisplayCart(true);
  }

  /*Called in Item, array mapped in Cart and creates new CartItem*/
  const handleAddToCart = (name, price, image) => {
    const item = { name, price, image };
    setCartState([...cartState, item]);
    setPriceTotal(priceTotal + price);
}


  return (
    <div className="App">
      <Cart 
        handleCartBtn = {handleCartBtn}
        displayCart = {displayCart}
        cartState = {cartState}
        priceTotal = {priceTotal}
      />
      <Land 
        displayItems = {displayItems}
        setDisplayItems = {setDisplayItems}
      />
      <h1>{displayItems}</h1>
      <ItemGrid 
        displayItems = {displayItems}
        cartState = {cartState}
        setCartState = {setCartState}
        priceTotal = {priceTotal}
        setPriceTotal = {setPriceTotal}
        handleAddToCart = {handleAddToCart}
      />
      <footer>
        <h1>Check out my other projects at <a href="https://tyler-garner.com" target="_blank" rel="noreferrer">www.tyler-garner.com</a></h1>
      </footer>
    </div>
  );
}

export default App;
