import React, { useState, useEffect } from 'react';
import '../css/UserEditForm.css';


const UserEditForm = () => {
    // useState 훅을 사용하여 사용자 정보를 관리합니다.
    const [users, setUsers] = useState([]);

    // 컴포넌트가 마운트될 때 로컬 스토리지에서 사용자 정보를 가져옵니다.
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData')) || [];
        setUsers(userData);
    }, []);

    // 사용자 정보를 수정하는 함수
    const handleEditUser = (index, field, value) => {
        // 복사본 생성
        const updatedUsers = [...users];
        // 수정할 사용자 객체 선택
        const userToUpdate = updatedUsers[index];
        // 수정된 값을 반영
        userToUpdate[field] = value;
        // 수정된 사용자 객체로 업데이트
        updatedUsers[index] = userToUpdate;
        // 로컬 스토리지에 업데이트된 정보 저장
        localStorage.setItem('userData', JSON.stringify(updatedUsers));
        // UI 업데이트
        setUsers(updatedUsers);
    };

    // 사용자 정보를 삭제하는 함수
    const handleDeleteUser = (index) => {
        // 기존 사용자 배열에서 해당 사용자를 제외한 새로운 배열을 만듭니다.
        const updatedUsers = users.filter((user, i) => i !== index);

        // 새로운 배열을 로컬 스토리지에 저장합니다.
        localStorage.setItem('userData', JSON.stringify(updatedUsers));

        // UI를 업데이트합니다.
        setUsers(updatedUsers);
    };

    return (
        <div id='UserEditForm'>
            <h2>회원 정보 수정</h2>
            <div id='tablediv'>
                <table>
                    <thead>
                        <tr>
                            <th className='tid'>ID</th>
                            <th className='tname'>이름</th>
                            <th className='temail'>이메일</th>
                            <th className='tnumber'>전화번호</th>
                            <th className='tgender'>성별</th>
                            <th>카테고리</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td><input type="text" className = 'tid' value={user.id} onChange={(e) => handleEditUser(index, 'id', e.target.value)} /></td>
                                <td><input type="text" className='tname' value={user.name} onChange={(e) => handleEditUser(index, 'name', e.target.value)} /></td>
                                <td><input type="text" className='temail' value={user.email} onChange={(e) => handleEditUser(index, 'email', e.target.value)} /></td>
                                <td><input type="text" className='tnumber' value={user.phoneNumber} onChange={(e) => handleEditUser(index, 'phoneNumber', e.target.value)} /></td>
                                <td><input type="text" className='tgender' value={user.gender} onChange={(e) => handleEditUser(index, 'gender', e.target.value)} /></td>
                                <td><input type="text" value={user.category} onChange={(e) => handleEditUser(index, 'category', e.target.value)} /></td>
                                <td>
                                    <button onClick={() => handleEditUser(index)}>수정</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(index)}>삭제</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserEditForm;
