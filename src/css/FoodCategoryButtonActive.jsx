import React, { useState } from 'react';
import FoodCategoryButton from './FoodCategoryButton'; // FoodCategoryButton 컴포넌트 불러오기

const FoodCategoryButtonActive = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = category => {
    // 클릭한 카테고리가 이미 활성화된 경우 활성화 해제
    if (activeCategory === category.name) {
      setActiveCategory(null);
    } else {
      // 새 카테고리를 활성화
      setActiveCategory(category.name);
    }
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
