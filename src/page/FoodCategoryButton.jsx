import React from 'react';

const FoodCategoryButton = ({ category, onClick }) => {
  return (
    <button onClick={onClick} style={styles.button}>
      <img src={category.image} alt={category.name} style={styles.image} />
      <span style={styles.text}>{category.name}</span>
    </button>
  );
};

const styles = {
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
    padding: '10px',
    backgroundColor: '#35292A',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    width: '150px',  // 버튼 너비 조정
    height: '180px',  // 버튼 높이 조정
    overflow: 'hidden',
  },
  image: {
    width: '100%',  // 이미지 너비 최대화
    height: '80%',  // 이미지 높이를 버튼 높이의 80%로 설정
  },
  text: {
    marginTop: '5px',
    fontSize: '20px',  // 글자 크기 조정
    fontWeight: 'bold',  // 글자 굵기
    color: '#fff',  // 글자 색상
    fontFamily: 'Arial, sans-serif'  // 폰트 패밀리
  }
};

export default FoodCategoryButton;