import React from 'react';

const categories = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'];
const colors = ['#00C12B', '#F50606', '#F5DD06', '#F57906', '#06CAF5', '#063AF5', '#A506F5', '#F506A4', '#fff', '#000'];
const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];
const dressStyles = ['Casual', 'Formal', 'Party', 'Gym'];

const ProductsFilter = ({ filters, setFilters }) => {
  return (
    <aside className="products-filter">
      <div className="filter-header">
        <h3>Filters</h3>
        <button className="close-filter">×</button>
      </div>

      {/* Categories */}
      <div className="filter-group">
        {categories.map(category => (
          <div key={category} className="filter-item">
            <span>{category}</span>
            <span className="arrow">›</span>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="filter-group">
        <div className="filter-title">
          <span>Price</span>
          <span className="toggle">^</span>
        </div>
        <div className="price-range-container">
          <input
            type="range"
            min="50"
            max="200"
            value={filters.price[1]}
            className="price-range"
            onChange={(e) => setFilters(prev => ({ ...prev, price: [prev.price[0], parseInt(e.target.value)] }))}
          />
          <div className="price-labels">
            <span>$50</span>
            <span>$200</span>
          </div>
        </div>
      </div>

      {/* Colors */}
      <div className="filter-group">
        <div className="filter-title">
          <span>Colors</span>
          <span className="toggle">^</span>
        </div>
        <div className="colors-grid">
          {colors.map(color => (
            <button
              key={color}
              className={`color-option ${filters.color === color ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => setFilters(prev => ({ ...prev, color }))}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="filter-group">
        <div className="filter-title">
          <span>Size</span>
          <span className="toggle">^</span>
        </div>
        <div className="size-grid">
          {sizes.map(size => (
            <button
              key={size}
              className={`size-option ${filters.size === size ? 'selected' : ''}`}
              onClick={() => setFilters(prev => ({ ...prev, size }))}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Dress Style */}
      <div className="filter-group">
        <div className="filter-title">
          <span>Dress Style</span>
          <span className="toggle">^</span>
        </div>
        {dressStyles.map(style => (
          <div key={style} className="filter-item">
            <span>{style}</span>
            <span className="arrow">›</span>
          </div>
        ))}
      </div>

      <button className="apply-filter">Apply Filter</button>
    </aside>
  );
};

export default ProductsFilter;
