import React, { useState } from 'react';
import ProductsAdmin from '../components/admin/ProductsAdmin';
import CategoriesAdmin from '../components/admin/CategoriesAdmin';

const Admin = () => {
  const [tab, setTab] = useState('products');

  return (
    <main className="admin-page">
      <h1 className="admin-title">Admin Dashboard</h1>
      <div className="admin-tabs">
        <button className={tab === 'products' ? 'active' : ''} onClick={() => setTab('products')}>PRODUCTS</button>
        <button className={tab === 'categories' ? 'active' : ''} onClick={() => setTab('categories')}>CATEGORIES</button>
      </div>
      <div className="admin-content">
        {tab === 'products' ? <ProductsAdmin /> : <CategoriesAdmin />}
      </div>
    </main>
  );
};

export default Admin;
