const style = {
  title: {
    width: "100px",
    fontWeight: 700,
    textAlign: "end",
    fontSize: "16px",
  },
  subtitleContainer: {
  },
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: "12px",
    alignItems: "center",
  },

  subtitle: {
    fontFamily: `"Noto Sans KR", sans-serif`,
    marginLeft: "10px",
    height: "20px",
    backgroundColor: "white",
    border: "none",
    borderBottom: "1px solid black",
    fontSize: "13px",
    textAlign: "center",

    width: "150px",  /* 너비 조정 */
  }

}

export function EditComponant(props) {
  const { title, value, setValue, type, after } = props;

  const onChange = (event => {
    setValue(event.target.value);
    after(true);
  });

  return (<><h3>{title} 설정</h3>
    <div style={style.container}>
      <p style={style.title}>{title} : </p>
      <div style={style.subtitleContainer} />
      <input
        style={style.subtitle}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div></>);
}

export function SelectComponant(props) {
  const { title, value, options, setValue, after } = props;
  const onChange = (event => {
    setValue(event.target.value);
    after(true);
  });

  return (<><h3>{title} 설정</h3>
    <div style={style.container}>
      <p style={style.title}>{title} : </p>
      <div style={style.subtitleContainer} />
      <select style={style.subtitle} value={value} onChange={onChange}>
        {options.map(option => <option value={option} key={option}>{option}</option>)}

      </select>
    </div></>);
}