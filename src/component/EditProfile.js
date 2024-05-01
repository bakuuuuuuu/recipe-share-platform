import { useContext } from "react";
import { UserContext } from "../page/MyPage";

const style = {

  container : {
    display : "flex",
    flexDirection : "column",
    backgroundColor : "white",
    borderRadius : "12px",
  },
  title : {
    fontWeight: 500,
    fontSize: "14px",
  },
  subtitleContainer : {
  },

  subtitle : {
    fontFamily: `"Noto Sans KR", sans-serif;`, 
    marginLeft : "10px",
    display: "block",
    height : "20px",
    backgroundColor : "rgb(219,233,244)",
    border: "1px solid blue",
    fontSize : "13px",
  },
}

function EditProfile() {
  const currentUser = useContext(UserContext);
  console.log(currentUser)
  return (<>
    <h3>회원 정보 수정</h3>
    <div style={style.container}>
      <p style={style.title}> 프로필 이름 설정 </p>
      <div style={style.subtitleContainer}>
      <input style={style.subtitle}/> 
      </div>
    </div>
    
  </>)
}

export default EditProfile;