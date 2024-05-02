import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../page/MyPage";

const imageStyle = {
    width: "50px",
    height: "50px",
    border: "2px solid #fff",
    borderRadius: "50%"
}

const profileStyle = {
    borderRadius: "10px",
    backgroundColor: "white",
    padding: "20px 15px",
    display: "flex",


    userNameStyle: {
        margin: "auto 0px auto 10px"
    }
}


function Profile(props) {
    const { src, name } = props;
    const [profileImage, setProfileImage] = useState(src);
    const currentData = useContext(UserContext);

    let count = 0;
    let timerStarted = false;
    let timeOut = null;
    const onProfileImageClicked = (event) => {
        count++;
        if (timerStarted && count > 10) {
            alert(`해당 계정이 ${(currentData.role === "admin") ? "사용자" : "관리자"} 모드로 전환됩니다.`);
            clearTimeout(timeOut);
            count = 0;
            // 데이터 전환
            if (currentData.role === "admin") {
                currentData.role = "user"
            }
            else {
                currentData.role = "admin"
            }

            // 데이터 가져오기 
            localStorage.setItem("currentData", JSON.stringify(currentData));
            const userData = JSON.parse(localStorage.getItem("userData"));

            for (let user of userData) {
                if (user.id === currentData.id)
                    user.role = currentData.role;
            }

            // 파일 저장
            localStorage.setItem("userData", JSON.stringify(userData));

            // 새로고침
            window.location.replace("/mypage")
        }

        if (!timerStarted) {
            timerStarted = true;
            timeOut = setTimeout(() => {
                console.log("5초 동안 눌러진 횟수 : " + count)
                timerStarted = false;
                count = 0;
            }, 5000)
        }
    }

    return (<div className="Profile" style={profileStyle}>
        <img style={imageStyle} src={currentData.gender === "male" ? 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ZAHBHldry_U6Ho-jC4cencXC390Zx3wZvlMJp_DAZA&s"
    : "https://cdn-icons-png.flaticon.com/512/3135/3135823.png"    
    } alt="userProfileImage" onClick={onProfileImageClicked}></img>
        <span style={profileStyle.userNameStyle}>{name}</span>
    </div>)
}

export default Profile;