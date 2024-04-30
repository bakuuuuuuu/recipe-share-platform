import React, { useState, useEffect } from 'react';
import FoodCategoryButton from '../page/FoodCategoryButton';
import Search from '../page/Search';
import UnderMenu from '../page/UnderMenu';

const categories = [
  { name: '전체', image: 'image/all.jpg' },
  { name: '한식', image: 'image/korean.jpg' },
  { name: '양식', image: 'image/western.jpg' },
  { name: '중식', image: 'image/chinese.jpg' },
  { name: '일식', image: 'image/japanese.jpg' },
  { name: '디저트', image: 'image/dessert.jpg' },
];

const FoodCategoryMenu = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  // 로컬 스토리지에서 레시피를 가져와서 저장합니다.
  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes'));
    setRecipes(storedRecipes || []);
  }, []);

  // 선택한 카테고리에 해당하는 레시피를 필터링합니다.
  const filterRecipesByCategory = (categoryName) => {
    if (categoryName === '전체') {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter(recipe => recipe.category === categoryName);
      setFilteredRecipes(filtered);
    }
  };

  const handleClick = (categoryName) => {
    console.log(`${categoryName} was clicked`);
    filterRecipesByCategory(categoryName);
  };

  return (
    <div>
      <div style={styles.container}>
        <Search></Search>
        {categories.map(category => (
          <FoodCategoryButton
            key={category.name}
            category={category}
            onClick={() => handleClick(category.name)}
          />
        ))}
      </div>
      <div style={styles.recipeContainer}>
        {/* 각각의 필터링된 레시피에 border를 추가합니다 */}
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} style={styles.recipe}>
            <p>작성자 : {recipe.id}</p>
            <p>카테고리 : {recipe.category}</p>
            <p>제목 : {recipe.title}</p>
            <p>내용 : {recipe.content}</p>
            <img src={recipe.imageUrl} alt={recipe.title} />
          </div>
        ))}
      </div>
      <UnderMenu />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto'
  },
  recipeContainer: {
    display: 'grid',
    gap: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px'
  },
  recipe: {
    display: 'flex', // 세로로 정렬하기 위해 flex로 설정합니다.
    flexDirection: 'column', // 세로 방향으로 배치합니다.
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px'
  }
};

export default FoodCategoryMenu;
