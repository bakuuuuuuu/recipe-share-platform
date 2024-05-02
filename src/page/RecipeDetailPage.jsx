import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    border-radius: 8px;
    background-color: #fff;
`;

const Title = styled.h2`
    color: #333;
    border-bottom: 2px solid #4CAF50;
    padding-bottom: 10px;
    
`;

const Image = styled.img`
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.15);
`;

const Detail = styled.div`
    margin-top: 20px;
    strong {
        color: #666;
        font-size: 16px;
    }
`;

const RecipeDetailPage = ({ recipes }) => {
  const { No } = useParams();
  const storedRecipes = JSON.parse(localStorage.getItem('recipes')) ?? [];
  const recipe = storedRecipes.find(recipe => recipe.No === parseInt(No));

  if (!recipe) {
    return <Container>해당 레시피를 찾을 수 없습니다.</Container>;
  }

  return (
    <Container>
      <Title>{recipe.title}</Title>
      <Detail>
        <strong>작성자:</strong> {recipe.savedUserId}
      </Detail>
      <Detail>
        <strong>카테고리:</strong> {recipe.category}
      </Detail>
      <Image src={recipe.imageUrl} alt="레시피 이미지" />
      <Detail>
        <strong>내용:</strong> {recipe.content}
      </Detail>
    </Container>
  );
};

export default RecipeDetailPage;
