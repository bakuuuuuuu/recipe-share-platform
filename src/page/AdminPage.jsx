import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const navigate = useNavigate();

    const handleGrantPermission = () => {
        // 권한을 부여하는 기능 구현
    };

    const handleDeleteRecipe = () => {
        // 레시피 삭제 기능 구현
    };

    const handleDeleteUser = () => {
        // 회원 삭제 기능 구현
    };

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <div>
            <div id='amdinheader'>
                <input type="button" id='amdinhome' onClick={handleHomeClick} value={"SimplyCook"} />
            </div>
            <div id='adminbody'>
   

                <button onClick={handleGrantPermission}>권한 부여</button>
                <button onClick={handleDeleteRecipe}>레시피 삭제</button>
                <button onClick={handleDeleteUser}>회원 삭제</button>
            </div>
        </div>
    );
};

export default AdminPage;