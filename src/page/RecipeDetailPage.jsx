import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetailPage = ({ recipes }) => {
  const { No } = useParams();

  // 로컬 스토리지에서 저장된 레시피 데이터를 가져옵니다.
  const storedRecipes = JSON.parse(localStorage.getItem('recipes')) ?? [];

  // No 값을 이용해 해당 레시피를 찾습니다.
  const recipe = storedRecipes.find(recipe => recipe.No === parseInt(No));

  // No 값에 해당하는 레시피가 없을 경우에 대한 처리
  if (!recipe) {
    return <div>해당 레시피를 찾을 수 없습니다.</div>;
  }

  // 레시피가 있을 경우 상세 내용을 표시합니다.
  return (
    <div>
      <h2>{recipe.title}</h2>
      <div>
        <strong>작성자:</strong> {recipe.savedUserId}
      </div>
      <div>
        <strong>카테고리:</strong> {recipe.category}
      </div>
      <div>
        <img src={recipe.imageUrl} alt="레시피 이미지" style={{ maxWidth: '100%' }} />
      </div>
      <div>
        <strong>내용:</strong> {recipe.content}
      </div>
    </div>
  );
};

export default RecipeDetailPage;
