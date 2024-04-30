//메인페이지 jsx
import React from 'react';
import Search from './Search';
import CorePage from './CorePage';
import UnderMenu from './UnderMenu';

function Main(props){

    return(
        <div>
           <Search />
           <CorePage />
           <UnderMenu />
        </div>
    )     
}

export default Main;