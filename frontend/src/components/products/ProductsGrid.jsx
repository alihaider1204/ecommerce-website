import React from 'react';
import ProductCard from './ProductCard';

// Hardcoded products data matching the design
const hardcodedProducts = [
  {
    id: 1,
    name: 'Gradient Graphic T-shirt',
    image: 'https://example.com/gradient-tshirt.jpg', // Replace with actual image URL
    rating: 3.5,
    price: 145,
    category: 'T-shirts'
  },
  {
    id: 2,
    name: 'Polo with Tipping Details',
    image: 'https://example.com/polo-shirt.jpg',
    rating: 4.5,
    price: 180,
    category: 'T-shirts'
  },
  {
    id: 3,
    name: 'Black Striped T-shirt',
    image: 'https://example.com/striped-tshirt.jpg',
    rating: 5.0,
    price: 120,
    originalPrice: 160,
    discount: 20,
    category: 'T-shirts'
  },
  {
    id: 4,
    name: 'Skinny Fit Jeans',
    image: 'https://example.com/skinny-jeans.jpg',
    rating: 3.5,
    price: 240,
    originalPrice: 260,
    discount: 20,
    category: 'Jeans'
  },
  {
    id: 5,
    name: 'Checkered Shirt',
    image: 'https://example.com/checkered-shirt.jpg',
    rating: 4.5,
    price: 180,
    category: 'Shirts'
  },
  {
    id: 6,
    name: 'Sleeve Striped T-shirt',
    image: 'https://example.com/sleeve-striped.jpg',
    rating: 4.5,
    price: 130,
    originalPrice: 160,
    discount: 30,
    category: 'T-shirts'
  },
  {
    id: 7,
    name: 'Vertical Striped Shirt',
    image: 'https://example.com/vertical-striped.jpg',
    rating: 5.0,
    price: 212,
    originalPrice: 232,
    discount: 20,
    category: 'Shirts'
  },
  {
    id: 8,
    name: 'Courage Graphic T-shirt',
    image: 'https://example.com/courage-tshirt.jpg',
    rating: 4.0,
    price: 145,
    category: 'T-shirts'
  },
  {
    id: 9,
    name: 'Loose Fit Bermuda Shorts',
    image: 'https://example.com/bermuda-shorts.jpg',
    rating: 3.0,
    price: 80,
    category: 'Shorts'
  }
];

const ProductsGrid = () => {
  return (
    <div className="products-grid">
      {hardcodedProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
