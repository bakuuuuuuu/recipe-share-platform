import React, { useState, useEffect } from 'react';

const UserEditForm = () => {
    // useState 훅을 사용하여 사용자 정보를 관리합니다.
    const [users, setUsers] = useState([]);

    // 컴포넌트가 마운트될 때 로컬 스토리지에서 사용자 정보를 가져옵니다.
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData')) || [];
        setUsers(userData);
    }, []);

    return (
        <div>
            <h2>회원 정보 수정</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>이름</th>
                        <th>이메일</th>
                        <th>전화번호</th>
                        <th>성별</th>
                        <th>카테고리</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.gender}</td>
                            <td>{user.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserEditForm;
