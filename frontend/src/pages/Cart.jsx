import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/cart.css';

const Cart = () => {
  // Example cart items (replace with your cart state management)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      image: 'https://example.com/gradient-tshirt.jpg',
      price: 145,
      size: 'Large',
      color: 'White',
      quantity: 1
    },
    {
      id: 2,
      name: 'Checkered Shirt',
      image: 'https://example.com/checkered-shirt.jpg',
      price: 180,
      size: 'Medium',
      color: 'Red',
      quantity: 1
    },
    {
      id: 3,
      name: 'Skinny Fit Jeans',
      image: 'https://example.com/skinny-jeans.jpg',
      price: 240,
      size: 'Large',
      color: 'Blue',
      quantity: 1
    }
  ]);

  const handleQuantityChange = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="cart-page">
      <div className="cart-header">
        <div className="breadcrumb">
          <Link to="/">Home</Link> › Cart
        </div>
        <h1>YOUR CART</h1>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <div className="item-header">
                  <h3>{item.name}</h3>
                  <button 
                    className="remove-item" 
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    ×
                  </button>
                </div>
                <div className="item-info">
                  <span>Size: {item.size}</span>
                  <span>Color: {item.color}</span>
                </div>
                <div className="item-price-qty">
                  <span className="price">${item.price}</span>
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(item.id, -1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="summary-row discount">
            <span>Discount (-20%)</span>
            <span>-${discount}</span>
          </div>
          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>${deliveryFee}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <div className="promo-code">
            <input type="text" placeholder="Add promo code" />
            <button>Apply</button>
          </div>
          <Link to="/checkout" className="checkout-button">
            Go to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart; 