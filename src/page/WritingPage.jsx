import React, { useState } from 'react';
import CorepageStyles from './CorepageStyle';
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';

const WritingPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [idCounter, setIdCounter] = useState(1);
  


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };



  


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('제목:', title);
    console.log('내용:', content);
    console.log('이미지:', image);
    console.log('카테고리:', category);
   
   
    const id = idCounter.toString();
    setIdCounter(idCounter + 1);
   
   

    
    // 작성된 정보를 로컬 스토리지에 저장
    const recipe = {
      id,
      title,
      content,
      category,
      imageUrl: image ? URL.createObjectURL(image) : null,
           
    };
    const storedRecipes = localStorage.getItem('recipes');
    const recipes = storedRecipes ? JSON.parse(storedRecipes) : [];
    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));

    // 저장 후 입력 내용 초기화
    setTitle('');
    setContent('');
    setImage(null);
    setCategory('');
    
    
  };

 

  const handleCancel = () => {
    // 취소 버튼을 눌렀을 때의 동작을 정의할 수 있습니다.
  };

  const handleImageAddButtonClick = () => {
    // 이미지 추가 버튼을 클릭할 때 파일 선택 창을 엽니다.
    document.getElementById('imageInput').click();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        {/* Header 영역 */}
        <header style={headerStyle}>
          <a href="https://naver.com" >
            <img src="https://recipe1.ezmember.co.kr/img/mobile/logo6.png" alt="로고" style={{ width: '200px' }} />
            {/* 사용자 프로필 이미지나 로그인/로그아웃 버튼 등을 추가할 수 있습니다. */}
          </a>
        </header>
       
        {/* 본문 영역 */}
        <div style={{ ...CorepageStyles.centralContentStyle, marginTop: '50px' }}>
        <div style={{...CorepageStyles.sideContentStyle}}>{}</div>
          <h2 style={{ textAlign: 'center' }}>레시피</h2>
          <form style={CorepageStyles.formStyle} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ ...CorepageStyles.inputStyle, borderRadius: '8px' }}
            />
            <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ ...CorepageStyles.inputStyle, borderRadius: '8px', width: '200px' }}
              >
                <option value="">카테고리 선택</option>
                <option value="한식">한식</option>
                <option value="중식">중식</option>
                <option value="양식">양식</option>
                <option value="일식">일식</option>
                <option value="디저트">디저트</option>
              </select>
              <div>
                <button style={CorepageStyles.buttonStyle} onClick={handleImageAddButtonClick}>이미지 추가</button>
                <input
                  type="file"
                  accept="image/*"
                  id="imageInput"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
              </div>
            </div>
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="업로드한 이미지"
                style={{ maxWidth: '100%', marginBottom: '10px' }}
              />
            )}
            <textarea
              placeholder="내용"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{ ...CorepageStyles.inputStyle, height: '300px', borderRadius: '8px' }}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button type="submit" style={{ ...CorepageStyles.buttonStyle, marginRight: '10px' }}>
                작성
              </button>
              <button type="button" style={CorepageStyles.buttonStyle} onClick={handleCancel}>
                취소
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const headerStyle = {
  backgroundColor: '#ffffff',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
  position: 'fixed', // 헤더를 화면 상단에 고정
  width: '47%', // 화면 전체 너비로 설정
};

export default WritingPage;