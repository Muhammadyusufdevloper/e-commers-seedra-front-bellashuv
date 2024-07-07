import { Navigate, Outlet } from "react-router-dom"
import AdminHeader from "../admin/admin-header"
import { useSelector } from "react-redux"

const Auth = ({ setMenu }) => {
  let isLogin = useSelector(state => state.auth.token)
  return (
    <>
      <AdminHeader setMenu={setMenu} />
      {isLogin ? <Outlet /> : <Navigate replace to={"/login"} />}
    </>
  )
}

export default Auth