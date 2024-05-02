//SignUpForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SignUpForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faUserCircle, faPhone, faVenusMars, faThList } from '@fortawesome/free-solid-svg-icons';

const AccountFindForm = () => {
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        // 로컬 스토리지에서 userData를 가져옴
        const storedData = JSON.parse(localStorage.getItem('userData')) || [];

        // 입력한 정보와 일치하는 사용자 찾기
        const foundUser = storedData.find(user => user.name === name && user.phoneNumber === phoneNumber && user.email === email);

        if (foundUser) {
            // 일치하는 사용자가 있으면 해당 사용자의 아이디와 비밀번호를 alert로 출력
            alert(`아이디: ${foundUser.id}\n비밀번호: ${foundUser.password}`);
            // 로그인 페이지로 이동
            navigate('/login');
        } else {
            // 일치하는 사용자가 없을 경우에 대한 처리
            alert('일치하는 사용자가 없습니다.');
        }
    };


    return (
        <div>
            <div id="header">
                <input type="button" id='home' onClick={handleHomeClick} value={"SimplyCook"} />
            </div>
            <div>
                <h2>아이디/비밀번호 찾기</h2>
                <form onSubmit={handleSubmit}>
                    <div className="body">
                        <div id='body1'>
                            <div className="input-group1">
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
                            <div className="input-group1">
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
                        <div>
                            <button id='submitbtn' type='submit'>완료</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AccountFindForm;