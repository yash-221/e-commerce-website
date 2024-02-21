import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";

function App() {
  // Define cart state
  const [cart, setCart] = useState([]);

  // Define function to handle adding items to the cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`Successfully added ${product.title} to cart`);
  };

  return (
    <>
      <Navbar cart={cart} /> {/* Pass cart state to Navbar */}
      <Routes>
        <Route
          path="/"
          element={<Home handleAddToCart={handleAddToCart} />}
        />
        <Route
          path="/products/:id"
          element={<Products handleAddToCart={handleAddToCart} />} 
        />
      </Routes>
    </>
  );
}

export default App;
