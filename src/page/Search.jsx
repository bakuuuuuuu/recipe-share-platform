//검색기능을 포함한 상단영역 jsx 
import React, { useEffect, useState } from 'react';

const searchStyles = {
  // 전체적인 styles
  searchContainer: {
    padding: 10,
    display: "flex",
    justifyContent: "center", // 가로 방향으로 가운데 정렬
    alignItems: "center", // 세로 방향으로 가운데 정렬
    borderBottom: "1px solid lightgray",
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
    width: "48%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    marginLeft: "31%",
  },

  // 상단 메인배너(홈링크 이동) styles
  mainbanner: {
    marginLeft:"6px",
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
  
  useEffect(() => {
    handleSearch(query);
  }, [query]);

  const handleSearch = () => {
    // Perform filtering only when the search button is clicked
    if (Array.isArray(data)) {
      const filtered = data.filter(recipe =>
        recipe.content.toLowerCase().includes(query.toLowerCase()) ||
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.savedUserId.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };
  

  const handleLoginClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem('currentData');
      setIsLoggedIn(false);
      window.location.href= '/';
    } else {
      window.location.href='/login';
    }
  };   

  const filterCategory = (searchResults) => {
    return searchResults.map(recipe => recipe.category); // 레시피 객체에서 카테고리만 추출하여 반환
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e.target.value);
    }
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
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown} // 엔터 키 감지
            placeholder="음식 카테고리 검색(ex 한식)"
            style={{ width: "30%", height: "40%", fontSize: 12, borderRadius: "10px", border: "1px solid black"}}           
          />

          {/* Search button */}
          <button
            style={searchStyles.LoginBtn}
            onClick={handleSearch}
          >
            <img src='/search.png'></img>
          </button>
          
          {/* 로그인 버튼 */}
          <button
             style={LoginbtnStyles.LoginBtn}
             onClick={handleLoginClick}
           >
            {isLoggedIn ? "로그아웃" : "로그인" }
          </button>
        </div>
        <ul style={{ overflowY: "scroll", width: "10%", height: "50%", textAlign: "left", listStyle: "none", padding: 0, border:"none"}}>
          {filterCategory(searchResults).map((item, index) => ( // 여기에서 필터링된 카테고리를 보여줌
             <li key={index}>{item}</li>
          ))}
        </ul>
        
    </div>
  );
};

export default Search;
