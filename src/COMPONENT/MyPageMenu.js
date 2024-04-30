import MenuElement from "./MenuElement";
import Profile from "./Profile";
import { users } from '../domain/userInfo';

const menu = [
    { title: "내가 작성한 글 보기", ico: "menu", link: "./Posts" },
    { title: "내가 작성한 댓글 보기", ico: "chat", link: "./myComments" },
    { title: "회원 정보 수정", ico: "account_circle", link: "./EditProfile" },
];

const adminMenu = [
    { title: "전체 작성 글 확인 및 삭제", ico: "edit_document", link: "./myPosts" },
    { title: "전체 댓글 조회 및 삭제", ico: "chat_error", link: "./myComments" },
    { title: "회원 정보 수정", ico: "manage_accounts", link: "./myAcount" },
];
const user = users[1];
function MyPageMenu() {


    return (
        <div>
            <h3>프로필</h3>
            <Profile
                src={user.src}
                name={user.name}
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
                user.permission === "admin" && <>
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