const style = {
  title : {
    fontWeight: 700,
    fontSize: "16px",
  },
  subtitleContainer : {
  },
  container : {
    display : "flex",
    flexDirection : "row",
    backgroundColor : "white",
    justifyContent  : "center",
    borderRadius : "12px",
    alignItems : "center",
  },

  subtitle : {
    // fontFamily: `"Noto Sans KR", sans-serif;`, 
    marginLeft : "10px",
    display: "block",
    height : "20px",

    backgroundColor : "white",
    border: "none",
    borderBottom: "1px solid black",
    fontSize : "13px",
  }
}

export function EditComponant(props){
  const {title, value} = props;

  return (<><h3>{title} 설정</h3>
  <div style={style.container}>
  <p style={style.title}>{title}</p>
  <div style={style.subtitleContainer}/>
  <input style={style.subtitle} value={value}/> 
  </div></>);
}