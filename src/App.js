import React, {useState} from 'react';
import './App.css';

/*Import Components*/
import Land from './Components/Land';
import ItemGrid from './Components/ItemGrid';

function App() {

  const [displayItems, setDisplayItems] = useState("null");

  return (
    <div className="App">
      <Land 
        displayItems = {displayItems}
        setDisplayItems = {setDisplayItems}
      />
      <h1>Item Category</h1>
      <ItemGrid 
        displayItems = {displayItems}
      />
    </div>
  );
}

export default App;
