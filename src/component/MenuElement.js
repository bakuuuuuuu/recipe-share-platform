import { useNavigate } from 'react-router-dom';

const menuElementStyle = {
    padding: "12px 30px",
    display: "flex",
    borderBottom: "1px #ddd solid",
    cursor: "pointer",
    backgroundColor: "white",
}

const titleStyle = {
    marginLeft: "10px",
}




function MenuElement({ element }) {
    const navigate = useNavigate();
    const { ico, title, link } = element;

    return <li
        style={menuElementStyle}
        onClick={() => navigate(link)}>
        <span className="material-symbols-outlined">{ico}</span>
        <span style={titleStyle}>{title}</span>
    </li>
}

export default MenuElement;
