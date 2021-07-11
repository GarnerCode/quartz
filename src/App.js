import React, {useState} from 'react';
import './App.css';

/*Import Components*/
import Land from './Components/Land';
import ItemGrid from './Components/ItemGrid';
import Cart from './Components/Cart';

function App() {

  const [displayItems, setDisplayItems] = useState("");
  const [displayCart, setDisplayCart] = useState(false);
  const [cartState, setCartState] = useState([]);
  const [cartImgState, setCartImgState] = useState([]);
  const [priceTotal, setPriceTotal] = useState(0);

  const handleCartBtn = () => {
    setDisplayCart(true);
  }

  const handleAddToCart = (name, price, image) => {
    setCartState([...cartState, name]);
    setCartImgState([...cartImgState, image]);
    setPriceTotal(priceTotal + price);
}


  return (
    <div className="App">
      <Cart 
        handleCartBtn = {handleCartBtn}
        displayCart = {displayCart}
        cartState = {cartState}
        cartImgState = {cartImgState}
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
        <h1>Check out my other projects at <a href="https://tyler-garner.com" target="_blank">www.tyler-garner.com</a></h1>
      </footer>
    </div>
  );
}

export default App;
