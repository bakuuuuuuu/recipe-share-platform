import { useContext } from "react";
import { UserContext } from "../page/MyPage";
import { EditComponant, SelectComponant } from "./EditComponant";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const style = {
  colContainer: {
    display: "flex",
    flexDirection: "column",

  },

  buttonStyle: {
    backgroundColor: "#f8f9fa",
    fontSize: "16px",
    padding: "10px",
    borderRadius: "15px",
    borderBottom: "1px solid #ced4da"
  },

  btnContainer: {
    display: "flex",
    marginTop: "10px",
    marginRight: "10px",
    flexDirection: "row-reverse",
    // justifyContent: "center"
  },



};

function EditProfile() {
  const currentUser = useContext(UserContext);
  const [id, setId] = useState(currentUser.id);
  const [password, setPassword] = useState(currentUser.password);
  const [email, setEmail] = useState(currentUser.email);
  const [name, setName] = useState(currentUser.name);
  const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber);
  const [gender, setGender] = useState(currentUser.gender);
  const [category, setCategory] = useState(currentUser.category);
  const [isAnyChanged, setIsAnyChanged] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);


  // 바뀐 사항이 있는지 체크
  const onEdithandle = (event) => {

    let checkDuplication = false;
    let currentUserIndex = -1;

    // localStorage에서 사용자 데이터 로드
    // 아이디, 이메일, 전화번호만 중복 체크
    const userdatas = JSON.parse(localStorage.getItem("userData"));
    if (userdatas != null) {
      let index = 0;


      for (let user of userdatas) {
        if (user.id === currentUser.id) {
          currentUserIndex = index;
          continue;
        }
        if (user.id === id) checkDuplication = true;
        index++;
      }
    }

    // 없을 경우, 데이터 저장 후 메세지 출력
    if (isAnyChanged === false) {
      alert("변경사항이 없습니다.");
    }
    // 아이디 중복일 시
    if (checkDuplication === true) {
      alert("중복된 아이디가 존재합니다.");
    }
    if (checkDuplication === false && isAnyChanged === true) {
      alert("변경사항이 저장되었습니다.");
      setIsRedirect(true);
      if (currentUserIndex === -1) alert("변경 오류) 해당 계정을 찾을 수 없습니다.");

      // 사용자 아이디 변경시, 작성된 게시글에 작성자 사용자 아이디도 바뀌어야됨.
      const recipes = JSON.parse(localStorage.getItem("recipes"));
      let isRecipeAuthorChangedID = false;
      for (let recipe of recipes) {
        if (recipe.savedUserId === currentUser.id) {
          recipe.savedUserId = id; // 변경된 아이디로 변경
          isRecipeAuthorChangedID = true;
        }
      }
      if (isRecipeAuthorChangedID) {
        localStorage.setItem("recipes", JSON.stringify(recipes)); // 변경사항 저장
      }

      currentUser.id = id;
      currentUser.password = password;
      currentUser.email = email;
      currentUser.name = name;
      currentUser.phoneNumber = phoneNumber;
      currentUser.gender = gender === "남성" ? "male" : "female";
      currentUser.category = category;

      userdatas[currentUserIndex] = currentUser;

      localStorage.setItem("currentData", JSON.stringify(currentUser));
      localStorage.setItem("userData", JSON.stringify(userdatas));


    }
  }

  // 변경사항 저장 후 페이지 이동
  if (isRedirect === true) {
    return <Navigate to="/MyPage" />;
  }
  return (<div>
    <EditComponant
      type="text"
      title={"아이디"}
      value={id}
      setValue={setId}
      after={setIsAnyChanged}
    />
    <EditComponant
      type="text"
      title={"비밀번호"}
      value={password}
      setValue={setPassword}
      after={setIsAnyChanged}
    />
    <EditComponant
      type="text"
      title={"이름"}
      value={name}
      setValue={setName}
      after={setIsAnyChanged}
    />
    <SelectComponant
      title={"카태고리"}
      value={category}
      setValue={setCategory}
      options={["한식", "일식", "중식", "양식", "디저트"]}
      after={setIsAnyChanged}
    />

    <EditComponant
      type='email'
      title={"이메일"}
      value={email}
      setValue={setEmail}
      after={setIsAnyChanged}
    />
    <SelectComponant
      title={"성별"}
      value={gender}
      setValue={setGender}
      options={["남성", "여성"]}
      after={setIsAnyChanged}
    />
    <EditComponant
      type="tel"
      title={"전화번호"}
      value={phoneNumber}
      setValue={setPhoneNumber}
      after={setIsAnyChanged}
    />

    <div style={style.btnContainer}>
      <button onClick={onEdithandle} style={style.buttonStyle}>수정하기</button>
    </div>
  </div>)
}

export default EditProfile;