import React from 'react';
import FoodCategoryButton from '../page/FoodCategoryButton';
import Search from '../page/Search';
import UnderMenu from '../page/UnderMenu';

const categories = [
  { name: '전체', image: 'image/all.jpg' },
  { name: '한식', image: 'image/korean.jpg' },
  { name: '양식', image: 'image/western.jpg' },
  { name: '중식', image: 'image/chinese.jpg' },
  { name: '일식', image: 'image/japanese.jpg' },
  { name: '디저트', image: 'image/dessert.jpg' },
];

const FoodCategoryMenu = () => {
  const handleClick = (categoryName) => {
    console.log(`${categoryName} was clicked`);
  };

  return (
    <div style={styles.container}>
      {categories.map(category => (
        <FoodCategoryButton
          key={category.name}
          category={category}
          onClick={() => handleClick(category.name)}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto'
  }
};

function FoodCategory(props) {
  return (
    <div>
      <Search />
      <FoodCategoryMenu />
      <UnderMenu />
    </div>
  );     
}

export default FoodCategory;