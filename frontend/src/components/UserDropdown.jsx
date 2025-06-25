import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDropdown = () => {
  const [open, setOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // This should be set based on user context/state
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // Check if user is admin from token or context
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setIsAdmin(payload.isAdmin || false);
      } catch (error) {
        console.error('Error parsing token:', error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setOpen(false);
    navigate('/login');
  };

  const handleNavigate = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <div className="user-dropdown" ref={dropdownRef}>
      <span
        className="header__icon"
        role="img"
        aria-label="user"
        style={{ cursor: 'pointer' }}
        onClick={() => setOpen((o) => !o)}
      >👤</span>
      {open && (
        <div className="user-dropdown-menu">
          {!isAdmin && (
            <>
              <button onClick={() => handleNavigate('/profile')}>My Account</button>
              <button onClick={() => handleNavigate('/orders')}>My Orders</button>
            </>
          )}
          <button onClick={handleLogout}>Log out</button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
