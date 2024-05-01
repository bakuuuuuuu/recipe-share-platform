import { useContext } from "react";
import { UserContext } from "../page/MyPage";
import { EditComponant } from "./EditComponant";

const style = {
  colContainer : {
    display : "flex",
    flexDirection : "column",
  
    buttonStyle : {
      alignSelf : "end",
    }
  },


};

function EditProfile() {
  const currentUser = useContext(UserContext);

  const onEdithandle = (event)=>{

  }
    
  return (<div>
    <EditComponant title={"아이디"} value={currentUser.id}/>  
    <EditComponant title={"비밀번호"} value={currentUser.password}/>  
    <EditComponant title={"카테고리"} value={currentUser.category}/>  
    <EditComponant title={"성별"} value={currentUser.gender}/>  
    <EditComponant title={"전화번호"} value={currentUser.phoneNumber}/>  
  
    <button onClick={onEdithandle} style={style.buttonStyle}>수정하기</button>
  </div>)
}

export default EditProfile;