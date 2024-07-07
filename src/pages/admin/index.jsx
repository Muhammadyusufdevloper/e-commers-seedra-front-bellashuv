import { Outlet } from "react-router-dom"
import SideBar from "./side-bar"

const Admin = ({ menu }) => {
    return (
        <>
            <main style={{ display: "grid", gridTemplateColumns: `${menu ? " 285px 1fr" : "65px 1fr"}` }}>
                <SideBar menu={menu} />
                <Outlet />
            </main>
        </>
    )
}

export default Admin