import { useState } from 'react'
import '../css/MyPage.css'
import { Outlet, useOutlet } from 'react-router-dom'
import MyPageMenu from '../component/MyPageMenu';


export const MyPage = () => {
    const hasOutlet = useOutlet() !== null;
    const [title, setTitle] = useState("마이페이지");  // Context에서 title 사용

    return (
        <div className='background'>
        <div className="MyPage">
            <h1>{title}</h1>
            {!hasOutlet && <MyPageMenu />}
            <Outlet />
        </div>
        </div>
    )
}