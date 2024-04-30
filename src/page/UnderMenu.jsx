//하단 영역 jsx
import React, { useState } from 'react';
import {NavLink, Outlet} from 'react-router-dom';

const mainStyle = {
    width: "100%",
    height: "100vh",
}

const UnderMenuStyles = {
    MenuContainer: {
        padding: 10,
        display: "flex",
        borderTop: "3px solid white",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 60,
        position: "fixed",
        bottom: 0,
        backgroundColor: "white",
        zIndex: 999,
    },

    IconStyle: {
        backgroundColor: "white",
        color: "black",
        border: "none",
        fontSize: 17,
        margin: '15px',
        flex: '1',
        width: '100px', // 너비 지정
    },

    // 선택된 버튼의 스타일
    selectedIconStyle: {
        backgroundColor: "white",
        color: "red",
        border: "none",
        fontSize: 17,
        margin: '15px', // 선택된 상태일 때도 동일한 마진 적용
        flex: '1',
        width: '100px', // 너비 지정
    },
};

function UnderMenu(props) {
    // 선택된 버튼을 추적하는 상태
    const [selectedButton, setSelectedButton] = useState('HOME');

    /*
    // MYPAGE 버튼 클릭 핸들러
    const handleMyPageClick = () => {
        // 사용자의 로그인 상태 확인
        const isLoggedIn = // 여기에 사용자의 로그인 상태 확인 로직을 구현하세요;
        
        // 비로그인 상태인 경우 로그인 페이지로 이동
        if (!isLoggedIn) {
            window.location.href = '/login'; // 로그인 페이지 URL로 이동
        }
    };
    */
        return (
            <div style={mainStyle}>
            <Outlet/>
            <div style={UnderMenuStyles.MenuContainer}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '30px' }}>
                    <NavLink to="/" style={selectedButton === 'HOME' ? UnderMenuStyles.selectedIconStyle : UnderMenuStyles.IconStyle} onClick={() => setSelectedButton('HOME')}>
                        HOME
                    </NavLink>
                    <NavLink to="/foodcategory" style={selectedButton === 'CATEGORY' ? UnderMenuStyles.selectedIconStyle : UnderMenuStyles.IconStyle} onClick={() => setSelectedButton('CATEGORY')}>
                        CATEGORY
                    </NavLink>
                    <NavLink to="/Writingpage" style={selectedButton === 'POSTING' ? UnderMenuStyles.selectedIconStyle : UnderMenuStyles.IconStyle} onClick={() => setSelectedButton('POSTING')}>
                        POSTING
                    </NavLink>
                    <NavLink to="/mypage" style={selectedButton === 'MYPAGE' ? UnderMenuStyles.selectedIconStyle : UnderMenuStyles.IconStyle} onClick={() => setSelectedButton('MYPAGE')}>
                        MYPAGE
                    </NavLink>
                </div>
            </div>
            </div>

        );
    }
export default UnderMenu;
