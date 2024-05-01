//검색기능을 포함한 상단영역 jsx
import React, { useEffect, useState } from 'react';

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
    width: "60%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    marginLeft: "33%",
  },

  // 상단 메인배너(홈링크 이동) styles
  mainbanner: {
    marginLeft:"20px",
    justifyContent: "center", // 가로 방향으로 가운데 정렬
    alignItems: "center", // 세로 방향으로 가운데 정렬
    backgroundColor: "white",
    border: 'none',
    fontSize: "16px",
  },
};

const searchbtnStyles = {
  // 검색 버튼 styles
  LoginBtn: {
    float: "right",
    backgroundColor: "white",
    border: "none",
    color: "black",
    position: "fixed", // 상단에 고정
    top: 0, // 상단에 위치
    marginTop: "25px",
    marginLeft: "45%",
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
    marginTop: "24px", 
    marginLeft: "450px",
    
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
  
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    const results = data.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
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
  
  return (
    <div style={searchStyles.searchContainer}>
        
        <div style={searchStyles.searchbar}>
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
            placeholder="음식 카테고리 검색(ex 한식)"
            onChange={handleSearch}
            style={{ width: "30%", height: "50%", fontSize: 12, borderRadius: "5px", border: "1px solid black", marginLeft:"5px"}}
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
