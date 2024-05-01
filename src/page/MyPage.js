import { createContext, useContext, useEffect, useState } from 'react'
import '../css/MyPage.css'
import { Navigate, Outlet, useLocation, useOutlet } from 'react-router-dom'
import MyPageMenu from '../component/MyPageMenu';

export const UserContext = createContext(null);

export const MyPage = () => {

    const location = useLocation();
    const hasOutlet = useOutlet() !== null;
    const [title, setTitle] = useState("마이페이지");  
    
    const currentUser = JSON.parse(localStorage.getItem("currentData"));
    
    if (currentUser == null) {
        return <Navigate to="/login" replace state={{ redirectedFrom: location }} />;
    }


    return (
        <div className='background'>
        <div className="MyPage">
            <h1>{title}</h1>
            <UserContext.Provider value={currentUser}>
            {!hasOutlet && <MyPageMenu />}
            <Outlet />
            </UserContext.Provider>
        </div>
        </div>
    )
}   