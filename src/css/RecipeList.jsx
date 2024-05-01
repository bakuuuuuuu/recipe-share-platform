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
      border: '2px solid #35292A', 
      padding: '10px',
      borderRadius: '30px', 
      width: '100%',
      transition: 'transform 0.3s ease', 
      '&:hover': {
        transform: 'scale(1.02)', 
      }
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: '10px',
    },
    title: {
      textAlign: 'left',
    },
    author: {
      textAlign: 'right',
    },
    link: {
      textDecoration: 'none', // 링크 밑줄 제거
      color: 'inherit' // 링크 색상을 상속받도록 설정
    }
  };

  return (
    <div style={styles.recipeContainer}>
      {recipes.map(recipe => (
        <a href={`/recipe/${recipe.id}`} style={styles.link} key={recipe.id}>
          <div style={styles.recipe}>
            <div style={styles.header}>
              <div style={styles.title}>{recipe.category}</div>
              <div style={styles.author}>작성자: {recipe.savedUserId}</div>
            </div>
            제목: {recipe.title}
            <img src={recipe.imageUrl} alt={recipe.title} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default RecipeList;
