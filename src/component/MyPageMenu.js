import MenuElement from "./MenuElement";
import Profile from "./Profile";
import { useContext } from "react";
import { UserContext } from "../page/MyPage";

const sampleThumbNail = "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"

const menu = [
    { title: "내가 작성한 글 보기", ico: "menu", link: "./Posts" },
    { title: "내가 작성한 댓글 보기", ico: "chat", link: "./" },
    { title: "회원 정보 수정", ico: "account_circle", link: "./editProfile" },
];

const adminMenu = [
    { title: "전체 작성 글 확인 및 삭제", ico: "edit_document", link: "./myPosts" },
    { title: "전체 댓글 조회 및 삭제", ico: "chat_error", link: "./myComments" },
    { title: "회원 정보 수정", ico: "manage_accounts", link: "./myAcount" },
];
function MyPageMenu() {
    const user = useContext(UserContext); 
    return (
        <div>
            <h3>프로필</h3>
            <Profile
                src={sampleThumbNail}
                name={user?.name}
                className="bottom-border"
            />

            <h3>마이페이지 메뉴</h3>
            <div>
                <ul className="bottom-border" key="menu">
                    {menu.map((element, index) =>
                        <MenuElement key={`user-menu-${index}`}
                            element={element}
                        />)}
                </ul>
            </div>
            {
                user.role === "admin" && <>
                    <h3>관리자 메뉴</h3>
                    <div>
                        <ul className="bottom-border" key="admin-menu">
                            {adminMenu.map((element, index) =>
                                <MenuElement key={`admin-menu-${index}`}
                                    element={element}
                                />)}
                        </ul>
                    </div>
                </>
            }
        </div>
    )
}

export default MyPageMenu;