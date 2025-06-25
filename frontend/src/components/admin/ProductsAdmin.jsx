import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = 'http://localhost:5000/api/products'; // Adjust if your backend runs elsewhere

const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(API).then(res => setProducts(res.data));
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = async e => {
    e.preventDefault();
    await axios.post(API, form, { headers: { Authorization: 'Bearer YOUR_ADMIN_TOKEN' } });
    setForm({ name: '', price: '', brand: '', category: '', description: '', image: '' });
    const res = await axios.get(API);
    setProducts(res.data);
  };

  const handleDelete = async id => {
    await axios.delete(`${API}/${id}`, { headers: { Authorization: 'Bearer YOUR_ADMIN_TOKEN' } });
    setProducts(products.filter(p => p._id !== id));
  };

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2>PRODUCTS</h2>
        <button className="admin-form-button" onClick={() => navigate('/admin/add-product')}>Add New Product</button>
      </div>
      <div className="admin-list-box">
        <div className="admin-list-scroll">
          {products.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#aaa', marginTop: '40px' }}>No products found.</div>
          ) : (
            products.map(p => (
              <div className="admin-card" key={p._id}>
                <div><b>{p.name}</b> (${p.price})</div>
                <div>{p.brand}</div>
                <div>{p.category}</div>
                <button onClick={() => handleDelete(p._id)}>Delete</button>
              </div>
            ))
          )}
        </div>
        <div className="admin-list-footer">
          Displaying {products.length} of {products.length} products
        </div>
      </div>
    </section>
  );
};

export default ProductsAdmin;
