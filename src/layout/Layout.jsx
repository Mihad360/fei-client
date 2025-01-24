import { Outlet } from "react-router-dom";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";

const Layout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;