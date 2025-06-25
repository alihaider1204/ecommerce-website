import React from 'react';
import UserDropdown from '../UserDropdown';

const AdminHeader = () => (
  <header className="header">
    <div className="header__container">
      <div className="header__logo">SHOP.CO Admin</div>
      <div className="header__actions">
        <input type="text" placeholder="Search for products..." className="header__search" />
        <UserDropdown />
      </div>
    </div>
  </header>
);

export default AdminHeader;
