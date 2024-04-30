//SignUpForm.jsx
import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import './CSS/SignUpForm.css';
import Icon from './IMAGE/home.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faUserCircle, faPhone, faVenusMars, faThList } from '@fortawesome/free-solid-svg-icons';

const SignUpForm = () => {
    // useState 훅을 사용하여 사용자 입력을 관리합니다.
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [category, setCategory] = useState('');
    const [role, setRole] = useState('user');

    const navigate = useNavigate();

    // 이벤트 핸들러 함수를 정의합니다.
    const handleIdChange = (event) => {
        setId(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        
        // 사용자 입력 데이터를 객체로 구성
        const userData = {
            id,
            password,
            email,
            name,
            phoneNumber,
            gender,
            category,
            role
        };

        // 로컬 스토리지에 회원가입 정보 저장
        localStorage.setItem('userData', JSON.stringify(userData));
        
        alert("회원가입이 완료되었습니다!");

        // 회원가입 완료 후 LoginForm으로 이동합니다.
        navigate('/login'); // history.push 대신 navigate를 사용합니다.
    };

    return (
        <div>
            <header className="header">
                <img src={Icon} alt="홈" id='home' onClick={handleHomeClick} />
            </header>
            <div>
                <h2>회원가입</h2>
                <form onSubmit={handleSubmit}>
                    <div className="body">
                        <div id='body1'>
                            <div className="input-group1">
                                <label htmlFor="id"></label>
                                <FontAwesomeIcon className='icon' icon={faUser} />
                                <input
                                    type="text"
                                    id="id"
                                    value={id}
                                    onChange={handleIdChange}
                                    placeholder='아이디'
                                    required
                                />
                            </div>
                            <div className="input-group1">
                                <label htmlFor="password"></label>
                                <FontAwesomeIcon className='icon' icon={faLock} />
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder='비밀번호'
                                    required
                                />
                            </div>
                            <div className="input-group1">
                                <label htmlFor="email"></label>
                                <FontAwesomeIcon className='icon' icon={faEnvelope} />
                                <input
                                    type='email'
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder='이메일'
                                    required
                                />
                            </div>
                        </div>
                        <div id='body2'>
                            <div className="input-group2">
                                <label htmlFor="name"></label>
                                <FontAwesomeIcon className='icon' icon={faUserCircle} />
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={handleNameChange}
                                    placeholder='이름'
                                    required
                                />
                            </div>
                            <div className="input-group2">
                                <label htmlFor="phoneNumber"></label>
                                <FontAwesomeIcon className='icon' icon={faPhone} />
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    value={phoneNumber}
                                    onChange={handlePhoneNumberChange}
                                    placeholder='전화번호'
                                    required
                                />
                            </div>
                            <div className="input-group2">
                                <label htmlFor="gender"></label>
                                <FontAwesomeIcon className='icon' icon={faVenusMars} />
                                <select
                                    id="gender"
                                    value={gender}
                                    onChange={handleGenderChange}
                                    required
                                >
                                    <option value="">성별을 선택하세요</option>
                                    <option value="male">남성</option>
                                    <option value="female">여성</option>
                                </select>
                            </div>
                            <div className="input-group2">
                                <label htmlFor="category"></label>
                                <FontAwesomeIcon className='icon' icon={faThList} />
                                <select
                                    id="category"
                                    value={category}
                                    onChange={handleCategoryChange}
                                    required
                                >
                                    <option value="">카테고리를 선택하세요</option>
                                    <option value="한식">한식</option>
                                    <option value="일식">일식</option>
                                    <option value="중식">중식</option>
                                    <option value="양식">양식</option>
                                    <option value="디저트">디저트</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <button id='submitbtn' type='submit'>완료</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;