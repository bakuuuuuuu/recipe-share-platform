import { useContext, useEffect, useState } from "react";
import { UserContext } from "../page/MyPage";
import { json } from "react-router-dom";
const style = {
    width: "50px",
    height: "50px",

    ul: {
        padding: "0px",
        marginBottom: "10px",
        backgroundColor: "rgb(241,241,241)",
    },

    li: {
        margin: "0px",
        marginBottom: "20px",
        backgroundColor: "white",
        borderBottom: "2px rgb(221,221,221) solid"

    },
    rowContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    columnContainer: {
        paddingLeft: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    image: {
        width: "120px",
        height: "100px",
    },
    title: {
        fontSize: "14px",
        color: "rgb(45,45,45)",
        fontWeight: "700",
        width: "200px",
    },
    subtitle: {
        fontSize: "11px",
        color: "rgb(153,153,153)",
        width: "300px",
    },
    oneLineText: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    button: {
        height: "50px",
        alignSelf: "center",
        marginRight: "20px",
    },
    noItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        flexDirection: "column",
        width: "400px",
        height: "400px",
        backgroundColor: "white",
        borderRadius: "25px",
        backgroundPosition: "center",
    }
}


function Posts(props) {
    const currentUser = useContext(UserContext);
    const posts = JSON.parse(localStorage.getItem("recipes")) ?? new Array();


    const [postList, setPostList] = useState(posts);  // useState를 사용해 postList 상태 관리

    const onDeleteBtnClicked = (id) => {
        const updatedPosts = postList?.filter(post => post.user !== id);
        setPostList(updatedPosts);
        localStorage.setItem("recipes",JSON.stringify(postList));
    };

    useEffect(() => {
        // 변경 예정 currentUser.id?
        setPostList(postList.filter(post => post.savedUserId === currentUser.id));
    }, [])

    return <div>
        <h2>내가 쓴 글 불러오기</h2>


        <ul style={style.ul}>
            {postList?.map(value => {
                return (<li key={value.No} style={style.li}>
                    <div style={style.rowContainer}>
                        <img style={style.image} src={value.imageUrl ?? '/image/empty_image.jpg'} alt={"image"} />
                        <div style={style.columnContainer}>
                            <p style={{ ...style.title, ...style.oneLineText }}>{value.title}</p>
                            <p style={{ ...style.subtitle, ...style.oneLineText }}>{value.content}</p>
                        </div>
                        <button style={style.button} onClick={() => { onDeleteBtnClicked(value.No) }}>삭제하기</button>
                    </div>
                </li>)
            })}
            {(postList === null || postList?.length === 0) &&
                (<>
                    <div style={style.noItem}>
                        <span className="material-symbols-outlined" style={style.noItemIco}>priority_high</span>
                        <h2>작성한 글이 존재하지 않습니다.</h2>
                    </div>

                </>
                )
            }
        </ul>

    </div >

}

export default Posts;