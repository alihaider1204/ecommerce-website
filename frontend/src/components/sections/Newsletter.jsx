import React from 'react';

const Newsletter = () => (
  <section className="newsletter">
    <h2 className="newsletter__title">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
    <form className="newsletter__form">
      <input type="email" placeholder="Enter your email address" />
      <button type="submit">Subscribe to Newsletter</button>
    </form>
  </section>
);

export default Newsletter; 