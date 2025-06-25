import React, { useState } from 'react';
import ProductsFilter from '../components/products/ProductsFilter';
import ProductsGrid from '../components/products/ProductsGrid';
import ProductsPagination from '../components/products/ProductsPagination';
import '../styles/products.css';

const Products = () => {
  // State for filters, products, pagination, etc.
  const [filters, setFilters] = useState({
    category: '',
    price: [50, 200],
    color: '',
    size: '',
    dressStyle: '',
  });

  // Example: products and pagination state (replace with API data)
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  // TODO: Fetch products from backend using filters and page

  return (
    <div className="products-page">
      <div className="products-layout">
        <ProductsFilter filters={filters} setFilters={setFilters} />
        <div className="products-main">
          <div className="products-header">
            <h2 className="products-title">Casual</h2>
            <div className="products-sort">
              <span>Showing 1-10 of 100 Products</span>
              <select defaultValue="popular">
                <option value="popular">Most Popular</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
          <ProductsGrid />
          <ProductsPagination 
            currentPage={1} 
            totalPages={10} 
            onPageChange={(page) => console.log('Page changed to:', page)} 
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
