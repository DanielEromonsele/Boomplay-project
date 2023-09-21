import Footer from "../Block/Footer";
import Header from "../Block/Header";
import { Outlet } from "react-router-dom";



const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;