//검색기능을 포함한 상단영역 jsx 
import React, { useEffect, useState } from 'react';
import FoodCategory from '../css/FoodCategory';
import FoodCategoryButton from './FoodCategoryButton';
import RecipeList from '../css/RecipeList';

const searchStyles = {
  // 전체적인 styles
  searchContainer: {
    padding: 10,
    display: "flex",
    justifyContent: "center", // 가로 방향으로 가운데 정렬
    alignItems: "center", // 세로 방향으로 가운데 정렬
    borderBottom: "3px solid white",
    width: "100%",
    height: 40,
    position: "fixed", // 상단에 고정
    top: 0, // 상단에 위치
    backgroundColor: "white", // 검색창 밖의 배경을 하얀색으로 설정합니다.
    zIndex: 999, // 다른 요소 위에 겹치도록 설정
    flex: '1',
  },

  //검색창 styles
  searchbar: {
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    marginLeft: "33%",
  },

  // 상단 메인배너(홈링크 이동) styles
  mainbanner: {
    marginLeft:"15px",
    justifyContent: "center", // 가로 방향으로 가운데 정렬
    alignItems: "center", // 세로 방향으로 가운데 정렬
    backgroundColor: "white",
    border: 'none',
    fontSize: "14px",
  },
  
};

const LoginbtnStyles = {
  // 로그인버튼 styles
  LoginBtn: {
    float: "right",
    backgroundColor: "white",
    fontSize: "11px",
    border: "none",
    color: "black",
    position: "fixed", // 상단에 고정
    top: 0, // 상단에 위치
    marginTop: "21px", 
    marginLeft: "400px",
    
 },
};

function Search({ data }) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const currentData = localStorage.getItem('currentData');
    setIsLoggedIn(currentData !== null);
  }, []);
  


  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
  
    // data가 배열인지 확인
    if (Array.isArray(data)) {
      const regex = new RegExp(searchTerm, 'i'); // 대소문자 구분 없이 검색
      const results = data.filter(item =>
        regex.test(item.title)
      );
  
      setSearchResults(results);
    } else {
      // data가 배열이 아니면 빈 배열을 설정
      setSearchResults([]);
    }
  };
  
     

  const handleLoginClick = () => {
      if(isLoggedIn){
      localStorage.removeItem('currentData');
      setIsLoggedIn(false);
      window.location.href= '/';
    }else {
      window.location.href='/login';
    }
  };   

  // const handleSearchBarClick = () => {
  //   window.location.href= '/foodcategory'; // 이동할 경로를 '/CATEGORY'로 설정
  // };
  
   // 카테고리 필터링 함수
   const filterCategory = (searchResults) => {
    return searchResults.filter(item =>
      ['전체','한식', '양식', '중식', '일식', '디저트'].includes()
    );
  };

  return (
    <div style={searchStyles.searchContainer}>
        
        <div style={searchStyles.searchbar} >
          {/*상단 메인배너(홈링크 이동)*/}
          
          <a href='http://localhost:3000/'>
            <input
              style={searchStyles.mainbanner}
              type="button"
              value={"SimplyCook"}
              
            />
          </a>
          
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="음식 카테고리 검색(ex 한식)"
            style={{ width: "30%", height: "40%", fontSize: 12, borderRadius: "10px", border: "1px solid black"}}

          />
          
          {/* 로그인 버튼 */}
          <button
             style={LoginbtnStyles.LoginBtn}
             onClick={handleLoginClick}
           >
            {isLoggedIn ? "로그아웃" : "로그인" }
          </button>
        </div>
        <ul style={{ overflowY: "scroll", width: "10%", height: "50%", textAlign: "left", listStyle: "none", padding: 0, border:"none"}}>
          {searchResults.map((item, index) => (
             <li key={index}>{item}</li>
          ))}
        </ul>
        
    </div>
  );
};

export default Search;