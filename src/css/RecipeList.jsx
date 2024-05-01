import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to={`/recipe/${recipe.No}`} style={styles.link} key={recipe.No}>
          <div style={styles.recipe}>
            <div style={styles.header}>
              <div style={styles.category}>{recipe.category}</div>
              <div style={styles.author}>작성자: {recipe.savedUserId}</div>
            </div>
            <div style={styles.title}> 제목: {recipe.title} </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;
