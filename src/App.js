import React, {useState} from 'react';
import './App.css';

/*Import Components*/
import Land from './Components/Land';
import ItemGrid from './Components/ItemGrid';
import Cart from './Components/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  /*State variables*/
  const [displayItems, setDisplayItems] = useState("");
  const [displayCart, setDisplayCart] = useState(false);
  const [cartState, setCartState] = useState([]);
  const [priceTotal, setPriceTotal] = useState(0);

  /*Notification*/
  const notifyAdd = (name) => toast(name + ' added to cart');
  const notifyRemove = (name) => toast(name + ' removed from cart');

  /*Toggle Cart Window*/
  const handleCartBtn = () => {
    setDisplayCart(!displayCart);
  }

  /*Called in Item, array mapped in Cart and creates new CartItem*/
  const handleAddToCart = (name, price, image) => {
    const item = { name, price, image };
    setCartState([...cartState, item]);
    setPriceTotal(priceTotal + price);
    notifyAdd(name);
}


  return (
    <div className="App">
    <ToastContainer />
      <Cart 
        handleCartBtn = {handleCartBtn}
        displayCart = {displayCart}
        cartState = {cartState}
        setCartState = {setCartState}
        priceTotal = {priceTotal}
        setPriceTotal = {setPriceTotal}
        notifyRemove = {notifyRemove}
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
