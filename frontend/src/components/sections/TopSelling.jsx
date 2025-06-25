import React from 'react';

const products = [
  { name: 'Vertical Striped Shirt', price: 212, oldPrice: 232, image: '/placeholder5.jpg', rating: 5.0 },
  { name: 'Courage Graphic T-shirt', price: 145, image: '/placeholder6.jpg', rating: 4.0 },
  { name: 'Loose Fit Bermuda Shorts', price: 80, image: '/placeholder7.jpg', rating: 3.0 },
  { name: 'Faded Skinny Jeans', price: 210, image: '/placeholder8.jpg', rating: 4.5 },
];

const TopSelling = () => (
  <section className="products-section">
    <h2 className="products-section__title">TOP SELLING</h2>
    <div className="products-grid">
      {products.map((p, i) => (
        <div className="product-card" key={i}>
          <img src={p.image} alt={p.name} />
          <div className="product-card__info">
            <div className="product-card__name">{p.name}</div>
            <div className="product-card__rating">
              {'★'.repeat(Math.round(p.rating))} <span>{p.rating}/5</span>
            </div>
            <div className="product-card__price">
              ${p.price}
              {p.oldPrice && <span className="product-card__oldprice">${p.oldPrice}</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
    <button className="products-section__viewall">View All</button>
  </section>
);

export default TopSelling;
