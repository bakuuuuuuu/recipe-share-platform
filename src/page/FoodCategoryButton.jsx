import React, { useState } from 'react';

const FoodCategoryButton = ({ category, onClick, isActive }) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const dynamicStyles = {
    ...styles.button,
    transform: isHovered || isActive ? 'scale(1.2)' : 'none',  // 활성화 또는 호버 상태일 때 확대
    boxShadow: isHovered || isActive ? '0 0 10px #fff' : 'none', // 활성화 또는 호버 상태일 때 그림자 추가
  };


  return (
    
      <button
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={dynamicStyles}
      >
        <img src={category.image} alt={category.name} style={styles.image} />
        <span style={styles.text}>{category.name}</span>
      </button>
    )
  
};

const styles = {
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '14px',
    padding: '15px',
    backgroundColor: '#35292A',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    width: '130px',
    height: '160px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    marginTop: '110px',
  },
  image: {
    width: '100%',
    height: '80%',
  },
  text: {
    marginTop: '5px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Arial, sans-serif'
  }
};

export default FoodCategoryButton;