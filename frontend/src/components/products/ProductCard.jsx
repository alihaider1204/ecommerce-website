import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation to product detail
    // TODO: Add to cart functionality
    console.log('Adding to cart:', product);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          <span className="stars">{renderStars(product.rating)}</span>
          <span className="count">{product.rating}/5</span>
        </div>
        <div className="product-price">
          <span className="current-price">${product.price}</span>
          {product.originalPrice && (
            <>
              <span className="original-price">${product.originalPrice}</span>
              <span className="discount-tag">-{product.discount}%</span>
            </>
          )}
        </div>
        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
