import React, { useState } from 'react';
import Item from './Item';

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleChange = e => {
    setSelectedCategory(e.target.value);
  }

  const filteredItems = selectedCategory === 'All' 
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="ShoppingList">

      <div className="Filter">
        <select value={selectedCategory} onChange={handleChange}>
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option> 
          // other categories
        </select>
      </div>

      <ul className="Items">
        {filteredItems.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>

    </div>
  );

}

export default ShoppingList;