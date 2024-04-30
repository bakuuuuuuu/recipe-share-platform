import { createContext, useContext, useState } from 'react'
import '../css/MyPage.css'
import { Outlet, useOutlet } from 'react-router-dom'
import MyPageMenu from '../component/MyPageMenu';

export const MyContext = createContext(null);

export const MyPage = () => {
    const hasOutlet = useOutlet() !== null;
    const [title, setTitle] = useState("마이페이지");  
    const userData = localStorage.getItem("userData");

    return (
        <div className='background'>
        <div className="MyPage">
            <h1>{title}</h1>
            <MyContext.Provider value={userData}>
            {!hasOutlet && <MyPageMenu />}
            <Outlet />
            </MyContext.Provider>
        </div>
        </div>
    )
}   