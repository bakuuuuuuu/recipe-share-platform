import React, { useState, useEffect } from 'react';
import CorepageStyless from './CorepageStyle';
import { useNavigate } from 'react-router-dom';

const WritingPage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('');
    const [noCounter, setNoCounter] = useState(1);
    const navigate = useNavigate();

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

        const savedUserData = JSON.parse(localStorage.getItem('userData'));
        const savedUserId = savedUserData ? savedUserData.id : '';

        const No = noCounter.toString();
        setNoCounter(noCounter + 1);

        // 작성된 정보를 로컬 스토리지에 저장
        const recipe = {
            savedUserId,
            No,
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

        navigate('/');
    };

    const handleCancel = () => {
        navigate('/');
    };

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleImageAddButtonClick = (e) => {
        e.preventDefault();  
        // 이미지 추가 버튼을 클릭할 때 파일 선택 창을 엽니다.
        document.getElementById('imageInput').click();
    };

    return (
        <div>
            <div id="header">
                <input type="button" id='home' onClick={handleHomeClick} value={"SimplyCook"} />
            </div>

            {/* 본문 영역 */}
            <div style={{ ...CorepageStyless.corePageStyle }}>
                <div style={{ ...CorepageStyless.sideContentStyle }}> {/* 좌측 사이드 영역 */}
                    {/* 여기에 좌측 사이드 영역의 내용을 추가하세요 */}
                </div>
                <div style={{ ...CorepageStyless.centralContentStyle,  marginTop: '0' }}> {/* 중앙 영역 */}
                    <h2 style={{ textAlign: 'center'}}>레시피</h2>
                    <form style={CorepageStyless.formStyle} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="제목"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            style={{ ...CorepageStyless.inputStyle, borderRadius: '8px' }}
                        />
                        <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                style={{ ...CorepageStyless.inputStyle, borderRadius: '8px', width: '200px' }}
                            >
                                <option value="">카테고리 선택</option>
                                <option value="한식">한식</option>
                                <option value="중식">중식</option>
                                <option value="양식">양식</option>
                                <option value="일식">일식</option>
                                <option value="디저트">디저트</option>
                            </select>
                            <div>
                                <button style={CorepageStyless.buttonStyle} onClick={handleImageAddButtonClick}>이미지 추가</button>
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
                            style={{ ...CorepageStyless.inputStyle, height: '300px', borderRadius: '8px' }}
                        />
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button type="submit" style={{ ...CorepageStyless.buttonStyle, marginRight: '10px' }}>
                                작성
                            </button>
                            <button type="button" style={CorepageStyless.buttonStyle} onClick={handleCancel}>
                                취소
                            </button>
                        </div>
                    </form>
                </div>
                <div style={{ ...CorepageStyless.sideContentStyle }}> {/* 우측 사이드 영역 */}
                    {/* 여기에 우측 사이드 영역의 내용을 추가하세요 */}
                </div>
            </div>
        </div>
    );
};

export default WritingPage;