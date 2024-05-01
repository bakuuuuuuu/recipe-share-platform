import React, { useState, useEffect } from 'react';
import FoodCategoryButton from '../page/FoodCategoryButton';
import Search from '../page/Search';
import UnderMenu from '../page/UnderMenu';
import RecipeList from './RecipeList'; // 레시피 리스트 컴포넌트 불러오기

const categories = [
  { name: '전체', image: 'image/all.jpg' },
  { name: '한식', image: 'image/korean.jpg' },
  { name: '양식', image: 'image/western.jpg' },
  { name: '중식', image: 'image/chinese.jpg' },
  { name: '일식', image: 'image/japanese.jpg' },
  { name: '디저트', image: 'image/dessert.jpg' },
];

const FoodCategory = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    // 로컬 스토리지에서 레시피를 불러옵니다.
    const storedRecipes = JSON.parse(localStorage.getItem('recipes'));
    setRecipes(storedRecipes || []);
  }, []);

  // 카테고리 이름에 따라 레시피를 필터링하는 함수
  const filterRecipesByCategory = (categoryName) => {
    if (categoryName === '전체') {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter(recipe => recipe.category === categoryName);
      setFilteredRecipes(filtered);
    }
  };

  // 카테고리 버튼 클릭 시 실행되는 함수
  const handleClick = (categoryName) => {
    console.log(`${categoryName} was clicked`);
    filterRecipesByCategory(categoryName);
  };

  // 컨테이너 스타일
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
    }
  };

  return (
    <div>
      <Search />
      <div style={styles.container}>
        {categories.map(category => (
          <FoodCategoryButton
            key={category.name}
            category={category}
            onClick={() => handleClick(category.name)}
          />
        ))}
      </div>
      <RecipeList recipes={filteredRecipes} />
      <UnderMenu />
    </div>
  );
};

export default FoodCategory;
