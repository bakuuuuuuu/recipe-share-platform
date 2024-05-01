import React, { useState } from 'react';
import FoodCategoryButton from './FoodCategoryButton'; // Importing FoodCategoryButton component

const FoodCategoryButtonActive = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = category => {
    // Toggle active category
    setActiveCategory(current => current === category.name ? null : category.name);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      {categories.map(category => (
        <FoodCategoryButton
          key={category.name}
          category={category}
          onClick={() => handleClick(category)}
          isActive={activeCategory === category.name}
        />
      ))}
    </div>
  );
};

export default FoodCategoryButtonActive;
