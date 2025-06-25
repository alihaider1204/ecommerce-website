import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserDropdown from './UserDropdown';

const Header = () => {
  const [cartCount, setCartCount] = useState(0); // This will be managed by your cart context/state management

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <Link to="/">SHOP.CO</Link>
        </div>
        {/* Navigation */}
        <nav className="header__nav">
          <Link to="/products">Shop</Link>
          <Link to="/sale">On Sale</Link>
          <Link to="/new-arrivals">New Arrivals</Link>
          <Link to="/brands">Brands</Link>
        </nav>
        {/* Search, Cart and User Dropdown */}
        <div className="header__actions">
          <input type="text" placeholder="Search for products..." className="header__search" />
          <div className="cart-icon">
            <Link to="/cart">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </div>
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;