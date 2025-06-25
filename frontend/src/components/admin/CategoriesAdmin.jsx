import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = 'http://localhost:5000/api/categories';

const CategoriesAdmin = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(API).then(res => setCategories(res.data));
  }, []);

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2>CATEGORIES</h2>
        <button className="admin-form-button" onClick={() => navigate('/admin/add-category')}>Add New Category</button>
      </div>
      <div className="admin-list-box">
        <div className="admin-list-scroll">
          {categories.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#aaa', marginTop: '40px' }}>No categories found.</div>
          ) : (
            categories.map(c => (
              <div className="admin-card" key={c._id}>
                <div><b>{c.name}</b></div>
                <div>{c.description}</div>
                {/* Add edit/delete buttons as needed */}
              </div>
            ))
          )}
        </div>
        <div className="admin-list-footer">
          Displaying {categories.length} of {categories.length} categories
        </div>
      </div>
    </section>
  );
};

export default CategoriesAdmin;
