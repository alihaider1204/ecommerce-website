import React, { useState } from 'react';
import axios from 'axios';

const AddCategory = () => {
  const [form, setForm] = useState({ name: '', description: '', image: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/categories', form, { headers: { Authorization: 'Bearer YOUR_ADMIN_TOKEN' } });
    // Optionally redirect or show success
  };

  return (
    <main className="admin-page">
      <h2 style={{ textAlign: 'center' }}>ADD NEW CATEGORY</h2>
      <form className="admin-form-vertical" onSubmit={handleAdd}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
        <button type="submit">ADD CATEGORY</button>
      </form>
    </main>
  );
};

export default AddCategory;
