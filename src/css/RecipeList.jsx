import React from 'react';

const RecipeList = ({ recipes }) => {
  const styles = {
    recipeContainer: {
      display: 'grid',
      gap: '20px',
      padding: '20px',
      borderRadius: '10px',
      width: '60%',
      margin: '0 auto',
    },
    recipe: {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '5px',
      width: '100%',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between', // 제목은 왼쪽, 작성자는 오른쪽 정렬
      width: '100%',
      marginBottom: '10px', // 하단 컨텐츠와의 간격 조정
    },
    title: {
      textAlign: 'left', // 제목 왼쪽 정렬
    },
    author: {
      textAlign: 'right', // 작성자 오른쪽 정렬
    }
  };

  return (
    <div style={styles.recipeContainer}>
      {recipes.map(recipe => (
        <div key={recipe.id} style={styles.recipe}>
          <div style={styles.header}>
            <div style={styles.title}>{recipe.category}</div> {/* 제목 위치에 카테고리를 표시 */}
            <div style={styles.author}>작성자: {recipe.savedUserId}</div>
          </div>
          제목: {recipe.title}{/* 카테고리 위치에 제목을 표시 */}
          <img src={recipe.imageUrl} alt={recipe.title} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
