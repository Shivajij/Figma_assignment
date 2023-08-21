import React, { useState, useEffect } from "react";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const updateCartAndStorage = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    updateCartAndStorage(updatedCart);
  };

  return (
    <div className="cart-container">
      <h3>Cart Items</h3>
      <div className="cart-items-wrapper">
        {cartItems.length === 0 ? (
          <p className="empty-cart-text">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt="Product" />
              <div className="card-title">{item.name}</div>
              <div className="card-text">{item.price}</div>
              <button
                className="remove-button"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
