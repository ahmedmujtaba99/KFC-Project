import React, { useState } from "react";
import './App.css';
import MenuPage from './pages/MenuPage';
import Header from "./components/Header";
import CartViewOffcanvas from "./components/CartViewOffCanvas";
import CartViewMenu from "./components/CartViewMenu";
import Footer from "./components/Footer";
function App() {
  const [cartItems, setCartItems] = useState([]);

  const [product, setProduct] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const showProduct = (item) => {
    setProduct([item]);
  };
  const handleRemoveItem = (itemToRemove) => {
    const updatedCartItems = cartItems.filter((item) => item !== itemToRemove);
    setCartItems(updatedCartItems);
  };

   const [totalCartPrice, setTotalCartPrice] = useState(0);
  // Function to increase quantity
 
  return (
    <>
      <CartViewOffcanvas
        cartItems={cartItems}
        handleRemoveItem={handleRemoveItem}
        // increaseQuantity={increaseQuantity}
        // decreaseQuantity={decreaseQuantity}
        totalCartPrice={totalCartPrice}
      />

      <CartViewMenu
        product={product}
        addToCart={addToCart}
        // increaseQuantity={increaseQuantity}
        // decreaseQuantity={decreaseQuantity}
        // updateCartItemPrice={updateCartItemPrice}
      />
      <Header cartCounter={cartItems.length} />
      <MenuPage addToCart={addToCart} showProduct={showProduct} />
      <Footer />
    </>
  );
}

export default App;
