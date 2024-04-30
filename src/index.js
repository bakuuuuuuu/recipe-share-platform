//index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Router로 App 컴포넌트 감싸기 */}
      <App /> {/* App 컴포넌트를 사용하도록 변경 */}
    </BrowserRouter>
  </React.StrictMode>
);
