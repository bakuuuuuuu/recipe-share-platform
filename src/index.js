//index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* Router로 App 컴포넌트 감싸기 */}
      <App /> {/* App 컴포넌트를 사용하도록 변경 */}
    </Router>
  </React.StrictMode>
  // <React.StrictMode>
  //   <LoginForm></LoginForm>
  // </React.StrictMode>
);

reportWebVitals();