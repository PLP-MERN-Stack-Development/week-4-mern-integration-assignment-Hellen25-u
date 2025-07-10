import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Replace with your actual backend API route if needed
    axios.get('/api/categories')
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error('Error fetching categories:', err);
      });
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Blog Categories</h2>
      {categories.length === 0 ? (
        <p>No categories available.</p>
      ) : (
        <ul>
          {categories.map((cat) => (
            <li key={cat._id}>{cat.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoriesPage;
