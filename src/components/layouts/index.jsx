import { Outlet } from "react-router-dom"
import Footer from "./footer"
import Header from "./header"
import { memo } from "react"

const Layouts = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default memo(Layouts)