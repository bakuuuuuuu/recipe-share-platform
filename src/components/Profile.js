const imageStyle = {
    width: "50px",
    height: "50px",
    border: "2px solid #fff",
    borderRadius: "50%"
}

const profileStyle = {
    backgroundColor: "white",
    background: "url(`https://recipe1.ezmember.co.kr/img/mobile/my_pic_d2.jpg`) center top no-repeat)",
    padding: "20px 15px",
    display: "flex",


    userNameStyle: {
        margin: "auto 0px auto 10px"
    }
}


function Profile(props) {
    const { src, name } = props;

    return (<div className="Profile" style={profileStyle}>
        <img style={imageStyle} src={src} alt="userProfileImage"></img>
        <span style={profileStyle.userNameStyle}>{name}</span>
    </div>)
}

export default Profile;