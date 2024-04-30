//App.js
import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import LoginForm from './page/LoginForm';
import SignUpForm from './page/SignUpForm';
import MainPage from './page/MainPage';
import Posts from './component/Posts';
import EditProfile from './component/EditProfile';
import {MyPage} from './page/MyPage';
import WritingPage from './page/WritingPage';
import FoodCategory from './css/FoodCategory';
import Main from './page/Main';

// git test
function App() {
  return (<>
    <nav>
      <NavLink to="/">메인페이지</NavLink>
      <NavLink to="/mypage">마이페이지</NavLink>
      <NavLink to="/login">로그인 페이지</NavLink>
      <NavLink to="/signup">회원가입 페이지</NavLink>
      <NavLink to="/Writingpage">글쓰기 페이지</NavLink>
      <NavLink to="/foodcategory">카테고리 페이지</NavLink>

    </nav>
    <Routes>
      <Route path="/" element={<Main />} /> {/* 회원가입 페이지 라우트 추가 */}
      <Route path="/signup" element={<SignUpForm />} /> {/* 회원가입 페이지 라우트 추가 */}
      <Route path="/login" element={<LoginForm />} /> {/* 로그인 페이지 라우트 추가 */}
      {/* 필요에 따라 더 많은 라우트를 추가할 수 있습니다 */}

      <Route path='/foodcategory' element={<FoodCategory/>} /> 
      <Route path='/Writingpage' element={<WritingPage/>} /> 
      <Route path='/' element={<WritingPage/>} /> 

      {/* 마이페이지 추가*/}
      <Route path="/mypage" element={<MyPage />}>
        <Route path="posts" element={<Posts />} />
        <Route path="EditProfile" element={<EditProfile />} />
      </Route>
    </Routes>
</>
  );
}

export default App;