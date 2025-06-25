import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <div className="footer__logo">SHOP.CO</div>
          <p>We have clothes that suits your style and which you're proud to wear. From women to men.</p>
          <div className="footer__socials">
            <span>🌐</span>
            <span>🐦</span>
            <span>📸</span>
          </div>
        </div>
        <div className="footer__links">
          <div>
            <h4>COMPANY</h4>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Works</a>
            <a href="#">Career</a>
          </div>
          <div>
            <h4>HELP</h4>
            <a href="#">Customer Support</a>
            <a href="#">Delivery Details</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div>
            <h4>FAQ</h4>
            <a href="#">Account</a>
            <a href="#">Manage Deliveries</a>
            <a href="#">Orders</a>
            <a href="#">Payments</a>
          </div>
          <div>
            <h4>RESOURCES</h4>
            <a href="#">Free eBooks</a>
            <a href="#">Development Tutorial</a>
            <a href="#">How to - Blog</a>
            <a href="#">Youtube Playlist</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>Shop.co © 2000-2023, All Rights Reserved</span>
        <span className="footer__payments">💳 🅿️ 🅰️ 🅶</span>
      </div>
    </footer>
  );
};

export default Footer; 