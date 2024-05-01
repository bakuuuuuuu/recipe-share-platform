//LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LoginForm.css';
import Icon from '../image/home.png';
import Naver from '../image/naver.png';
import Google from '../image/google.png';
import Facebook from '../image/facebook.png';

const LoginForm = () => {
    // useState 훅을 사용하여 사용자 입력을 관리합니다.
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // 이벤트 핸들러 함수를 정의합니다.
    const handleIdChange = (event) => {
        setId(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // 회원가입 정보를 로컬 스토리지에서 가져옵니다.
        const userData = JSON.parse(localStorage.getItem('userData'));

        // 저장된 데이터가 존재하지 않거나, 저장된 데이터가 비어있는 경우
        if (!userData || Object.keys(userData).length === 0) {
            alert("생성된 계정이 없습니다. 회원가입을 먼저 해주세요.");
            return;
        }

        // 입력된 아이디와 비밀번호를 가져옵니다.
        const { id: inputId, password: inputPassword } = userData;

        // 입력된 아이디와 비밀번호가 일치하는지 확인합니다.
        if (id === inputId && password === inputPassword) {

            // 로그인 성공 시 MainPage로 이동합니다.
            navigate('/'); // 사용자 정보를 상태로 전달
            // 여기서는 사용자의 id만 저장합니다. (현재 로그인한 사용자를 식별하기 위해 currentData에 로그인 때 사용한 사용자 객체의 id를 로컬 스토리지에 저장시킴)
            localStorage.setItem('currentData', JSON.stringify({ userData }));

        } else {
            // 로그인 실패 시 알림을 표시합니다.
            alert('로그인 실패: 아이디 또는 비밀번호가 올바르지 않습니다.');
        }
    };

    return (
        <div>
            <div id="header">
                <input type="button" id='home' onClick={handleHomeClick} value={"SimplyCook"} />
            </div>
            <div>
                <h2>로그인</h2>
                <div id='sns'>
                    <div className='snsdiv'>
                        <img src={Naver} alt="네이버" className="snsbtn" />
                    </div>
                    <div className='snsdiv'>
                        <img src={Google} alt="구글" className="snsbtn" />
                    </div>
                    <div className='snsdiv'>
                        <img src={Facebook} alt="페이스북" className="snsbtn" />
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="body">
                        <div className="input-group">
                            <label htmlFor="id"></label>
                            <input
                                type="text"
                                id="id"
                                value={id}
                                onChange={handleIdChange}
                                placeholder='아이디'
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password"></label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder='비밀번호'
                                required
                            />
                        </div>
                    </div>
                    <div id='logindiv'>
                        <button id='loginbtn' type="submit">로그인</button>
                    </div>
                    <div id='SignUp'>
                        <a href='#'>아이디/비밀번호 찾기</a>
                        <a href='/signup'>회원가입</a>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default LoginForm;