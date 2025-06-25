import React from 'react';
import heroImg from '../../assets/hero.jpg'; // Replace with your actual image

const HeroSection = () => (
  <section className="hero">
    <div className="hero__content">
      <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
      <p>
        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
      </p>
      <button className="hero__cta">Shop Now</button>
      <div className="hero__stats">
        <div><span>200+</span><br />International Brands</div>
        <div><span>2,000+</span><br />High-Quality Products</div>
        <div><span>30,000+</span><br />Happy Customers</div>
      </div>
    </div>
    <div className="hero__image">
      <img src={heroImg} alt="Hero" />
    </div>
  </section>
);

export default HeroSection;
