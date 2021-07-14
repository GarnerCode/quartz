Quartz Devices & Technology
Mock e-commerce store-front selling electronic devices such as laptops, mobile devices, and gaming consoles.

This project was created to practice React concepts, and to demonstrate proficiency in the React library. This is a front-end only project, and does not provide back-end services.

-Item Code-

Item data including names, pricing, images, and descriptions are stored in itemsList.json. Items can be added or removed from this file as desired, with the UI updating in-sync with any changes made to the json file. Item components are rendered within the ItemGrid.js component using data supplied by the itemsList.json file.

-Cart Code-

Clicking "Add to Cart" on an item calls the handleAddToCart function in App.js, creating an object containing the item's name, price, and image properties. This object is then stored within the cartState array, with the price property added to the priceTotal state, returning the total price of all items that are added to the cart. The cartState is then mapped within the Cart component, rendering a cartItem component for each item within the cartState array.
