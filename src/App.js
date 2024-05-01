import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './page/LoginForm';
import SignUpForm from './page/SignUpForm';
import Posts from './component/Posts';
import EditProfile from './component/EditProfile';
import { MyPage } from './page/MyPage';
import WritingPage from './page/WritingPage';
import FoodCategory from './css/FoodCategory';
import Main from './page/Main';
import UnderMenu from './page/UnderMenu';
import { initUesrData } from './domain/userData';
import AdminPage from './page/AdminPage';
import RecipeDetailPage from './page/RecipeDetailPage'; // 레시피 상세 페이지 추가

function App() {
  initUesrData();

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/adminhome" element={<AdminPage />} />

        <Route element={<UnderMenu />}>
          <Route path="/" element={<Main />} />
          <Route path="/foodcategory" element={<FoodCategory />} />
          <Route path="/writingpage" element={<WritingPage />} />
          <Route path="/mypage" element={<MyPage />}>
            <Route path="posts" element={<Posts />} />
            <Route path="EditProfile" element={<EditProfile />} />
          </Route>

          {/* 레시피 상세 페이지 라우트 추가 */}
          <Route path="/recipe/:No" element={<RecipeDetailPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
