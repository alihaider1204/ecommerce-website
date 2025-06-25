import React from 'react';

const products = [
  { name: 'T-shirt with Tape Details', price: 120, image: '/placeholder1.jpg', rating: 4.5 },
  { name: 'Skinny Fit Jeans', price: 240, oldPrice: 260, image: '/placeholder2.jpg', rating: 3.5 },
  { name: 'Checkered Shirt', price: 180, image: '/placeholder3.jpg', rating: 4.5 },
  { name: 'Sleeve Striped T-shirt', price: 130, oldPrice: 160, image: '/placeholder4.jpg', rating: 4.5 },
];

const NewArrivals = () => (
  <section className="products-section">
    <h2 className="products-section__title">NEW ARRIVALS</h2>
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

export default NewArrivals;
