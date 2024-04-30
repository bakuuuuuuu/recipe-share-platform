//App.js
import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import LoginForm from './PAGE/LoginForm';
import SignUpForm from './PAGE/SignUpForm';
import MainPage from './PAGE/MainPage';
// git test
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} /> {/* 회원가입 페이지 라우트 추가 */}
      <Route path="/signup" element={<SignUpForm />} /> {/* 회원가입 페이지 라우트 추가 */}
      <Route path="/login" element={<LoginForm />} /> {/* 로그인 페이지 라우트 추가 */}
      {/* 필요에 따라 더 많은 라우트를 추가할 수 있습니다 */}
    </Routes>
  );
}

export default App;