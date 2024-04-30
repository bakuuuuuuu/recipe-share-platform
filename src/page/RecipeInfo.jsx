import React, { useState } from 'react';

const RecipeInfo = () => {
    // 로컬 스토리지에서 저장된 레시피 정보를 가져옵니다.
    const storedRecipes = localStorage.getItem('recipes');
    const recipes = storedRecipes ? JSON.parse(storedRecipes) : [];

    // 카테고리 별로 필터링된 글 객체를 저장할 상태 변수
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    // 카테고리 선택 시 해당 카테고리의 글 객체를 필터링하여 상태 업데이트
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        if (e.target.value === '') {
            // 카테고리가 선택되지 않은 경우 전체 글 객체를 출력
            setFilteredRecipes(recipes);
        } else {
            // 선택된 카테고리에 해당하는 글 객체만 필터링하여 출력
            const filtered = recipes.filter(recipe => recipe.category === e.target.value);
            setFilteredRecipes(filtered);
        }
    };

    return (
        <div>
            {/* 카테고리 선택을 위한 select 태그 */}
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">전체</option>
                <option value="한식">한식</option>
                <option value="일식">일식</option>
                <option value="중식">중식</option>
                <option value="양식">양식</option>
                <option value="디저트">디저트</option>
            </select>

            {/* 선택된 카테고리에 해당하는 글 객체 출력 */}
            {filteredRecipes.map((recipe, index) => (
                <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', marginBottom: '10px' }}>
                    <h3>{recipe.title}</h3>
                    <p>작성자: {recipe.savedUserId}</p>
                    <p>카테고리: {recipe.category}</p>
                    <p>내용: {recipe.content}</p>
                    {recipe.imageUrl && <img src={recipe.imageUrl} alt="레시피 이미지" style={{ maxWidth: '100%', marginTop: '10px' }} />}
                </div>
            ))}
        </div>
    );
};

export default RecipeInfo;
