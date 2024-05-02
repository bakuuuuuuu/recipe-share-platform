import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = (currentPage + 1) * itemsPerPage;
  const currentRecipes = recipes.slice(startIndex, endIndex);

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
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    pageButton: {
      background: 'white',
      border: 'none',
      color: 'black',
      cursor: 'pointer',
      marginLeft: '5px',
      padding: '5px 10px',
    },
    activePageButton: {
      background: 'white',
      border: 'none',
      color: 'red',
      cursor: 'pointer',
      marginLeft: '5px',
      padding: '5px 10px',
    }
  };

  const totalPages = Math.ceil(recipes.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div style={styles.recipeContainer}>
        {currentRecipes.map(recipe => (
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
      <div style={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            style={currentPage === i ? styles.activePageButton : styles.pageButton}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
