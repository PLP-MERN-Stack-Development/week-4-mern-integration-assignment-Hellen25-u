// src/pages/ZetuList.jsx
import React, { useState } from 'react';

const ZetuList = () => {
  const [items, setItems] = useState(['Milk', 'Bread', 'Eggs']);
  const [newItem, setNewItem] = useState('');

  const handleAdd = () => {
    if (newItem.trim() === '') return;
    setItems([...items, newItem.trim()]);
    setNewItem('');
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="zetulist-container">
      <h1>ZetuList Shopping App</h1>
      <div className="input-row">
        <input
          type="text"
          placeholder="Add item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ZetuList;
