// RecipeDetail.jsx
import React from 'react';

const RecipeDetail = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>작성자: {recipe.savedUserId}</p>
      <p>내용: {recipe.content}</p>
      {/* 레시피의 다른 정보들을 출력할 수 있음 */}
    </div>
  );
};

export default RecipeDetail;
