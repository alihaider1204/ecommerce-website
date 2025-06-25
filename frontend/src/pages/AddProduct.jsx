import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [form, setForm] = useState({ name: '', price: '', brand: '', category: '', description: '', image: '' });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/categories').then(res => setCategories(res.data));
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/products', form, { headers: { Authorization: 'Bearer YOUR_ADMIN_TOKEN' } });
    // Optionally redirect or show success
  };

  return (
    <main className="admin-page">
      <h2 style={{ textAlign: 'center' }}>ADD NEW PRODUCT</h2>
      <form className="admin-form-vertical" onSubmit={handleAdd}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} required />
        <input name="brand" placeholder="Brand" value={form.brand} onChange={handleChange} required />
        <select name="category" value={form.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          {categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
        </select>
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} required />
        <button type="submit">ADD PRODUCT</button>
      </form>
    </main>
  );
};

export default AddProduct;
