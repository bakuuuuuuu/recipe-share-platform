import React, { useState, useEffect } from 'react';
import FoodCategoryButton from '../page/FoodCategoryButton';
import Search from '../page/Search';
import UnderMenu from '../page/UnderMenu';
import RecipeList from './RecipeList'; // 레시피 리스트 컴포넌트 불러오기

const categories = [
  { name: '전체', image: 'image/all.jpg'},
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
    // 검색어나 카테고리가 변경될 때마다 필터링된 레시피를 업데이트합니다.
    let filtered = recipes;
    if (searchTerm) {
      filtered = filtered.filter(recipe =>
        recipe.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.savedUserId.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (activeCategory && activeCategory !== '전체') {
      filtered = filtered.filter(recipe => recipe.category === activeCategory);
    }
    setFilteredRecipes(filtered);
  }, [searchTerm, activeCategory, recipes]);

  // 카테고리 이름에 따라 레시피를 필터링하는 함수
  const filterRecipesByCategory = (categoryName) => {
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
     <Search
        recipes={recipes} // 레시피 데이터를 전달
        activeCategory={activeCategory} // 현재 선택된 카테고리를 전달
        onSearchTermChange={(searchTerm) => setSearchTerm(searchTerm)} // 검색어 변경 핸들러 전달
        onCategoryChange={(categoryName) => filterRecipesByCategory(categoryName)} // 카테고리 변경 핸들러 전달
      />
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
