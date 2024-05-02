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
  const [activeCategory, setActiveCategory] = useState(''); // 선택된 카테고리 이름을 저장하는 상태
  const [searchTerm, setSearchTerm] = useState(''); // 검색어를 저장하는 상태

  useEffect(() => {
    // 로컬 스토리지에서 레시피를 불러옵니다.
    const storedRecipes = JSON.parse(localStorage.getItem('recipes'));
    if (storedRecipes) {
      setRecipes(storedRecipes);
      setFilteredRecipes(storedRecipes); // 초기 화면에 모든 레시피를 보여줌
    }
  }, []);

  useEffect(() => {
    // 검색어가 변경될 때마다 필터링된 레시피를 업데이트합니다.
    const filtered = recipes.filter(recipe =>
      recipe.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.savedUserId.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  }, [searchTerm, recipes]);

  // 카테고리 이름에 따라 레시피를 필터링하는 함수
  const filterRecipesByCategory = (categoryName) => {
    let filtered;
    if (categoryName === '전체') {
      filtered = recipes;
    } else {
      filtered = recipes.filter(recipe => recipe.category === categoryName);
    }
    setFilteredRecipes(filtered);
    // 선택된 카테고리를 설정
    setActiveCategory(categoryName);
  };

  // 스타일 정의
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
    },
    activeCategoryDisplay: {
      display: 'flex',
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50px',
      width: '100%',
      fontSize: '40px',
      color: '#333',
      marginTop: '20px',
      marginBottom: '20px',
      fontFamily: 'Arial, sans-serif'
    }
  };

  return (
    <div>
      <Search onChange={(event) => setSearchTerm(event.target.value)} />
      <div style={styles.container}>
        {categories.map(category => (
          <FoodCategoryButton
            key={category.name}
            category={category}
            onClick={() => filterRecipesByCategory(category.name)}
            isActive={category.name === activeCategory} // 현재 카테고리가 활성화된 경우 isActive를 true로 설정
        />
        ))}
      </div>
      <div style={styles.activeCategoryDisplay}>
        {activeCategory ? `${activeCategory}` : "전체"}
      </div>
      <RecipeList recipes={filteredRecipes} />
      <UnderMenu />
    </div>
  );
};

export default FoodCategory;
