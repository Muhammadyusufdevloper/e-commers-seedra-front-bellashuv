import { Link, useNavigate } from "react-router-dom"
import siteLogo from "../../../assets/images/page/admin/admin-header/logo.svg"
import menuImg from "../../../assets/images/page/admin/admin-header/menu.svg"
import logoutImg from "../../../assets/images/page/admin/admin-header/logout.svg"
import "./AdminHeader.scss"
const AdminHeader = ({ setMenu }) => {
    let navigate = useNavigate()
    const handelLogout = () => {
        localStorage.removeItem("x-auth-token")
        localStorage.removeItem("user-data")
        navigate("/login")
    }
    return (
        <>
            <header className="admin-header">
                <Link to={"/"}>
                    <img src={siteLogo} alt="Site logo" />
                </Link>
                <div className="admin-header__buttons">
                    <button onClick={() => setMenu(p => !p)}>
                        <img src={menuImg} alt="menu img" />
                    </button>
                    <button onClick={handelLogout}>
                        <img src={logoutImg} alt="logout img" />
                    </button>
                </div>
            </header>
        </>
    )
}

export default AdminHeader